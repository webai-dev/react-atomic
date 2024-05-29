import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import { ReactSVG } from "react-svg";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "../../contexts/ColorModeContext";
import GWButton from "../atoms/GWButton";
import GWHeaderNavItem from "../atoms/GWHeaderNavItem";
import GWHeaderItem from "../molecules/GWHeaderItem";
import GWHeaderNav from "../molecules/GWHeaderNav";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";
import GWHeaderMobile from "./GWHeaderMobile";
import Link from "../atoms/GWLink";
import Colors from "../../colors/colors";
import useOutsideClick from "../../lib/clickOutsideComponentDetector";
import { useHeaderControl } from "../../contexts/HeaderControlContext";

const inter = Inter({ subsets: ["latin"] })

const _GWHeader = styled(Paper)({
    boxShadow: "none",
    height: "72px",
    padding: "0px 160px",
    width: "-webkit-fill-available",
    left: 0,
    display: "flex",
    backdropFilter: "blur(16px)",
    position: "fixed",
    zIndex: "1000",
    top: 0
})
const GWHeader = () => {
    const router = useRouter();
    const { width, ref } = useResizeDetector();
    const { t } = useTranslation();
    const [enableColorMode, setEnableColorMode] = useState(true);
    const { expandedIndex, setExpandedIndex } = useHeaderControl()
    const { toggleColorMode, mode } = useColorMode();
    const toggleGWHeaderItem = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(index)
        }
    }
    useEffect(() => {
        if (router.asPath.indexOf("for-business") !== -1) {
            setEnableColorMode(false);
        }
    }, [router.asPath]);

    const handleOutsideClick = () => {
        setExpandedIndex(-1);
    };

    const clickRef = useOutsideClick(handleOutsideClick);
    return (
        <Div ref={ref}>
            {
                width >= 1200 ?
                    <_GWHeader ref={clickRef}>
                        <Link href="/">
                            <FlexContainer sx={{ marginTop: "23.86px", position: "relative" }}>
                                {mode === "light" ? <ReactSVG src="/assets/images/svg/goldwise-icon.svg" /> : <ReactSVG src="/assets/images/svg/goldwise-icon-white.svg" />}
                                <Typography sx={{ ml: 1 }} className={inter.className} color={mode === "light" ? Colors.navy : Colors.white}>{t("common:logo_name")}</Typography>
                            </FlexContainer>
                        </Link>
                        <FlexContainer sx={{ margin: "24px 0px", flex: 3, gap: "32px" }}>
                            <FlexContainer>
                                <GWHeaderItem text="spot_prices" expanded={expandedIndex === 0} expandable={true} location="common" onClick={() => toggleGWHeaderItem(0)}>
                                    <GWHeaderNav location="common">
                                        <GWHeaderNavItem link="/spot-prices/gold" title="gold_spot" text="gold_spot_info" symbol="Au" color="gold" location="common" />
                                        <GWHeaderNavItem link="/spot-prices/silver" title="silver_spot" text="silver_spot_info" symbol="Ag" color="silver" location="common" />
                                        <GWHeaderNavItem link="/spot-prices/platinum" title="platinum_spot" text="platinum_spot_info" symbol="Pt" color="platinum" location="common" />
                                        <GWHeaderNavItem link="/spot-prices/palladium" title="palladium_spot" text="palladium_spot_info" symbol="Pd" color="palladium" location="common" />
                                    </GWHeaderNav>
                                </GWHeaderItem>
                            </FlexContainer>
                            <FlexContainer>
                                <GWHeaderItem text="digi_metals" expanded={expandedIndex === 1} expandable={true} location="common" onClick={() => toggleGWHeaderItem(1)}>
                                    <GWHeaderNav footer="footer_text" location="common">
                                        <GWHeaderNavItem link="/digital-metals" title="introducing" text="introducing_info" img="/assets/images/svg/add-circle-line.svg" color="grey200" location="common" />
                                        <GWHeaderNavItem link="/digital-metals/gold" title="digital_gold" text="digital_gold_info" symbol="Au" color="gold" location="common" />
                                        <GWHeaderNavItem link="/digital-metals/silver" title="digital_silver" text="digital_silver_info" symbol="Ag" color="silver" location="common" />
                                        <GWHeaderNavItem link="/digital-metals/platinum" title="digital_platinum" text="digital_platinum_info" symbol="Pt" color="platinum" location="common" />
                                        <GWHeaderNavItem link="/digital-metals/palladium" title="digital_palladium" text="digital_palladium_info" symbol="Pd" color="palladium" location="common" />
                                    </GWHeaderNav>
                                </GWHeaderItem>
                            </FlexContainer>
                            <FlexContainer>
                                <GWHeaderItem text="learn" expanded={expandedIndex === 2} expandable={true} location="common" onClick={() => toggleGWHeaderItem(2)}>
                                    <GWHeaderNav location="common">
                                        <GWHeaderNavItem link="/learn-overview" title="guides" text="guides_info" img="/assets/images/svg/guides.svg" color="grey200" location="common" />
                                        <GWHeaderNavItem link="/learn-overview" title="news" text="news_info" img="/assets/images/svg/newspaper-line.svg" color="grey200" location="common" />
                                        <GWHeaderNavItem link="/about" title="about_us" text="about_us_info" img="/assets/images/svg/building-4-line.svg" color="grey200" location="common" />
                                    </GWHeaderNav>
                                </GWHeaderItem>
                            </FlexContainer>
                            <FlexContainer>
                                <GWHeaderItem text="support" expanded={expandedIndex === 3} expandable={true} location="common" onClick={() => toggleGWHeaderItem(3)}>
                                    <GWHeaderNav location="common">
                                        <GWHeaderNavItem link="/invest-in-goldwise" title="support" text="support_info" img="/assets/images/svg/star-line.svg" color="grey200" location="common" />
                                        <GWHeaderNavItem link="/contact" title="contact" text="contact_info" img="/assets/images/svg/question-answer-line.svg" color="grey200" location="common" />
                                    </GWHeaderNav>
                                </GWHeaderItem>
                            </FlexContainer>
                            <FlexContainer>
                                <GWHeaderItem link="/for-business" text="for_business" location="common" />
                            </FlexContainer>
                        </FlexContainer>
                        <FlexContainer sx={{ padding: "16px 0", flex: 1, justifyContent: "flex-end" }}>
                            <GWButton text="get_app" bgColor="linear-gradient(180deg, #7A73FF 0%, #655CFF 100%)" color="white" variantStyles="default" location="common" />
                        </FlexContainer>
                        {enableColorMode && <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>}
                    </_GWHeader>
                    :
                    <GWHeaderMobile />
            }
        </Div>
    )
}

export default GWHeader;
