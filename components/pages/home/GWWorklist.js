import { Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import { useTranslation } from "next-i18next";
import React from 'react';
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWSignupForm from "../../../components/molecules/GWSignupForm";

const inter = Inter({ subsets: ['latin'] })

const GWWorklistSection = () => {
    const { t } = useTranslation("home")

    return (
        <FlexContainer sx={{
            backgroundImage: `url(/assets/images/png/section.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            "@media (max-width: 700px)": {
                backgroundImage: `url(/assets/images/png/mobile-waitlist-bg.png)`,
            }
        }}>
            <FlexContainer
                sx={{
                    paddingTop: "128px",
                    paddingBottom: "128px",
                    flexDirection: "column",
                    "@media (max-width: 700px)": {
                        padding: "56px 24px",
                    }
                }}>
                <Div style={{ flex: 1, textAlign: "center" }}>
                    <GWAvenirFont tag="h3" fontSize="40px" fontWeight="500" color="white" >{t('join_our_waitlist')}</GWAvenirFont>
                    <Typography 
                        sx={{ 
                            marginTop: "24px", 
                            color: Colors.white, 
                            maxWidth: "500px",
                            marginBottom: "42px",
                            fontSize: "18px",
                            lineHeight: "32px"
                        }} 
                        className={inter.className}
                    >
                        {t('join_our_waitlist_info')}
                    </Typography>
                    <GWSignupForm 
                        btnColor="purple" 
                        btnBgColor="white" 
                        inputColor="white"
                        inputBgColor="rgba(255, 255, 255, 0.3)"
                        inputVariant="plain"
                    />
                </Div>
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWWorklistSection;