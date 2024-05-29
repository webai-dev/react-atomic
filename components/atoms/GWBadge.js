import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Inter } from "@next/font/google";
import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";
import Colors from "../../colors/colors";

const inter = Inter({ subsets: ['latin'] })

const _GWBadge = styled(Paper)({
    borderRadius: "200px",
    display: "flex",
    alignItems: "center"
});

const _GWText = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "13px",
    textAlign: "center",
    letterSpacing: "0.06em",
    textTransform: "uppercase"
})

const GWBadge = ({ variant, text, color, bgcolor, opacity, location = "home", screenWidth, padding = "10px 16px" }) => {
    const { t } = useTranslation(location);
    let variantStyles;

    switch (variant) {
        case "emphasis":
            variantStyles = { boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.04), 0px 9px 12px rgba(11, 29, 75, 0.04)" }
            break;
        case "plain":
            variantStyles = { boxShadow: "none" }
            break;
        default:
            break;
    }

    return (
        <_GWBadge sx={{ color: Colors[color] || color, background: Colors[bgcolor] || bgcolor, opacity, width: "fit-content", textTransform: "uppercase", padding: (!screenWidth || screenWidth >= 1000) ? padding : "8px", ...variantStyles }}>
            <_GWText variant="h4" className={inter.className}>{t(text)}</_GWText>
        </_GWBadge>
    )
};

GWBadge.propTypes = {
    variant: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    opacity: PropTypes.string,
    location: PropTypes.string
}

export default GWBadge;