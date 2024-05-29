import dynamic from "next/dynamic"
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import PublicLayout from "../../publicLayout/index";
import Div from "../../../components/styled/Div";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext"
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Colors from "../../../colors/colors";

const getStaticProps = makeStaticProps(["common", "home", "digital_metal_overview", "fees"]);
export { getStaticPaths, getStaticProps };

const [GWBanner, GWChooseMetal, GWKeypoint, GWHowItWorks, GWFee, GWCompare, GWDownload] = ["GWBanner", "GWChooseMetal", "GWKeypoint", "GWHowItWorks", "GWFee", "GWCompare", "GWDownload"].map((page) => dynamic(() => import(`../../../components/pages/digital_metal_overview/${page}`), { ssr: true }));

const DigitalMetalsOverview = (props) => {
    const { t } = useTranslation(["digital_metal_overview", "fees"]);
    const { toggleLightMode } = useColorMode();

    useEffect(() => {
        toggleLightMode();
    }, []);

    return (
        <>
            <PublicLayout
                title={`${t("home:logo_name")} | Digital Metals`}
                description="Goldwise digital metals page"
                openGraph={{
                    title: "Goldwise digital metals page",
                    description: "Buy and sell digital metals securely with Goldwise. Our platform allows you to trade in gold, silver, platinum, and palladium, all backed by physical bullion held in secure storage. Enjoy low fees, fast transactions, and real-time pricing. Join the digital metals revolution with Goldwise today.",
                    siteName: 'Goldwise'
                }}
            >
                <Div sx={{ backgroundColor: Colors.grey100, position: "relative", padding: "56px 24px" }}>
                    <GWBanner />
                    <GWKeypoint />
                    <GWHowItWorks />
                    <GWChooseMetal />
                    <GWFee />
                    <GWCompare />
                    <GWDownload />
                </Div>
            </PublicLayout>
        </>
    )
};

DigitalMetalsOverview.getLayout = function getLayout(page) {
    return (
        <ColorModeContextProvider>
            {page}
        </ColorModeContextProvider>
    )
}

export default DigitalMetalsOverview;
