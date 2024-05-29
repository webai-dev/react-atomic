import { Box } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import Colors from "../../colors/colors";
import Div from "../styled/Div";

const _GWStarScore = styled(Box)({
    display: "flex",
    gap: "2px"
});

const GWStarScore = ({ score }) => {
    return (
        <_GWStarScore>
            {
                ([...Array(5)]).map((_, index) => (
                    <Div key={index} sx={{ padding: "0px 3.61px 4.05px 3.59px", background: index < score ? "#00B67A" : Colors.grey300 }}>
                        <ReactSVG src="/assets/images/svg/star-shape.svg" style={{ padding: 0, margin: 0 }} />
                    </Div>
                ))
            }
        </_GWStarScore>
    )
};

GWStarScore.propTypes = {
    score: PropTypes.number
}

export default GWStarScore;