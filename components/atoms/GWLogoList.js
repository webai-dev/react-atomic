import PropTypes from "prop-types";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";

const GWInfoList = ({ logos }) => {
    return (
        <FlexContainer
            className="providers"
            sx={{
                flexDirection: "row",
                aliginItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                "@media (max-width: 700px)": {
                    flexWrap: "wrap",
                    "& > div:first-of-type": {
                        flexBasis: "100%",
                        backgroundSize: "200px",
                    },
                    "& > div": {
                        flexBasis: "50%",
                        backgroundSize: "200px",
                    }
                }
            }}
        >
            {logos?.sort(() => 0.5 - Math.random()).slice(0, 5).map((logo, i) => (
                <Div
                    key={i}
                    sx={{
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${logo})`,
                        height: 56,
                        width: 220,
                    }}
                >
                </Div>
            ))}
        </FlexContainer>
    )
};

GWInfoList.propTypes = {
    logos: PropTypes.arrayOf(PropTypes.string),
}

export default GWInfoList;
