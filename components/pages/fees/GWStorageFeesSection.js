import { ReactSVG } from "react-svg";
import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Inter } from "@next/font/google";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import GWSectionTable from "../../molecules/GWSectionTable";
import { useMediaQuery } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const metalLogo = (color, bgColor, name, symbol) => {
    return (
        <FlexContainer sx={{ alignItems: "center", gap: "24px", justifyContent: "start" }}>
            <Div sx={{ textTransform: name === "gold" ? "capitalize" : "uppercase", textAlign: "center", fontWeight: "500", lineHeight: "32px", width: "32px", height: "32px", borderRadius: "100%", backgroundColor: Colors[bgColor], color: Colors[color] }}>{symbol}</Div>
            <GWAvenirFont sx={{ textTransform: "capitalize", marginRight: "2px" }}>
                {name} <span style={{ color: Colors.grey400 }}>({symbol})</span>
            </GWAvenirFont>
        </FlexContainer>
    );
};

const GWStorageFeesSection = () => {
    const { t } = useTranslation("fees");
    const mobile = useMediaQuery("(max-width:1200px)");

    const data = [
        {
            vault: (
                <Div sx={{ display: "flex", gap: "12px" }}>
                    <ReactSVG src="/assets/images/svg/uk-flag.svg" /> <b> London, UK </b>
                </Div>
            ),
            minFee: "5€",
            annualFee: "",
            sectionIndicator: true,
        },
        {
            vault: metalLogo("white", "gold", t("gold"), "au"),
            minFee: "",
            annualFee: "0.15%",
        },
        {
            vault: metalLogo("white", "silver", t("silver"), "ag"),
            minFee: "",
            annualFee: "0.15%",
        },
        {
            vault: metalLogo("white", "platinum", t("platinum"), "pt"),
            minFee: "",
            annualFee: "0.15%",
        },
        {
            vault: metalLogo("white", "palladium", t("palladium"), "pl"),
            minFee: "",
            annualFee: "0.15%",
        },
        {
            vault: (
                <Div sx={{ display: "flex", gap: "12px" }}>
                    <ReactSVG src="/assets/images/svg/zurich-flag.svg" /> <b> Zurich, SW </b>
                </Div>
            ),
            minFee: "5€",
            annualFee: "",
            sectionIndicator: true,
        },
        {
            vault: metalLogo("white", "gold", t("gold"), "au"),
            minFee: "",
            annualFee: "0.15%",
        },
        {
            vault: metalLogo("white", "silver", t("silver"), "ag"),
            minFee: "",
            annualFee: "0.15%",
        },
        {
            vault: metalLogo("white", "platinum", t("platinum"), "pt"),
            minFee: "",
            annualFee: "0.15%",
        },
        {
            vault: metalLogo("white", "palladium", t("palladium"), "pl"),
            minFee: "",
            annualFee: "0.15%",
        },
    ];
    return (
        <Div sx={{ marginTop: mobile ? "56px" : "72px" }}>
            <GWAvenirFont tag="h3" variant="black" fontWeight="600" fontSize="24px">
                {t("storage_title")}
            </GWAvenirFont>
            <FlexContainer
                sx={{
                    marginTop: "12px",
                    marginBottom: mobile ? "32px" : "44px",
                    gap: "12px",
                }}
            >
                <ReactSVG src="/assets/images/svg/info.svg" />
                <Typography
                    className={inter.className}
                    sx={{
                        color: "#323254",
                        fontSize: "18px",
                        lineHeight: "28px",
                    }}
                >
                    {t("storage_description")}
                </Typography>
            </FlexContainer>
            <GWSectionTable data={data} columns={[{ title: t("vault") }, { title: t("min_vault_fee") }, { title: "Annual Fee" }]} />
        </Div>
    );
};

export default GWStorageFeesSection;
