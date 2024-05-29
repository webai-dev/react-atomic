import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import Colors from "../../colors/colors";
import GWAvenirFont from "../atoms/GWAvenirFont";
import GWCard from "../atoms/GWCard";
import GWBadge from "../atoms/GWBadge";
import Div from "../styled/Div";

const _Grid = styled("div")((isDesktop) => ({
    display: "flex",
    flexWrap: "wrap",
    whiteSpace: "nowrap",
    "& .MuiPaper-root": {
        marginTop: 12,
        marginRight: 8,
        padding: "4px 12px",
        "& .MuiTypography-root": {
            textTransform: "capitalize",
        },
    },
}));

const _Link = styled("a")({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginTop: "24px",
    textDecoration: "none",
});

const GWProfileCard = ({ profileImageUrl, name, bio, skills, socialLink, socialType }) => {
    const { t } = useTranslation("about");
    const isDesktop = useMediaQuery("(min-width:1200px)");

    return (
        <GWCard variant="emphasis" padding={isDesktop ? "12px" : "24px"} borderRadius="25px" sx={{ height: isDesktop ? "576px" : "" }}>
            <Box component="img" sx={{ width: "100%", aspectRatio: "auto 1/1", borderRadius: "16px" }} src={profileImageUrl} />
            <Box sx={{ marginTop: "24px", padding: isDesktop ? "0 20px" : "", display: "flex", flexDirection: "column", "& .skills": { order: isDesktop ? "" : -1 } }}>
                <Div>
                    <GWAvenirFont tag="h3" color="grey500" fontSize="18px" fontWeight="600">
                        {t(name)}
                    </GWAvenirFont>
                    <Div sx={{ height: "84px", textOverflow: "ellipsis" }}>
                        <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                            {t(bio)}
                        </GWAvenirFont>
                    </Div>
                </Div>
                <_Grid isDesktop={isDesktop} className="skills" sx={{ marginBottom: isDesktop ? "" : "24px" }}>
                    {skills.map((skill) => (
                        <GWBadge key={skill} variant="plain" text={t(skill)} bgcolor={Colors.grey200} color={Colors.navy} opacity="1" />
                    ))}
                </_Grid>
                <_Link target="_blank" underline="none" href={socialLink}>
                    <ReactSVG src="/assets/images/svg/linkedinLogo.svg" />
                    <GWAvenirFont sx={{ lineHeight: "28px", marginTop: "12px", marginLeft: "12px" }} color="purple" fontSize="18px" fontWeight="400">
                        {t("connect_on")} {socialType}
                    </GWAvenirFont>
                </_Link>
            </Box>
        </GWCard>
    );
};

GWProfileCard.propTypes = {
    profileImageUrl: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    skill: PropTypes.string,
    socialLink: PropTypes.string,
    socialType: PropTypes.string,
    isDesktop: PropTypes.bool,
};

export default GWProfileCard;
