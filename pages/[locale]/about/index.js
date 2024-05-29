import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Div from "../../../components/styled/Div";
import Colors from "../../../colors/colors";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import PublicLayout from "../../publicLayout/index";

const getStaticProps = makeStaticProps(["common", "about", "home"]);
export { getStaticPaths, getStaticProps };

const [GWBanner, GWCoreValue, GWFoundingTeam, GWBecomeOwner, GWPressRelease, GWBusiness] = ["GWBannerSection", "GWCoreValueSection", "GWFoundingTeamSection", "GWBecomeOwnerSection", "GWPressReleaseSection", "GWBusinessSection"].map((page) =>
    dynamic(() => import(`../../../components/pages/about/${page}`), {
        ssr: true,
    })
);

const About = () => {
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();

    useEffect(() => {
        toggleLightMode();
    }, []);


    return (
        <PublicLayout
            title={`${t("home:logo_name")} | About`}
            description="About the Goldwise website"
            openGraph={{
                title: "Goldwise About page",
                description: "About the Goldwise website",
                siteName: 'Goldwise'
            }}
        >
            <Div sx={{ backgroundColor: Colors.grey100 }}>
                <GWBanner />
                <GWCoreValue />
                <GWFoundingTeam />
                <GWBecomeOwner />
                <GWPressRelease />
                <GWBusiness />
                {/* <GWFooter /> */}
            </Div>
        </PublicLayout>
    );
};

About.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default About;
