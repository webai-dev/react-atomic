import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import Colors from "../../colors/colors";
import { isImageOrSVG } from "../../utils/utils";

const _GWCard = styled(Paper)({
    border: "2px solid rgba(127, 129, 140, 0.18)",
    height: "inherit",
});

const GWCard = ({ variant, background, borderRadius, borderColor, children, padding = "40px 32px", sx = {} }) => {
    let variantStyles;

    switch (variant) {
        case "emphasis":
            variantStyles = { boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1)" };
            break;
        case "plain":
            variantStyles = { boxShadow: "none" };
            break;
        default:
            break;
    }

    return <_GWCard sx={{ background: isImageOrSVG(background) ? `url(${background})` : Colors[background] || background, borderRadius, borderColor, padding, ...variantStyles, ...sx }}>{children}</_GWCard>;
};

GWCard.propTypes = {
    variant: PropTypes.string,
    background: PropTypes.string,
    borderRadius: PropTypes.string,
    borderColor: PropTypes.string,
};

export default GWCard;
