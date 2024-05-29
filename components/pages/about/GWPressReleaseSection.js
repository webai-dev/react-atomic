import Div from "../../styled/Div";
import GWBlogGrid from "../../organisms/GWBlogGrid";
import GWContactCard from "../../molecules/GWContactCard";
import { useCategoriesAndTags, useFetchArticles, useGetToken } from "../../../hooks";
import { useEffect, useState } from "react";
import moment from "moment";
import { articleDataParser } from "../../../utils/utils";

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

const _GWContactCard = () => {
    return <GWContactCard title="press_enqueries" phone="0123-4567-8910" email="hello@goldwise.com" />;
};

const GWPressRelease = () => {
    const { data: token, isLoading: isTokenLoading, refetch: getToken } = useGetToken();
    const [tokenString, setTokenString] = useState(null);
    const [payload, setPayload] = useState(null);

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

            const _tags = tags.filter((tag) => tag.name === "Gold").map((tag) => tag.id)

            let payload = {
                CMScategory,
                tags: _tags,
                perPage: 4,
                withHtml: false
            }

            setPayload(payload);
        }
    }, [isCatTagLoading, catTags])

    const { data: articleData, isLoading: isArticleLoading, isError: isArticleError } = useFetchArticles(token, payload)

    return (
        <Div sx={{ padding: "0 24px" }}>
            <GWBlogGrid title="press_releases" items={articleDataParser(articleData?.response)} isArticleLoading={isArticleLoading && !articleData} footer={_GWContactCard} />
        </Div>
    );
};

export default GWPressRelease;
