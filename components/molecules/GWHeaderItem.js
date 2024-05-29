import { Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import Colors from "../../colors/colors";
import { useColorMode } from "../../contexts/ColorModeContext";
import Div from "../styled/Div";
import Link from "../atoms/GWLink";

const _GWHeaderItem = styled(Div)({
    display: "flex",
    alignItems: "center",
    width: "auto",
    cursor: "pointer",
    marginBottom: "8px"
})

const _ChildrenContainer = styled(Div)({
    position: "absolute",
    display: "flex",
    top: "58px",
    left: 0
})

const _Underline = styled(Div)({
    position: "relative",
    height: "2px",
    width: "auto",
    zIndex: 10
})

const _NavText = styled(Typography)({
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "24px",
})

const GWHeaderItem = ({ link, text, expandable, expanded, location = "home", children, onClick }) => {
    const { t } = useTranslation(location);
    const [hover, setHover] = useState(false);
    const { mode } = useColorMode();

    return (
        <>
            {
                link ?
                    <Link href={link}>
                        <Div><_NavText sx={{color: mode === "light" ? Colors.navy : Colors.white}}>{t(`${text}`)}</_NavText></Div>
                    </Link>
                    :
                    <>
                        <Div sx={{ flexDirection: "column" }}>
                            <_GWHeaderItem onClick={onClick} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                                <Div><_NavText sx={{color: mode === "light" ? Colors.navy : Colors.white}}>{t(`${text}`)}</_NavText></Div>
                                {expandable && <Div>{expanded ? <ReactSVG src="/assets/images/svg/arrow-drop-up-fill.svg" /> : <ReactSVG src="/assets/images/svg/arrow-drop-down-fill.svg" />}</Div>}
                            </_GWHeaderItem>
                            {hover && <_Underline sx={{background: mode === "light" ? Colors.navy : Colors.white}}/>}
                        </Div>
                        {expanded && <_ChildrenContainer>{children}</_ChildrenContainer>}
                    </>
            }
        </>
    )
}

export default GWHeaderItem;
