import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import Colors from "../../colors/colors";
import { useColorMode } from "../../contexts/ColorModeContext";
import FlexContainer from "../styled/FlexContainer";

const _GWHeaderNav = styled(Paper)({
    boxShadow: "none",
    cursor: "pointer",
    justifyContent: "space-between",
    borderRadius: "0px",
    display: "flex",
    padding: "0 32px",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyItems: "center"
})

const _FlexContainerShadowed = styled(FlexContainer)({
    bgcolor: "background.default",
    boxShadow: "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
    width: "100vw"
})

const _FooterText = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#655CFF",
    textAlign: "center"
})

const Footer = ({location, footer}) => {
    const { t } = useTranslation();

    return (
        <FlexContainer sx={{ background: "#EBEBFF", justifyContent: "center", alignItems: "flex-start", padding: "18px 80px" }}>
            <_FooterText>{t(`${location}:${footer}`)}</_FooterText>
        </FlexContainer>
    )
}

const GWHeaderNav = ({ footer, children, location = "home" }) => {
    const { mode } = useColorMode();

    return (
        <_FlexContainerShadowed sx={{ flexDirection: "column", background: mode === "light" ? Colors.white : "#0e1026" }}>
            <FlexContainer sx={{margin: "0"}}>
                <_GWHeaderNav className="row" sx={{padding: "32px 120px", margin: "0 32px"}}>
                    {children}
                </_GWHeaderNav>
            </FlexContainer>
            {footer && <Footer footer={footer} location={location} />}
        </_FlexContainerShadowed>
    )
}

export default GWHeaderNav;
