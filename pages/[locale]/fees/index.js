import dynamic from "next/dynamic";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Div from "../../../components/styled/Div";
import Colors from "../../../colors/colors";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import PublicLayout from "../../publicLayout/index";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common", "home", "fees"]);
export { getStaticPaths, getStaticProps };

const [GWBannerFeesSection, GWTransactionFeesSection, GWStorageFeesSection, GWOtherFeesSection] = ["GWBannerFeesSection", "GWTransactionFeesSection", "GWStorageFeesSection", "GWOtherFeesSection"].map((page) => dynamic(() => import(`../../../components/pages/fees/${page}`), { ssr: true }));

const Fees = () => {
    const mobile = useMediaQuery("(max-width:1200px)");
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();

    useEffect(() => {
        toggleLightMode();
    }, []);

    return (
        <PublicLayout
            title={`${t("home:logo_name")} | Fees`}
            description="Goldwise fees page"
            openGraph={{
                title: "Goldwise fees page",
                description: "At Goldwise, we believe in transparency when it comes to fees. Learn about our low and competitive rates for buying, selling, and storing digital metals. Our fee structure is designed to save you money and help you get the most out of your digital metal investments. Discover the benefits of trading with Goldwise today.",
                siteName: 'Goldwise'
            }}
        >
            <Div sx={{ backgroundColor: Colors.grey100, padding: mobile ? "56px 24px" : "120px 24px" }}>
                <Div sx={{ position: "relative", "::before": { content: "''", backgroundImage: `url("/assets/images/png/frame_gradient.png")`, backgroundPositionX: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "absolute", height: "100%", width: "100%", transform: "translateY(70px)" } }}>
                    <Div sx={{ margin: "0 auto", maxWidth: "1060px", "::before": { content: "''", backgroundImage: "linear-gradient(95deg, #D4D1FF, #FFFFFF, #F1BBFF)", position: "absolute", backgroundRepeat: "no-repeat", backgroundSize: "contain", top: "527px", left: `calc(50% - 272px)`, height: "1094px", width: "543px", borderRadius: "6453px", filter: "blur(120px)" } }}>
                        <GWBannerFeesSection />
                        <GWTransactionFeesSection />
                    </Div>
                </Div>
                <Div sx={{ "& *": { position: "relative" } }}>
                    <Div sx={{ margin: "0 auto", maxWidth: "1060px" }}>
                        <GWStorageFeesSection />
                        <GWOtherFeesSection />
                    </Div>
                </Div>
            </Div>
        </PublicLayout>
    );
};

Fees.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default Fees;
