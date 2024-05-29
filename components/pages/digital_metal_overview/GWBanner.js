import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWBadge from "../../atoms/GWBadge";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import { Box, Typography } from "@mui/material";
import GWMediumCard from "../../molecules/GWMediumCard";
import Colors from "../../../colors/colors";

const GWBanner = () => {
    const { t } = useTranslation("digital_metal_overview")
    const { width, ref } = useResizeDetector();

    return (
        <Div
            ref={ref}
            sx={{
                backgroundColor: "#FBFBFD",
                backgroundImage: `url(/assets/images/png/hero_vector.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "initial",
                "@media (max-width: 700px)": {
                    padding: "56px 24px 0px",
                    backgroundColor: Colors.grey100,
                    backgroundPositionY: "-30em",
                }
            }}
        >
            <FlexContainer
                className="my-0"
                ref={ref}>
                <FlexContainer
                    className="col-md-8 mx-auto"
                    sx={{
                        marginTop: "165px",
                        flexDirection: "column",
                        "@media (max-width: 1000px)": {
                            marginTop: "56px"
                        }
                    }}>
                    <Div
                        className="mx-auto">
                        <GWBadge text={t("banner")} variant="emphasis" />
                    </Div>
                    <FlexContainer
                        sx={{
                        marginTop: "40px",
                        "@media (max-width: 1000px)": {
                            marginTop: "32px",
                        }
                    }}>
                        <FlexContainer>
                            <GWHeroHeadingText variant="h1" fontSize="56px">{t("banner_title")}</GWHeroHeadingText>
                        </FlexContainer>
                    </FlexContainer>
                    <Box
                        className="row"
                        sx={{
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
                                }}>{t("banner_description")}</Typography>
                        </FlexContainer>
                    </Box>
                    <FlexContainer
                        sx={{
                            flexDirection: width >= 1200 ? "row" : "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "35px",
                            marginTop: "72px",
                            marginBottom: "126px",
                            "@media (max-width: 700px)": {
                                marginTop: "56px",
                                marginBottom: "56px",
                                gap: "24px"
                            }
                        }}
                    >
                        <Div sx={{ flex: 1, height: "100%", flexWrap: "wrap", margin: width >= 1200 ? "0" : "0 24px", width: width >= 1200 ? "auto": "100%" }}>
                            <GWMediumCard title="Metals"
                                          items={[
                                              "Gold",
                                              "Silver",
                                              "Platinum",
                                              "Palladium",
                                          ]} />
                        </Div>
                        <Div sx={{ flex: 1, height: "100%", flexWrap: "wrap", margin: width >= 1200 ? "0" : "0 24px", width: width >= 1200 ? "auto": "100%" }}>
                            <GWMediumCard title="Vaults"
                                          items={[
                                              "London, UK",
                                              "Zurich, Switzerland",
                                          ]} />
                        </Div>

                        <Div sx={{ flex: 1, height: "100%", flexWrap: "wrap", margin:  width >= 1200 ? "0" : "0 24px", width: width >= 1200 ? "auto": "100%" }}>
                            <GWMediumCard title="Currencies"
                                          items={[
                                              "British Pounds",
                                              "Euros",
                                          ]} />
                        </Div>

                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Div>
    )
};
export default GWBanner
