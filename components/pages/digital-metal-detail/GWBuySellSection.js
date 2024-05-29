import moment from "moment";
import { useMemo } from "react";
import { ReactSVG } from "react-svg";
import Colors from "../../../colors/colors";
import { usePriceApiContext } from "../../../contexts/PriceAPIContext";
import { formatCurrency } from "../../../services";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWCard from "../../atoms/GWCard";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const PriceCard = ({ card_type, price, unit, diff, diff_percent, last_updated, highlighted }) => {
    const isNegative = () => {
        return Math.sign(Number(diff)) === -1
    }

    const symbol = useMemo(() => {
        return price?.substr(0, 1)
    }, [price])

    return (<GWCard borderRadius="12px" variant="plain" padding="20px 24px" sx={{ maxWidth: "410px", backgroundColor: highlighted ? "#F5F5F7" : "#FFFFFF", border: "none" }}>
        <GWAvenirFont color={Colors.grey400} fontSize={12} sx={{ textTransform: "uppercase" }}>{card_type === "sell" ? "Sell Price" : "Buy Price"}</GWAvenirFont>
        <FlexContainer sx={{ gap: "4px", alignItems: "center", justifyContent: "left" }}>
            <Div><GWAvenirFont fontWeight="700" fontSize="32px" color={Colors.grey400}>{symbol}</GWAvenirFont></Div>
            <Div><GWAvenirFont fontWeight="700" fontSize="48px">{price?.replace(symbol, "")}</GWAvenirFont></Div>
            <Div sx={{ paddingLeft: "10px" }}><GWAvenirFont fontSize="28px" color={Colors.grey400}>{unit}</GWAvenirFont></Div>
        </FlexContainer>
        <FlexContainer sx={{ alignItems: "center", gap: "1px" }}>
            <ReactSVG src={`/assets/images/svg/arrow-${isNegative() ? "down" : "up"}-right-circle.svg`} />
            <GWAvenirFont color={isNegative() ? "red" : "green"} fontSize={14}>{diff} ({diff_percent}%)</GWAvenirFont>
            <GWAvenirFont sx={{ paddingLeft: "10px" }} color={Colors.grey400} fontSize={14}>Price update {last_updated}</GWAvenirFont>
        </FlexContainer>
    </GWCard>)
};
const GWBuySellSection = () => {
    const { priceObject, currency } = usePriceApiContext();

    return (
        <Div sx={{ boxShadow: "inset 0px -1px 0px #E0E1E4", padding: "40px 0" }}>
            <Div sx={{ maxWidth: "1060px", margin: "0 auto" }}>
                <FlexContainer sx={{ justifyContent: "space-between" }}>
                    <PriceCard price={formatCurrency(Number(priceObject?.iMBP).toFixed(2), currency)} unit="t/oz" diff={priceObject?.iMPCA} diff_percent={priceObject?.iMPCP} last_updated={moment.utc(priceObject?.dU).local().fromNow()} highlighted={true} />
                    <PriceCard card_type="sell" price={formatCurrency(Number(priceObject?.iMSP).toFixed(2), currency)} unit="t/oz" diff={priceObject?.iMPCA} diff_percent={priceObject?.iMPCP} last_updated={moment.utc(priceObject?.dU).local().fromNow()} />
                </FlexContainer>
            </Div>
        </Div>)
}
export default GWBuySellSection;
