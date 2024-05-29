import { useTranslation } from "next-i18next";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { ReactSVG } from "react-svg";
import Div from "../../styled/Div";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import FlexContainer from "../../styled/FlexContainer";
import GWSectionTable from "../../molecules/GWSectionTable";


const metalLogo = (color, bgColor, name, symbol) => {
    return (
        <FlexContainer sx={{ alignItems: "center", gap: "24px", justifyContent: "start" }}>
            <Div sx={{ textTransform: name === "gold" ? "capitalize" : "uppercase", textAlign: "center", fontWeight: "500", lineHeight: "32px", width: "32px", height: "32px", borderRadius: "100%", backgroundColor: Colors[ bgColor ], color: Colors[ color ] }}>{symbol}</Div>
            <GWAvenirFont sx={{ textTransform: "capitalize", marginRight: "2px" }}>
                {name} <span style={{ color: Colors.navy }}>({symbol})</span>
            </GWAvenirFont>
        </FlexContainer>
    );
};
const GWCompare = () => {
    const { t } = useTranslation(["digital_metal_overview", "fees"]);
    const fullScreen = useMediaQuery("(max-width:1200px)");

    const data = [
        {
            product: metalLogo("white", "gold", t("Gold"), "Au"),
            explanation_one: () => (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_two: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_three: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_four: (<Div sx={{ textAlign: "center" }}><GWAvenirFont sx={{ color: Colors.navy }}>Too Expensive</GWAvenirFont></Div>),
        },
        {
            product: metalLogo("white", "gold", t("Gold"), "Au"),
            explanation_one: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_two: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_three: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_four: (<Div sx={{ textAlign: "center" }}><GWAvenirFont sx={{ color: Colors.navy }}>Too Expensive</GWAvenirFont></Div>),
        },
        {
            product: metalLogo("white", "gold", t("Gold"), "Au"),
            explanation_one: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_two: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_three: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_four: (<Div sx={{ textAlign: "center" }}><GWAvenirFont sx={{ color: Colors.navy }}>Too Expensive</GWAvenirFont></Div>),
        },
        {
            product: metalLogo("white", "gold", t("Gold"), "Au"),
            explanation_one: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_two: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_three: (
                <Div sx={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <ReactSVG src="/assets/images/svg/check-circle-fill.svg" />
                </Div>
            ),
            explanation_four: (<Div sx={{ textAlign: "center" }}><GWAvenirFont sx={{ color: Colors.navy }}>Too Expensive</GWAvenirFont></Div>),
        },
    ];

    return (<Div sx={{
        backgroundColor: Colors.grey100,
        padding: fullScreen ? "120px 24px" : "56px 24px",
        backgroundImage: `url(/assets/images/png/compare_bg.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        flexDirection: "column",
        backgroundRepeat: "repeat-y"
    }}>
        <FlexContainer sx={{ margin: "0 auto", flexDirection: "column", maxWidth: "1060px", alignItems: "center" }}>
            <Div className="mx-auto">
                <GWBadge text={t("compare")} variant="emphasis" />
            </Div>

            <GWAvenirFont tag="h2" color={Colors.navy} fontSize={fullScreen ? "72px" : "46px"} variant="black" fontWeight="800" sx={{ lineHeight: fullScreen ? "88px" : "normal", letterSpacing: "-1px", marginTop: fullScreen ? "40px" : "32px", padding: fullScreen ? "0 110px" : "0", textAlign: "center" }}>
                {t("compare_title")}
            </GWAvenirFont>

            <Box className="row" sx={{
                marginTop: "24px",
                "@media (max-width: 1000px)": {
                    marginTop: "16px !important",
                }
            }}>
                <FlexContainer className="col-md-7 mx-auto">
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: 18,
                            color: "#323254",
                            "@media (max-width: 700px)": {
                                marginX: "24px"
                            }
                        }}>{t("compare_description")}</Typography>
                </FlexContainer>
            </Box>
            <Div className="mx-auto" sx={{
                width: "100%",
                marginTop: "24px",
                "@media (max-width: 1000px)": {
                    marginTop: "16px !important",
                }
            }}>
                <GWSectionTable data={data} columns={[{ title: t("Product") }, { title: t("Explanation One") }, { title: "Explanation Two" }, { title: "Explanation Three" }, { title: "Explanation Four" }]} />
            </Div>
        </FlexContainer>
    </Div>)
}

export default GWCompare;
