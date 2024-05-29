import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from "react";
import { useResizeDetector } from "react-resize-detector";
import GWButton from "../../atoms/GWButton";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWBadge from "../../atoms/GWBadge";

const GWLearnMoreSection = () => {
    const { t } = useTranslation("for-business")
    const { width, ref } = useResizeDetector();
    const fullScreen = useMediaQuery("(min-width:1200px)");

    return (
        <Div
            ref={ref}
            className="my-0"
            sx={{
                padding: fullScreen ? "120px 24px" : "56px 24px",
                position: "relative",
                overflow: "hidden",
                "::before": {
                    content: "''",
                    backgroundImage: "linear-gradient(107.27deg, #D4D1FF 33.59%, #FFFFFF 57.24%, #F1BBFF 79.79%)",
                    position: "absolute",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    top: "calc(50%)",
                    left: "calc(50% - 434px/2)",
                    opacity: "0.2",
                    height: "840px",
                    width: "434px",
                    borderRadius: "6453px",
                    filter: "blur(162px)",
                    transform: "rotate(-90deg)"
                }
            }}
        >
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    flexDirection: "column",
                    "@media (max-width: 1000px)": {
                        marginTop: "56px"
                    }
                }}
            >
                <Div className="mx-auto">
                    <GWBadge text={t("learn_more")} variant="emphasis" />
                </Div>
                <FlexContainer
                    sx={{
                        marginTop: "40px",
                        "@media (max-width: 1000px)": {
                            marginTop: "32px",
                        }
                    }}
                >
                    <FlexContainer>
                        <GWHeroHeadingText fontSize="56px">{t("learn_more_title")}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer
                sx={{
                    flexDirection: width >= 1200 ? "row" : "column",
                    marginTop: "72px",
                    gap: width >= 1200 ? "20px" : "12px",
                    "@media (max-width: 700px)": {
                        marginTop: "56px",
                    },
                    "& .MuiButton-root": {
                        margin: "0"
                    }
                }}
            >
                <GWButton text={t("download_brochure")} color="navy" bgColor="white" sx={{
                    "@media (max-width: 700px)": {
                        width: "100%",
                        marginX: "24px"
                    }
                }} />
                <GWButton text={t("about_us")} color="white" bgColor="navy" sx={{
                    "@media (max-width: 700px)": {
                        width: "100%",
                        marginX: "24px"
                    }
                }} />
                <GWButton text={t("about_us")} color="white" bgColor="navy" sx={{
                    "@media (max-width: 700px)": {
                        width: "100%",
                        marginX: "24px"
                    }
                }} />
            </FlexContainer>
        </Div>)
}

export default GWLearnMoreSection
