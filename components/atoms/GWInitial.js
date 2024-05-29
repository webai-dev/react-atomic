import { styled } from "@mui/system";
import PropTypes from "prop-types";
import Colors from "../../colors/colors";
import FlexContainer from "../styled/FlexContainer";
import GWAvenirFont from "./GWAvenirFont";

const _GWInitial = styled(FlexContainer)(({ width, height }) => ({
    width,
    height,
    alignItems: "center",
    flex: "none",
    order: 0,
    flexGrow: 0
}))

const GWInitial = ({ symbol, color = "white", width = "48px", height = "48px", bgColor, borderRadius = "50%" }) => {
    return (
        <_GWInitial width={width} height={height} sx={{ background: Colors[bgColor] || bgColor, color: Colors[color] || color, borderRadius }}>
            <GWAvenirFont variant="black" fontWeight="800" color={color} fontSize="18.8571px">{symbol}</GWAvenirFont>
        </_GWInitial>
    )
}

GWInitial.propTypes = {
    symbol: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    borderRadius: PropTypes.string
}

export default GWInitial;