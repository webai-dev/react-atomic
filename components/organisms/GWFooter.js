import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useResizeDetector } from "react-resize-detector";
import GWFooterLinkItem from "../atoms/GWFooterLinkItem";
import GWFooterBottom from "../molecules/GWFooterBottom";
import GWFooterLinkList from "../molecules/GWFooterLinkList";
import GWFooterMiddle from "../molecules/GWFooterMiddle";
import GWFooterTop from "../molecules/GWFooterTop";

const _GWFooter = styled(Paper)({
    justifyContent: "flex-start",
    borderRadius: 0,
    border: "none",
    position: "relative",
    zIndex: "90"
});

const GWFooter = () => {
    const { width, ref } = useResizeDetector();

    return (
        <_GWFooter ref={ref}>
            <GWFooterTop width={width}>
                <GWFooterLinkList width={width} title="prices">
                    <GWFooterLinkItem link="/spot-prices/gold" title="gold_spot" />
                    <GWFooterLinkItem link="/spot-prices/silver" title="silver_spot" />
                    <GWFooterLinkItem link="/spot-prices/platinum" title="platinum_spot" />
                    <GWFooterLinkItem link="/spot-prices/palladium" title="palladium_spot" />
                </GWFooterLinkList>
                <GWFooterLinkList title="products">
                    <GWFooterLinkItem link="/digital-metals" title="digi_metals" />
                    <GWFooterLinkItem link="/digital-metals/gold" title="digital_gold" />
                    <GWFooterLinkItem link="/digital-metals/silver" title="digital_silver" />
                    <GWFooterLinkItem link="/digital-metals/platinum" title="digital_platinum" />
                    <GWFooterLinkItem link="/digital-metals/palladium" title="digital_palladium" />
                    <GWFooterLinkItem link="/coming-soon" title="bullion_coin_bars" />
                </GWFooterLinkList>
                <GWFooterLinkList title="fees">
                    <GWFooterLinkItem link="/fees" title="overview" />
                    <GWFooterLinkItem link="/fees" title="features" />
                    <GWFooterLinkItem link="/fees" title="solutions" />
                    <GWFooterLinkItem link="/fees" title="tutorials" />
                    <GWFooterLinkItem link="/fees" title="pricing" />
                    <GWFooterLinkItem link="/fees" title="releases" />
                </GWFooterLinkList>
                <GWFooterLinkList title="for_business">
                    <GWFooterLinkItem link="/for-business" title="overview" />
                    <GWFooterLinkItem link="/for-business" title="features" />
                    <GWFooterLinkItem link="/for-business" title="solutions" />
                    <GWFooterLinkItem link="/for-business" title="tutorials" />
                    <GWFooterLinkItem link="/for-business" title="pricing" />
                    <GWFooterLinkItem link="/for-business" title="releases" />
                </GWFooterLinkList>
                <GWFooterLinkList title="support">
                    <GWFooterLinkItem link="/contact" title="overview" />
                    <GWFooterLinkItem link="/contact" title="features" />
                    <GWFooterLinkItem link="/contact" title="solutions" />
                    <GWFooterLinkItem link="/contact" title="tutorials" />
                    <GWFooterLinkItem link="/contact" title="pricing" />
                    <GWFooterLinkItem link="/contact" title="releases" />
                </GWFooterLinkList>
                <GWFooterLinkList title="social">
                    <GWFooterLinkItem link="https://google.com" title="facebook" />
                    <GWFooterLinkItem link="https://google.com" title="instagram" />
                    <GWFooterLinkItem link="https://google.com" title="twitter" />
                    <GWFooterLinkItem link="https://google.com" title="linkedIn" />
                </GWFooterLinkList>
            </GWFooterTop>
            <GWFooterMiddle width={width} />
            <GWFooterBottom
                width={width}
                line1="line1_footer"
                line2="line2_footer"
            />
        </_GWFooter>
    )
};

export default GWFooter;
