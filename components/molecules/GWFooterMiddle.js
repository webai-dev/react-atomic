import { styled } from "@mui/system";
import { Inter } from "@next/font/google";
import { ReactSVG } from "react-svg";
import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";
import Colors from "../../colors/colors";
import { useColorMode } from "../../contexts/ColorModeContext";
import FlexContainer from "../styled/FlexContainer";
import Div from "../styled/Div";

const inter = Inter({ subsets: ["latin"] })

const _GWFooterMiddle = styled(Div)(({ isfullscreen }) => ({
    display: "flex",
    flexDirection: isfullscreen === "true" ? "row" : "column",
    alignItems: "flex-start",
    paddingTop: "32.02px",
    paddingBottom: "32.96px",
    gap: isfullscreen === "true" ? "32px" : "15.96px",
    margin: isfullscreen === "true" ? "0px 160px" : "15.96px 24px",
    borderTop: "1px solid #E4E7EC",
    borderBottom: "1px solid #E4E7EC",
    justifyContent: "space-between"
}));

const GWFooterMiddle = ({ width }) => {
    const { t } = useTranslation("common")
    const { mode } = useColorMode();

    return (
        <_GWFooterMiddle isfullscreen={String(width >= 1200)}>
            <FlexContainer sx={{ position: "relative" }}>
                {mode === "light" ? <ReactSVG src="/assets/images/svg/goldwise-icon.svg" /> : <ReactSVG src="/assets/images/svg/goldwise-icon-white.svg" />}
                <Typography sx={{ ml: "7.33px" }} className={inter.className}>{t("logo_name")}</Typography>
            </FlexContainer>
            <Div>
                <Typography sx={{ color: Colors.grey300 }}>{t("copyright")}</Typography>
            </Div>
        </_GWFooterMiddle>
    )
}

export default GWFooterMiddle;
