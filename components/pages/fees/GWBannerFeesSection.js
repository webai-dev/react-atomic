import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Inter } from "@next/font/google";
import Div from "../../styled/Div";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import { useMediaQuery } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const GWBannerFeesSection = () => {
    const { t } = useTranslation("fees");
    const mobile = useMediaQuery("(max-width:1200px)");

    return (
        <Div sx={{ textAlign: "center", position: "relative", zIndex: 0 }}>
            <GWAvenirFont tag="h1" variant="black" fontWeight="600" fontSize={mobile ? "46px" : "72px"}>
                {t("banner_title")}
            </GWAvenirFont>
            <Typography className={inter.className} sx={{ color: "#323254", fontSize: "18px", lineHeight: "28px", marginTop: mobile ? "16px" : "24px" }}>
                {t("banner_description")}
            </Typography>
        </Div>
    );
};

export default GWBannerFeesSection;
