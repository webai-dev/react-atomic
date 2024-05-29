import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { Roboto } from "@next/font/google"
import Colors from "../../colors/colors";

const roboto = Roboto({ subsets: ['latin'], style: "normal", weight: "400" })

const _GWInput = styled("input")(({color}) => ({
    padding: "10px 20px",
    fontFamily: roboto.style,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    "::-webkit-input-placeholder": {
        color
    },
    ":-moz-placeholder": {
        color
    },
    "::placeholder": {
        color
    }
}));

const GWInput = ({ onChange, placeholder, bgColor, color, width, border, borderRadius, boxShadow }) => {
    return (
        <_GWInput 
            className="gw-input" 
            color={color} 
            onChange={onChange} 
            placeholder={placeholder} 
            sx={{ 
                width: width || "300px", 
                background: Colors[bgColor] || bgColor, 
                color: Colors[color] || color, 
                border: border ?? "none", 
                borderRadius: borderRadius ?? "10px",
                boxShadow: boxShadow ?? "none" 
            }} />
    )
};

GWInput.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    boxShadow: PropTypes.string
}

export default GWInput;