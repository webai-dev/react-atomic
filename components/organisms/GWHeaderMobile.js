import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Paper, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { Inter } from "@next/font/google";
import { ReactSVG } from "react-svg";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useColorMode } from "../../contexts/ColorModeContext";
import FlexContainer from "../styled/FlexContainer";
import GWHeaderNavMobile from "../molecules/GWHeaderNavMobile";
import GWHeaderItemMobile from "../molecules/GWHeaderItemMobile";
import GWHeaderNavItemMobile from "../atoms/GWHeaderNavItemMobile";
import GWButton from "../atoms/GWButton";

const inter = Inter({ subsets: ['latin'] })

const _GWHeaderMobile = styled(Paper)({
    borderRadius: 0,
    boxShadow: "none",
    width: "100%",
    backdropFilter: "blur(16px)",
    zIndex: "10000"
});

const GWHeaderMobile = () => {
    const { t } = useTranslation("common");
    const [isOpen, setIsOpen] = useState(false);
    const [headerItemIndex, setHeaderItemIndex] = useState(-1);
    const { toggleColorMode, mode } = useColorMode();
    const toggleGWHeaderMobile = () => {
        setHeaderItemIndex(-1);
        setIsOpen(!isOpen);
    }

    return (
        <_GWHeaderMobile sx={{position: "fixed" }}>
            <FlexContainer sx={{ justifyContent: "space-between", borderBottom: "1px solid rgba(57, 60, 63, 0.04)" }}>
                <FlexContainer sx={{ padding: "24px 0px 23.86px 32px" }}>
                    {mode === "light" ? <ReactSVG src="/assets/images/svg/goldwise-icon.svg" /> : <ReactSVG src="/assets/images/svg/goldwise-icon-white.svg" />}
                    <Typography sx={{ ml: 1 }} className={inter.className}>{t('logo_name')}</Typography>
                </FlexContainer>
                <ReactSVG src={`/assets/images/svg/${isOpen ? (mode === "light" ? "close-fill" : "close-fill-white") : (mode === "light" ? "menu-line": "menu-line-white")}.svg`} style={{ margin: "24px" }} onClick={toggleGWHeaderMobile} />
            </FlexContainer>
            {
                isOpen &&
                <Paper sx={{ gap: "24px", padding: "24px", display: "flex", flexDirection: "column", boxShadow: "none", border: "none", height: isOpen ? "calc(100vh - 75px)" : "0", width: "100%" }}>
                    <GWHeaderItemMobile title="spot_prices" onClick={() => setHeaderItemIndex(0)}>
                        <GWHeaderNavMobile setIsHeaderClose={() => setHeaderItemIndex(-1)} isHeaderOpen={headerItemIndex === 0} isNavComponentOpen={isOpen} setIsNavComponentOpen={setIsOpen}>
                            <GWHeaderNavItemMobile title="gold_spot" text="gold_spot_info" symbol="Au" color="gold" link="/spot-prices/gold" />
                            <GWHeaderNavItemMobile title="silver_spot" text="silver_spot_info" symbol="Ag" color="silver" link="/spot-prices/silver" />
                            <GWHeaderNavItemMobile title="platinum_spot" text="platinum_spot_info" symbol="Pt" color="platinum" link="/spot-prices/platinum" />
                            <GWHeaderNavItemMobile title="palladium_spot" text="palladium_spot_info" symbol="Pd" color="palladium" last={true} link="/spot-prices/palladium" />
                        </GWHeaderNavMobile>
                    </GWHeaderItemMobile>
                    <GWHeaderItemMobile title="digi_metals" onClick={() => setHeaderItemIndex(1)}>
                        <GWHeaderNavMobile setIsHeaderClose={() => setHeaderItemIndex(-1)} isHeaderOpen={headerItemIndex === 1} isNavComponentOpen={isOpen} setIsNavComponentOpen={setIsOpen}>
                            <GWHeaderNavItemMobile title="introducing" text="introducing_info" img="/assets/images/svg/add-circle-line.svg" color="grey200" link="/digital-metals-overview" />
                            <GWHeaderNavItemMobile title="digital_gold" text="digital_gold_info" symbol="Au" color="gold" link="/digital-metals-overview" />
                            <GWHeaderNavItemMobile title="digital_silver" text="digital_silver_info" symbol="Ag" color="silver" link="/digital-metals-overview" />
                            <GWHeaderNavItemMobile title="digital_platinum" text="digital_platinum_info" symbol="Pt" color="platinum" link="/digital-metals-overview" />
                            <GWHeaderNavItemMobile title="digital_palladium" text="digital_palladium_info" symbol="Pt" color="platinum" last={true} link="/digital-metals-overview" />
                        </GWHeaderNavMobile>
                    </GWHeaderItemMobile>
                    <GWHeaderItemMobile title="learn" onClick={() => setHeaderItemIndex(2)}>
                        <GWHeaderNavMobile setIsHeaderClose={() => setHeaderItemIndex(-1)} isHeaderOpen={headerItemIndex === 2} isNavComponentOpen={isOpen} setIsNavComponentOpen={setIsOpen}>
                            <GWHeaderNavItemMobile title="guides" text="guides_info" img="/assets/images/svg/guides.svg" color="grey200" link="/learn-overview" />
                            <GWHeaderNavItemMobile title="news" text="news_info" img="/assets/images/svg/newspaper-line.svg" color="grey200" link="/learn-overview" />
                            <GWHeaderNavItemMobile title="about_us" text="about_us_info" img="/assets/images/svg/building-4-line.svg" color="grey200" last={true} link="/about" />
                        </GWHeaderNavMobile>
                    </GWHeaderItemMobile>
                    <GWHeaderItemMobile title="support" onClick={() => setHeaderItemIndex(3)}>
                        <GWHeaderNavMobile setIsHeaderClose={() => setHeaderItemIndex(-1)} isHeaderOpen={headerItemIndex === 3} isNavComponentOpen={isOpen} setIsNavComponentOpen={setIsOpen}>
                            <GWHeaderNavItemMobile title="support" text="support_info" img="/assets/images/svg/star-line.svg" color="grey200" link="/invest-in-goldwise" />
                            <GWHeaderNavItemMobile title="contact" text="contact_info" img="/assets/images/svg/question-answer-line.svg" color="grey200" last={true} link="/contact" />
                        </GWHeaderNavMobile>
                    </GWHeaderItemMobile>
                    <GWHeaderItemMobile title="for_business" last={true} />
                    <Paper sx={{ padding: "24px 24px 52px 24px", borderRadius: "10px 10px 0 0", boxShadow: "0px -56px 140px rgba(14, 18, 100, 0.06)", position: "absolute", bottom: 0, width: "100%", left: 0 }}>
                        <GWButton text="get_app" bgColor="linear-gradient(180deg, #7A73FF 0%, #655CFF 100%)" color="white" variantStyles="default" location="common" sx={{width: "100%"}} />
                    </Paper>
                    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Paper>
            }
        </_GWHeaderMobile>
    )
}

export default GWHeaderMobile;
