import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import localFont from "@next/font/local";
import PropTypes from "prop-types";
import Colors from "../../colors/colors";

const avenirBook = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })
const avenirBlack = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Black.otf' })
const avenirRoman = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Roman.otf' })

const _GWAvenirFont = styled(Typography)({
    fontStyle: "normal"
});

const GWAvenirFont = ({ color, fontSize, children, fontWeight, sx, variant, tag="p" }) => {
    let avenir;
    switch (variant) {
        case "book":
            avenir = avenirBook
            break;
        case "black":
            avenir = avenirBlack
            break;
        case "roman":
            avenir = avenirRoman
        default:
            avenir = avenirBook
            break;
    }

    return (
        <_GWAvenirFont variant={tag} className={avenir.className} style={{ color: Colors[color] || color, fontSize, fontWeight }} sx={sx}>
            {children}
        </_GWAvenirFont>
    )
};

GWAvenirFont.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    sx: PropTypes.object
}

export default GWAvenirFont;