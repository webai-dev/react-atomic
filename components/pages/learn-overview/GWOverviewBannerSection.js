import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Inter } from "@next/font/google";
import Div from "../../styled/Div";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import { useMediaQuery } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const GWOverviewBannerSection = () => {
    const { t } = useTranslation("learn-overview");
    const mobile = useMediaQuery("(max-width:1200px)");
    return (
        <Div sx={{ textAlign: "center", position: "relative", zIndex: 0 }}>
            <GWAvenirFont tag="h2" sx={{ textAlign: "center", lineHeight: mobile ? "auto" : "88px", maxWidth: "1162px", letterSpacing: mobile ? "-1%" : "-1px" }} variant="black" fontWeight="600" fontSize={mobile ? "46px" : "72px"}>
                {t("banner_title")}
            </GWAvenirFont>
            <Typography variant="h3" className={inter.className} sx={{ color: "#323254", fontSize: "18px", lineHeight: "28px", margin: "0 auto", marginTop: "24px", maxWidth: "620px" }}>
                {t("banner_text")}
            </Typography>
        </Div>
    );
};

export default GWOverviewBannerSection;
