import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import { useMediaQuery } from "@mui/material";
import GWCard from "../../atoms/GWCard";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWBadge from "../../atoms/GWBadge";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";

const GWServicesSection = () => {
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
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    flexDirection: "column"
                }}>
                <Div className="mx-auto">
                    <GWBadge text={t("services")} variant="emphasis" />
                </Div>
                <GWAvenirFont
                tag="h2"
                    color={Colors.white}
                    fontSize={fullScreen ? "72px" : "46px"}
                    variant="black" fontWeight="800"
                    sx={{
                        lineHeight: fullScreen ? "88px" : "normal",
                        letterSpacing: "-1px",
                        marginTop: fullScreen ? "40px" : "32px",
                        padding: fullScreen ? "0 110px" : "0",
                        textAlign: "center"
                    }}
                >
                    {t("services_title")}
                </GWAvenirFont>
            </FlexContainer>
            <FlexContainer
                sx={{
                    maxWidth: "1060px",
                    margin: "100px auto",
                    flexDirection: fullScreen ? "row" : "column",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    gap: fullScreen ? "35px" : "24px",
                    "& .MuiPaper-root": { flex: "0 1 calc(33% - 35px)" }
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
                            {t("services_value_1")}
                        </GWAvenirFont>
                    </FlexContainer>
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                        {t("services_value_1_description")}
                    </GWAvenirFont>
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
                            {t("services_value_2")}
                        </GWAvenirFont>
                    </FlexContainer>
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                        {t("services_value_2_description")}
                    </GWAvenirFont>
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
                            {t("services_value_3")}
                        </GWAvenirFont>
                    </FlexContainer>
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                        {t("services_value_3_description")}
                    </GWAvenirFont>
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
                            {t("services_value_4")}
                        </GWAvenirFont>
                    </FlexContainer>
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                        {t("services_value_4_description")}
                    </GWAvenirFont>
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
                            {t("services_value_5_description")}
                        </GWAvenirFont>
                    </FlexContainer>
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                        {t("services_value_5_description")}
                    </GWAvenirFont>
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
                            {t("services_value_6")}
                        </GWAvenirFont>
                    </FlexContainer>
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                        {t("services_value_6_description")}
                    </GWAvenirFont>
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
                            {t("services_value_7")}
                        </GWAvenirFont>
                    </FlexContainer>
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                        {t("services_value_7_description")}
                    </GWAvenirFont>
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
                            {t("services_value_8")}
                        </GWAvenirFont>
                    </FlexContainer>
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                        {t("services_value_8_description")}
                    </GWAvenirFont>
                </GWCard>
            </FlexContainer>
        </Div>
    )
}

export default GWServicesSection
