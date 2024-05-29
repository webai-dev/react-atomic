import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import { Inter } from "@next/font/google";
import { Typography } from "@mui/material";
import Div from "../../styled/Div";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import FlexContainer from "../../styled/FlexContainer";
import GWSignupForm from "../../molecules/GWSignupForm";

const inter = Inter({ subsets: ["latin"] });

const GWBannerSection = () => {
    const { t } = useTranslation("invest-in-goldwise");
    const isMobile = useMediaQuery("(max-width:1200px)");

    return (
        <Div
            sx={{
                backgroundImage: `url(/assets/images/png/full-hero-bg.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "144px 24px 120px 24px",
            }}
        >
            <FlexContainer
                sx={{
                    margin: "0 auto",
                    flexDirection: "column",
                    maxWidth: "840px",
                    alignItems: "center",
                }}
            >
                <GWAvenirFont
                    tag="h1"
                    color={Colors.navy}
                    fontSize={!isMobile ? "72px" : "44px"}
                    variant="black"
                    sx={{
                        lineHeight: !isMobile ? "88px" : "50px",
                        letterSpacing: "-1px",
                        marginBottom: "24px",
                        textAlign: "center",
                    }}
                >
                    {t("content_title")}
                </GWAvenirFont>
                <Typography
                    className={inter.className}
                    variant="h3"
                    sx={{
                        textAlign: "center",
                        maxWidth: "640px",
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#323254",
                        fontWeight: "400",
                        marginBottom: "72px",
                    }}
                >
                    {t("content_sub_title")}
                </Typography>

                <GWSignupForm  
                    btnColor="white"
                    btnBgColor="#665DFF"
                    inputColor="#BFC0C5"
                    inputBgColor="white"
                    inputBorder="1px solid rgba(127, 129, 140, 0.18)"
                    inputVariant="emphasis"
                />
            </FlexContainer>
        </Div>
    );
};

export default GWBannerSection;
