import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import PublicLayout from "../../publicLayout/index";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Div from "../../../components/styled/Div";
import Colors from "../../../colors/colors";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import GWBannerSection from "../../../components/pages/spot-prices-detail/GWBannerSection";
import GWPricesSection from "../../../components/pages/spot-prices-detail/GWPricesSection";
import GWChartSection from "../../../components/pages/spot-prices-detail/GWChartSection";
import GWDescriptionSection from "../../../components/pages/spot-prices-detail/GWDescriptionSection";
import GWFaqSection from "../../../components/pages/spot-prices-detail/GWFaqSection";
import GWGuideSection from "../../../components/pages/spot-prices-detail/GWGuideSection";
import GWBottomNavigation from "../../../components/pages/spot-prices-detail/GWBottomNavigation";
import { SpotDetailContextProvider } from "../../../contexts/SpotDetailContext";
import { usePriceApiContext } from "../../../contexts/PriceAPIContext";

const getStaticProps = makeStaticProps(["common", "home", "about", "spot-prices", "spot-prices-detail"]);
export { getStaticPaths, getStaticProps };

const SpotPriceDetail = () => {
    const route = useRouter();
    const mobile = useMediaQuery("(max-width:1200px)");
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();
    const { setMetal } = usePriceApiContext();

    useEffect(() => {
        toggleLightMode();
    }, []);

    useEffect(() => setMetal(route.query.id), [route.query.id])

    return (
        <SpotDetailContextProvider>
            <PublicLayout
                title={`${t("home:logo_name")} | Spot Prices | ${route.query.id}`}
                description="Goldwise Spot prices page"
                openGraph={{
                    title: "Spot prices page",
                    description: "Stay up to date on the latest spot prices for gold, silver, platinum, and palladium with Goldwise. Our platform offers real-time pricing for digital metals backed by physical bullion held in secure storage. Get accurate and reliable pricing information to make informed investment decisions. Join the digital metals revolution with Goldwise and take advantage of our competitive spot prices.",
                    siteName: 'Goldwise'
                }}
            >
                <Div sx={{ backgroundColor: Colors.white, position: "relative" }}>
                    <GWBannerSection metal={route.query.id} />
                    <GWPricesSection />
                    <GWChartSection />
                    <GWDescriptionSection />
                    <GWFaqSection />
                    <GWGuideSection metal={route.query.id} />
                    {
                        mobile && <GWBottomNavigation />
                    }
                </Div>
            </PublicLayout>
        </SpotDetailContextProvider>
    );
};

SpotPriceDetail.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default SpotPriceDetail;
