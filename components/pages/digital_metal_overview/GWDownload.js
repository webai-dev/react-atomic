import { useTranslation } from "next-i18next";
import { Typography } from "@mui/material";
import Div from "../../styled/Div";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import FlexContainer from "../../styled/FlexContainer";
import React from "react";

const GWCompare = () => {
    const { t } = useTranslation(["digital_metal_overview", "fees"]);

    return (<FlexContainer sx={{
        backgroundImage: `url(/assets/images/png/section.png)`, backgroundPosition: "center", backgroundSize: "cover", flexDirection: "column", backgroundRepeat: "no-repeat", "@media (max-width: 700px)": {
            backgroundImage: `url(/assets/images/png/download_bg.png)`,
        }
    }}>
        <FlexContainer
            sx={{
                paddingTop: "128px", paddingBottom: "128px", flexDirection: "column", "@media (max-width: 700px)": {
                    padding: "56px 24px",
                }
            }}>
            <Div style={{ flex: 1, textAlign: "center" }}>
                <GWAvenirFont tag="h2" fontSize="40px" fontWeight="500" color="white">{t("download_title")}</GWAvenirFont>
                <FlexContainer className="row">
                    <Div className="col-md-9 mx-auto">
                        <Typography sx={{ marginTop: "24px", color: Colors.white }}>{t("download_description")}</Typography>
                    </Div>
                </FlexContainer>
            </Div>
            <FlexContainer sx={{ gap: "24px", marginTop: "40px" }}>
                <Div sx={{ width: "120px", height: "40px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/images/png/download_appstore.png)" }} />
                <Div sx={{ width: "135px", height: "40px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/images/png/download_google_play.png)" }} />
            </FlexContainer>
        </FlexContainer>
        <Div sx={{ margin: "0 auto", width: "577px", height: "393px", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: "url(/assets/images/png/blank_device.png)" }} />
    </FlexContainer>)
}

export default GWCompare;
