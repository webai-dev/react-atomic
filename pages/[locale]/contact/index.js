import dynamic from "next/dynamic";
import { useEffect } from "react";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Div from "../../../components/styled/Div";
import Colors from "../../../colors/colors";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import PublicLayout from "../../publicLayout/index";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common", "contact", "home"]);
export { getStaticPaths, getStaticProps };

const [GWBanner] = ["GWBannerSection"].map((page) =>
    dynamic(() => import(`../../../components/pages/contact/${page}`), {
        ssr: true,
    })
);

const Contact = () => {
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();

    useEffect(() => {
        toggleLightMode();
    }, []);

    return (
        <PublicLayout
            title={`${t("home:logo_name")} | Contact`}
            description="Goldwise website contact page"
            openGraph={{
                title: "Goldwise contact page",
                description: "This page gives users access to reach out to the Goldwise team",
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

Contact.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default Contact;
