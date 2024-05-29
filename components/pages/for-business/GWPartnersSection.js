import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from "react";
import { useResizeDetector } from "react-resize-detector";
import GWLogoList from "../../atoms/GWLogoList";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWBadge from "../../atoms/GWBadge";

const GWPartnersSection = () => {
    const { t } = useTranslation("for-business")
    const { ref } = useResizeDetector();
    const fullScreen = useMediaQuery("(min-width:1200px)");

    const logoList = [
        "/assets/images/png/jp-morgan.PNG",
        "/assets/images/png/barclays.PNG",
        "/assets/images/png/hsbc.PNG",
        "/assets/images/png/ubs.PNG",
        "/assets/images/png/goldman-sachs.PNG"
    ];

    return (
        <Div
            ref={ref}
            className="my-0"
            sx={{
                padding: fullScreen ? "120px 20px" : "56px 20px",
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
            <FlexContainer className="col-md-8 mx-auto" sx={{ flexDirection: "column", alignItems: "center" }}>
                <Div className="mx-auto">
                    <GWBadge text={t("partners")} variant="emphasis" />
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
                        <GWHeroHeadingText variant="h3" fontSize="56px">{t("partners_title")}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer className="row">
                    <GWLogoList logos={logoList} />
                </FlexContainer>
            </FlexContainer>
        </Div>)
}

export default GWPartnersSection
