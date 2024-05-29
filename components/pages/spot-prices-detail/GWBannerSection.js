import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import { usePriceApiContext } from "../../../contexts/PriceAPIContext";
import { METALS_SYMBOLS } from "../../../utils/constants";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWButton from "../../atoms/GWButton";
import GWInitial from "../../atoms/GWInitial";
import GWSocialItem from "../../atoms/GWSocialItem";
import GWSelect from "../../molecules/GWSelect";
import GWShare from "../../molecules/GWShare";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const _GWBannerSection = styled(Div)({

});

const GWBannerSection = ({ metal }) => {
    const { width, ref } = useResizeDetector();
    const { t } = useTranslation("spot-prices-detail")
    const { priceObject } = usePriceApiContext();

    return (
        <_GWBannerSection ref={ref}>
            <FlexContainer sx={{ justifyContent: "space-between", padding: width >= 1200 ? "40px 160px" : "0 24px" }}>
                <FlexContainer sx={{ gap: "24px", alignItems: "center", minWidth: width >= 1200 ? "0" : "100%" }}>
                    {
                        width >= 1200 && <GWButton variant="icon" icon="/assets/images/svg/arrow-left.svg" sx={{ border: "none", marginTop: "23%" }} />
                    }
                    <FlexContainer sx={{ flexDirection: width >= 1200 ? "column" : "row", justifyContent: "space-between", width: "100%", gap: width >= 1200 ? "0" : "24px", }}>
                        <Div sx={{ marginBottom: width >= 1200 ? "20px" : "0", padding: width >= 1200 ? "24px" : "24px 0" }}>
                            <GWAvenirFont tag="h1" fontWeight="500" fontSize={width >= 1200 ? "36px" : "18px"}>{t('live_gold_prices')}</GWAvenirFont>
                        </Div>
                        <FlexContainer sx={{ gap: width >= 1200 ? "24px" : "12px", alignItems: "center", justifyContent: "unset" }}>
                            <GWInitial symbol={METALS_SYMBOLS[metal]} bgColor={metal.toLowerCase()} width="56px" height="56px" />
                            <FlexContainer sx={{ flexDirection: "column" }}>
                                <GWAvenirFont sx={{ textTransform: "capitalize" }} tag="h3" fontWeight="500" fontSize="32px">{t(metal)}</GWAvenirFont>
                                <GWAvenirFont tag="h4" fontWeight="400" fontSize="16px" color="#8D8D94">{priceObject?.mSC}/{priceObject?.iso3CC}</GWAvenirFont>
                            </FlexContainer>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                {/* {
                    width >= 1200 &&
                    <FlexContainer sx={{ gap: "16px", justifyContent: "unset", alignItems: "end" }}>
                        <GWShare>
                            <GWSocialItem bgColor="grey300" social="/assets/images/svg/instagram-fill.svg" />
                            <GWSocialItem bgColor="grey300" social="/assets/images/svg/linkedin-box-fill.svg" />
                            <GWSocialItem bgColor="grey300" social="/assets/images/svg/facebook-circle-fill.svg" />
                            <GWSocialItem bgColor="grey300" social="/assets/images/svg/whatsapp-fill.svg" />
                        </GWShare>
                        <GWSelect items={[{
                            leftIcon: "/assets/images/svg/asterisk.svg",
                            value: "OZ"
                        },]} leftIcon={true} width={width} />
                        <GWSelect items={[{
                            leftIcon: "/assets/images/svg/euro-sign.svg",
                            value: "EUR"
                        },]} leftIcon={true} width={width} />
                        <GWButton text="buy" color="white" bgColor="purple" />
                        <GWButton text="sell" color="white" bgColor="navy" />
                    </FlexContainer>
                } */}
            </FlexContainer>
        </_GWBannerSection>
    )
}

export default GWBannerSection;