import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import localFont from "@next/font/local";
import { useTranslation } from "next-i18next";
import Div from "../styled/Div";

const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })

const _GWFooterLinkList = styled(Div)(({ isfullscreen }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    gap: isfullscreen === 'true' ? "16px" : "14px",
    flex: "none",
    minWidth: "160px",
    order: 1,
    flexGrow: 0,
    justifyContent: "space-between"
}));

const _GWFooterLinkTitle = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px"
})

const GWFooterLinkList = ({ title, children, width }) => {
    const { t } = useTranslation("common")

    return (
        <_GWFooterLinkList isfullscreen={String(width >= 1200)} className="col">
            <_GWFooterLinkTitle variant="h4" className={avenir.className}>{t(title)}</_GWFooterLinkTitle>
            {children}
        </_GWFooterLinkList>
    )
}

export default GWFooterLinkList;