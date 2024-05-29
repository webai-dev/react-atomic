import { useTranslation } from "next-i18next";
import React from 'react';
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWCarouselItem from "../../atoms/GWCarouselItem";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWStarScore from "../../atoms/GWStarScore";
import GWCarousel from "../../molecules/GWCarousel";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWTestimonialsSection = () => {
    const { t } = useTranslation("home")

    return (
        <FlexContainer sx={{
            marginTop: "0px",
            flexDirection: "column"
        }}>
            <FlexContainer
                className="py-md-5 col-md-8 mx-auto"
                sx={{
                    flexDirection: "column"
                }}>
                <Div className="mx-auto mb-5" sx={{ marginTop: "72px" }}>
                    <GWBadge text={t('testimonials')} variant="emphasis" />
                </Div>
                <FlexContainer className="row">
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2">{t('testimonial_info')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer className="col-md-12 mt-md-4= mx-auto row" sx={{
                "@media (max-width: 700px)": {
                    paddingTop: "56px",
                }
            }}>
                <FlexContainer className="col-md-12" style={{ padding: "0px", flexDirection: "column" }}>
                    <GWCarousel itemCount={3} sx={{ paddingLeft: 0 }} actionButton={{
                        label: t('send_us_feedback'),
                        action: () => window.location = "/feedback"
                    }}>
                        <GWCarouselItem>
                            <Div sx={{ display: "flex", flexDirection: "column" }}>
                                <GWStarScore score={5} />
                                <GWAvenirFont color="grey500" fontSize="18px" fontWeight="500" sx={{ marginBottom: "12px", marginTop: "24px" }}>{t('it_really_works')}</GWAvenirFont>
                                <GWAvenirFont color="grey500" fontSize="18px" fontWeight="400" sx={{ marginBottom: "16px" }}>{t('downloaded_pocket_today')}</GWAvenirFont>
                                <GWAvenirFont color="grey400" fontSize="18px" fontWeight="400">- Laura Schellen</GWAvenirFont>
                            </Div>
                        </GWCarouselItem>

                        <GWCarouselItem>
                            <Div sx={{ display: "flex", flexDirection: "column" }}>
                                <GWStarScore score={5} />
                                <GWAvenirFont color="grey500" fontSize="18px" fontWeight="500" sx={{ marginBottom: "12px", marginTop: "24px" }}>{t('it_really_works')}</GWAvenirFont>
                                <GWAvenirFont color="grey500" fontSize="18px" fontWeight="400" sx={{ marginBottom: "16px" }}>{t('started_providing')}</GWAvenirFont>
                                <GWAvenirFont color="grey400" fontSize="18px" fontWeight="400">- Laura Schellen</GWAvenirFont>
                            </Div>
                        </GWCarouselItem>

                        <GWCarouselItem>
                            <Div sx={{ display: "flex", flexDirection: "column" }}>
                                <GWStarScore score={5} />
                                <GWAvenirFont color="grey500" fontSize="18px" fontWeight="500" sx={{ marginBottom: "12px", marginTop: "24px" }}>{t('it_really_works')}</GWAvenirFont>
                                <GWAvenirFont color="grey500" fontSize="18px" fontWeight="400" sx={{ marginBottom: "16px" }}>{t('downloaded_pocket_today')}</GWAvenirFont>
                                <GWAvenirFont color="grey400" fontSize="18px" fontWeight="400">- Laura Schellen</GWAvenirFont>
                            </Div>
                        </GWCarouselItem>

                        <GWCarouselItem>
                            <Div sx={{ display: "flex", flexDirection: "column" }}>
                                <GWStarScore score={5} />
                                <GWAvenirFont color="grey500" fontSize="18px" fontWeight="500" sx={{ marginBottom: "12px", marginTop: "24px" }}>{t('it_really_works')}</GWAvenirFont>
                                <GWAvenirFont color="grey500" fontSize="18px" fontWeight="400" sx={{ marginBottom: "16px" }}>{t('started_providing')}</GWAvenirFont>
                                <GWAvenirFont color="grey400" fontSize="18px" fontWeight="400">- Laura Schellen</GWAvenirFont>
                            </Div>
                        </GWCarouselItem>
                    </GWCarousel>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer >
    )
}

export default GWTestimonialsSection;