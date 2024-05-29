import { useTranslation } from "next-i18next";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import Link from "../atoms/GWLink";
import GWCard from "../atoms/GWCard";
import PropTypes from "prop-types";
import Colors from "../../colors/colors";
import GWAvenirFont from "../atoms/GWAvenirFont";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";


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

const GWMetalCard = ({ symbol, name, detailLink, onClick }) => {
    const { t } = useTranslation("home");

    const isDesktop = useMediaQuery("(min-width:1200px)");

    const [color, setColor] = useState("");

    useEffect(() => {
        switch (symbol.toLowerCase()) {
            case "au":
                setColor(Colors.gold);
                break;
            case "ag":
                setColor(Colors.silver);
                break;
            case "pt":
                setColor(Colors.platinum);
                break;
            case "pd":
                setColor(Colors.palladium);
                break;
        }
    }, [symbol]);

    const handleClick = (e) => {
        if (onClick && typeof onClick === "function") {
            onClick(e);
        }
    };

    return (
        <GWCard variant="emphasis" padding={isDesktop ? "40px 32px" : "24px"} sx={{ marginBottom: isDesktop ? "" : "24px" }} borderRadius="25px">
            <_Grid isDesktop={isDesktop} className="skills">
                <FlexContainer sx={{ justifyContent: "flex-start", marginTop: "12px", flexDirection: isDesktop ? "column" : "row" }}>
                    <FlexContainer sx={{ background: color, width: "48px", height: "48px", borderRadius: "50%", marginBottom: "8px", marginRight: isDesktop ? "0" : "12px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                        <GWAvenirFont fontSize="18px" fontWeight="800" color="white">{symbol.slice(0, 2)}</GWAvenirFont>
                    </FlexContainer>
                    <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center" }}>
                        <GWAvenirFont sx={{ fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: Colors.navy }}>{name} <span style={{ color: Colors.grey300 }}>({symbol})</span></GWAvenirFont>
                    </FlexContainer>
                </FlexContainer>
                <Div sx={{ marginTop: isDesktop ? "24px" : "16px" }}>
                    {detailLink && detailLink.length ?
                        <Link href={detailLink} style={{ textDecoration: "none" }}>
                            <GWAvenirFont fontSize="18px" fontWeight="400" color="purple">
                                View product
                            </GWAvenirFont>
                        </Link> : <GWAvenirFont fontSize="18px" fontWeight="400" color="purple" onClick={handleClick}>
                            View product
                        </GWAvenirFont>}
                </Div>
            </_Grid>
        </GWCard>
    )
}

GWMetalCard.propTypes = {
    symbol: PropTypes.string,
    name: PropTypes.string,
    detailLink: PropTypes.string,
    onClick: PropTypes.func,
}

export default GWMetalCard
