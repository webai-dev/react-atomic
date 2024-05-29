import { Typography } from "@mui/material";
import React from 'react';
import { useTranslation } from "next-i18next";
import GWBadge from "../../atoms/GWBadge";
import GWCard from "../../atoms/GWCard";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWInfoList from "../../atoms/GWInfoList";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWButton from "../../atoms/GWButton";
import { useResizeDetector } from "react-resize-detector";
import Colors from "../../../colors/colors";

const GWComingSoon = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector();

    return (
        <FlexContainer className="my-0" ref={ref} sx={{ backgroundImage: `url(/assets/images/png/coming_soon_bg.png)`, backgroundPositionX: "center" }}>
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    paddingTop: "120px",
                    paddingBottom: "120px",
                    flexDirection: "column",
                    "@media (max-width: 700px)": {
                        paddingTop: "56px",
                        paddingBottom: "56px",
                    }
                }}>
                <Div className="mx-auto mb-5">
                    <GWBadge text="coming_soon" variant="emphasis" />
                </Div>
                <FlexContainer className="row">
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2" screenWidth={width} fontSize="56px">{t('coming_soon_hero')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <Div className="row" style={{ marginTop: "24px" }}>
                    <FlexContainer className="col-md-7 mx-auto">
                        <Typography sx={{
                            textAlign: "center",
                            fontSize: 18,
                            color: "#323254",
                            "@media (max-width: 700px)": {
                                marginX: "24px"
                            }
                        }}>{t('coming_soon_hero_info')}</Typography>
                    </FlexContainer>
                </Div>
                <FlexContainer sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "35px",
                    marginTop: "72px",
                    flexDirection: "row",
                    "@media (max-width: 700px)": {
                        flexDirection: "column",
                        marginTop: "56px",
                        paddingX: "24px",
                        gap: "24px"
                    }
                }}>
                    <Div style={{ flex: 1 }}>
                        <GWCard variant="emphasis" borderRadius="25px" sx={{
                            minHeight: "496px",
                            padding: "32px",
                            "@media (max-width: 700px)": {
                                padding: "24px",
                                minHeight: "0"
                            }
                        }}>
                            <FlexContainer>
                                <Div sx={{
                                    width: "100%",
                                    height: 224,
                                    backgroundSize: "contain",
                                    backgroundPositionX: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(/assets/images/png/reccoring_orders.png)`,
                                    "@media (max-width: 700px)": {
                                        border: `3px solid ${Colors.grey200}`,
                                        borderRadius: "16px",
                                    }
                                }} />
                            </FlexContainer>
                            <Div sx={{ marginTop: "32px" }}>
                                <GWAvenirFont tag="h4" fontSize="18px" fontWeight="500" >{t('bullion_bar_coins')}</GWAvenirFont>
                            </Div>
                            <Div sx={{ marginTop: "12px" }}>
                                <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('bullion_bar_coins_info')}</GWAvenirFont>
                            </Div>
                        </GWCard>
                    </Div>
                    <Div style={{ flex: 1 }}>
                        <GWCard variant="emphasis" padding="32px" borderRadius="25px" sx={{
                            minHeight: "496px",
                            "@media (max-width: 700px)": {
                                padding: "24px",
                                minHeight: "0"
                            }
                        }}>
                            <FlexContainer>
                                <Div sx={{
                                    width: "100%",
                                    height: 224,
                                    backgroundSize: "contain",
                                    backgroundPositionX: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(/assets/images/png/us_flag.png)`,
                                    "@media (max-width: 700px)": {
                                        border: `3px solid ${Colors.grey200}`,
                                        borderRadius: "16px",
                                    }
                                }} />
                            </FlexContainer>
                            <Div sx={{ marginTop: "32px" }}>
                                <GWAvenirFont tag="h4" fontSize="18px" fontWeight="500" >{t('us_dollar_wallet')}</GWAvenirFont>
                            </Div>
                            <Div sx={{ marginTop: "12px" }}>
                                <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('us_dollar_wallet_info')}</GWAvenirFont>
                            </Div>
                        </GWCard>
                    </Div>
                    <Div style={{ flex: 1 }}>
                        <GWCard variant="emphasis" padding="32px" borderRadius="25px" sx={{
                            minHeight: "496px",
                            "@media (max-width: 700px)": {
                                padding: "24px",
                                minHeight: "0"
                            }
                        }}>
                            <FlexContainer>
                                <Div sx={{
                                    width: "100%",
                                    height: 224,
                                    backgroundSize: "contain",
                                    backgroundPositionX: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(/assets/images/png/goldwise_card.png)`,
                                    "@media (max-width: 700px)": {
                                        border: `3px solid ${Colors.grey200}`,
                                        borderRadius: "16px",
                                    }
                                }} />
                            </FlexContainer>
                            <Div sx={{ marginTop: "32px" }}>
                                <GWAvenirFont tag="h4" fontSize="18px" fontWeight="500">{t('goldwise_card')}</GWAvenirFont>
                            </Div>
                            <Div sx={{ marginTop: "12px" }}>
                                <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('goldwise_card_info')}</GWAvenirFont>
                            </Div>
                        </GWCard>
                    </Div>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWComingSoon;