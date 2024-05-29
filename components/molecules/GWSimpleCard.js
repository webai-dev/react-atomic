import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import GWCard from "../atoms/GWCard";
import GWAvenirFont from "../atoms/GWAvenirFont";
import FlexContainer from "../styled/FlexContainer";

const GWSimpleCard = ({ icon, title, description }) => {
    const { t } = useTranslation("about");

    return (
        <GWCard variant="emphasis" borderRadius="25px">
            <FlexContainer sx={{ justifyContent: "start" }}>
                <ReactSVG src={icon} />
                <GWAvenirFont tag="h3" sx={{ lineHeight: "28px", marginLeft: "12px", textTransform: "capitalize" }} fontSize="18px" variant="black">
                    {t(title)}
                </GWAvenirFont>
            </FlexContainer>
            <GWAvenirFont tag="h4" sx={{ lineHeight: "28px", marginTop: "12px" }} color="grey400" fontSize="18px" fontWeight="400">
                {t(description)}
            </GWAvenirFont>
        </GWCard>
    );
};

GWSimpleCard.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default GWSimpleCard;
