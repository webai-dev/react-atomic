import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWCard from "../../atoms/GWCard";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const _GWListItem = styled(GWCard)({

});

const GWListItem = ({ icon, text, badge, location = "home", screenWidth }) => {
    const { t } = useTranslation(location)

    return (
        <_GWListItem variant="plain" padding="0" borderRadius="25px">
            <FlexContainer sx={{ justifyContent: "space-between" }}>
                <FlexContainer>
                    <ReactSVG src={icon} style={{ margin: screenWidth >= 1200 ? "30px 12px 28px 30px" : "21px 8px 23px 20px" }} />
                    <Div sx={{ marginTop: screenWidth >= 1200 ? "32px" : "24px", marginBottom: screenWidth >= 1200 ? "30px" : "21px" }}>
                        <GWAvenirFont color="navy" fontSize={ screenWidth >= 1200 ? "18px" : "16px"} >
                            {t(text)}
                        </GWAvenirFont>
                    </Div>
                </FlexContainer>
                <FlexContainer sx={{ marginTop: "21px", marginBottom: "19px", marginRight: "30px" }}>
                    {badge}
                </FlexContainer>
            </FlexContainer>
        </_GWListItem>
    )
};

export default GWListItem;