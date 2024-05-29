import { Paper, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";
import GWAvenirFont from "./GWAvenirFont";

const _GWPriceChange = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    borderRadius: "0",
    border: "none",
    boxShadow: "none",
    width: "fit-content",
    height: "inherit",
    gap: "8px"
});

const GWPriceChange = ({ title, currency, price, unit, value, percent, lastUpdate, currencySize = "32px", amountSize = "48px", unitSize = "28px", right }) => {
    const { t } = useTranslation("spot-prices-detail");
    const fullScreen = useMediaQuery("(min-width:1200px)");


    const isNegative = () => {
        return Math.sign(Number(value)) === -1
    }

    return (
        <_GWPriceChange>
            <Div>
                <GWAvenirFont fontWeight="500" fontSize="12px" variant="book" color="grey300" sx={{ textTransform: "uppercase", textAlign: !fullScreen ? "right" : "left" }}>{title}</GWAvenirFont>
            </Div>
            {
                fullScreen ?
                    <FlexContainer sx={{ justifyContent: "flex-start", height: "56px", alignItems: "center" }}>
                        <Div sx={{ marginRight: "4px", fontWeight: "800", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <GWAvenirFont fontWeight="800" fontSize={currencySize} variant="black" color="#CFCED2" sx={{ textAlign: "end" }}>{currency}</GWAvenirFont>
                        </Div>
                        <Div sx={{ marginRight: "14px" }}>
                            <GWAvenirFont fontWeight="800" fontSize={amountSize} variant="black" color="navy">{price}</GWAvenirFont>
                        </Div>
                        <Div sx={{ paddingTop: "13px", fontWeight: "800", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <GWAvenirFont fontWeight="500" fontSize={unitSize} variant="black" color="grey300">{unit}</GWAvenirFont>
                        </Div>
                    </FlexContainer>
                    :
                    <FlexContainer sx={{ justifyContent: right ? "flex-end" : "flex-start", alignItems: "center" }}>
                        <Div>
                            <GWAvenirFont fontWeight="800" fontSize="18px" color="navy" sx={{ textAlign: right ? "right" : "left" }}>{currency} {price} {unit}</GWAvenirFont>
                        </Div>
                    </FlexContainer>
            }
            <FlexContainer>
                <Div sx={{ marginRight: "4px" }}>
                    <ReactSVG src={isNegative() ? "/assets/images/svg/arrow-down-right-circle.svg" : "/assets/images/svg/arrow-up-right-circle.svg"} />
                </Div>
                <Div sx={{ marginRight: fullScreen ? "12px" : "0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <GWAvenirFont fontWeight="500" fontSize="14px" variant="book" color={isNegative() ? "red" : "green"} sx={{ textAlign: "right" }}>{value} ({percent}%)</GWAvenirFont>
                </Div>
                {fullScreen &&
                    <Div sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <GWAvenirFont fontWeight="500" fontSize="14px" variant="book" color="grey300">{t('price_update')} {lastUpdate}</GWAvenirFont>
                    </Div>
                }
            </FlexContainer>
        </_GWPriceChange>
    )
}

GWPriceChange.propTypes = {
    title: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.string,
    unit: PropTypes.string,
    value: PropTypes.string,
    percent: PropTypes.string,
    lastUpdate: PropTypes.string
}

export default GWPriceChange;