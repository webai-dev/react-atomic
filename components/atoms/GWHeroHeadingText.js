import { Typography } from "@mui/material";
import React from 'react';
import PropTypes from "prop-types";
import localFont from "@next/font/local";
import Colors from "../../colors/colors";

const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Black.otf' })

const GWHeroHeadingText = ({ children, fontSize, sx, screenWidth = 1200, variant="h1" }) => {

    return (
        <Typography variant={variant} sx={{
            fontFamily: avenir.style,
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: fontSize || "72px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            letterSpacing: "-1px",
            color: Colors.navy,
            marginTop: "10px",
            lineHeight:"68px",
            padding: "0px 24px 0px 24px",
            "@media (max-width: 700px)": {
                marginTop: "0px",
                fontSize: "36px",
                letterSpacing: "-0.01em",
                lineHeight: "1.3em"
            },
            ...sx
        }}
        >
            {children}
        </Typography>
    )
}

GWHeroHeadingText.propTypes = {
    children: PropTypes.node
}

export default GWHeroHeadingText;