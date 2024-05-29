import { Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import React from 'react';
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import Image from "next/image";
import QRCode from "react-qr-code";
import GWButton from "../../atoms/GWButton";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWProvidersSection from "./GWProvidersSection";
import Colors from "../../../colors/colors";
import GWCard from "../../atoms/GWCard";
import { Box } from "@mui/system";

const inter = Inter({ subsets: ['latin'] })

const GWLandingHero = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector();

    return (
        <Div
            ref={ref}
            sx={{
                backgroundImage: `url(/assets/images/png/full-hero-bg.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "initial",
                "@media (max-width: 700px)": {
                    padding: "56px 24px 0px",
                    backgroundColor: Colors.grey100,
                    backgroundPositionY: "-30em",
                }
            }}
        >
            <Div
                className="row"
                sx={{
                    paddingTop: "164px",
                    "@media (max-width: 700px)": {
                        paddingTop: "56px"
                    }
                }}
            >
                <FlexContainer className="col-md-12 mx-auto" style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    {
                        width > 1200 ?
                            <>
                                <GWHeroHeadingText width={width}>{t('hero_message_1')}</GWHeroHeadingText>
                                <GWHeroHeadingText width={width}>{t('hero_message_2')}</GWHeroHeadingText>
                            </>
                            :
                            <GWHeroHeadingText width={width}>{t('hero_message_1')} {t('hero_message_2')}</GWHeroHeadingText>
                    }
                </FlexContainer>
            </Div>
            <Div className="row" style={{ marginTop: width >= 1200 ? "24px" : "16px" }}>
                <FlexContainer className="col-md-4 mx-auto">
                    <Typography sx={{ textAlign: "center", fontSize: 18, color: "#323254" }}>{t('protect_and_grow')}</Typography>
                </FlexContainer>
            </Div>
            <Div
                className="row"
                sx={{
                    paddingTop: "56px",
                    "@media (max-width: 700px)": {
                        paddingTop: "32px"
                    }
                }}
            >
                <FlexContainer className="col-md-4 mx-auto" sx={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
                    <GWButton sx={{
                        backgroundColor: "#000",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundImage: `url(/assets/images/png/app-store.PNG)`,
                        width: 120,
                        height: 40,
                    }} />
                    <GWButton sx={{
                        backgroundColor: "#000",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundImage: `url(/assets/images/png/play-store.PNG)`,
                        width: 120,
                        height: 40,
                    }} />
                </FlexContainer>
                <FlexContainer sx={{ paddingTop: "32px", justifyContent: "center" }}>
                    <GWCard variant="plain" borderColor="none" padding="10px" sx={{ width: "250px" }}>
                        <FlexContainer sx={{ height: "fit-content", gap: "20px"}}>
                            <Box sx={{ flex: 2 }}>
                                <QRCode
                                    size={70}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value="https://app.adjust.com/ez52tlc"
                                    viewBox={`0 0 256 256`}
                                />
                            </Box>
                            <FlexContainer sx={{ flexDirection: "column", gap: "8px", flex: 3 }}>
                                <Typography fontSize="13px">
                                    {t('scan_this_qrcode')}
                                </Typography>
                                <Typography fontSize="10px">
                                    {t('join_over')} <span style={{ color: "#6ed5a8" }}>500,000+</span> {t('people_building')}
                                </Typography>
                            </FlexContainer>
                        </FlexContainer>
                    </GWCard>
                </FlexContainer>
            </Div>
            <Div
                className="row"
                sx={{
                    paddingTop: "120px",
                    paddingBottom: "15px",
                    "@media (max-width: 700px)": {
                        paddingTop: "56px",
                    }
                }}
            >
                <FlexContainer className="col-md-12 mx-auto" sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2
                }}>
                    <Div sx={{
                        width: 400,
                        height: 467,
                        marginTop: "120px",
                        backgroundColor: "rgb(251 251 253 / 0.4)",
                        borderRadius: "24px",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(/assets/images/png/metals-stocks.PNG)`,
                        "@media (max-width: 1000px)": {
                            display: "none"
                        }
                    }} />
                    <Div sx={{
                        width: 400,
                        height: 797,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(/assets/images/png/app-mockup.PNG)`,
                        "@media (max-width: 700px)": {
                            width: 351,
                            height: 701,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            margin: "auto"
                        }
                    }} />
                    <Div sx={{
                        width: 400,
                        height: 467,
                        marginTop: "120px",
                        backgroundColor: "rgb(251 251 253 / 0.4)",
                        borderRadius: "24px",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(/assets/images/png/stocks-chart.PNG)`,
                        "@media (max-width: 1000px)": {
                            display: "none"
                        }
                    }} />
                </FlexContainer>
            </Div>
            <GWProvidersSection />
        </Div>
    )
}

export default GWLandingHero;