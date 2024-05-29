import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";
import GWCard from "../../atoms/GWCard";

const _GWCard = ({ children, fullScreen, sx = {} }) => {
    return (
        <GWCard borderColor={fullScreen ? "transparent" : ""} background={Colors.navy} padding={fullScreen ? "0" : "32px 24px"} borderRadius="25px" sx={{ ...sx }}>
            {children}
        </GWCard>
    );
};

const GWBusinessSection = () => {
    const fullScreen = useMediaQuery("(min-width:1200px)");
    const { t } = useTranslation("about");

    return (
        <Div sx={{ backgroundPositionX: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(/assets/images/png/business-section-bg.png)`, backgroundSize: "cover", padding: "0 24px" }}>
            <FlexContainer sx={{ position: "relative", margin: "0 auto", flexDirection: "column", alignItems: "center", padding: fullScreen ? "120px 0px" : "56px 0", border: `1px solid rgba(234, 235, 240, 0.18)`, borderWidth: "0 1px 0px 1px", maxWidth: "1060px", "& > *": { zIndex: 0 }, "::before": { content: '""', width: "1px", height: "100%", backgroundColor: "rgba(234, 235, 240, 0.18)", position: "absolute", top: 0, left: "50%" } }}>
                <GWBadge variant="plain" text={t("business_badge")} color={Colors.navy} bgcolor={Colors.white} />
                <GWAvenirFont tag="h2" variant="black" fontWeight="700" color={Colors.white} fontSize={fullScreen ? "56px" : "36px"} sx={{ marginTop: "40px", lineHeight: fullScreen ? "68px" : "auto", lineSpacing: "-1px", padding: fullScreen ? "0 110px" : "0 24px", textAlign: "center" }}>
                    {t("business_head_text")}
                </GWAvenirFont>
                <FlexContainer sx={{ flexDirection: fullScreen ? "row" : "column", marginTop: "72px", justifyContent: "space-between", flexWrap: "wrap", gap: "24px", "& > div": { flex: "0 1 calc(25% - 35px)" } }}>
                    <_GWCard fullScreen={fullScreen} sx={{ display: "flex", flexDirection: "column" }} >
                        <GWAvenirFont color={Colors.white}>{t("business_card_1_title")}</GWAvenirFont>
                        <GWAvenirFont color={Colors.grey400}>{t("business_card_1_text")}</GWAvenirFont>
                    </_GWCard>
                    <_GWCard fullScreen={fullScreen} sx={{ display: "flex", flexDirection: "column" }}>
                        <GWAvenirFont color={Colors.white}>{t("business_card_2_title")}</GWAvenirFont>
                        <GWAvenirFont color={Colors.grey400}>{t("business_card_2_text")}</GWAvenirFont>
                    </_GWCard>
                    <_GWCard fullScreen={fullScreen} sx={{ display: "flex", flexDirection: "column" }}>
                        <GWAvenirFont color={Colors.white}>{t("business_card_3_title")}</GWAvenirFont>
                        <GWAvenirFont color={Colors.grey400}>{t("business_card_3_text")}</GWAvenirFont>
                    </_GWCard>
                    <_GWCard fullScreen={fullScreen} sx={{ display: "flex", flexDirection: "column" }}>
                        <GWAvenirFont color={Colors.white}>{t("business_card_4_title")}</GWAvenirFont>
                        <GWAvenirFont color={Colors.grey400}>{t("business_card_4_text")}</GWAvenirFont>
                    </_GWCard>
                </FlexContainer>
                <GWButton bgColor={Colors.white} color={Colors.navy} text={t("business_button_title")} sx={{ marginTop: "25px", ":hover": { "& > .MuiTypography-root": { color: Colors.white } }, "& > .MuiTypography-root": { textTransform: "capitalize" } }} />
            </FlexContainer>
        </Div>
    );
};

export default GWBusinessSection;
