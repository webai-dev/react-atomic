import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import Div from "../styled/Div";
import Colors from "../../colors/colors";

const _GWSocialItem = styled(Div)({

});

const GWSocialItem = ({ social, bgColor }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("https://facebook.com")
    }

    return (
        <_GWSocialItem onClick={copyToClipboard} sx={{ background: Colors[bgColor] || bgColor, padding: "31px", borderRadius: "8px", width: "fit-content", cursor: "pointer" }}>
            <ReactSVG src={social} />
        </_GWSocialItem>
    )
}

GWSocialItem.propType = {
    bgColor: PropTypes.string,
    social: PropTypes.string
};

export default GWSocialItem;