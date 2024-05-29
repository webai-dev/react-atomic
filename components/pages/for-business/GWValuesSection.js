import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import { useMediaQuery } from "@mui/material";
import GWCard from "../../atoms/GWCard";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWBadge from "../../atoms/GWBadge";
import GWAvenirFont from "../../atoms/GWAvenirFont";

const GWValuesSection = () => {
    const { t } = useTranslation("for-business")
    const { ref } = useResizeDetector();
    const fullScreen = useMediaQuery("(min-width:1200px)");

    return (
        <Div ref={ref} className="my-0" sx={{ paddingX: "20px" }}>
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    marginTop: "165px",
                    flexDirection: "column",
                    "@media (max-width: 1000px)": {
                        marginTop: "56px"
                    }
                }}>
                <Div
                    className="mx-auto">
                    <GWBadge text={t("values")} variant="emphasis" />
                </Div>
                <GWAvenirFont
                    tag="h2"
                    // color={Colors.white}
                    fontSize={fullScreen ? "72px" : "46px"}
                    variant="black"
                    fontWeight="800"
                    sx={{
                        lineHeight: fullScreen ? "88px" : "normal",
                        letterSpacing: "-1px",
                        marginTop: fullScreen ? "40px" : "32px",
                        padding: fullScreen ? "0 110px" : "0",
                        textAlign: "center"
                    }}
                >
                    {t("values_title")}
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
                    "& .MuiPaper-root": {
                        flex: "0 1 calc(33% - 35px)"
                    }
                }}
            >
                <GWCard
                    borderColor="rgba(127, 129, 140, 0.18)"
                    variant="emphasis"
                    borderRadius="25px"
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        "::before": {
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
                    <FlexContainer sx={{ justifyContent: "start" }}>
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "28px", textTransform: "capitalize" }} fontSize="18px" variant="black">
                            {t("values_1")}
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
                        "::before": {
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
                    <FlexContainer sx={{ justifyContent: "start" }}>
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "28px", textTransform: "capitalize" }} fontSize="18px" variant="black">
                            {t("values_2")}
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
                        "::before": {
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
                    <FlexContainer sx={{ justifyContent: "start" }}>
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "28px", textTransform: "capitalize" }} fontSize="18px" variant="black">
                            {t("values_3")}
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
                        "::before": {
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
                    <FlexContainer sx={{ justifyContent: "start" }}>
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "28px", textTransform: "capitalize" }} fontSize="18px" variant="black">
                            {t("values_4")}
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
                        "::before": {
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
                    <FlexContainer sx={{ justifyContent: "start" }}>
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "28px", textTransform: "capitalize" }} fontSize="18px" variant="black">
                            {t("values_5")}
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
                        "::before": {
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
                    <FlexContainer sx={{ justifyContent: "start" }}>
                        <GWAvenirFont tag="h3" sx={{ lineHeight: "28px", textTransform: "capitalize" }} fontSize="18px" variant="black">
                            {t("values_6")}
                        </GWAvenirFont>
                    </FlexContainer>
                </GWCard>
            </FlexContainer>
        </Div>)
}

export default GWValuesSection
