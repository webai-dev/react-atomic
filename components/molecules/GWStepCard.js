import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import localFont from "@next/font/local";
import { styled } from "@mui/system";
import { Inter } from "@next/font/google";
import { useTranslation } from "next-i18next";
import Colors from "../../colors/colors";
import GWCard from "../atoms/GWCard"
import FlexContainer from "../styled/FlexContainer";
import GWAvenirFont from "../atoms/GWAvenirFont";
import Div from "../styled/Div";

const inter = Inter({ subsets: ["latin"] })
const avenir = localFont({ src: "../../fonts/avenir_ff/AvenirLTStd-Book.otf" })
const _GWTitle = styled(Typography)({
    fontStyle: "normal",
    fontFamily: avenir.style,
    // fontWeight: 800,
    fontSize: "22px",
    lineHeight: "28px",
    marginBottom: "8px",
    // color: Colors.grey500
})
const _GWText = styled(Typography)({
    fontStyle: "normal",
    fontFamily: inter.style,
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    color: Colors.grey400
})
const GWStepCard = ({ selected, stepNumber, title, description, onClick }) => {
    const { t } = useTranslation("home");
    const isDesktop = useMediaQuery("(min-width:1200px)");

    const handleOnClick = () => {
        if (onClick && typeof onClick === "function") {
            onClick(stepNumber);
        }
    }

    return (
        <Div onClick={handleOnClick} sx={{ cursor: "pointer" }}>
            <GWCard variant={selected ? "emphasis" : "plain"} background={selected ? "white" : "transparent"} borderColor={selected ? "rgba(127, 129, 140, 0.18)" : "transparent"} padding={isDesktop ? "40px 32px" : "24px"} sx={{ marginBottom: isDesktop ? "12px" : "24px", width: "100%" }}
                    borderRadius="25px">
                <FlexContainer className="col-md-12 mx-auto" style={{ gap: "20px", alignItems: "start", justifyContent: "start" }}>
                    <FlexContainer className="" sx={{ background: selected ? Colors.purple : Colors.grey200, width: "32px", height: "32px", borderRadius: "50%", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                        <GWAvenirFont fontSize="22px" fontWeight="800" color={selected ? "white" : "grey300"}>{stepNumber}</GWAvenirFont>
                    </FlexContainer>
                    <FlexContainer className="col-md-11" style={{ flexDirection: "column" }}>
                        <_GWTitle fontWeight={selected ? "800" : "400"} color={selected ? Colors.grey500 : Colors.grey400}>{t(title)}</_GWTitle>
                        {selected && <_GWText>{t(description)}</_GWText>}
                    </FlexContainer>
                </FlexContainer>
            </GWCard>
        </Div>
    );
};

GWStepCard.propTypes = {
    selected: PropTypes.bool,
    stepNumber: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func
};

export default GWStepCard
