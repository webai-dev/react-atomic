import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import localFont from "@next/font/local";
import { useTranslation } from "next-i18next";
import { PropTypes } from "prop-types";
import Link from "./GWLink";
import { ReactSVG } from "react-svg";
import Colors from "../../colors/colors";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";

const _GWHeaderNavItemMobile = styled(Paper)({
    boxShadow: "none",
    cursor: "pointer",
    borderRadius: "0px",
    flex: 1,
    letterSpacing: "-0.01em",
    lineHeight: "33px"
});

const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })

const GWHeaderNavItemMobile = ({ text, title, img = null, symbol, color, link, last }) => {
    const { t } = useTranslation("common")

    return (
        <_GWHeaderNavItemMobile sx={{borderBottom: last ? "0px" : "1px solid rgba(191, 192, 197, 0.5)"}}>
            <FlexContainer sx={{justifyContent: "flex-start",  }}>
                <FlexContainer sx={{ background: Colors[color] || color, width: "32px", height: "32px", borderRadius: "50%", margin: "0px 16px 16px 0", alignItems: "center", justifySelf: "flex-start", flex: "none", order: 0, flexGrow: 0 }}>
                    {
                        img ?
                            <ReactSVG src={img} />
                            :
                            <Typography sx={{ fontWeight: 800, color: color ? Colors.white : "black", fontSize: "13.3333px" }} className={avenir.className}>{symbol}</Typography>
                    }
                </FlexContainer>
                <FlexContainer sx={{ justifyContent: "space-between", width: "100%" }}>
                    <FlexContainer sx={{ flexDirection: "column" }}>
                        <Div>
                            <Typography sx={{ fontWeight: 400, color: Colors.navy, fontSize: "24px", fontStyle: "normal" }} className={avenir.className}>{t(title)}</Typography>
                        </Div>
                        <Div sx={{ marginTop: "8px", marginBottom: "24px" }}>
                            <Typography sx={{ fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: Colors.grey400 }}>{t(text)}</Typography>
                        </Div>
                    </FlexContainer>
                    <FlexContainer>
                        <Link href={link}>
                            <ReactSVG src="/assets/images/svg/arrow-right-line.svg" />
                        </Link>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </_GWHeaderNavItemMobile>
    )
}

GWHeaderNavItemMobile.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    color: PropTypes.string,
    symbol: PropTypes.string,
    location: PropTypes.string
}

export default GWHeaderNavItemMobile;
