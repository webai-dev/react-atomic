import { ReactSVG } from "react-svg";
import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";
import GWAvenirFont from "../atoms/GWAvenirFont";
import GWCard from "../atoms/GWCard";
import Colors from "../../colors/colors";

const GWAddressCard = ({ title, country, street, city, styleSx }) => {
    const isMobile = useMediaQuery("(max-width:1200px)");

    return (
        <GWCard
            variant="emphasis"
            borderRadius="25px"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: !isMobile ? "31px" : "20px",
                ...styleSx,
            }}
        >
            <FlexContainer>
                <ReactSVG
                    src="/assets/images/svg/info.svg"
                />
                <GWAvenirFont
                    fontWeight="500"
                    fontSize="18px"
                    color={Colors.navy}
                    sx={{ marginLeft: "12px", lineHeight: "28px" }}
                >
                    {title}
                </GWAvenirFont>
            </FlexContainer>
            <Div sx={{ maxWidth: "180px" }}>
                <GWAvenirFont
                    tag="h4"
                    fontWeight="800"
                    fontSize="18px"
                    color={Colors.navy}
                    sx={{ lineHeight: "23px" }}
                    variant="black"
                >
                    {country}
                </GWAvenirFont>
                <GWAvenirFont
                    fontWeight="500"
                    fontSize="18px"
                    color={Colors.navy}
                    sx={{ lineHeight: "23px" }}
                >
                    {street} {city} {country}
                </GWAvenirFont>
            </Div>
        </GWCard>
    );
};

GWAddressCard.propTypes = {
    title: PropTypes.string,
    country: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    styleSx: PropTypes.object,
};

export default GWAddressCard;
