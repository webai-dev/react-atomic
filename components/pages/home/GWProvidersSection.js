import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";
import FlexContainer from "../../styled/FlexContainer";
import GWLogoList from "../../atoms/GWLogoList";

const GWProvidersSection = () => {
    const { t } = useTranslation("home")

    const logoList = [
        "/assets/images/png/jp-morgan.PNG",
        "/assets/images/png/barclays.PNG",
        "/assets/images/png/hsbc.PNG",
        "/assets/images/png/ubs.PNG",
        "/assets/images/png/goldman-sachs.PNG"
    ];

    return (
        <FlexContainer sx={{ alignItems: "center", flexDirection: "column" }}>
            <Typography sx={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "32px",
                letterSpacing: "0.06em",
                color: "#7F818C",
                textAlign: "center",
                padding: "initial",

                "@media (max-width: 700px)": {
                    fontSize: "13px",
                    padding: "0px 56px"
                }
            }}>
                {t("we_get_you_the_best")}<sup>*1</sup>
            </Typography>
            <FlexContainer className="row" sx={{ marginBottom: "74px", paddingTop: "20px" }}>
                <GWLogoList logos={logoList} />
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWProvidersSection;
