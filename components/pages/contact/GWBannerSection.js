import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import { Inter } from "@next/font/google";
import { Typography } from "@mui/material";
import Div from "../../styled/Div";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import FlexContainer from "../../styled/FlexContainer";
import GWContactCard from "../../molecules/GWContactCard";
import GWAddressCard from "../../molecules/GWAddressCard";
import GWChatNowSection from "./GWChatNowSection";

const inter = Inter({ subsets: ["latin"] });

const GWBannerSection = () => {
    const { t } = useTranslation("contact");
    const isMobile = useMediaQuery("(max-width:1200px)");

    return (
        <Div
            sx={{
                backgroundImage: `url(/assets/images/png/full-hero-bg.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "120px 24px",
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
                        marginTop: !isMobile ? "68px" : "20px",
                        marginBottom: "24px",
                        textAlign: "center",
                    }}
                >
                    {t("content_title")}
                </GWAvenirFont>
                <Typography
                    className={inter.className}
                    sx={{
                        textAlign: "center",
                        maxWidth: "640px",
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#323254",
                        fontWeight: "400",
                        marginBottom: "120px",
                    }}
                >
                    {t("content_sub_title")}
                </Typography>
            </FlexContainer>

            <FlexContainer
                sx={{
                    margin: "0px auto",
                    flexDirection: "column",
                    maxWidth: "1060px",
                    alignItems: "left",
                }}
            >
                <GWAvenirFont
                    tag="h3"
                    color={Colors.grey500}
                    fontSize="24px"
                    fontWeight="800"
                    variant="black"
                    sx={{
                        lineHeight: "24px",
                        textAlign: "left",
                        marginBottom: "24px",
                    }}
                >
                    {t("transaction_fees")}
                </GWAvenirFont>

                <GWChatNowSection />

                <GWContactCard
                    title={t("get_in_contact")}
                    phone="0123-4567-8910"
                    email="hello@goldwise.com"
                />

                <GWAvenirFont
                    tag="h3"
                    color={Colors.grey500}
                    fontSize="24px"
                    fontWeight="800"
                    variant="black"
                    sx={{
                        lineHeight: "24px",
                        textAlign: "left",
                        marginBottom: "24px",
                        marginTop: "72px",
                    }}
                >
                    {t("our_addresses")}
                </GWAvenirFont>

                <GWAddressCard
                    title={t("first_address_title")}
                    country={t("first_address_country")}
                    street="Mercatorstrasse 1a / North47051"
                    city="Duisburg"
                />
                <GWAddressCard
                    title={t("second_address_title")}
                    country={t("second_address_country")}
                    street="Mercatorstrasse 1a / North47051"
                    city="Duisburg"
                    styleSx={{ marginTop: "24px" }}
                />
            </FlexContainer>
        </Div>
    );
};

export default GWBannerSection;
