import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import Colors from "../../../colors/colors";
import { usePriceApiContext } from "../../../contexts/PriceAPIContext";
import GWPriceChange from "../../atoms/GWPriceChange";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const _GWPricesSection = styled(Div)({
    border: "1px solid #E0E1E4",
    background: Colors.white
});

const GWPricesSection = () => {
    const fullScreen = useMediaQuery("(min-width: 1200px)")
    const { t } = useTranslation("spot-prices-detail")
    const { priceObject } = usePriceApiContext();

    // console.log({ priceObject });

    return (
        <_GWPricesSection sx={{ padding: fullScreen ? "42px 270px" : "16px 24px" }}>
            <FlexContainer sx={{ justifyContent: "space-between" }}>
                <GWPriceChange
                    title={t('buy_price')}
                    currency="€"
                    price={Number(priceObject?.iMBP).toFixed(2)}
                    unit="t/oz"
                    value={priceObject?.iMPCA}
                    percent={priceObject?.iMPCP}
                    lastUpdate="2 seconds ago"
                />
                <GWPriceChange
                    title={t('sell_price')}
                    currency="€"
                    price={Number(priceObject?.iMSP).toFixed(2)}
                    unit="t/oz"
                    value={priceObject?.iMPCA}
                    percent={priceObject?.iMPCP}
                    currencySize="24px"
                    amountSize="32px"
                    unitSize="18px"
                    lastUpdate="2 seconds ago"
                    right
                />
            </FlexContainer>
        </_GWPricesSection>
    )
}

export default GWPricesSection;