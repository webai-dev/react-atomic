import Cookies from "js-cookie";
import GWBlogPagination from "../../organisms/GWBlogPagination";
import GWInfiniteScroll from "../../organisms/GWInfiniteScroll";
import { useMediaQuery } from "@mui/material";
import { useCategoriesAndTags, useFetchArticles, useGetToken } from "../../../hooks";
import { useEffect, useState } from "react";
import { articleDataParser } from "../../../utils/utils";

const GWOverviewBlogSection = () => {
    const mobile = useMediaQuery("(max-width:1200px)");
    const { data: token, isLoading: isTokenLoading, refetch: getToken } = useGetToken();
    const [tokenString, setTokenString] = useState(null);
    const [payload, setPayload] = useState(null);
    const [articles, setArticles] = useState(null)
    const [tags, setTags] = useState([]);
    const [selectedTagIndex, setSelectedTagIndex] = useState(-1);
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedSortParam, setSelectedSortParam] = useState()
    const [counter, setCounter] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    const onPrevPage = () => setCounter((count) => count - 1 > 0 ? count - 1 : count)

    const onNextPage = () => setCounter((count) => count + 1 <= totalPages ? count + 1 : count)

    useEffect(() => {
        if (!isTokenLoading && token) {
            setTokenString(token)
            Cookies.set("token", token)
        }
    }, [token, isTokenLoading])

    const { data: catTags, isLoading: isCatTagLoading } = useCategoriesAndTags(tokenString);

    useEffect(() => {
        if (!isCatTagLoading && catTags) {
            const { categories, tags } = catTags;
            setTags(tags);
            const CMScategory = categories.filter((cat) => cat.description === "Article content").map((cat) => cat.id)
            setSelectedCategory(categories.find((cat) => cat.description === "Article content")?.id)

            const _tags = tags.filter((tag) => selectedTagIndex > -1 ? (tag.id === selectedTagIndex) : true).map((tag) => tag.id)

            let payload = {
                CMScategory,
                tags: _tags,
                perPage: 9,
                withHtml: false
            }
            
            if (selectedSortParam) {
                payload.orderBy = "date";
                payload.order = selectedSortParam;
            }

            setPayload(payload);
        }
    }, [isCatTagLoading, catTags, selectedTagIndex, selectedSortParam])

    const { data: articleData, isLoading: isArticleLoading, isError: isArticleError } = useFetchArticles(token, payload)

    useEffect(() => {
        if (!isArticleLoading && articleData) {
            setArticles(articleData)
        }
    }, [isArticleLoading, articleData])

    return articles && tags && selectedCategory && (mobile ?
        <GWInfiniteScroll pageSize="10" loadMoreButtonTitle="load_more_articles" cols="1" data={articleDataParser(articles?.response)} /> :
        <GWBlogPagination
            cols="2"
            tags={tags}
            isLoading={isArticleLoading}
            onFilterTagChange={(value) => setSelectedTagIndex(value?.id)}
            onFilterOrderChange={(value) => setSelectedSortParam(value?.orderBy)}
            selectedCategory={selectedCategory}
            data={articleDataParser(articles?.response)} 
            pageNum={counter}
            totalPages={totalPages}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
            />
    );
};

export default GWOverviewBlogSection;
