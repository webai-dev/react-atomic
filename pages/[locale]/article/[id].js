import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PublicLayout from "../../publicLayout/index";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Div from "../../../components/styled/Div";
import Colors from "../../../colors/colors";
import { ColorModeContextProvider, useColorMode } from "../../../contexts/ColorModeContext";
import { SpotDetailContextProvider } from "../../../contexts/SpotDetailContext";
import GWArticleAuthor from "../../../components/pages/article-detail/GWArticleAuthor";
import FlexContainer from "../../../components/styled/FlexContainer";
import GWArticleBody from "../../../components/pages/article-detail/GWArticleBody";
import { useFetchArticle, useGetToken } from "../../../hooks";
import { useTranslation } from "next-i18next";

const getStaticProps = makeStaticProps(["common", "home", "about", "spot-prices", "spot-prices-detail"]);
export { getStaticPaths, getStaticProps };

const Article = () => {
    const mobile = useMediaQuery("(max-width:1200px)");
    const router = useRouter();
    const { id } = router.query;
    const { data: token, isLoading: isTokenLoading, refetch: getToken } = useGetToken();
    const [article, setArticle] = useState(null);
    const { toggleLightMode } = useColorMode();
    const { t } = useTranslation();

    let payload = {
        withHtml: false
    }

    const { data: articleData, isLoading: isArticleLoading, isError: isArticleError } = useFetchArticle(token, payload, id)

    useEffect(() => {
        if (!isArticleLoading && articleData) {
            setArticle(articleData)
        }
    }, [isArticleLoading, !articleData])

    useEffect(() => {
        toggleLightMode();
    }, []);

    return (
        <SpotDetailContextProvider>
            <PublicLayout
                title={`${t("home:logo_name")} | Article`}
                description="About the Goldwise website"
                openGraph={{
                    title: "Goldwise article page",
                    description: "External article linked to the Goldwise website",
                    siteName: 'Goldwise'
                }}
            >
                <Div sx={{ backgroundColor: Colors.white, position: "relative" }}>
                    {
                        article &&
                        <FlexContainer sx={{ padding: mobile ? "44px 24px 56px 24px" : "72px 380px 72px 270px", flexWrap: mobile ? "wrap" : "nowrap" }}>
                            <GWArticleBody data={article} />
                            <GWArticleAuthor data={article} mobile={mobile} />
                        </FlexContainer>
                    }
                </Div>
            </PublicLayout>
        </SpotDetailContextProvider>
    );
};

Article.getLayout = function getLayout(page) {
    return <ColorModeContextProvider>{page}</ColorModeContextProvider>;
};

export default Article;
