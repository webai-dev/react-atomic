import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import FlexContainer from "../../styled/FlexContainer";
import GWBlogGrid from "../../organisms/GWBlogGrid";
import GWButton from "../../atoms/GWButton";
import { useCategoriesAndTags, useFetchArticles, useGetToken } from "../../../hooks";
import { useEffect, useState } from "react";
import { articleDataParser, getArticleLink } from "../../../utils/utils";

const _GWGuideSection = styled(FlexContainer)({
    flexDirection: "column",
});

const GWGuideSection = ({ metal }) => {
    const { width, ref } = useResizeDetector();
    const { t } = useTranslation("spot-prices-detail")
    const { data: token, isLoading: isTokenLoading, refetch: getToken } = useGetToken();
    const [ tokenString, setTokenString ] = useState(null);
    const [ payload, setPayload ] = useState(null);

    useEffect(() => {
        if (!isTokenLoading && token) {
            setTokenString(token)
        }
    }, [ token, isTokenLoading ])

    const { data: catTags, isLoading: isCatTagLoading } = useCategoriesAndTags(tokenString);

    useEffect(() => {
        if (!isCatTagLoading && catTags) {
            const { categories, tags } = catTags;
            const CMScategory = categories.filter((cat) => cat.description === "Article content").map((cat) => cat.id)
            const _tag = tags.find((tag) => tag.name?.toLowerCase() === metal?.toLowerCase());

            let payload = {
                CMScategory,
                tags: _tag? [ _tag.id ] : [],
                perPage: 4,
                withHtml: false
            }

            setPayload(payload);
        }
    }, [ isCatTagLoading, catTags, metal ])

    const { data: articleData, isLoading: isArticleLoading, isError: isArticleError } = useFetchArticles(token, payload)

    return (
        <_GWGuideSection ref={ref}>
            <GWBlogGrid
                isArticleLoading={isArticleLoading && !articleData}
                mainTitle="guide"
                title={t(`all_about_${metal}`)}
                items={articleDataParser(articleData?.response)}
                maxWidth="100vw"
                fPadding="120px 270px 72px 270px" mPadding="56px 24px"
            />
            <FlexContainer sx={{ paddingBottom: "120px" }}>
                <GWButton
                    rel="nofollow"
                    target="_blank"
                    link={getArticleLink(articleData?.response[0]?.articleUrl)}
                    text={t('view_all_articles')}
                    bgColor="navy"
                    color="white"
                    sx={{ width: "fit-content" }}
                />
            </FlexContainer>
        </_GWGuideSection>
    )
}

export default GWGuideSection;
