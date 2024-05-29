import Colors from "../../colors/colors";
import Div from "../styled/Div";

const GWSpinner = ({ width = "80px", height = "80px", color = Colors.navy }) => {
    return (<Div sx={{
        display: "inline-block",
        width,
        height,
        "&:after": {
            content: "\"\"",
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: `solid 6px ${color}`,
            borderColor: `${color} transparent ${color} transparent`,
            animation: "lds-dual-ring 1.2s linear infinite"
        }
    }}></Div>)
}

export default GWSpinner;
