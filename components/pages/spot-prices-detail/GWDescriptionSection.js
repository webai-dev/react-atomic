import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";
import Div from "../../styled/Div";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWCard from "../../atoms/GWCard";

const _GWDescriptionSection = styled(Div)({
});

const GWDescriptionSection = ({ }) => {
    const { t } = useTranslation("spot-prices-detail")
    const fullScreen = useMediaQuery("(min-width: 1200px)")

    return (
        <_GWDescriptionSection sx={{  padding: fullScreen ? "40px 270px" : "56px 24px 0 24px" }}>
            <Div sx={{ width: "100%" }}>
                <GWAvenirFont variant="black" tag="h3" fontWeight="800" fontSize="24px" color="grey500">{t('description')}</GWAvenirFont>
                <GWCard padding="32px" borderRadius="12px" sx={{ marginTop: "24px", border: "2px solid rgba(127, 129, 140, 0.18)" }}>
                    <GWAvenirFont>{t('description_info')}</GWAvenirFont>
                </GWCard>
            </Div>
        </_GWDescriptionSection>
    )
}

export default GWDescriptionSection;