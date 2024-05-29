import FlexContainer from "../../styled/FlexContainer";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import Colors from "../../../colors/colors";
import { Inter } from "@next/font/google";
import GWCard from "../../atoms/GWCard";
import Div from "../../styled/Div";

const inter = Inter({ subsets: ["latin"] })
const GWBannerSection = () => {
    const { t } = useTranslation("for-business")
    const { ref } = useResizeDetector();
    const mobile = useMediaQuery("(max-width:1200px)");

    return (
        <Div
            ref={ref}
            sx={{
                backgroundImage: `url(/assets/images/png/for-business-banner-bg.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                "@media (max-width: 700px)": {
                    padding: "56px 24px 0px",
                    backgroundPositionY: "-30em",
                }
            }}
        >
            <FlexContainer
                ref={ref}
                className="my-0"
                sx={{
                    marginBottom: "70px"
                }}
            >
                <FlexContainer
                    className="col-md-8 mx-auto"
                    sx={{
                        marginTop: "165px",
                        flexDirection: "column",
                        "@media (max-width: 1000px)": {
                            marginTop: "56px"
                        }
                    }}
                >
                    <FlexContainer
                        sx={{
                            maxWidth: " 850px",
                            margin: "40px auto auto",
                            "@media (max-width: 1000px)": {
                                marginTop: "32px",
                            }
                        }}
                    >
                        <FlexContainer>
                            <GWHeroHeadingText
                                variant="h1"
                                sx={{
                                    color: Colors.white,
                                    "@media (max-width: 1000px)": {
                                        fontSize: "46px",
                                    }
                                }}
                            >
                                {t("banner_title")}
                            </GWHeroHeadingText>
                        </FlexContainer>
                    </FlexContainer>
                    <Box
                        className="row"
                        sx={{
                            "@media (max-width: 1000px)": {
                                marginTop: "16px !important",
                            }
                        }}
                    >
                        <FlexContainer className="col-md-7 mx-auto">
                            <Typography
                                className={inter.className}
                                variant="h4"
                                sx={{
                                    marginTop: "24px",
                                    textAlign: "center",
                                    fontSize: 18,
                                    fontWeight: 400,
                                    color: Colors.grey300,
                                    "@media (max-width: 700px)": {
                                        marginX: "24px"
                                    }
                                }}
                            >
                                {t("banner_sub_title")}
                            </Typography>
                        </FlexContainer>
                    </Box>
                </FlexContainer>
            </FlexContainer>
            <Div sx={{
                margin: "70px auto",
                width: "100%",
                position: "relative",
                ":before": {
                    content: "''",
                    zIndex: "0",
                    backgroundImage: "linear-gradient(107.27deg, #D4D1FF 33.59%, #FFFFFF 57.24%, #F1BBFF 79.79%)",
                    position: "absolute",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    top: "-255px",
                    left: `calc(50% - 265px)`,
                    height: mobile ? "628px" : "1094px",
                    aspectRatio: "1/2",
                    borderRadius: "6453px",
                    filter: "blur(120px)",
                    mixBlendMode: "overlay",
                    width: "548px",
                    transform: "rotate(-90deg)",
                    "@media (max-width: 1000px)": {
                        transform: "rotate(0deg)",
                        left: "calc(50% - 281px)",
                        top: "0"
                    }
                }
            }}
            >
                <Div
                    sx={{
                        margin: "120px auto",
                        width: "100%",
                        position: "relative",
                        ":before": {
                            content: "''",
                            zIndex: "0",
                            backgroundImage: "linear-gradient(107.27deg, #D4D1FF 33.59%, #FFFFFF 57.24%, #F1BBFF 79.79%)",
                            position: "absolute",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            top: "-255px",
                            left: `calc(50% - 265px)`,
                            height: mobile ? "628px" : "1094px",
                            aspectRatio: "1/2",
                            borderRadius: "6453px",
                            filter: "blur(120px)",
                            width: "548px",
                            transform: "rotate(-90deg)",
                            "@media (max-width: 1000px)": {
                                transform: "rotate(0deg)",
                                left: "calc(50% - 281px)",
                                top: "0"
                            }
                        }
                    }}
                >
                    <GWCard
                        borderRadius="25px"
                        sx={{
                            margin: "0 auto",
                            background: "#01041A",
                            height: "565px",
                            width: "100%",
                            maxWidth: "1280px",
                            zIndex: "1",
                            position: "relative"
                        }}
                    >

                    </GWCard>
                </Div>
            </Div>
        </Div>
    )
}

export default GWBannerSection
