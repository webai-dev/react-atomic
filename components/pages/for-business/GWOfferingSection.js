import { useMediaQuery } from "@mui/material";
import { styled, Box } from "@mui/system";
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import { ReactSVG } from "react-svg";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWCard from "../../atoms/GWCard";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWBadge from "../../atoms/GWBadge";

const _GWText = styled(Box)({
    fontStyle: "normal",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    marginBottom: "10px"
})
const GWOfferingSection = () => {
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
                    <GWBadge text={t("offering")} variant="emphasis" />
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
                    {t("offering_title")}
                </GWAvenirFont>
            </FlexContainer>
            <FlexContainer
                sx={{
                    maxWidth: "1060px",
                    paddingY: "100px"
                }}
                className="row mx-auto"
            >
                <Div className="col-md-4" sx={{ display: "flex", flexDirection: "column", gap: fullScreen ? "35px" : "24px", }}>
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
                                {t("offering_value_1")}
                            </GWAvenirFont>
                        </FlexContainer>
                        <Div sx={{ lineHeight: "28px", marginTop: "12px", color: "text.primary", fontSize: "18px", fontWeight: "400" }}>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Gold</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Silver</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Platinum</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Palladium</GWAvenirFont>
                                </_GWText>
                            </Div>
                        </Div>
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
                                {t("offering_value_1")}
                            </GWAvenirFont>
                        </FlexContainer>
                        <Div sx={{ lineHeight: "28px", marginTop: "12px", color: "text.primary", fontSize: "18px", fontWeight: "400" }}>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>British Pounds</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Euros</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>US Dollar</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Swiss Franc</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Australian Dollar</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Japanese Yen</GWAvenirFont>
                                </_GWText>
                            </Div>
                        </Div>
                    </GWCard>
                </Div>
                <Div className="col-md-4" sx={{ display: "flex", flexDirection: "column", gap: fullScreen ? "35px" : "24px", padding: fullScreen ? "auto" : "24px 0" }}>
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
                                {t("offering_value_1")}
                            </GWAvenirFont>
                        </FlexContainer>
                        <Div sx={{ lineHeight: "28px", marginTop: "12px", color: "text.primary", fontSize: "18px", fontWeight: "400" }}>
                            <Div>
                                <_GWText sx={{ display: "flex", alignItems: "start" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Digital Metals - Fractional
                                        Ownership of ethically
                                        sourced, investment grade
                                        bullion bars
                                    </GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", alignItems: "start" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>
                                        Bullion Bars (coming soon)-
                                        A range of bars from
                                        leading global mints and
                                        refineries
                                    </GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", alignItems: "start" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>
                                        Bullion Coins (coming soon)-
                                        A range of coins from
                                        leading global mints and
                                        refineries
                                    </GWAvenirFont>
                                </_GWText>
                            </Div>
                        </Div>
                    </GWCard>
                </Div>
                <Div className="col-md-4" sx={{ display: "flex", flexDirection: "column", gap: fullScreen ? "35px" : "24px", }}>
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
                                {t("offering_value_4")}
                            </GWAvenirFont>
                        </FlexContainer>
                        <Div sx={{ lineHeight: "28px", marginTop: "12px", color: "text.primary", fontSize: "18px", fontWeight: "400" }}>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Swiss Franc</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Australian Dollar</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Japanese Yen</GWAvenirFont>
                                </_GWText>
                            </Div>
                        </Div>
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
                                {t("offering_value_5")}
                            </GWAvenirFont>
                        </FlexContainer>
                        <Div sx={{ lineHeight: "28px", marginTop: "12px", color: "text.primary", fontSize: "18px", fontWeight: "400" }}>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Market</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Limit</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Stop</GWAvenirFont>
                                </_GWText>
                            </Div>
                            <Div>
                                <_GWText sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                                    <ReactSVG src="/assets/images/svg/check-circle-white.svg" />
                                    <GWAvenirFont>Stop Limit</GWAvenirFont>
                                </_GWText>
                            </Div>
                        </Div>
                    </GWCard>
                </Div>
                <Div></Div>
                <Div></Div>
            </FlexContainer>
        </Div>)
}

export default GWOfferingSection
