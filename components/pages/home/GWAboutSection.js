import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from 'react';
import { useResizeDetector } from "react-resize-detector";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";
import GWCard from "../../atoms/GWCard";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWAboutSection = () => {
    const { t } = useTranslation("home");
    const { width, ref } = useResizeDetector()

    return (
        <FlexContainer ref={ref} sx={{ marginTop: "50px", flexDirection: "column", backgroundColor: Colors.grey100, backgroundPosition: "center", backgroundPositionY: "260%", backgroundRepeat: "no-repeat", backgroundImage: `url(/assets/images/png/dust-gradient.PNG)` }}>
            <FlexContainer
                className="pymd--5 col-md-8 mx-auto"
                sx={{
                    flexDirection: "column"
                }}>
                <Div className="mx-auto" sx={{
                    marginTop: "72px",
                    "@media (max-width: 700px)": {
                        marginTop: "56px"
                    }
                }}>
                    <GWBadge text={t('about_us')} variant="emphasis" />
                </Div>
                <FlexContainer className="row" style={{ marginTop: width >= 1200 ? "40px" : "32px" }}>
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2">{t('our_experienced_and_passionate_team')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <Div className="row" style={{ marginTop: "24px" }}>
                    <FlexContainer className="col-md-7 mx-auto">
                        <Typography sx={{
                            textAlign: "center", fontSize: 18, color: "#323254",
                            "@media (max-width: 700px)": {
                                marginX: "24px"
                            }
                        }}>{t('learn_more_about')}</Typography>
                    </FlexContainer>
                </Div>
            </FlexContainer>
            <FlexContainer className=" col-md-8 mt-4 mx-auto row" sx={{
                marginBottom: "80px",
                padding: "initial",
                "@media (max-width: 700px)": {
                    padding: "0 24px",
                    marginBottom: "6px"
                }
            }}>
                <FlexContainer className="col-md-12" sx={{
                    padding: "0px",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "40px",
                    "@media (max-width: 700px)": {
                        flexDirection: "column",
                        gap: "24px"
                    }
                }}>
                    <GWCard variant="emphasis" borderRadius="25px" sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: width >= 1200 ? "308px" : "0", backgroundImage: `url(/assets/images/png/dust-gradient.PNG)`, backgroundSize: "cover", backgroundPositionX: "200px", backgroundPositionY: "bottom", backgroundRepeat: "no-repeat" }}>
                        <GWAvenirFont tag="h3" color="navy" sx={{
                            fontSize: "42px", lineHeight: "48px",
                            "@media (max-width: 700px)": {
                                fontSize: "32px",
                                lineHeight: "44px"
                            }
                        }}>{t('our_purpose')}</GWAvenirFont>
                        <GWAvenirFont color="grey400" sx={{
                            marginTop: "24px",
                            "@media (max-width: 700px)": {
                                marginTop: "12px"
                            }
                        }}>{t('we_believe_that_protecting')}</GWAvenirFont>
                    </GWCard>

                    <GWCard variant="emphasis" borderRadius="25px" sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: width >= 1200 ? "308px" : "0", backgroundColor: Colors.navy, background: "radial-gradient(66.67% 89.57% at 41.86% 45.23%, rgba(1, 4, 26, 0.56) 0%, #01041A 100%)" }}>
                        <GWAvenirFont
                            tag="h3"
                            color="white"
                            sx={{
                                fontSize: "42px",
                                lineHeight: "48px",
                                "@media (max-width: 700px)": {
                                    fontSize: "32px",
                                    lineHeight: "44px"
                                }
                            }}
                        >{t('become_goldwise')}</GWAvenirFont>
                        <GWAvenirFont
                            color="grey300"
                            sx={{
                                marginTop: "24px",
                                "@media (max-width: 700px)": {
                                    marginTop: "12px"
                                }
                            }}>{t('want_to_become')}</GWAvenirFont>
                    </GWCard>
                </FlexContainer>
                <FlexContainer sx={{
                    paddingTop: "72px",
                    "@media (max-width: 700px)": {
                        paddingTop: "56px",
                    }
                }}>
                    <GWButton text={t('learn_more_about_us')} color="white" bgColor="navy" sx={{
                        "@media (max-width: 700px)": {
                            width: "100%",
                        }
                    }} />
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWAboutSection;