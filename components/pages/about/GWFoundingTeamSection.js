import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import { Roboto } from "@next/font/google";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWProfileCard from "../../molecules/GWProfileCard";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";

const roboto = Roboto({ subsets: ["latin"], weight: ["700"] });

const GWFoundingTeam = () => {
    const fullScreen = useMediaQuery("(min-width:1200px)");
    const { t } = useTranslation("about");

    return (
        <Div sx={{ padding: "0 24px" }}>
            <FlexContainer sx={{ position: "relative", margin: "0 auto", flexDirection: "column", alignItems: "center", padding: fullScreen ? "120px 0px" : "56px 0", border: "1px solid #EAEBF0", borderWidth: "0 1px 0px 1px", maxWidth: "1060px", "& > *": { zIndex: 0 }, "::before": { content: '""', width: "1px", height: "100%", backgroundColor: "#EAEBF0", position: "absolute", top: 0, left: "50%" }, "& .css-177wwcq-MuiPaper-root": { marginTop: "72px", borderRadius: "10px", padding: "10px 20px", "& .MuiTypography-root": { textTransform: "capitalize", fontSize: "16px", fontFamily: roboto } } }}>
                <GWBadge variant="emphasis" text={t("meet_the_team")} />
                <GWAvenirFont tag="h2" color={Colors.navy} fontSize={fullScreen ? "56px" : "36px"} fontWeight="700" variant="black" sx={{ lineHeight: fullScreen ? "68px" : "auto", letterSpacing: "-1px", marginTop: fullScreen ? "40px" : "32px", padding: fullScreen ? "0 110px" : "0 24px", textAlign: "center" }}>
                    {t("founding_team")}
                </GWAvenirFont>
                <FlexContainer sx={{ flexDirection: fullScreen ? "row" : "column", marginTop: fullScreen ? "72px" : "56px", justifyContent: "space-between", flexWrap: "wrap", gap: "24px 18px", "& .MuiPaper-root": { flex: "0 1 calc(33.3% - 18px)" } }}>
                    <GWProfileCard profileImageUrl="/assets/images/png/jatin-patel-bio.png" name={t("jatin_patel")} bio={t("jatin_bio")} skills={[t("management"), t("finance"), t("operations")]} socialLink="https://www.linkedin.com" socialType="LinkedIn" />
                    <GWProfileCard profileImageUrl="/assets/images/png/gareth-bio.png" name={t("gareth")} bio={t("gareth_bio")} skills={[t("product"), t("marketing"), t("customer")]} socialLink="https://www.linkedin.com" socialType="LinkedIn" />
                    <GWProfileCard profileImageUrl="/assets/images/png/chris-bio.png" name={t("chris")} bio={t("chris_bio")} skills={[t("development"), t("technology"), t("data")]} socialLink="https://www.linkedin.com" socialType="LinkedIn" />
                </FlexContainer>
                <GWButton sx={{ marginTop: "72px", "& .css-1pb0oyy-MuiButtonBase-root-MuiButton-root:hover": { color: Colors.navy } }} bgColor={Colors.navy} color={Colors.white} text={t("view_open_positions")} />
            </FlexContainer>
        </Div>
    );
};

export default GWFoundingTeam;
