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
    "comming-soon",
    "home",
]);
export { getStaticPaths, getStaticProps };

const [GWBanner] = ["GWBannerSection"].map((page) =>
    dynamic(
        () => import(`../../../components/pages/comming-soon/${page}`),
        {
            ssr: true,
        }
    )
);

const CommingSoon = () => {
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();

    useEffect(() => {
        toggleLightMode();
    }, []);

    return (
        <PublicLayout
            title={`${t("home:logo_name")} | Coming soon`}
            description="Goldwise website coming soon page"
            openGraph={{
                title: "Goldwise Coming soon page",
                description: "A default page for upcoming features in the Goldwise website",
                siteName: 'Goldwise'
            }}
            noindex={true}
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

CommingSoon.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default CommingSoon;
