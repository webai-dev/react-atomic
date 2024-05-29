import { Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Inter } from "@next/font/google";
import { ReactSVG } from "react-svg";
import Colors from "../../../colors/colors";
import Div from "../../styled/Div";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import FlexContainer from "../../styled/FlexContainer";
import GWBadge from "../../atoms/GWBadge";
import GWSimpleCard from "../../molecules/GWSimpleCard";
import GWCard from "../../atoms/GWCard";

const inter = Inter({ subsets: ["latin"] });
const GWKeypoint = () => {
    const { t } = useTranslation(["digital_metal_overview", "fees", "about"]);
    const fullScreen = useMediaQuery("(min-width:1200px)");

    return (<Div sx={{ backgroundColor: Colors.grey100, padding: fullScreen ? "120px 24px" : "56px 24px", maxWidth: "1060px", margin: "0 auto" }}>
        <FlexContainer sx={{ margin: "0 auto", flexDirection: "column", maxWidth: "1060px", alignItems: "center" }}>
            <Div className="mx-auto">
                <GWBadge text={t("key_points")} variant="emphasis" />
            </Div>

            <GWAvenirFont tag="h2" color={Colors.navy} fontSize={fullScreen ? "72px" : "46px"} variant="black" fontWeight="800" sx={{ lineHeight: fullScreen ? "88px" : "normal", letterSpacing: "-1px", marginTop: fullScreen ? "40px" : "32px", padding: fullScreen ? "0 110px" : "0", textAlign: "center" }}>
                {t("key_points_title")}
            </GWAvenirFont>
            <Typography className={inter.className} sx={{ marginTop: "24px", textAlign: "center", padding: fullScreen ? "0 220px" : "0px", fontSize: "18px", lineHeight: "28px" }}>
                {t("key_points_description")}
            </Typography>
        </FlexContainer>
        <Div sx={{ marginTop: fullScreen ? "72px" : "56px" }}>
            <GWAvenirFont tag="h3" variant="black" fontWeight="600" fontSize="24px">
                {t("key_points_sub_title")}
            </GWAvenirFont>
            <FlexContainer
                sx={{
                    marginTop: "12px",
                    marginBottom: fullScreen ? "44px" : "32px",
                    gap: "12px",
                }}
            >
                <ReactSVG src="/assets/images/svg/info.svg" />
                <Typography
                    className={inter.className}
                    sx={{
                        color: "#323254",
                        fontSize: "18px",
                        lineHeight: "28px",
                    }}
                >
                    {t("key_points_sub_description")}
                </Typography>
            </FlexContainer>
            <FlexContainer sx={{ flexDirection: fullScreen ? "row" : "column", marginTop: fullScreen ? "72px" : "56px", justifyContent: "space-between", flexWrap: "wrap", gap: fullScreen ? "35px" : "24px", "& .MuiPaper-root": { flex: "0 1 calc(33.3% - 35px)" } }}>
                <GWCard variant="emphasis" borderRadius="25px">
                    <Div sx={{
                        width: "100%",
                        height: "100%",
                        minHeight: "520px",
                        backgroundSize: "contain",
                        backgroundPositionX: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(/assets/images/png/gold-bar.png)`
                    }} />
                </GWCard>
                <FlexContainer sx={{flexDirection: fullScreen ? "row" : "column", justifyContent: "space-between",flexWrap: "wrap", gap: fullScreen ? "35px" : "24px", flex: "0 1 calc(68% - 35px)", "& .MuiPaper-root": { flex: "0 1 calc(50% - 35px)" } }}>
                    <GWSimpleCard icon="/assets/images/svg/user-heart-line.svg" title={t("value_1")} description={t("value_1_text")} />
                    <GWSimpleCard icon="/assets/images/svg/opera-line.svg" title={t("value_2")} description={t("value_2_text")} />
                    <GWSimpleCard icon="/assets/images/svg/award-line.svg" title={t("value_3")} description={t("value_3_text")} />
                    <GWSimpleCard icon="/assets/images/svg/shape-line.svg" title={t("value_4")} description={t("value_4_text")} />
                    <GWSimpleCard icon="/assets/images/svg/guide-line.svg" title={t("value_5")} description={t("value_5_text")} />
                    <GWSimpleCard icon="/assets/images/svg/plant-line.svg" title={t("value_6")} description={t("value_6_text")} />
                </FlexContainer>
                <GWSimpleCard icon="/assets/images/svg/star-line.svg" title={t("value_7")} description={t("value_7_text")} />
                <GWSimpleCard icon="/assets/images/svg/list-check.svg" title={t("value_8")} description={t("value_8_text")} />
                <GWSimpleCard icon="/assets/images/svg/clock.svg" title={t("value_9")} description={t("value_9_text")} />
            </FlexContainer>
        </Div>
    </Div>)
}

export default GWKeypoint;
