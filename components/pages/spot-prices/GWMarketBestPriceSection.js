import { Box, styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import { useMediaQuery } from "@mui/material";
import { ReactSVG } from "react-svg";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWSelect from "../../molecules/GWSelect";
import Container from "../../styled/Container";
import Div from "../../styled/Div"
import FlexContainer from "../../styled/FlexContainer";
import GWTableComponent from "../home/GWTableComponent";
import GWMarketTime from "../../molecules/GWMarketTime";

const _GWMarketBestPriceSection = styled(Div)({
    marginTop: "72px"
})

const _GWText = styled(Box)({
    fontStyle: "normal",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    marginBottom: "10px"
})

const GWMarketBestPriceSection = (props) => {
    const { t } = useTranslation("spot-prices")
    const { width, ref } = useResizeDetector()
    const mobile = useMediaQuery("(max-width:1200px)");



    return (
        <Div ref={ref}>
            <_GWMarketBestPriceSection>
                <FlexContainer sx={{ flexDirection: width >= 1200 ? "row" : "column" }}>
                    <Div sx={{ flex: 2 }}>
                        <GWAvenirFont variant="black" fontWeight="800" fontSize="24px">{t('market_best_price')}</GWAvenirFont>
                        <_GWText>
                            <ReactSVG src="/assets/images/svg/check-circle.svg" />
                            <GWAvenirFont>{t('market_best_price_info')}</GWAvenirFont>
                        </_GWText>
                    </Div>
                    <Div sx={{ flex: 1, alignItems: "end", display: "flex", justifyContent: mobile ? "flex-start" : "flex-end" }}>
                        <Div className="row" style={{ marginBottom: "24px" }}>
                            <FlexContainer className="col-12" style={{ justifyContent: "flex-end", gap: "14px" }}>
                                <GWSelect items={[{
                                    leftIcon: "/assets/images/svg/asterisk.svg",
                                    value: "OZ"
                                },]} leftIcon={true} width={width} />
                                <GWSelect items={[{
                                    leftIcon: "/assets/images/svg/euro-sign.svg",
                                    value: "EUR"
                                },]} leftIcon={true} width={width} />
                            </FlexContainer>
                        </Div>
                    </Div>
                </FlexContainer>
                <Box>
                    <GWTableComponent screenWidth={width} padding="0" isSpot={true} />
                    <Div sx={{ marginTop: "52px" }}>
                        <GWMarketTime dateTime="01 JAN 2022, 09:45:34 MEZ" />
                    </Div>
                </Box>
            </_GWMarketBestPriceSection>
        </Div>
    )
}

export default GWMarketBestPriceSection;