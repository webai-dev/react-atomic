import { useState } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ReactSVG } from "react-svg";
import localFont from "@next/font/local";
import { useTranslation } from "next-i18next";
import FlexContainer from "../styled/FlexContainer";
import Colors from "../../colors/colors";
import Div from "../styled/Div";

const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })

const _GWHeaderNavMobile = styled(FlexContainer)({
    flexDirection: "column",
    width: "100%"
})

const _GWHeaderNavMobileText = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "-0.01em"
})

const GWHeaderNavMobile = ({ children, isHeaderOpen, setIsHeaderClose, isNavComponentOpen, setIsNavComponentOpen }) => {
    // const [isNavComponentOpen, setIsNavComponentOpen] = useState(false);
    const { t } = useTranslation("common")

    const toggleHeader = () => setIsHeaderClose(!isHeaderOpen);
    const toggleNavComponent = () => setIsNavComponentOpen(!isNavComponentOpen);

    return (
        <_GWHeaderNavMobile sx={{ display: isHeaderOpen ? "flex" : "none", position: "absolute", background: Colors.white, top: "0" }}>
            <FlexContainer sx={{ justifyContent: "space-between", borderBottom: "1px solid rgba(57, 60, 63, 0.04)" }}>
                <FlexContainer sx={{ margin: "24px 0 24px 32px", alignContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/arrow-up-line.svg" onClick={toggleHeader} style={{ marginRight: "8px", cursor: "pointer" }} />
                    <FlexContainer sx={{ justifyContent: "start", alignItems: "end" }}>
                        <_GWHeaderNavMobileText className={avenir.className} sx={{ color: Colors.grey400 }}>{t('overview')}</_GWHeaderNavMobileText>
                    </FlexContainer>
                </FlexContainer>
                <ReactSVG src="/assets/images/svg/close-fill.svg" onClick={toggleNavComponent} style={{ margin: "24px 24px 24px 0", cursor: "pointer" }} />
            </FlexContainer>
            <FlexContainer sx={{ flexDirection: "column", padding: "24px 24px 0 24px", gap: "24px" }}>
                {children}
            </FlexContainer>
        </_GWHeaderNavMobile>
    )
};

export default GWHeaderNavMobile;