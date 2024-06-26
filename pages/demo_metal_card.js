import Head from "next/head"
import { useResizeDetector } from "react-resize-detector";
import GWHeader from "../components/organisms/GWHeader";
import Div from "../components/styled/Div";
import FlexContainer from "../components/styled/FlexContainer";
import GWFooter from "../components/organisms/GWFooter";
import { ColorModeContextProvider } from "../contexts/ColorModeContext";
import Container from "../components/styled/Container";
import GWMetalCard from "../components/molecules/GWMetalCard";

const Demo2 = (props) => {
    const { width, height, ref } = useResizeDetector()
    const items = [
        {
            name: "Digital Gold",
            symbol: "Au",
            link: "/metals/au"
        },
        {
            name: "Digital Silver",
            symbol: "Ag",
            link: "/metals/ag"
        },
        {
            name: "Digital Platinum",
            symbol: "Pt",
            link: "/metals/pt"
        },
        {
            name: "Digital Palladium",
            symbol: "Pd",
            link: "/metals/pd"
        }
    ]

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{ width: "100%" }} ref={ref}>
                <GWHeader />
                <Container sx={{ background: "#F5F5F5" }}>
                    <Div className="row" sx={{ height: "50vh" }}>
                        <FlexContainer className="col-md-8 mx-auto">
                            <FlexContainer sx={{ alignItems: "center" }}>
                                {items && items.map(i =>
                                    <GWMetalCard
                                        name={i.name}
                                        symbol={i.symbol}
                                        detailLink={i.link}
                                    />)}
                            </FlexContainer>
                        </FlexContainer>
                    </Div>
                </Container>
                <GWFooter />
            </main>
        </>
    )
};

Demo2.getLayout = function getLayout(page) {
    return (
        <ColorModeContextProvider>
            {page}
        </ColorModeContextProvider>
    )
}

export default Demo2;
