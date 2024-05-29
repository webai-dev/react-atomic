import { useTranslation } from "next-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Roboto } from "@next/font/google";
import GWSpinner from "../atoms/GWSpinner";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";
import GWAvenirFont from "../atoms/GWAvenirFont";
import GWBlogCard from "../molecules/GWBlogCard";
import GWBadge from "../atoms/GWBadge";
import Colors from "../../colors/colors";

const roboto = Roboto({ weight: ["700"] });

const GWBlogGrid = ({ mainTitle = "press", title, cols = 2, items = [], isArticleLoading = false, maxWidth = "1060px", fPadding = "120px 0px", mPadding = "56px 0", footer: Footer = () => <></> }) => {
    const fullScreen = useMediaQuery("(min-width:1200px)");
    const { t } = useTranslation(["about", "spot-prices-detail"]);
    const _cols = (100 / parseInt(cols)).toFixed(2);

    return (
        <FlexContainer sx={{ position: "relative", margin: "0 auto", flexDirection: "column", alignItems: "center", padding: fullScreen ? fPadding : mPadding, border: "1px solid #EAEBF0", borderWidth: "0 1px 0px 1px", maxWidth, "& > *": { zIndex: 0 }, "& .css-177wwcq-MuiPaper-root": { marginTop: "72px", borderRadius: "10px", padding: "10px 20px", "& .MuiTypography-root": { textTransform: "capitalize", fontSize: "16px", fontFamily: roboto } } }}>
            <GWBadge variant="emphasis" text={t(mainTitle)} />
            <GWAvenirFont tag="h2" color={Colors.navy} fontSize={fullScreen ? "56px" : "36px"} fontWeight="700" variant="black" sx={{ lineHeight: fullScreen ? "68px" : "auto", letterSpacing: "-1px", marginTop: "40px", padding: fullScreen ? "0 110px" : "0 24px", textAlign: "center" }}>
                {t(title)}
            </GWAvenirFont>
            <FlexContainer sx={{ flexDirection: fullScreen ? "row" : "column", marginTop: fullScreen ? "72px" : "56px", justifyContent: "space-between", flexWrap: "wrap", gap: "32px", "& > .MuiPaper-root": { flex: `0 1 calc(${_cols}% - ${cols * 9}px)` } }}>
                {isArticleLoading ? <GWSpinner /> : items.length < 1 ? <Div>No Articles</Div>: items.map((item, index) => (
                    <GWBlogCard id={item.id} key={index} tags={item.tags} bannerImageUrl={item.blogImage} title={item.title} description={item.description} authorProfileImageUrl={item.authorImage} authorName={item.authorName} postDate={item.postDate} />
                ))}
            </FlexContainer>
            <Footer />
        </FlexContainer>
    );
};

export default GWBlogGrid;
