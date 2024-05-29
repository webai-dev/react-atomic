import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "./GWLink"
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import { useTranslation } from 'next-i18next'
import Colors from "../../colors/colors";

const _GWButton = styled(Button)({
    
})

const ButtonTemplate = (props) => {
    const { text, onClick, icon, color, bgColor, disabled = false, variantStyles, sx = {}, rel="" } = props;

    return (
        <_GWButton disabled={disabled} onClick={onClick} sx={{
            color: Colors[color] || color, 
            background: Colors[bgColor] || bgColor, 
            ":hover": {
                background: Colors[bgColor] || bgColor,
                opacity: "0.5"
            },
            boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1)", 
            ...variantStyles, 
            ...sx
        }}>
            {icon && <ReactSVG src={icon} style={{width: "fit-content", marginRight: text ? "4px" : "0"}} />} {text && <Typography sx={{ fontSize: "16px", textTransform: "none" }}>{text}</Typography>}
        </_GWButton>
    )
}

const GWButton = ({ text, target = "", link, onClick, icon, color, bgColor, variant, disabled = false, location = "home", sx, rel }) => {
    const { t } = useTranslation(location);
    const props = { text: text ? t(text) : "", link, onClick, icon, color, bgColor, disabled, sx };

    let variantStyles;

    switch (variant) {
        case "circle":
            variantStyles = { borderRadius: "50%", height: "72px", width: "72px", border: "2px solid rgba(127, 129, 140, 0.18)" }
            break;
        case "icon":
            variantStyles = { borderRadius: "8px", padding: "8px", border: "1px solid #E0E1E4", boxShadow: "none", height: "fit-content", minWidth: "fit-content"}
            break;
        case "link":
            variantStyles = { borderRadius: "8px", padding: "6px 16px" }
            break;
        case "default":
            variantStyles = { borderRadius: "8px", padding: "6px 16px" }
            break;
        default:
            variantStyles = { borderRadius: "8px", padding: "10px 16px", height: "fit-content" }
            break;
    }
    props.variantStyles = variantStyles;

    return link ? (
        <Link target={target} href={link} rel={rel} style={{ textDecoration: "none" }}>
            <ButtonTemplate {...props} />
        </Link>
    ) : (
        <ButtonTemplate {...props} />
    )
}

GWButton.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string
}

export default GWButton;