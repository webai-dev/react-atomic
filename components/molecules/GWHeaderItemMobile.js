import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import localFont from "@next/font/local";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import { useColorMode } from "../../contexts/ColorModeContext";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";

const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })

const _GWHeaderItemMobile = styled(FlexContainer)({
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    gap: "24px",
    justifyContent: "space-between",
    cursor: "pointer"
})

const _GWHeaderItemMobileText = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "33px",
    letterSpacing: "-0.01em",
})

const GWHeaderItemMobile = ({ title, last, children, onClick, active }) => {
    const { t } = useTranslation("common")
    const { mode } = useColorMode();

    return (
        <Div>
            <_GWHeaderItemMobile onClick={onClick} sx={{ borderBottom: last ? "0" : "1px solid rgba(191, 192, 197, 0.5)", paddingBottom: "24px" }}>
                <FlexContainer>
                    <_GWHeaderItemMobileText className={avenir.className}>{t(title)}</_GWHeaderItemMobileText>
                </FlexContainer>
                {
                    (children || children?.props?.children?.length === 0) && <FlexContainer>
                        {mode === "light" ? <ReactSVG src="/assets/images/svg/arrow-right-line.svg"/> : <ReactSVG src="/assets/images/svg/arrow-right-line-white.svg"/>}
                    </FlexContainer>
                }
            </_GWHeaderItemMobile>
            <FlexContainer>
                {children}
            </FlexContainer>
        </Div>

    )
}

export default GWHeaderItemMobile;
