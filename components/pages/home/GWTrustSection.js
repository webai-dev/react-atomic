import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from 'react';
import { useResizeDetector } from "react-resize-detector";
import { ReactSVG } from "react-svg";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";
import GWCarouselItem from "../../atoms/GWCarouselItem";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWCarousel from "../../molecules/GWCarousel";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWTrustSection = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector();

    return (
        <FlexContainer ref={ref} sx={{
            flexDirection: "column",
            paddingTop: "120px",
            paddingBottom: "120px",
            "@media (max-width: 700px)": {
                paddingTop: "56px",
                paddingBottom: "56px",
            }
        }}>
            <FlexContainer
                className="col-md-9 mx-auto"
                sx={{
                    flexDirection: "column",
                }}>
                <Div className="mx-auto">
                    <GWBadge text="trust" variant="emphasis" />
                </Div>
                <FlexContainer className="row" sx={{paddingTop: width >= 1200 ? "40px" : "32px"}}>
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2" screenWidth={width} fontSize="56px">{t('account_funds_safe')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <Div className="row" style={{ marginTop: "24px" }}>
                    <FlexContainer className="col-md-7 mx-auto">
                        <Typography sx={{ textAlign: "center", fontSize: 18, color: "#323254" }}>{t('trustworthy_foundations')}</Typography>
                    </FlexContainer>
                </Div>
            </FlexContainer>
            <FlexContainer className="col-md-12 mx-auto row" sx={{
                marginTop: "72px",
                "@media (max-width: 700px)": {
                    marginTop: "54px"
                }
            }}>
                <FlexContainer className={width >= 1000 ? "row mt-5" : "mt-5"} style={{ padding: "0px", flexDirection: "column" }}>
                    <GWCarousel itemCount={2} sx={{ paddingLeft: 0 }}>
                        <GWCarouselItem sx={{ maxWidth: "512px" }}>
                            <FlexContainer sx={{ gap: "10px", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: "16px" }}>
                                <ReactSVG src="/assets/images/svg/album.svg" />
                                <GWAvenirFont tag="h4" color={"grey500"} fontSize={"18px"} sx={{ marginTop: "5px" }}>{t('regulated_in_uk')}</GWAvenirFont>
                            </FlexContainer>
                            <GWAvenirFont color={"grey400"} fontSize={"18px"}>{t('regulated_in_uk_info')}</GWAvenirFont>
                            <GWButton variant="link" text="learn_more" sx={{ boxShadow: "none", marginLeft: "-10px", marginTop: "25px" }} />
                        </GWCarouselItem>

                        <GWCarouselItem sx={{ maxWidth: "512px" }}>
                            <FlexContainer sx={{ gap: "10px", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: "16px" }}>
                                <ReactSVG src="/assets/images/svg/door.svg" />
                                <GWAvenirFont tag="h4" color={"grey500"} fontSize={"18px"} sx={{ marginTop: "5px" }}>{t('safeguarded_funds')}</GWAvenirFont>
                            </FlexContainer>
                            <GWAvenirFont color={"grey400"} fontSize={"18px"}>{t('safeguarded_funds_info')}.</GWAvenirFont>
                            <GWButton variant="link" text="learn_more" sx={{ boxShadow: "none", marginLeft: "-10px", marginTop: "25px" }} />
                        </GWCarouselItem>

                        <GWCarouselItem sx={{ maxWidth: "512px" }}>
                            <FlexContainer sx={{ gap: "10px", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: "16px" }}>
                                <ReactSVG src="/assets/images/svg/album.svg" />
                                <GWAvenirFont tag="h4" color={"grey500"} fontSize={"18px"} sx={{ marginTop: "5px" }}>{t('regulated_in_uk')}</GWAvenirFont>
                            </FlexContainer>
                            <GWAvenirFont color={"grey400"} fontSize={"18px"}>{t('regulated_in_uk_info')}</GWAvenirFont>
                            <GWButton variant="link" text="learn_more" sx={{ boxShadow: "none", marginLeft: "-10px", marginTop: "25px" }} />
                        </GWCarouselItem>

                        <GWCarouselItem sx={{ maxWidth: "512px" }}>
                            <FlexContainer sx={{ gap: "10px", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: "16px" }}>
                                <ReactSVG src="/assets/images/svg/door.svg" />
                                <GWAvenirFont tag="h4" color={"grey500"} fontSize={"18px"} sx={{ marginTop: "5px" }}>{t('safeguarded_funds')}</GWAvenirFont>
                            </FlexContainer>
                            <GWAvenirFont color={"grey400"} fontSize={"18px"}>{t('safeguarded_funds_info')}</GWAvenirFont>
                            <GWButton variant="link" text="learn_more" sx={{ boxShadow: "none", marginLeft: "-10px", marginTop: "25px" }} />
                        </GWCarouselItem>
                    </GWCarousel>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWTrustSection;