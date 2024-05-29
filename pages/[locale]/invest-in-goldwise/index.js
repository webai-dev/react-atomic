import dynamic from "next/dynamic";
import { useEffect } from "react";
import PublicLayout from "../../publicLayout";
import Div from "../../../components/styled/Div";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Colors from "../../../colors/colors";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps([
    "common",
    "invest-in-goldwise",
    "home",
]);
export { getStaticPaths, getStaticProps };

const [GWBanner] = ["GWBannerSection"].map((page) =>
    dynamic(
        () => import(`../../../components/pages/invest-in-goldwise/${page}`),
        {
            ssr: true,
        }
    )
);

const InvestInGoldWise = () => {
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();

    useEffect(() => {
        toggleLightMode();
    }, []);

    return (
        <PublicLayout
            title={`${t("home:logo_name")} | Invest in goldwise`}
            description="Goldwise Invest in Goldwise page"
            openGraph={{
                title: "Invest in Goldwise page",
                description: "Join the digital metals revolution with Goldwise. Our platform offers a safe and convenient way to invest in gold, silver, platinum, and palladium backed by physical bullion held in secure storage. Enjoy real-time pricing, low fees, and fast transactions. Start building your digital metals portfolio today and benefit from the stability and long-term growth potential of precious metals. Invest in Goldwise now.",
                siteName: 'Goldwise'
            }}
        >
            <Div
                sx={{
                    backgroundColor: Colors.grey100,
                }}
            >
                <GWBanner />
            </Div>
        </PublicLayout>
    );
};

InvestInGoldWise.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default InvestInGoldWise;
