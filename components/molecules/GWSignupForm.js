import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import GWInput from "../atoms/GWInput";
import GWButton from "../atoms/GWButton";
import FlexContainer from "../styled/FlexContainer";
import Div from "../styled/Div";

const GWSignupForm = ({
    btnColor,
    btnBgColor,
    inputColor,
    inputBgColor,
    inputBorder,
    inputVariant,
    onInputChange,
    onClickSend,
}) => {
    const isSmallScreen = useMediaQuery("(max-width:500px)");

    const getBoxShadow = () => {
        if (inputVariant === "emphasis") {
            return "0px 8px 10px -6px rgba(0, 0, 0, 0.1)";
        } else if (inputVariant === "plain") {
            return "none";
        }
    };
    const boxShadow = getBoxShadow();

    return (
        <FlexContainer>
            <Div>
                <GWInput
                    width={isSmallScreen ? "100%" : "330px"}
                    color={inputColor}
                    bgColor={inputBgColor}
                    placeholder="youremail@example.com"
                    border={inputBorder}
                    borderRadius="8px"
                    boxShadow={boxShadow}
                    onChange={onInputChange}
                />
            </Div>
            <Div sx={{ minWidth: "96px", marginLeft: "12px" }}>
                <GWButton
                    text="sign_up"
                    color={btnColor}
                    bgColor={btnBgColor}
                    onClick={onClickSend}
                    location="common"
                />
            </Div>
        </FlexContainer>
    );
};

GWSignupForm.propTypes = {
    btnColor: PropTypes.string,
    btnBgColor: PropTypes.string,
    inputColor: PropTypes.string,
    inputBgColor: PropTypes.string,
    inputBorder: PropTypes.string,
    inputVariant: PropTypes.oneOf(["emphasis", "plain"]),
    onInputChange: PropTypes.func,
    onClickSend: PropTypes.func,
};

export default GWSignupForm;
