import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import Div from "../../styled/Div";
import GWSimpleCard from "../../molecules/GWSimpleCard";
import GWBadge from "../../atoms/GWBadge";

const GWCoreValueSection = () => {
    const fullScreen = useMediaQuery("(min-width:1200px)");
    const { t } = useTranslation("about");

    return (
        <Div sx={{ background: Colors.white, padding: "0 24px" }}>
            <FlexContainer sx={{ position: "relative", margin: "0 auto", flexDirection: "column", alignItems: "center", padding: fullScreen ? "120px 0px" : "56px 0", border: "1px solid #EAEBF0", borderWidth: "0 1px 0px 1px", maxWidth: "1060px", "& > *": { zIndex: 0 }, "::before": { content: '""', width: "1px", height: "100%", backgroundColor: "#EAEBF0", position: "absolute", top: 0, left: "50%" } }}>
                <GWBadge location="about" variant="emphasis" text={t("values")} />
                <GWAvenirFont tag="h2" color={Colors.navy} fontSize={fullScreen ? "56px" : "36px"} fontWeight="700" variant="black" sx={{ lineHeight: fullScreen ? "68px" : "auto", letterSpacing: "-1px", marginTop: "40px", padding: fullScreen ? "0 110px" : "0 24px", textAlign: "center" }}>
                    {t("value_head_text")}
                </GWAvenirFont>
                <FlexContainer sx={{ flexDirection: fullScreen ? "row" : "column", marginTop: fullScreen ? "72px" : "56px", justifyContent: "space-between", flexWrap: "wrap", gap: fullScreen ? "35px" : "24px", "& .MuiPaper-root": { flex: "0 1 calc(33.3% - 35px)" } }}>
                    <GWSimpleCard icon="/assets/images/svg/user-heart-line.svg" title={t("value_1")} description={t("value_1_text")} />
                    <GWSimpleCard icon="/assets/images/svg/opera-line.svg" title={t("value_2")} description={t("value_2_text")} />
                    <GWSimpleCard icon="/assets/images/svg/award-line.svg" title={t("value_3")} description={t("value_3_text")} />
                    <GWSimpleCard icon="/assets/images/svg/shape-line.svg" title={t("value_4")} description={t("value_4_text")} />
                    <GWSimpleCard icon="/assets/images/svg/guide-line.svg" title={t("value_5")} description={t("value_5_text")} />
                    <GWSimpleCard icon="/assets/images/svg/plant-line.svg" title={t("value_6")} description={t("value_6_text")} />
                </FlexContainer>
            </FlexContainer>
        </Div>
    );
};

export default GWCoreValueSection;
