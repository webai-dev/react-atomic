import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";
import GWCard from "../atoms/GWCard";
import GWBadge from "../atoms/GWBadge";
import GWAvenirFont from "../atoms/GWAvenirFont";
import Colors from "../../colors/colors";
import Div from "../styled/Div";
import Link from "../atoms/GWLink";

const GWBlogCard = ({ id, tags = [], bannerImageUrl, title, description, authorProfileImageUrl, authorName, postDate, location = "about" }) => {
    const { t } = useTranslation(location);
    const isDesktop = useMediaQuery("(min-width:1200px)");

    const tagsColor = [
        {
            name: "news",
            color: "purple",
        },
        {
            name: "gold",
            color: "gold",
        },
    ];

    return (
        <GWCard
            variant="emphasis"
            padding={isDesktop ? "32px" : "24px"}
            borderRadius="25px"
            sx={{
                "& a": {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                }
            }}>
            <Link href={`/article/${id}`}>
                <Box sx={{ width: "100%", minWidth: isDesktop ? "444px" : "297px", maxWidth: "100%", height: "250px", aspectRatio: "auto 1/1", borderRadius: "16px", backgroundImage: `url('${bannerImageUrl}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
                <Box sx={{ marginTop: "32px", display: "flex", flexDirection: "column", flexGrow: "1" }}>
                    <Div sx={{ display: "flex", "& .MuiPaper-root": { marginRight: "8px", padding: "4px 12px", "& .MuiTypography-root": { textTransform: "capitalize" } } }}>
                        {tags.map((tag) => (
                            <GWBadge key={tag.id} variant="plain" text={t(tag.name)} bgcolor={tagsColor.find((tc) => tc.name === tag.name.toLowerCase())?.color || Colors.purple} color={Colors.white} opacity="1" />
                        ))}
                    </Div>
                    <Div sx={{ marginTop: "16px", display: "flex", flexDirection: "column"}}>
                        <GWAvenirFont tag="h4" color="grey500" fontSize="18px" fontWeight="600">
                            {t(title)}
                        </GWAvenirFont>
                        <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px", }} color="grey400" fontSize="18px" fontWeight="400">
                            {t(description.length < 158 ? description : (description.substring(0, 158) + "..."))}
                        </GWAvenirFont>
                    </Div>
                    <Div sx={{ display: "flex", "& > *": { marginRight: "8px" }, marginTop: "auto", paddingTop: "8px" }}>
                        <Box sx={{ width: "24px", height: "24px", aspectRatio: "auto 1/1", borderRadius: "100%", backgroundImage: `url('${bannerImageUrl}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} />
                        <GWAvenirFont color="grey400" fontSize="18px" fontWeight="400">
                            {authorName} ∙ {postDate}
                        </GWAvenirFont>
                    </Div>
                </Box>
            </Link>
        </GWCard>
    );
};

GWBlogCard.propTypes = {
    bannerImageUrl: PropTypes.string,
    tags: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    authorProfileImageUrl: PropTypes.string,
    authorName: PropTypes.string,
    postDate: PropTypes.string,
};

export default GWBlogCard;
