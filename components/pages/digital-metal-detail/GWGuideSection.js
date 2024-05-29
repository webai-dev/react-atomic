import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Colors from "../../../colors/colors";
import { useCategoriesAndTags, useFetchArticles, useGetToken } from "../../../hooks";
import { articleDataParser, getArticleLink } from "../../../utils/utils";
import GWButton from "../../atoms/GWButton";
import GWBlogGrid from "../../organisms/GWBlogGrid";
import Div from "../../styled/Div";

const items = [
    {
        title: "blog_title",
        description: "blog_text",
        tags: ["news", "gold"],
        blogImage: "/assets/images/png/blog_image_one.png",
        authorImage: "/assets/images/png/blog_author.png",
        authorName: "Laura Schellen",
        postDate: "8th Nov, 2022",
    },
    {
        title: "blog_title",
        description: "blog_text",
        tags: ["news", "gold"],
        blogImage: "/assets/images/png/blog_image_two.png",
        authorImage: "/assets/images/png/blog_author.png",
        authorName: "Laura Schellen",
        postDate: "8th Nov, 2022",
    },
    {
        title: "blog_title",
        description: "blog_text",
        tags: ["news", "gold"],
        blogImage: "/assets/images/png/blog_image_three.png",
        authorImage: "/assets/images/png/blog_author.png",
        authorName: "Laura Schellen",
        postDate: "8th Nov, 2022",
    },
    {
        title: "blog_title",
        description: "blog_text",
        tags: ["news", "gold"],
        blogImage: "/assets/images/png/blog_image_four.png",
        authorImage: "/assets/images/png/blog_author.png",
        authorName: "Laura Schellen",
        postDate: "8th Nov, 2022",
    },
];

const GWGuideSection = ({ metal }) => {
    const { t } = useTranslation("spot-prices-detail")
    const { data: token, isLoading: isTokenLoading, refetch: getToken } = useGetToken();
    const [tokenString, setTokenString] = useState(null);
    const [payload, setPayload] = useState(null);
    const [article, setArticle] = useState();

    useEffect(() => {
        if (!isTokenLoading && token) {
            setTokenString(token)
        }
    }, [token, isTokenLoading])

    const { data: catTags, isLoading: isCatTagLoading } = useCategoriesAndTags(tokenString);

    useEffect(() => {
        if (!isCatTagLoading && catTags) {
            const { categories, tags } = catTags;
            const CMScategory = categories.filter((cat) => cat.description === "Article content").map((cat) => cat.id)

            const _tags = tags.filter((tag) => tag.name.toLowerCase() === metal.toLowerCase()).map((tag) => tag.id)

            let payload = {
                CMScategory,
                tags: _tags,
                perPage: 4,
                withHtml: false
            }

            setPayload(payload);
        }
    }, [isCatTagLoading, catTags, metal])

    const { data: articleData, isLoading: isArticleLoading, isError: isArticleError } = useFetchArticles(token, payload)

    useEffect(() => {
        if (!isArticleLoading && articleData) {
            setArticle(articleData)
        }
    }, [!isArticleLoading, articleData])

    return (
        article &&
        <Div sx={{ padding: "0 24px" }}>
            <GWBlogGrid mainTitle={t('guide')} title={t(`all_about_${metal}`)} items={articleDataParser(article?.response)} maxWidth="100vw" fPadding="120px 270px 72px 270px" mPadding="56px 24px" />
            <Div sx={{ textAlign: "center" }}>
                <GWButton target="_blank" link={getArticleLink(article?.response[0]?.articleUrl) || ""} text={t('view_all_articles')} bgColor="navy" color="white" sx={{ width: "fit-content" }} />
            </Div>
        </Div>
    );
};
export default GWGuideSection;
