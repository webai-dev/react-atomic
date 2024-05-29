import { Box, styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Div from "../../styled/Div"
import FlexContainer from "../../styled/FlexContainer";

const _GWText = styled(Box)({
    fontStyle: "normal",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    marginBottom: "10px"
})

const GWTitleSection = (props) => {
    const { t } = useTranslation("spot-prices")



    return (
        <Div>
            <GWAvenirFont tag="h2" fontSize="56px" variant="black" fontWeight="800">{t('live_market_spot_prices')}</GWAvenirFont>
        </Div>
    )
}

export default GWTitleSection;