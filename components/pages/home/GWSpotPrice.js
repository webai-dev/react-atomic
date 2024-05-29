import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from 'react';
import { useResizeDetector } from "react-resize-detector";
import { ReactSVG } from "react-svg";
import Colors from "../../../colors/colors";
import { usePriceApiContext } from "../../../contexts/PriceAPIContext";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWCard from "../../atoms/GWCard";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWSelect from "../../molecules/GWSelect";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWTableComponent from "./GWTableComponent";

const GWSpotPrice = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector()
    const { productsPrices } = usePriceApiContext();

    return (
        <FlexContainer ref={ref} sx={{
            flexDirection: "column",
            paddingTop: "120px",
            paddingBottom: "120px",
            backgroundColor: Colors.grey100,
            "@media (max-width: 700px)": {
                paddingTop: "56px",
                paddingBottom: "56px",
            }
        }}>
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    flexDirection: "column",
                    "@media (max-width: 700px)": {
                        paddingX: "24px"
                    }
                }}>
                <Div className="mx-auto">
                    <GWBadge text="spot_prices" variant="emphasis" />
                </Div>
                <FlexContainer className="row" sx={{ paddingTop: width >= 1200 ? "40px" : "32px" }}>
                    <FlexContainer className="col-md-8 mx-auto">
                        <GWHeroHeadingText variant="h2" screenWidth={width} fontSize="56px">{t('live_precious_metal')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <Div className="row" style={{ marginTop: width >= 1200 ? "16px" : "24px" }}>
                    <FlexContainer className="col-md-7 mx-auto">
                        <Typography sx={{ textAlign: "center", fontSize: 18, color: "#323254" }}>{t('live_precious_metal_info')}</Typography>
                    </FlexContainer>
                </Div>
            </FlexContainer>
            <FlexContainer className="col-md-8 mx-auto mt-3 row" sx={{
                marginTop: "72px",
                borderTop: 0,
                borderBottom: 0,
                "@media (max-width: 700px)": {
                    paddingTop: "56px"
                }
            }}>
                <FlexContainer className="col-md-12 mx-auto" style={{ padding: "0px", flexDirection: "column" }}>
                    {
                        width >= 1200 &&
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
                    }
                    <GWTableComponent screenWidth={width} data={productsPrices} />
                    <Div sx={{ padding: width >= 1200 ? "24px 0" : "0 24px" }}>
                        <GWCard variant="emphasis" borderRadius="25px" sx={{ marginTop: "24px", width: "100%", padding: "32px" }}>
                            <FlexContainer sx={{ gap: "12px", justifyContent: "flex-start" }}>
                                <ReactSVG src="/assets/images/svg/info.svg" />
                                <Div>
                                    <GWAvenirFont color="grey400" sx={{ fontSize: "18px", }}>{t('current_market_time')}: <strong style={{ color: Colors.navy }}>{t('extended_market_time')}</strong></GWAvenirFont>
                                    <GWAvenirFont color="grey400" sx={{ fontSize: "18px", marginTop: width >= 1200 ? "0" : "8px" }}>{t('current_news')}</GWAvenirFont>
                                </Div>
                            </FlexContainer>
                        </GWCard>
                    </Div>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWSpotPrice;