import { Inter } from "@next/font/google"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import { NextSeo } from "next-seo";
import GWFooter from "../../components/organisms/GWFooter"
import Container from "../../components/styled/Container"
import GWCookieConsent from "../../components/molecules/GWCookieConsent"
import GWHeader from "../../components/organisms/GWHeader"
import Div from "../../components/styled/Div";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] })

const PublicLayout = ({
  title = "Goldwise",
  description = "",
  canonical = null,
  openGraph = null,
  twitter = null,
  facebook = null,
  noindex = false,
  children
}) => {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  const route = useRouter()

  // const openGraph = {
  //   url: 'https://www.url.ie/a',
  //   title: 'Open Graph Title',
  //   description: 'Open Graph Description',
  //   images: [
  //     {
  //       url: 'https://www.example.ie/og-image-01.jpg',
  //       width: 800,
  //       height: 600,
  //       alt: 'Og Image Alt',
  //       type: 'image/jpeg',
  //     },
  //     {
  //       url: 'https://www.example.ie/og-image-02.jpg',
  //       width: 900,
  //       height: 800,
  //       alt: 'Og Image Alt Second',
  //       type: 'image/jpeg',
  //     },
  //     { url: 'https://www.example.ie/og-image-03.jpg' },
  //     { url: 'https://www.example.ie/og-image-04.jpg' },
  //   ],
  //   siteName: 'SiteName',
  // }

  // const twitter = {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // }

  return (
    <Div sx={{ bgcolor: "background.default" }}>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical || `${origin}${route.asPath}`}
        openGraph={{
          ...openGraph,
          url: `${origin}${route.asPath}`
        }}
        twitter={twitter}
        facebook={facebook}
        noindex={noindex}
      />
      <main className={inter.className}>
        <GWHeader />
        <Container sx={{ paddingTop: "72px" }}>
          {children}
        </Container>
        <GWFooter />
        <GWCookieConsent />
      </main>
    </Div>
  )
};

export default PublicLayout;
