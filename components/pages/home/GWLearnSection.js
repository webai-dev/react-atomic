import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from 'react';
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";
import GWCarouselItem from "../../atoms/GWCarouselItem";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWCarousel from "../../molecules/GWCarousel";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWLearnSection = () => {
    const { t } = useTranslation("home")

    return (
        <FlexContainer sx={{ marginTop: "0px", flexDirection: "column", backgroundColor: Colors.grey100, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(/assets/images/png/dust-gradient.PNG)` }}>
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    flexDirection: "column",
                    paddingTop: "128px",
                    paddingBottom: "128px",
                    "@media (max-width: 700px)": {
                        paddingTop: "56px",
                        paddingBottom: "56px",
                    }
                }}>
                <Div className="mx-auto mb-5">
                    <GWBadge text={t('learn')} variant="emphasis" />
                </Div>
                <FlexContainer className="row">
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2">{t('new_to_investing')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <Div className="row" style={{ marginTop: "24px" }}>
                    <FlexContainer className="col-md-7 mx-auto">
                        <Typography sx={{
                            textAlign: "center",
                            fontSize: 18,
                            color: "#323254",
                            "@media (max-width: 700px)": {
                                marginX: "24"
                            }
                        }}>{t('become_an_expert')}</Typography>
                    </FlexContainer>
                </Div>
            </FlexContainer>
            <FlexContainer className="col-md-12 mt-4 mx-auto row" sx={{
                marginBottom: "80px",
                "@media (max-width: 700px)": {
                    marginBottom: "56px"
                }
            }}>
                <FlexContainer className="col-md-12" style={{ padding: "0px", flexDirection: "column" }}>
                    <GWCarousel itemCount={2} sx={{ paddingLeft: 0 }} actionButton={{
                        label: t('view_all_guides'),
                        action: () => window.location = "/guides"
                    }}>
                        <GWCarouselItem sx={{ maxWidth: "512px" }}>
                            <Div sx={{ marginBottom: "32px", width: "100%", height: "252px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/images/png/portfolio.png)" }} />
                            <Div sx={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
                                <GWAvenirFont tag="h4" color={"grey500"} fontSize={"18px"}>{t('our_guide_to_investing')}</GWAvenirFont>
                                <GWAvenirFont color={"grey400"} fontSize={"18px"}>{t('learn_about_different')}</GWAvenirFont>
                                <GWButton variant="link" text={t('view_guide')} sx={{ boxShadow: "none", marginLeft: "-10px", marginTop: "25px" }} />
                            </Div>
                        </GWCarouselItem>
                        <GWCarouselItem sx={{ maxWidth: "512px" }}>
                            <Div sx={{ marginBottom: "32px", width: "100%", height: "252px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/images/png/charts.png)" }} />
                            <Div sx={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
                                <GWAvenirFont tag="h4" color={"grey500"} fontSize={"18px"}>{t('why_invest')}</GWAvenirFont>
                                <GWAvenirFont color={"grey400"} fontSize={"18px"}>{t('learn_all_about')}</GWAvenirFont>
                                <GWButton variant="link" text={t('view_guide')} sx={{ boxShadow: "none", marginLeft: "-10px", marginTop: "25px" }} />
                            </Div>

                        </GWCarouselItem>
                        <GWCarouselItem sx={{ maxWidth: "512px" }}>
                            <Div sx={{ marginBottom: "32px", width: "100%", height: "252px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/images/png/charts.png)" }} />
                            <Div sx={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
                                <GWAvenirFont tag="h4" color={"grey500"} fontSize={"18px"}>{t('our_guide_investing')}</GWAvenirFont>
                                <GWAvenirFont color={"grey400"} fontSize={"18px"}>{t('learn_about_different')}</GWAvenirFont>
                                <GWButton variant="link" text={t('view_guide')} sx={{ boxShadow: "none", marginLeft: "-10px", marginTop: "25px" }} />
                            </Div>

                        </GWCarouselItem>
                        <GWCarouselItem sx={{ maxWidth: "512px" }}>
                            <Div sx={{ marginBottom: "32px", width: "100%", height: "252px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/images/png/portfolio.png)" }} />
                            <Div sx={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
                                <GWAvenirFont tag="h4" color={"grey500"} fontSize={"18px"}>{t('why_invest')}</GWAvenirFont>
                                <GWAvenirFont color={"grey400"} fontSize={"18px"}>{t('learn_all_about')}</GWAvenirFont>
                                <GWButton variant="link" text={t('view_guide')} sx={{ boxShadow: "none", marginLeft: "-10px", marginTop: "25px" }} />
                            </Div>
                        </GWCarouselItem>
                    </GWCarousel>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWLearnSection;