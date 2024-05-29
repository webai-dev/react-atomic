import { Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import { useTranslation } from "next-i18next"
import { useColorMode } from "../../contexts/ColorModeContext";
import Link from "./GWLink";
import Colors from "../../colors/colors";
import FlexContainer from "../styled/FlexContainer";
import Div from "../styled/Div";
import { useHeaderControl } from "../../contexts/HeaderControlContext";

const _GWHeaderNavItem = styled(Paper)({
    boxShadow: "none",
    cursor: "pointer",
    borderRadius: "8px",
    margin: "12px",
    flex: 1,
})

const GWHeaderNavItemBody = ({ text, title, img = null, symbol, color, location = "home", t }) => {
    const { mode } = useColorMode();

    return (
        <FlexContainer>
            <FlexContainer sx={{ background: Colors[color] || color, width: "48px", height: "48px", borderRadius: "50%", margin: "12px 16px 32px 12px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                {
                    img ?
                        <ReactSVG src={img} />
                        :
                        <Typography sx={{ fontWeight: 800, color: mode === "light" ? ( ![Colors.grey100, Colors.grey200].includes(color) ? Colors.white : Colors.navy) : Colors.white }}>{symbol}</Typography>
                }
            </FlexContainer>
            <Div sx={{ margin: "12px 12px 12px 0" }}>
                <Typography sx={{ fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: mode === "light" ? Colors.grey500 : Colors.white }}>{t(`${location}:${title}`)}</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: mode === "light" ? Colors.grey400 : Colors.white }}>{t(`${location}:${text}`)}</Typography>
            </Div>
        </FlexContainer>
    )
}

const GWHeaderNavItem = ({ text, title, img = null, symbol, color, location = "home", link }) => {
    const { t } = useTranslation();
    const props = { text, title, img, symbol, color, location, link, t };
    const { mode } = useColorMode();
    const { setExpandedIndex } = useHeaderControl()

    return (
        <_GWHeaderNavItem
            sx={{
                ":hover": {
                    background: mode === "light" ? "#F5F5F6" : "#010410"
                }
            }}
            className="col">
            {
                link ?
                    <Link href={link} onClick={() => setExpandedIndex(-1)}>
                        <GWHeaderNavItemBody {...props} />
                    </Link>
                    :
                    <GWHeaderNavItemBody {...props} />
            }
        </_GWHeaderNavItem>
    )
}

GWHeaderNavItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    color: PropTypes.string,
    symbol: PropTypes.string,
    location: PropTypes.string
}

export default GWHeaderNavItem;
