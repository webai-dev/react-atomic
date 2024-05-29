import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import localFont from "@next/font/local";
import { useTranslation } from "next-i18next";
import Colors from "../../colors/colors";
import Div from "../styled/Div";

const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })

const _GWFooterBottom = styled(Div)(({ isfullscreen }) => ({
    padding: isfullscreen === 'true' ? "32px 160px" : "32px 24px 56px 24px"
}));

const _GWFooterBottomText = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    color: Colors.grey300
})

const GWFooterBottom = ({ line1, line2, width }) => {
    const { t } = useTranslation("common")

    return (
        <_GWFooterBottom isfullscreen={String(width >= 1200)}>
            <_GWFooterBottomText className={avenir.className}>{t(line1)}</_GWFooterBottomText>
            <_GWFooterBottomText sx={{ marginTop: "12px" }} className={avenir.className}>{t(line2)}</_GWFooterBottomText>
        </_GWFooterBottom>
    )
};

export default GWFooterBottom;