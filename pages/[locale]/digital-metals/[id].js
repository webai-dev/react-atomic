import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Colors from "../../../colors/colors";
import Div from "../../../components/styled/Div";
import PublicLayout from "../../publicLayout/index";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext"
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";
import { usePriceApiContext } from "../../../contexts/PriceAPIContext";

const getStaticProps = makeStaticProps(["common", "home", "digital_metal_overview", "fees", "spot-prices-detail"]);
export { getStaticPaths, getStaticProps };
const GWKeypoint = dynamic(() => import(`../../../components/pages/digital_metal_overview/GWKeypoint.js`), { ssr: true });

const [GWHeaderSection, GWBuySellSection, GWFaqSection, GWGuideSection, GWDescription, GWFeeSection] = ["GWHeaderSection", "GWBuySellSection", "GWFaqSection", "GWGuideSection", "GWDescription", "GWFeeSection"].map((page) => dynamic(() => import(`../../../components/pages/digital-metal-detail/${page}`), { ssr: true }));
const DigitalMetalDetail = (props) => {
    const { toggleLightMode } = useColorMode();
    const route = useRouter();
    const { t } = useTranslation();
    const { setMetal } = usePriceApiContext();

    useEffect(() => {
        toggleLightMode();
    }, []);

    useEffect(() => setMetal(route.query.id), [route.query.id])

    return (
        <PublicLayout
            title={`${t("home:logo_name")} | Digital Metals | ${route.query.id}`}
            description="Goldwise digital metals page"
            openGraph={{
                title: "Goldwise digital metals page",
                description: "Buy and sell digital metals securely with Goldwise. Our platform allows you to trade in gold, silver, platinum, and palladium, all backed by physical bullion held in secure storage. Enjoy low fees, fast transactions, and real-time pricing. Join the digital metals revolution with Goldwise today.",
                siteName: 'Goldwise'
            }}
        >
            <Div sx={{ backgroundColor: Colors.grey100, position: "relative", padding: "56px 24px" }}>
                <GWHeaderSection metal={route.query.id} />
                <GWBuySellSection />
                <GWDescription />
                <GWKeypoint />
                <GWFeeSection />
                <GWFaqSection />
                <GWGuideSection metal={route.query.id} />
            </Div>
        </PublicLayout>
    )
};

DigitalMetalDetail.getLayout = function getLayout(page) {
    return (
        <ColorModeContextProvider>
            {page}
        </ColorModeContextProvider>
    )
}

export default DigitalMetalDetail;
