import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWCard from "../../atoms/GWCard";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWBadge from "../../atoms/GWBadge";

const GWSolidFoundationSection = () => {
    const { t } = useTranslation("for-business")
    const { ref } = useResizeDetector();
    const fullScreen = useMediaQuery("(min-width:1200px)");

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
                    top: "calc(50% - 840px/2)",
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
            <FlexContainer className="col-md-8 mx-auto" sx={{ flexDirection: "column" }}>
                <Div className="mx-auto">
                    <GWBadge text={t("solid_foundation")} variant="emphasis" />
                </Div>
                <GWAvenirFont
                    color={Colors.white}
                    fontSize={fullScreen ? "72px" : "46px"}
                    variant="normal" fontWeight="800"
                    sx={{
                        lineHeight: fullScreen ? "88px" : "normal",
                        letterSpacing: "-1px",
                        marginTop: fullScreen ? "40px" : "32px",
                        padding: fullScreen ? "0 110px" : "0",
                        textAlign: "center",
                        position: "relative",
                        zIndex: "2"
                    }}
                >
                    {t("solid_foundation_title")}
                </GWAvenirFont>
            </FlexContainer>
            <FlexContainer
                sx={{
                    maxWidth: "1060px",
                    margin: "100px auto",
                    flexDirection: fullScreen ? "row" : "column",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: fullScreen ? "35px" : "24px",
                    "& .MuiPaper-root": { flex: "0 1 calc(50% - 35px)" }
                }}
            >
                <GWCard
                    borderColor="rgba(127, 129, 140, 0.18)"
                    variant="emphasis"
                    borderRadius="25px"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        backgroundImage: "url(/assets/images/png/solid_foundation_bg1.png)",
                        backgroundRepeat: "no-repeat",
                        ":after": {
                            opacity: "0.5",
                            zIndex: "1",
                            position: "absolute",
                            background: "radial-gradient(66.67% 89.57% at 41.86% 45.23%, rgba(1, 4, 26, 0.56) 0%, #01041A 100%)",
                            content: "''",
                            width: "100%",
                            height: "100%",
                            top: "0",
                            left: "0",
                            borderRadius: "25px",
                        },
                        "::before": {
                            zIndex: "0",
                            content: "''",
                            backgroundImage: "linear-gradient(107.27deg, #D4D1FF 33.59%, #FFFFFF 57.24%, #F1BBFF 79.79%)",
                            position: "absolute",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            bottom: "50%",
                            opacity: "0.2",
                            height: "540px",
                            width: "270px",
                            borderRadius: "6453px",
                            filter: "blur(80px)"
                        }
                    }}
                >
                    <FlexContainer
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "start",
                            height: "100%",
                            position: "relative",
                            zIndex: "2"
                        }}
                    >
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "48px" }} fontWeight="400" fontSize="42px" variant="normal" color={Colors.white}>
                            {t("solid_foundation_1")}
                        </GWAvenirFont>
                    </FlexContainer>
                </GWCard>
                <GWCard
                    borderColor="rgba(127, 129, 140, 0.18)"
                    variant="emphasis"
                    borderRadius="25px"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        backgroundImage: "url(/assets/images/png/solid_foundation_bg2.png)",
                        backgroundRepeat: "no-repeat",
                        ":after": {
                            opacity: "0.5",
                            zIndex: "1",
                            position: "absolute",
                            background: "radial-gradient(66.67% 89.57% at 41.86% 45.23%, rgba(1, 4, 26, 0.56) 0%, #01041A 100%)",
                            content: "''",
                            width: "100%",
                            height: "100%",
                            top: "0",
                            left: "0",
                            borderRadius: "25px",
                        },
                        "::before": {
                            zIndex: "0",
                            content: "''",
                            backgroundImage: "linear-gradient(107.27deg, #D4D1FF 33.59%, #FFFFFF 57.24%, #F1BBFF 79.79%)",
                            position: "absolute",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            bottom: "50%",
                            opacity: "0.2",
                            height: "540px",
                            width: "270px",
                            borderRadius: "6453px",
                            filter: "blur(80px)"
                        }
                    }}
                >
                    <FlexContainer
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "start",
                            height: "100%",
                            position: "relative",
                            zIndex: "2"
                        }}
                    >
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "48px" }} fontWeight="400" fontSize="42px" variant="normal" color={Colors.white}>
                            {t("solid_foundation_2")}
                        </GWAvenirFont>
                    </FlexContainer>
                </GWCard>
                <GWCard
                    borderColor="rgba(127, 129, 140, 0.18)"
                    variant="emphasis"
                    borderRadius="25px"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        backgroundImage: "url(/assets/images/png/solid_foundation_bg3.png)",
                        backgroundRepeat: "no-repeat",
                        ":after": {
                            opacity: "0.5",
                            zIndex: "1",
                            position: "absolute",
                            background: "radial-gradient(66.67% 89.57% at 41.86% 45.23%, rgba(1, 4, 26, 0.56) 0%, #01041A 100%)",
                            content: "''",
                            width: "100%",
                            height: "100%",
                            top: "0",
                            left: "0",
                            borderRadius: "25px",
                        },
                        "::before": {
                            zIndex: "0",
                            content: "''",
                            backgroundImage: "linear-gradient(107.27deg, #D4D1FF 33.59%, #FFFFFF 57.24%, #F1BBFF 79.79%)",
                            position: "absolute",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            bottom: "50%",
                            opacity: "0.2",
                            height: "540px",
                            width: "270px",
                            borderRadius: "6453px",
                            filter: "blur(80px)"
                        }
                    }}
                >
                    <FlexContainer
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "start",
                            height: "100%",
                            position: "relative",
                            zIndex: "2"
                        }}
                    >
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "48px" }} fontWeight="400" fontSize="42px" variant="normal" color={Colors.white}>
                            {t("solid_foundation_3")}
                        </GWAvenirFont>
                    </FlexContainer>
                </GWCard>
                <GWCard
                    borderColor="rgba(127, 129, 140, 0.18)"
                    variant="emphasis"
                    borderRadius="25px"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        backgroundImage: "url(/assets/images/png/solid_foundation_bg4.png)",
                        backgroundRepeat: "no-repeat",
                        ":after": {
                            opacity: "0.5",
                            zIndex: "1",
                            position: "absolute",
                            background: "radial-gradient(66.67% 89.57% at 41.86% 45.23%, rgba(1, 4, 26, 0.56) 0%, #01041A 100%)",
                            content: "''",
                            width: "100%",
                            height: "100%",
                            top: "0",
                            left: "0",
                            borderRadius: "25px",
                        },
                        "::before": {
                            zIndex: "0",
                            content: "''",
                            backgroundImage: "linear-gradient(107.27deg, #D4D1FF 33.59%, #FFFFFF 57.24%, #F1BBFF 79.79%)",
                            position: "absolute",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            bottom: "50%",
                            opacity: "0.2",
                            height: "540px",
                            width: "270px",
                            borderRadius: "6453px",
                            filter: "blur(80px)"
                        }
                    }}
                >
                    <FlexContainer
                        sx={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "start",
                            height: "100%",
                            position: "relative",
                            zIndex: "2"
                        }}
                    >
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "48px" }} fontWeight="400" fontSize="42px" variant="normal" color={Colors.white}>
                            {t("solid_foundation_4")}
                        </GWAvenirFont>
                    </FlexContainer>
                </GWCard>

            </FlexContainer>
        </Div>)
}

export default GWSolidFoundationSection
