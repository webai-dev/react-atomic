import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import localFont from "@next/font/local";
import Link from "./GWLink";
import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";
import Colors from "../../colors/colors";


const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })

const _GWFooterLinkItem = styled(Typography)(({ isfullscreen }) => ({
    fontWeight: 500,
    fontSize: isfullscreen === 'true' ? "16px" : "14px",
    lineHeight: isfullscreen === 'true' ? "24px" : "20px",
    color: Colors.grey400
}));

const GWFooterLinkItem = ({ title, link, isFullScreen }) => {
    const { t } = useTranslation("common")

    return (
        <Link href={link} style={{ textDecoration: "none" }}>
            <_GWFooterLinkItem isfullscreen={String(isFullScreen)} className={avenir.className}>
                {t(title)}
            </_GWFooterLinkItem>
        </Link>
    )
};

GWFooterLinkItem.propType = {
    title: PropTypes.string,
    link: PropTypes.string
}

export default GWFooterLinkItem;