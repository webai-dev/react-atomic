import { Inter } from "@next/font/google"
import dynamic from "next/dynamic"
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { ColorModeContextProvider, useColorMode } from "../../contexts/ColorModeContext"
import PublicLayout from "../publicLayout"
import { useEffect } from "react"
import { useTranslation } from "next-i18next"

const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }

const [
  GWLandingHero,
  GWLandingWhy,
  GWLandingKeyFeatures,
  GWProductsCategories,
  GWComingSoon,
  GWWorklist,
  GWSpotPrice,
  GWTrustSection,
  GWLearnSection,
  GWTestimonialsSection,
  GWSupportSection,
  GWAboutSection,
  GWBusinessSection
] =
  [
    "GWLandingHero",
    "GWLandingWhy",
    "GWLandingKeyFeatures",
    "GWProductsCategories",
    "GWComingSoon",
    "GWWorklist",
    "GWSpotPrice",
    "GWTrustSection",
    "GWLearnSection",
    "GWTestimonialsSection",
    "GWSupportSection",
    "GWAboutSection",
    "GWBusinessSection"
  ].map((page) => dynamic(
    () => import(`../../components/pages/home/${page}`),
    { ssr: true }
  ))

const inter = Inter({ subsets: ['latin'] })

const Home = (props) => {
  const { toggleLightMode } = useColorMode();
  const { t } = useTranslation();

  useEffect(() => {
    toggleLightMode();
  }, []);

  return (
    <>
      <PublicLayout
        title={`${t("home:logo_name")} | Home`}
        description="Goldwise Home page"
        openGraph={{
          title: "Home page",
          description: "Join the digital metals revolution with Goldwise. Our platform offers a secure and efficient way to invest in gold, silver, platinum, and palladium backed by physical bullion held in secure storage. Enjoy real-time pricing, low fees, and fast transactions. Whether you're an individual investor or a business, Goldwise can help you diversify your investment portfolio and protect your assets. Start building your digital metals portfolio today.",
          siteName: 'Goldwise'
        }}
      >
        <GWLandingHero />
        <GWLandingWhy />
        <GWLandingKeyFeatures />
        <GWProductsCategories />
        <GWComingSoon />
        <GWWorklist />
        <GWSpotPrice />
        <GWTrustSection />
        <GWLearnSection />
        <GWTestimonialsSection />
        <GWSupportSection />
        <GWAboutSection />
        <GWBusinessSection />
      </PublicLayout>
    </>
  )
};

Home.getLayout = function getLayout(page) {
  return (
    <ColorModeContextProvider>
      {page}
    </ColorModeContextProvider>
  )
}

export default Home;
