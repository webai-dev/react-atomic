import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import { Inter } from "@next/font/google";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import Colors from "../../../colors/colors";
import GWCard from "../../atoms/GWCard";
import Div from "../../styled/Div";

const inter = Inter({ subsets: ["latin"] });

const GWBannerCard = ({ children, background, position = "", marginRight = "", marginBottom = "", sx }) => {
    return (
        <GWCard sx={{ sx, height: "308px", padding: "52px 44px 0 32px", overflow: "hidden", position, marginRight, marginBottom }} background={background} borderRadius="25px" variant="emphasis">
            {children}
        </GWCard>
    );
};

const GWBannerSection = () => {
    const fullScreen = useMediaQuery("(min-width:1200px)");
    const { t } = useTranslation("about");

    return (
        <Div sx={{ backgroundPositionX: "center", backgroundRepeat: "no-repeat", backgroundImage: fullScreen ? `url(/assets/images/png/aboutbg.png)` : `url(/assets/images/png/about-bg-mobile.png)`, backgroundSize: "contain", padding: fullScreen ? "120px 24px" : "56px 24px" }}>
            <FlexContainer sx={{ margin: "0 auto", flexDirection: "column", maxWidth: "1060px", alignItems: "center" }}>
                {fullScreen && <ReactSVG src="/assets/images/svg/logo_goldwise_white_medium.svg" />}
                {!fullScreen && <GWBadge variant="emphasis" text="our mission" />}
                <GWAvenirFont tag="h1" color={Colors.navy} fontSize={fullScreen ? "72px" : "46px"} variant="black" fontWeight="800" sx={{ lineHeight: fullScreen ? "88px" : "normal", letterSpacing: "-1px", marginTop: fullScreen ? "40px" : "32px", padding: fullScreen ? "0 110px" : "0", textAlign: "center" }}>
                    {t("democratise_precious_metals")}
                </GWAvenirFont>
                <Typography variant="h4" className={inter.className} sx={{ marginTop: "24px", textAlign: "center", padding: fullScreen ? "0 220px" : "0px", fontSize: "18px", lineHeight: "28px" }}>
                    {t("banner_text")}
                </Typography>
                <FlexContainer sx={{ marginTop: fullScreen ? "120px" : "28px", flexDirection: fullScreen ? "row" : "column" }}>
                    <GWBannerCard sx={{ backgroundColor: "red" }} position="relative" marginRight={fullScreen ? "40px" : ""} marginBottom="24px">
                        {" "}
                        <Div sx={{ position: "absolute", width: "268px", height: "540px", backgroundImage: "linear-gradient(95deg,#D4D1FF,#FFFFFF,#F1BBFF)", filter: "blur(60px)", bottom: 103, right: 0, borderRadius: "3185.12px" }} />
                        <Div sx={{ display: "flex", flexDirection: "column" }}>
                            <GWAvenirFont sx={{ position: "relative", zIndex: 0 }} fontWeight="600" fontSize="42px">
                                {t("our_purpose")}
                            </GWAvenirFont>
                            <GWAvenirFont fontSize="18px" sx={{ position: "relative", zIndex: 0, marginTop: "24px" }}>
                                {t("our_purpose_text")}
                            </GWAvenirFont>
                        </Div>
                    </GWBannerCard>
                    <GWBannerCard position="relative" background={Colors.navy}>
                        <Div sx={{ "::before": { content: "''", height: "700px", width: "500px", position: "absolute", top: -75, right: -172, backgroundImage: `url("/assets/images/png/about_banner_bg_card.png")`, backgroundRepeat: "no-repeat", backgroundSize: "76%" }, "::after": { content: "''", height: "100%", width: "100%", position: "absolute", top: 0, left: 0, backgroundImage: `radial-gradient(rgba(1, 4, 26, 0.56),rgba(1, 4, 26, 1))` } }} />
                        <Div sx={{ display: "flex", flexDirection: "column" }}>
                            <GWAvenirFont tag="h3" sx={{ zIndex: 0, position: "relative" }} fontWeight="600" color={Colors.white} fontSize="42px">
                                {t("our_vision")}
                            </GWAvenirFont>
                            <GWAvenirFont tag="h3" fontSize="18px" color={Colors.white} sx={{ position: "relative", zIndex: 0, marginTop: "24px" }}>
                                {t("our_vision_text")}
                            </GWAvenirFont>
                        </Div>
                    </GWBannerCard>
                </FlexContainer>
            </FlexContainer>
        </Div>
    );
};

export default GWBannerSection;
