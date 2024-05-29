import dynamic from "next/dynamic";
import { useEffect } from "react";
import Div from "../../../components/styled/Div";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import PublicLayout from "../../publicLayout/index";
import GWBannerSection from "../../../components/pages/for-business/GWBannerSection";
import GWLearnMoreSection from "../../../components/pages/for-business/GWLearnMoreSection";
import GWOfferingSection from "../../../components/pages/for-business/GWOfferingSection";
import GWPartnersSection from "../../../components/pages/for-business/GWPartnersSection";
import GWServicesSection from "../../../components/pages/for-business/GWServicesSection";
import GWSolidFoundationSection from "../../../components/pages/for-business/GWSolidFoundationSection";
import GWValuesSection from "../../../components/pages/for-business/GWValuesSection";
import GWProvidersSection from "../../../components/pages/home/GWProvidersSection";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common", "about", "home", "for-business"]);
export { getStaticPaths, getStaticProps };


const ForBusiness = () => {
    const { toggleDarkMode } = useColorMode();
    const { t } = useTranslation();

    useEffect(() => {
        toggleDarkMode();
    }, []);

    return (
        <PublicLayout
            title={`${t("home:logo_name")} | For Business`}
            description="Goldwise for business page"
            openGraph={{
                title: "Goldwise for business page",
                description: "Goldwise provides businesses with a secure and efficient way to invest in digital metals. Our platform offers real-time pricing, low fees, and secure storage for gold, silver, platinum, and palladium. Whether you're a small business or a large corporation, Goldwise can help you diversify your investment portfolio and protect your assets. Join the digital metals revolution with Goldwise for Business.",
                siteName: 'Goldwise'
            }}
        >
            <Div sx={{ bgcolor: "background.default" }}>
                <GWBannerSection />
                <GWProvidersSection />
                <GWValuesSection />
                <GWServicesSection />
                <GWOfferingSection />
                <GWSolidFoundationSection />
                <GWPartnersSection />
                <GWLearnMoreSection />
            </Div>
        </PublicLayout>
    );
};

ForBusiness.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default ForBusiness;
