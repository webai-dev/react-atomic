import { Typography } from "@mui/material";
import React from 'react';
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import GWBadge from "../../atoms/GWBadge";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWInfoList from "../../atoms/GWInfoList";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWCard from "../../atoms/GWCard";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import { ReactSVG } from "react-svg";
import GWInfoCard from "./GWInfoCard";
import GWListItem from "./GWListItem"
import Colors from "../../../colors/colors";
import GWCarousel from "../../molecules/GWCarousel";
import GWCarouselItem from "../../atoms/GWCarouselItem";

const GWLandingKeyFeatures = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector();

    return (
        <FlexContainer className="my-0" ref={ref} sx={{
            "@media (max-width: 700px)": {
                backgroundColor: Colors.grey100
            }
        }}>
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    marginTop: "120px",
                    paddingBottom: "120px",
                    flexDirection: "column",
                    "@media (max-width: 700px)": {
                        marginTop: "56px",
                        paddingBottom: "0px",
                    }
                }}>
                <Div className="mx-auto">
                    <GWBadge text={t('key_feature')} variant="emphasis" />
                </Div>
                <FlexContainer className="row" sx={{paddingTop: width >= 1200 ? "40px" : "32px"}}>
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2" screenWidth={width} fontSize={width >= 1200 ? "72px" : "36px"}>{t('key_feature_heading')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <Div className="row" style={{ marginTop: width >= 1200 ? "24px" : "16px" }}>
                    <FlexContainer className="col-md-7 mx-auto">
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontSize: 18,
                                color: "#323254",
                                "@media (max-width: 700px)": {
                                    marginX: "24px"
                                }
                            }}>{t('key_features_heading_info')}</Typography>
                    </FlexContainer>
                </Div>
                <Div style={{ marginTop: width >= 1200 ? "72px" : "56px" }}>
                    <FlexContainer sx={{
                        height: "100%",
                        gap: "35px",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        "@media (max-width: 700px)": {
                            flexDirection: "column",
                            gap: "24px"
                        }
                    }}>
                        <Div sx={{ flex: 3, height: "inherit", padding: width >= 1200 ? "0" : "0 24px" }}>
                            <GWCard
                                padding={width >= 1200 ? "32px" : "10px"}
                                borderRadius="25px"
                                sx={{
                                    height: width >= 1200 ? "inherit" : "310px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                borderColor="rgba(127, 129, 140, 0.18)"
                            >
                                <Div sx={{
                                    height: "inherit",
                                    width: "100%",
                                    borderRadius: "16px",
                                    border: `3px solid #F5F5F7`,
                                    backgroundSize: "90%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundImage: "url(/assets/images/png/inner-star.png)",

                                    "@media (max-width: 700px)": {
                                        border: "none",
                                        backgroundSize: "310px",
                                    }
                                }} />
                            </GWCard>
                        </Div>
                        <Div sx={{ flex: 2, height: "inherit", padding: width >= 1200 ? "0" : "0 24px" }}>
                            <GWInfoCard
                                head="best_price"
                                body="best_price_info"
                                footer="about_best_prices"
                                location="home"
                            />
                        </Div>
                    </FlexContainer>
                </Div>
                <FlexContainer sx={{
                    marginTop: "35px",
                    "@media (max-width: 700px)": {
                        marginTop: "0px"
                    }
                }}>
                    <FlexContainer sx={{
                        marginTop: "35px",
                        height: "auto",
                        gap: "35px",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        "@media (max-width: 700px)": {
                            flexDirection: "column-reverse",
                            gap: "24px",
                            marginTop: "24px"
                        }
                    }}>
                        <Div sx={{ backgroundSize: "contain", height: "100%", flex: 2, padding: width >= 1200 ? "0px" : "0 24px" }}>
                            <GWInfoCard
                                head="multiple_order_types"
                                body="multiple_order_types_info"
                                footer="about_order_types"
                                location="home"
                            />
                        </Div>
                        <Div sx={{ flex: 3, height: "100%", padding: width >= 1200 ? "0px" : "0 24px" }}>
                            <GWCard variant="emphasis" borderRadius="25px" padding={width >= 1200 ? "40px 32px" : "12px"} borderColor="2px solid rgba(127, 129, 140, 0.18)" sx={{ height: "100%" }}>
                                <FlexContainer sx={{ flexDirection: "column", gap: "8px" }}>
                                    <GWListItem
                                        icon="/assets/images/png/timer-2-line.svg"
                                        text="order_type"
                                        badge={<GWBadge text="conditional_limit" screenWidth={width} color="navy" bgcolor="teal" variant="plain" />}
                                        location="home"
                                        screenWidth={width}
                                    />
                                    <GWListItem
                                        icon="/assets/images/svg/target.svg"
                                        text="target_price"
                                        badge={<GWBadge text="€1,450.00 t/oz" color="navy" bgcolor="purple" variant="plain" />}
                                        screenWidth={width}
                                    />
                                    <GWListItem
                                        icon="/assets/images/svg/timer-2-fill.svg"
                                        text="duration"
                                        badge={<GWBadge text="good_till_date" color="navy" bgcolor="#F1A55D" variant="plain" />}
                                        location="home"
                                        screenWidth={width}
                                    />
                                    <GWListItem
                                        icon="/assets/images/svg/calendar-line.svg"
                                        text="end_date"
                                        badge={<GWBadge text="01 JAN 2023" color="navy" bgcolor="#1C75BA" variant="plain" />}
                                        location="home"
                                        screenWidth={width}
                                    />
                                </FlexContainer>
                            </GWCard>
                        </Div>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer sx={{
                    marginTop: "35px",
                    "@media (max-width: 700px)": {
                        marginTop: "0px"
                    }
                }}>
                    <FlexContainer sx={{
                        marginTop: "35px",
                        height: "100%",
                        gap: "35px",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        "@media (max-width: 700px)": {
                            flexDirection: "column",
                            gap: "24px",
                            marginTop: "24px"
                        }
                    }}>
                        <Div sx={{
                            flex: 3,
                            height: "inherit",
                            padding: "0px",
                            "@media (max-width: 700px)": {
                                padding: "0 24px",
                                flex: 1,
                            }
                        }}>
                            <GWCard
                                padding={width >= 1200 ? "32px" : "0px"}
                                borderRadius="25px"
                                sx={{
                                    height: width >= 1200 ? "inherit" : "310px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                                borderColor="rgba(127, 129, 140, 0.18)"
                            >
                                <Div sx={{
                                    height: "inherit",
                                    width: "100%",
                                    borderRadius: "16px",
                                    border: `3px solid #F5F5F7`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "bottom",
                                    backgroundImage: "url(/assets/images/png/graph.png)",

                                    "@media (max-width: 700px)": {
                                        border: "none",
                                        backgroundSize: "contain",
                                    }
                                }} />
                            </GWCard>
                        </Div>

                        <Div sx={{ flex: 2, height: "inherit", padding: width >= 1200 ? "0" : "0 24px" }}>
                            <GWInfoCard
                                head="order_and_portfolio"
                                body="order_and_portfolio_info"
                                footer="about_order_and_portfolio"
                                location="home"
                            />
                        </Div>
                    </FlexContainer>
                </FlexContainer>
                {
                    width >= 1200 ?
                        <FlexContainer sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "35px",
                            marginTop: "70px",
                            flexDirection: width >= 1200 ? "row" : "column",
                            height: "100%"
                        }}>
                            <Div style={{ flex: 1, height: "inherit" }}>
                                <GWCard variant="plain" padding="32px" borderRadius="25px" sx={{ height: "inherit" }}>
                                    <img src="/assets/images/png/line-graph.png" style={{ objectFit: "cover", width: "100%" }} alt="line graph" />
                                    <Div sx={{ marginTop: "32px" }}>
                                        <GWAvenirFont fontSize="18px" fontWeight="500" >{t('advanced_chart_indicators')}</GWAvenirFont>
                                    </Div>
                                    <Div sx={{ marginTop: "12px" }}>
                                        <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('advanced_chart_indicators_info')}</GWAvenirFont>
                                    </Div>
                                </GWCard>
                            </Div>
                            <Div style={{ flex: 1, height: "inherit" }}>
                                <GWCard variant="plain" padding="32px" borderRadius="25px" sx={{ height: "inherit" }}>
                                    <GWCard variant="plain" padding="24px 20px" borderRadius="16px" sx={{ height: "auto" }}>
                                        <FlexContainer sx={{ gap: "10px", flexDirection: "column" }}>
                                            <GWCard variant="plain" borderRadius="12px" padding="0" sx={{ height: "52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                                <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center" }}>
                                                    <FlexContainer sx={{ background: Colors.platinum, width: "24px", height: "24px", borderRadius: "50%", marginLeft: "16px", marginRight: "8px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                                                        <GWAvenirFont fontSize="10px" fontWeight="800" color="white" >Pt</GWAvenirFont>
                                                    </FlexContainer>
                                                    <FlexContainer sx={{ flexDirection: "column" }}>
                                                        <GWAvenirFont sx={{ fontWeight: 500, fontSize: "10px", color: Colors.grey500 }}>{t('platinum_pt')}</GWAvenirFont>
                                                        <GWAvenirFont sx={{ fontWeight: 400, fontSize: "10px", color: Colors.grey400 }}>{t('price_alert_triggered')}</GWAvenirFont>
                                                    </FlexContainer>
                                                </FlexContainer>
                                            </GWCard>

                                            <GWCard variant="plain" borderRadius="12px" padding="0" sx={{ height: "52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                                <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center" }}>
                                                    <FlexContainer sx={{ background: Colors.gold, width: "24px", height: "24px", borderRadius: "50%", marginLeft: "16px", marginRight: "8px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                                                        <GWAvenirFont fontSize="10px" fontWeight="800" color="white" >Au</GWAvenirFont>
                                                    </FlexContainer>
                                                    <FlexContainer sx={{ flexDirection: "column" }}>
                                                        <GWAvenirFont sx={{ fontWeight: 500, fontSize: "10px", color: Colors.grey500 }}>{t('gold_au')}</GWAvenirFont>
                                                        <GWAvenirFont sx={{ fontWeight: 400, fontSize: "10px", color: Colors.grey400 }}>{t('price_alert_triggered')}</GWAvenirFont>
                                                    </FlexContainer>
                                                </FlexContainer>
                                            </GWCard>

                                            <GWCard variant="plain" borderRadius="12px" padding="0" sx={{ height: "52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                                <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center" }}>
                                                    <FlexContainer sx={{ background: Colors.silver, width: "24px", height: "24px", borderRadius: "50%", marginLeft: "16px", marginRight: "8px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                                                        <GWAvenirFont fontSize="10px" fontWeight="800" color="white" >Ag</GWAvenirFont>
                                                    </FlexContainer>
                                                    <FlexContainer sx={{ flexDirection: "column" }}>
                                                        <GWAvenirFont sx={{ fontWeight: 500, fontSize: "10px", color: Colors.grey500 }}>{t('silver_ag')}</GWAvenirFont>
                                                        <GWAvenirFont sx={{ fontWeight: 400, fontSize: "10px", color: Colors.grey400 }}>{t('price_alert_triggered')}</GWAvenirFont>
                                                    </FlexContainer>
                                                </FlexContainer>
                                            </GWCard>
                                        </FlexContainer>
                                    </GWCard>
                                    <Div sx={{ marginTop: "32px" }}>
                                        <GWAvenirFont fontSize="18px" fontWeight="500" >{t('multi_channel_price')}</GWAvenirFont>
                                    </Div>
                                    <Div sx={{ marginTop: "12px" }}>
                                        <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('multi_channel_price_info')}</GWAvenirFont>
                                    </Div>
                                </GWCard>
                            </Div>
                            <Div style={{ flex: 1, height: "inherit" }}>
                                <GWCard variant="plain" padding="32px" borderRadius="25px" sx={{ height: "inherit" }}>
                                    <img src="/assets/images/png/flow-diagram.png" style={{ objectFit: "cover", width: "100%" }} alt="Flow diagram" />
                                    <Div sx={{ marginTop: "32px" }}>
                                        <GWAvenirFont fontSize="18px" fontWeight="500" >{t('instant_transfers')}</GWAvenirFont>
                                    </Div>
                                    <Div sx={{ marginTop: "12px" }}>
                                        <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('instant_transfers_info')}</GWAvenirFont>
                                    </Div>
                                </GWCard>
                            </Div>
                        </FlexContainer>
                        :
                        <GWCarousel sx={{ paddingLeft: "0px", marginTop: "48px" }}>
                            <GWCarouselItem sx={{ maxWidth: "512px", minHeight: "496px" }}>
                                <Div sx={{
                                    width: "100%",
                                    height: 224,
                                    border: `3px solid ${Colors.grey200}`,
                                    borderRadius: "16px",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "bottom",
                                    backgroundImage: `url(/assets/images/png/line-graph.png)`,
                                }} />
                                <Div sx={{ marginTop: "32px" }}>
                                    <GWAvenirFont tag="h4" fontSize="18px" fontWeight="500" >{t('advanced_chart_indicators')}</GWAvenirFont>
                                </Div>
                                <Div sx={{ marginTop: "12px" }}>
                                    <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('advanced_chart_indicators_info')}</GWAvenirFont>
                                </Div>
                            </GWCarouselItem>
                            <GWCarouselItem sx={{ maxWidth: "512px", minHeight: "496px" }}>
                                <GWCard variant="plain" padding="24px 20px" borderRadius="16px">
                                    <FlexContainer sx={{ gap: "10px", flexDirection: "column" }}>
                                        <GWCard variant="plain" borderRadius="12px" padding="0" sx={{ height: "52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center" }}>
                                                <FlexContainer sx={{ background: Colors.platinum, width: "24px", height: "24px", borderRadius: "50%", marginLeft: "16px", marginRight: "8px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                                                    <GWAvenirFont fontSize="10px" fontWeight="800" color="white" >Pt</GWAvenirFont>
                                                </FlexContainer>
                                                <FlexContainer sx={{ flexDirection: "column" }}>
                                                    <GWAvenirFont sx={{ fontWeight: 500, fontSize: "10px", color: Colors.grey500 }}>{t('platinum_pt')}</GWAvenirFont>
                                                    <GWAvenirFont sx={{ fontWeight: 400, fontSize: "10px", color: Colors.grey400 }}>{t('price_alert_triggered')}</GWAvenirFont>
                                                </FlexContainer>
                                            </FlexContainer>
                                        </GWCard>

                                        <GWCard variant="plain" borderRadius="12px" padding="0" sx={{ height: "52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center" }}>
                                                <FlexContainer sx={{ background: Colors.gold, width: "24px", height: "24px", borderRadius: "50%", marginLeft: "16px", marginRight: "8px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                                                    <GWAvenirFont fontSize="10px" fontWeight="800" color="white" >Au</GWAvenirFont>
                                                </FlexContainer>
                                                <FlexContainer sx={{ flexDirection: "column" }}>
                                                    <GWAvenirFont sx={{ fontWeight: 500, fontSize: "10px", color: Colors.grey500 }}>{t('gold_au')}</GWAvenirFont>
                                                    <GWAvenirFont sx={{ fontWeight: 400, fontSize: "10px", color: Colors.grey400 }}>{t('price_alert_triggered')}</GWAvenirFont>
                                                </FlexContainer>
                                            </FlexContainer>
                                        </GWCard>

                                        <GWCard variant="plain" borderRadius="12px" padding="0" sx={{ height: "52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                            <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center" }}>
                                                <FlexContainer sx={{ background: Colors.silver, width: "24px", height: "24px", borderRadius: "50%", marginLeft: "16px", marginRight: "8px", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                                                    <GWAvenirFont fontSize="10px" fontWeight="800" color="white" >Ag</GWAvenirFont>
                                                </FlexContainer>
                                                <FlexContainer sx={{ flexDirection: "column" }}>
                                                    <GWAvenirFont sx={{ fontWeight: 500, fontSize: "10px", color: Colors.grey500 }}>{t('silver_ag')}</GWAvenirFont>
                                                    <GWAvenirFont sx={{ fontWeight: 400, fontSize: "10px", color: Colors.grey400 }}>{t('price_alert_triggered')}</GWAvenirFont>
                                                </FlexContainer>
                                            </FlexContainer>
                                        </GWCard>
                                    </FlexContainer>
                                </GWCard>
                                <Div sx={{ marginTop: "32px" }}>
                                    <GWAvenirFont tag="h4" fontSize="18px" fontWeight="500" >{t('multi_channel_price')}</GWAvenirFont>
                                </Div>
                                <Div sx={{ marginTop: "12px" }}>
                                    <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('multi_channel_price_info')}</GWAvenirFont>
                                </Div>
                            </GWCarouselItem>
                            <GWCarouselItem sx={{ maxWidth: "512px", minHeight: "496px" }}>
                                <Div sx={{
                                    width: "100%",
                                    height: 224,
                                    border: `3px solid ${Colors.grey200}`,
                                    borderRadius: "16px",
                                    backgroundSize: "80%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundImage: `url(/assets/images/png/flow-diagram.png)`,
                                }} />
                                <Div sx={{ marginTop: "32px" }}>
                                    <GWAvenirFont tag="h4" fontSize="18px" fontWeight="500" >{t('instant_transfers')}</GWAvenirFont>
                                </Div>
                                <Div sx={{ marginTop: "12px" }}>
                                    <GWAvenirFont fontSize="18px" color="grey400" fontWeight="400" >{t('instant_transfers_info')}</GWAvenirFont>
                                </Div>
                            </GWCarouselItem>
                        </GWCarousel>
                }
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWLandingKeyFeatures;