import { Typography } from "@mui/material";
import React from "react";
import { ReactSVG } from "react-svg";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWCard from "../../atoms/GWCard";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWDescription = () => {
    return (
        <Div sx={{ padding: "40px 0" }}>
            <Div sx={{ maxWidth: "1060px", margin: "0 auto" }}>
                <GWCard borderRadius="12px" variant="plain">
                    <FlexContainer sx={{justifyContent: "left", gap: "12px"}}>
                        <ReactSVG src="/assets/images/svg/info.svg" />
                        <Typography sx={{
                            fontSize: 18, color: Colors.grey400,
                            "@media (max-width: 700px)": {
                                marginX: "24px"
                            }
                        }}>Current market time: <strong>Extended Market Hours (01 JAN 2022, 09:45:34 MEZ)</strong>
                            <br />Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in.</Typography>
                    </FlexContainer>
                </GWCard>
                <GWAvenirFont tag="h4" sx={{ marginTop: "52px", marginBottom: "24px" }} fontWeight="700">Description:</GWAvenirFont>
                <GWCard borderRadius="12px" variant="plain">
                    <Typography sx={{
                        fontSize: 18, color: Colors.grey400,
                        "@media (max-width: 700px)": {
                            marginX: "24px"
                        }
                    }}>Unlike many bullion dealers, we are regulated by the FCA in the UK and the Central Bank of Lithuania in the EU. This means that our policies and operations need to meet strict financial services requirements giving you the confidence that we operate professionally, with you first in mind</Typography>
                </GWCard>
            </Div>
        </Div>
    )
}
export default GWDescription;
