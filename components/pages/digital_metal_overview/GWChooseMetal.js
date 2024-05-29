import { useTranslation } from "next-i18next";
import { Typography, useMediaQuery } from "@mui/material";
import { Inter } from "@next/font/google";
import Div from "../../styled/Div";
import Colors from "../../../colors/colors";
import FlexContainer from "../../styled/FlexContainer";
import GWBadge from "../../atoms/GWBadge";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWMetalCard from "../../molecules/GWMetalCard";

const inter = Inter({ subsets: ["latin"] });

const items = [
    {
        name: "Digital Gold",
        symbol: "Au",
        link: "/metals/au"
    },
    {
        name: "Digital Silver",
        symbol: "Ag",
        link: "/metals/ag"
    },
    {
        name: "Digital Platinum",
        symbol: "Pt",
        link: "/metals/pt"
    },
    {
        name: "Digital Palladium",
        symbol: "Pd",
        link: "/metals/pd"
    }
]
const GWChooseMetal = () => {

    const { t } = useTranslation(["digital_metal_overview", "fees"]);
    const fullScreen = useMediaQuery("(max-width:1200px)");

    return (<Div sx={{ backgroundColor: Colors.grey100, padding: fullScreen ? "120px 24px" : "56px 24px", maxWidth: "1060px", margin: "0 auto" }}>
        <FlexContainer sx={{ margin: "0 auto", flexDirection: "column", maxWidth: "1060px", alignItems: "center" }}>
            <Div className="mx-auto">
                <GWBadge text={t("choose_metal")} variant="emphasis" />
            </Div>

            <GWAvenirFont tag="h2" color={Colors.navy} fontSize={fullScreen ? "72px" : "46px"} variant="black" fontWeight="800" sx={{ lineHeight: fullScreen ? "88px" : "normal", letterSpacing: "-1px", marginTop: fullScreen ? "40px" : "32px", padding: fullScreen ? "0 110px" : "0", textAlign: "center" }}>
                {t("choose_metal_title")}
            </GWAvenirFont>
            <Typography className={inter.className} sx={{ marginTop: "24px", textAlign: "center", padding: fullScreen ? "0 220px" : "0px", fontSize: "18px", lineHeight: "28px" }}>
                {t("choose_metal_description")}
            </Typography>
        </FlexContainer>
        <FlexContainer sx={{margin: "77px auto"}}>
            <FlexContainer sx={{ alignItems: "center", gap: "27px" }}>
                {items && items.map(i =>
                    <GWMetalCard
                        name={i.name}
                        symbol={i.symbol}
                        detailLink={i.link}
                    />)}
            </FlexContainer>
        </FlexContainer>
    </Div>)
}

export default GWChooseMetal;
