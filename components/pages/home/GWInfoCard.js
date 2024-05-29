import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Div from "../../styled/Div";
import GWCard from "../../atoms/GWCard";

const _GWInfoCard = styled(GWCard)({
    height: "inherit"
});

const GWInfoCard = ({ head, body, footer, location }) => {
    const { t } = useTranslation(location)

    return (
        <_GWInfoCard background="navy" borderRadius="25px">
            <GWAvenirFont variant="h3" color="white" sx={{
                fontSize: "42px",
                "@media (max-width: 700px)": {
                    fontSize: "32px"
                }
            }}>
                {t(head)}
            </GWAvenirFont>
            <Div sx={{ marginTop: "24px" }}>
                <GWAvenirFont fontWeight="500" color="grey300" fontSize="18px">
                    {t(body)}
                </GWAvenirFont>
            </Div>
            <Div sx={{ marginTop: "92px" }}>
                <GWAvenirFont color="teal" fontSize="18px">
                    {t(footer)}
                </GWAvenirFont>
            </Div>
        </_GWInfoCard>
    )
};

export default GWInfoCard;