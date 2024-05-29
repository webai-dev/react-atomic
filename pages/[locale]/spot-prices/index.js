import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import PublicLayout from "../../publicLayout/index";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Div from "../../../components/styled/Div";
import Colors from "../../../colors/colors";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import GWTitleSection from "../../../components/pages/spot-prices/GWTitleSection";
import GWFaqSection from "../../../components/pages/spot-prices/GWFaqSection";
import GWMarketBestPriceSection from "../../../components/pages/spot-prices/GWMarketBestPriceSection";
import GWDailyMovementSection from "../../../components/pages/spot-prices/GWDailyMovementSection";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common", "home", "spot-prices"]);
export { getStaticPaths, getStaticProps };

const LearnOverview = () => {
    const mobile = useMediaQuery("(max-width:1200px)");
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();

    useEffect(() => {
        toggleLightMode();
    }, []);

    return (
        <PublicLayout
            title={`${t("home:logo_name")} | Spot Prices`}
            description="Goldwise Spot prices page"
            openGraph={{
                title: "Spot prices page",
                description: "Stay up to date on the latest spot prices for gold, silver, platinum, and palladium with Goldwise. Our platform offers real-time pricing for digital metals backed by physical bullion held in secure storage. Get accurate and reliable pricing information to make informed investment decisions. Join the digital metals revolution with Goldwise and take advantage of our competitive spot prices.",
                siteName: 'Goldwise'
            }}
        >
            <Div sx={{ backgroundColor: Colors.grey100, position: "relative", padding: mobile ? "56px 24px" : "72px 160px" }}>
                <GWTitleSection />
                <GWDailyMovementSection />
                <Div sx={{ width: mobile ? "100%" : "70%" }}>
                    <GWMarketBestPriceSection />
                    <GWFaqSection />
                </Div>
            </Div>
        </PublicLayout>
    );
};

LearnOverview.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default LearnOverview;
