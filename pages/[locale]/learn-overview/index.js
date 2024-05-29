import dynamic from "next/dynamic";
import { useEffect } from "react";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Div from "../../../components/styled/Div";
import Colors from "../../../colors/colors";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import { useMediaQuery } from "@mui/material";
import PublicLayout from "../../publicLayout/index";
import { useTranslation } from "next-i18next";

const GWHeader = dynamic(() => import("../../../components/organisms/GWHeader"), { ssr: true });

const getStaticProps = makeStaticProps(["common", "home", "learn-overview"]);
export { getStaticPaths, getStaticProps };

const [GWOverviewBannerSection, GWOverviewBlogSection] = ["GWOverviewBannerSection", "GWOverviewBlogSection"].map((page) =>
    dynamic(() => import(`../../../components/pages/learn-overview/${page}`), {
        ssr: true,
    })
);

const LearnOverview = () => {
    const mobile = useMediaQuery("(max-width:1200px)");
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();

    useEffect(() => {
        toggleLightMode();
    }, []);

    return (
        <PublicLayout
            title={`${t("home:logo_name")} | Learn Overview`}
            description="Goldwise Learn overview page"
            openGraph={{
                title: "Learn overview page",
                description: "Get started with digital metals and discover the benefits of investing in gold, silver, platinum, and palladium with Goldwise. Our platform offers a user-friendly interface and a wealth of educational resources to help you make informed investment decisions. Learn about the advantages of digital metals, how to get started, and how to build a diversified portfolio. Join the digital metals revolution with Goldwise today.",
                siteName: 'Goldwise'
            }}
        >
            <Div sx={{ backgroundColor: Colors.grey100, position: "relative", padding: "56px 24px" }}>
                <Div sx={{ backgroundImage: `url("/assets/images/png/frame_overview.png")`, backgroundPositionX: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", top: 0, left: "calc(50% - 50vw)", position: "absolute", height: mobile ? "15%" : "21%", width: "100vw" }} />
                <Div sx={{ backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.48),rgba(251, 251, 253, 1))", top: 0, left: 0, position: "absolute", height: mobile ? "15%" : "25%", width: "100vw" }} />
                <Div>
                    <Div sx={{ margin: "0 auto", maxWidth: "1162px", ":before": { content: "''", backgroundImage: "linear-gradient(95deg, #D4D1FF, #FFFFFF, #F1BBFF)", position: "absolute", backgroundRepeat: "no-repeat", backgroundSize: "contain", top: mobile ? "192px" : "527px", left: `calc(50% - ${mobile ? "157px" : "273px"})`, height: mobile ? "628px" : "1094px", aspectRatio: "1/2", borderRadius: "6453px", filter: "blur(120px)" } }}>
                        <GWOverviewBannerSection />
                        <GWOverviewBlogSection />
                    </Div>
                </Div>
            </Div>
        </PublicLayout>
    );
};

LearnOverview.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default LearnOverview;
