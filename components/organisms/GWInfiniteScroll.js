import { useTranslation } from "next-i18next";
import GWBlogCard from "../molecules/GWBlogCard";
import FlexContainer from "../styled/FlexContainer";
import GWSelect from "../molecules/GWSelect";
import Colors from "../../colors/colors";
import GWButton from "../atoms/GWButton";
import GWBadge from "../atoms/GWBadge";

const GWInfiniteScroll = ({ onFilterChange, onLoadMore, data, cols = 1, loadMoreButtonTitle, pageSize }) => {
    const { t } = useTranslation("learn-overview");
    const _cols = (100 / parseInt(cols)).toFixed(2);

    const items = [
        {
            value: "All Tags",
        },
        {
            value: <GWBadge variant="plain" bgcolor={Colors.gold} color={Colors.white} text={t("gold")} padding="4px 12px" />,
        },
        {
            value: <GWBadge variant="plain" bgcolor={Colors.purple} color={Colors.white} text="News" padding="4px 12px" />,
        },
        {
            value: <GWBadge variant="plain" bgcolor={Colors.teal} color={Colors.white} text="Tech" padding="4px 12px" />,
        },
        {
            value: <GWBadge variant="plain" bgcolor={Colors.grey300} color={Colors.white} text="Silver" padding="4px 12px" />,
        },
    ];
    return (
        <FlexContainer sx={{ position: "relative", margin: "0 auto", flexDirection: "column", alignItems: "center", maxWidth: "1060px", padding: "56px 0" }}>
            <FlexContainer sx={{ width: "100%", gap: "12px", marginBottom: "32px", justifyContent: "center", position: "relative", "& p": { textTransform: "capitalize" } }}>
                <GWSelect onClick={onFilterChange} leftIcon={true} items={items} showAll={true} allText="All Tags" width="1000" />
                <GWSelect onClick={onFilterChange} width="1000" leftIcon={true} items={[{ value: t("newest_articles") }, { value: t("oldest_articles") }]} />
            </FlexContainer>

            <FlexContainer sx={{ flexDirection: "row", flexWrap: "wrap", "& > .MuiPaper-root": { flex: `0 1 calc(${_cols}% - ${cols * 8}px)` }, gap: "24px" }}>{data && data.map((item, index) => <GWBlogCard location="learn-overview" key={index} tags={item.tags} bannerImageUrl={item.blogImage} title={item.title} description={item.description} authorProfileImageUrl={item.authorImage} authorName={item.authorName} postDate={item.postDate} />)}</FlexContainer>
            <GWButton sx={{ marginTop: "56px", width: "100%", "& .css-1pb0oyy-MuiButtonBase-root-MuiButton-root:hover": { color: Colors.navy } }} bgColor={Colors.navy} color={Colors.white} onClick={onLoadMore} text={t(loadMoreButtonTitle)} />
        </FlexContainer>
    );
};

export default GWInfiniteScroll;
