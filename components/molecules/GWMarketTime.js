import { styled } from "@mui/system"
import moment from "moment"
import { useTranslation } from "next-i18next"
import { useResizeDetector } from "react-resize-detector"
import { ReactSVG } from "react-svg"
import Colors from "../../colors/colors"
import GWAvenirFont from "../atoms/GWAvenirFont"
import GWCard from "../atoms/GWCard"
import Div from "../styled/Div"
import FlexContainer from "../styled/FlexContainer"

const _GWMarketTime = styled(GWCard)({

})

const GWMarketTime = ({ dateTime }) => {
    const { t } = useTranslation("spot-prices")
    const { width, ref } = useResizeDetector()

    return (
        <Div ref={ref} sx={{ border: "none", boxShadow: "none", width: "100%" }}>
            <_GWMarketTime variant="emphasis" borderRadius="25px" sx={{ width: "100%", padding: "30px 32px 32px 32px" }}>
                <FlexContainer sx={{ gap: "12px", justifyContent: "flex-start" }}>
                    <ReactSVG src="/assets/images/svg/info.svg" />
                    <Div>
                        <GWAvenirFont color="grey400" fontWeight="400" fontSize="18px">{t('current_market_time')}: <strong style={{ color: Colors.navy }}>{t('extended_market_time')} ({dateTime})</strong></GWAvenirFont>
                        <GWAvenirFont color="grey400" fontSize="18px" fontWeight="400" sx={{ marginTop: width >= 1200 ? "0" : "8px" }}>{t('current_news')}</GWAvenirFont>
                    </Div>
                </FlexContainer>
            </_GWMarketTime>
        </Div>
    )
}

export default GWMarketTime;