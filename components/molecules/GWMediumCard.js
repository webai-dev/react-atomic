import { useTranslation } from "next-i18next";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import localFont from "@next/font/local";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Colors from "../../colors/colors";
import GWCard from "../atoms/GWCard";
import GWAvenirFont from "../atoms/GWAvenirFont";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";

const avenir = localFont({ src: "../../fonts/avenir_ff/AvenirLTStd-Book.otf" })
const avenirBlack = localFont({ src: "../../fonts/avenir_ff/AvenirLTStd-Black.otf" })

const _Grid = styled("div")((isDesktop) => ({
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    "& .MuiPaper-root": {
        marginTop: 12,
        marginRight: 8,
        padding: "4px 12px",
        "& .MuiTypography-root": {
            textTransform: "capitalize"
        }
    }
}))
const _GWTitle = styled(Typography)({
    fontStyle: "normal",
    fontFamily: avenir.style,
    fontWeight: 800,
    fontSize: "22px",
    lineHeight: "28px",
    marginBottom: "24px",
    color: Colors.grey500
})

const GWMediumCard = ({ title, items }) => {
    const { t } = useTranslation("home");

    const isDesktop = useMediaQuery("(min-width:1200px)");

    return (
        <GWCard variant="emphasis" padding={isDesktop ? "40px 32px" : "24px"} borderRadius="25px" sx={{ marginBottom: isDesktop ? "" : "24px", display: "flex", flexDirection: "column" }}>
            <_GWTitle className={avenirBlack.className}>{t(title)}</_GWTitle>
            <_Grid isDesktop={isDesktop} sx={{ flexGrow: "1" }}>
                {items?.map((item, index) => (
                    <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center", marginTop: "12px" }} key={index}>
                        <FlexContainer sx={{ background: Colors[ item.toLowerCase() ], width: "24px", height: "24px", borderRadius: "50%", marginRight: "8px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                            <GWAvenirFont fontSize="10px" fontWeight="800" color="white">{item.slice(0, 2)}</GWAvenirFont>
                        </FlexContainer> <GWAvenirFont sx={{ fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: Colors.grey400 }}>{item}</GWAvenirFont>
                    </FlexContainer>
                ))}
            </_Grid>
            <Div sx={{ marginTop: isDesktop ? "40px" : "24px" }}>
                <GWAvenirFont fontSize="18px" fontWeight="400" color="purple">
                    More coming soon
                </GWAvenirFont>
            </Div>
        </GWCard>
    )
}

GWMediumCard.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
}

export default GWMediumCard
