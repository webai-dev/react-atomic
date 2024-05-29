import { useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import GWSpinner from "../atoms/GWSpinner";
import GWBlogCard from "../molecules/GWBlogCard";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";
import GWSelect from "../molecules/GWSelect";
import GWAvenirFont from "../atoms/GWAvenirFont";
import Colors from "../../colors/colors";
import GWButton from "../atoms/GWButton";
import GWBadge from "../atoms/GWBadge";
import { useEffect, useState } from "react";

const GWBlogPagination = ({ onFilterTagChange, onFilterOrderChange, onPrevPage, onNextPage, isLoading, data, tags, pageNum, totalPages, cols = 2 }) => {
    const fullScreen = useMediaQuery("(min-width:1200px)");
    const { t } = useTranslation("learn-overview");
    const _cols = (100 / parseInt(cols)).toFixed(2);
    const [items, setItems] = useState();

    useEffect(() => {
        const itemsArr = tags.map((tag) => ({ id: tag.id, value: <GWBadge variant="plain" bgcolor={Colors[ tag.name.toLowerCase() ] || Colors.purple} color={Colors.white} text={t(tag.name)} padding="4px 12px" /> }))

        setItems(itemsArr)
    }, [])

    return (
        <FlexContainer sx={{ position: "relative", margin: "0 auto", flexDirection: "column", alignItems: "center", maxWidth: "1060px", padding: "120px 0px", "& > .MuiPaper-root": { "& > img": { objectFit: "cover", width: "996px", aspectRatio: "4/1" } } }}>
            <FlexContainer sx={{ width: "100%", gap: "12px", marginBottom: "70px", justifyContent: "flex-end", position: "relative", "& >.css-0 > .css-1624c6e > .MuiPaper-root": { height: "45px" }, "& p": { textTransform: "capitalize" }, "& >:first-of-type": { height: "80px", "& .css-la4umo-MuiPaper-root ": { width: "160px", transform: "translateX(-53px)" } }, "& :last-of-type": { "& .css-la4umo-MuiPaper-root ": { width: "202px", transform: "translateX(-53px)" } } }}>
                {items && <GWSelect onClick={(value) => onFilterTagChange(value)} leftIcon={true} items={items} showAll={true} allText="All Tags" width="1366" />}
                <GWSelect onClick={(value) => onFilterOrderChange(value)} width="1366" leftIcon={true} items={[{ value: t("newest_articles"), orderBy: "desc" }, { value: t("oldest_articles"), orderBy: "asc" }]} />
            </FlexContainer>
            {isLoading && <GWSpinner />}
            {!isLoading && (data.length === 0 ? <Div>No Article</Div>: <>
                {data[0] && <GWBlogCard articleId={data[0].id} location="learn-overview" data={data[0].tags} bannerImageUrl={data[0].blogImage} title={data[0].title} description={data[0].description} authorProfileImageUrl={data[0].authorImage} authorName={data[0].authorName} postDate={data[0].postDate} />}
                <FlexContainer sx={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", marginTop: fullScreen ? "32px" : "0px", gap: "32px", "& > .MuiPaper-root": { flex: `0 1 calc(${_cols}% - ${cols * 9}px)` } }}>{data && data.map((item, index) => <GWBlogCard location="learn-overview" id={item.id} key={index} tags={item.tags} bannerImageUrl={item.blogImage} title={item.title} description={item.description} authorProfileImageUrl={item.authorImage} authorName={item.authorName} postDate={item.postDate} />)}</FlexContainer>
                <FlexContainer sx={{ alignItems: "center", width: "100%", marginTop: "73px", justifyContent: "space-between" }}>
                    <GWButton onClick={onPrevPage} variant="circle" icon="/assets/images/svg/arrow-left-line.svg" />
                    <GWAvenirFont variant="roman" color={Colors.navy} fontSize="14px">
                        Page {pageNum} of {totalPages}
                    </GWAvenirFont>
                    <GWButton onClick={onNextPage} variant="circle" icon="/assets/images/svg/arrow-right-line.svg" />
                </FlexContainer>
            </>)}
        </FlexContainer>
    );
};

export default GWBlogPagination;
