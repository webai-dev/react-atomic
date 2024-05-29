import { Inter } from "@next/font/google"
import dynamic from "next/dynamic"
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { ColorModeContextProvider } from "../../../contexts/ColorModeContext"
import PublicLayout from "../../publicLayout"
import Div from "../../../components/styled/Div"
import GWMarketTime from "../../../components/molecules/GWMarketTime"
import Colors from "../../../colors/colors"
import GWSocialItem from "../../../components/atoms/GWSocialItem"
import GWShare from "../../../components/molecules/GWShare"
import GWPriceChange from "../../../components/atoms/GWPriceChange"
import GWAvenirFont from "../../../components/atoms/GWAvenirFont"
import FlexContainer from "../../../components/styled/FlexContainer"
import { useTranslation } from "next-i18next"

const getStaticProps = makeStaticProps(['common', 'home'])
export { getStaticPaths, getStaticProps }

const Demo = (props) => {
    const { t } = useTranslation();

    return (
        <>
            <PublicLayout
                title={`${t("home:logo_name")} | Demo`}
                description="Goldwise website demo page"
                openGraph={{
                    title: "Goldwise demo page",
                    description: "A demo page",
                    siteName: 'Goldwise'
                }}
                noindex={true}
            >
                <Div sx={{ padding: "52px 160px", minHeight: "100vh", background: Colors.white }}>
                    <Div sx={{ mt: 5 }}>
                        <GWShare>
                            <GWSocialItem bgColor="grey300" social="/assets/images/svg/linkedin-box-fill.svg" />
                            <GWSocialItem bgColor="grey300" social="/assets/images/svg/linkedin-box-fill.svg" />
                            <GWSocialItem bgColor="grey300" social="/assets/images/svg/linkedin-box-fill.svg" />
                            <GWSocialItem bgColor="grey300" social="/assets/images/svg/linkedin-box-fill.svg" />
                        </GWShare>
                    </Div>

                    <FlexContainer sx={{ gap: "20px" }}>
                        <GWPriceChange
                            title="Buy Price"
                            currency="€"
                            price="1,750"
                            unit="t/oz"
                            value="0.39"
                            percent="2.16"
                            lastUpdate="2 seconds ago"
                        />
                        <GWPriceChange
                            title="Buy Price"
                            currency="€"
                            price="1,750"
                            unit="t/oz"
                            value="-0.39"
                            percent="-2.16"
                            lastUpdate="2 seconds ago"
                        />
                    </FlexContainer>
                </Div>
            </PublicLayout>
        </>
    )
};

Demo.getLayout = function getLayout(page) {
    return (
        <ColorModeContextProvider>
            {page}
        </ColorModeContextProvider>
    )
}

export default Demo;
