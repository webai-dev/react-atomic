import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from 'react';
import { useResizeDetector } from "react-resize-detector";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";
import GWCard from "../../atoms/GWCard";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWProductsCategories = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector();

    return (
        <FlexContainer className="my-0" ref={ref} sx={{ background: "#FBFBFD" }}>
            <FlexContainer
                className="col-md-8 mx-auto"
                sx={{
                    paddingTop: "120px",
                    paddingBottom: "120px",
                    flexDirection: "column",
                    "@media (max-width: 700px)": {
                        paddingTop: "71px",
                        paddingBottom: "56px",
                    }
                }}>
                <Div className="mx-auto mb-5">
                    <GWBadge text="products" variant="emphasis" />
                </Div>
                <FlexContainer sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "40px",
                    "@media (max-width: 700px)": {
                        marginTop: "-16px"
                    }
                }}>
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2" screenWidth={width} fontSize="56px">{t('our_product_categories')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <Div className="row" style={{ marginTop: "24px" }}>
                    <FlexContainer className="col-md-7 mx-auto">
                        <Typography sx={{
                            textAlign: "center", fontSize: 18, color: "#323254",
                            "@media (max-width: 700px)": {
                                marginX: "24px"
                            }
                        }}>{t('our_product_categories_info')}</Typography>
                    </FlexContainer>
                </Div>
                <FlexContainer sx={{
                    flexDirection: "row",
                    gap: "24px",
                    height: "100%",
                    padding: "initial",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "86px",
                    "@media (max-width: 700px)": {
                        marginTop: "56px",
                        flexDirection: "column",
                        padding: "0 24px",
                    }
                }}>
                    <Div style={{ flex: 4, height: "inherit" }}>
                        <GWCard padding="40px 32px 50px" borderRadius="25px">
                            <GWAvenirFont tag="h3" fontSize="22px" fontWeight="800">
                                {t('digital_metals')}
                            </GWAvenirFont>
                            <Div sx={{ marginTop: "12px" }}>
                                <GWAvenirFont fontSize="18px" fontWeight="400" color="grey400">
                                    {t('digital_metals_info')}
                                </GWAvenirFont>
                            </Div>
                            <Div sx={{ marginTop: "72px" }}>
                                <GWAvenirFont fontSize="18px" fontWeight="400" color="purple">
                                    {t('view_range')}
                                </GWAvenirFont>
                            </Div>
                        </GWCard>
                    </Div>
                    <Div style={{ flex: 3, height: "inherit" }}>
                        <GWCard padding="40px 32px 50px" borderRadius="25px">
                            <GWBadge bgcolor="purple" padding="8px 12px" color="white" variant="emphasis" text="coming_soon" />
                            <Div sx={{ marginTop: "20px" }}>
                                <GWAvenirFont tag="h3" fontSize="22px" fontWeight="800">
                                    {t('bullion_bar_coins')}
                                </GWAvenirFont>
                            </Div>
                            <Div sx={{ marginTop: "12px" }}>
                                <GWAvenirFont fontSize="18px" fontWeight="400" color="grey400">
                                    {t('bullion_bar_coins_info')}
                                </GWAvenirFont>
                            </Div>
                            <Div sx={{ marginTop: "24px" }}>
                                <GWAvenirFont fontSize="18px" fontWeight="400" color="purple">
                                    {t('learn_more')}
                                </GWAvenirFont>
                            </Div>
                        </GWCard>
                    </Div>
                </FlexContainer>
                <FlexContainer sx={{
                    paddingTop: "72px",
                    "@media (max-width: 700px)": {
                        paddingTop: "56px"
                    }
                }}>
                    <GWButton text="view_our_format_comparison" bgColor="navy" color="white" />
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWProductsCategories;