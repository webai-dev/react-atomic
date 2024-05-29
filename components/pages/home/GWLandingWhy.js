import { Box, Typography } from "@mui/material";
import React from 'react';
import { useTranslation } from "next-i18next";
import { useResizeDetector } from "react-resize-detector";
import GWBadge from "../../atoms/GWBadge";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWInfoList from "../../atoms/GWInfoList";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWLandingWhy = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector();

    return (
        <FlexContainer className="my-0" ref={ref} style={{ background: "#FBFBFD" }}>
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    marginTop: "165px",
                    flexDirection: "column",
                    "@media (max-width: 1000px)": {
                        marginTop: "56px"
                    }
                }}>
                <Div className="mx-auto">
                    <GWBadge text={t('why_goldwise')} variant="emphasis" />
                </Div>
                <FlexContainer sx={{
                    marginTop: "40px",
                    "@media (max-width: 1000px)": {
                        marginTop: "32px",
                    }
                }}>
                    <FlexContainer className="">
                        <GWHeroHeadingText variant="h2" fontSize="56px">{t('build_with_passion')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
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
                            }}>{t('we_built_the_goldwise')}</Typography>
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
                    <Div sx={{ flex: 1, height: "100%", flexWrap: "wrap", margin: width >= 1200 ? "0" : "0 24px" }}>
                        <GWInfoList
                            title={`${t('its_easy')}`}
                            data={[
                                t('free_to_join'),
                                t('trade_from_20'),
                                t('access_and_trading'),
                                t('multi_currency'),
                                t('ios_android')
                            ]}
                        />
                    </Div>
                    <Div sx={{ flex: 1, height: "100%", flexWrap: "wrap", margin: "0 24px" }}>
                        <GWInfoList
                            title={t('its_secure')}
                            data={[
                                t('100_safeguard'),
                                t('allocated_metals'),
                                t('ethically_sourced'),
                                t('high_secure'),
                                t('enterprise_infrastructure')
                            ]}
                        />
                    </Div>

                    <Div sx={{ flex: 1, height: "100%", flexWrap: "wrap", margin: "0 24px" }}>
                        <GWInfoList
                            title={t('its_efficient')}
                            data={[
                                t('multiple_precious'),
                                t('best_price_from_over_12'),
                                t('deep_market'),
                                t('low_trading_and_storage'),
                                t('tax_efficient')
                            ]}
                        />
                    </Div>

                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWLandingWhy;