import { useTranslation } from "next-i18next";
import React from 'react';
import { useResizeDetector } from "react-resize-detector";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";
import GWCard from "../../atoms/GWCard";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWBusinessSection = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector();

    return (
        <FlexContainer ref={ref} sx={{ marginTop: "50px", flexDirection: "column", backgroundColor: Colors.navy, backgroundImage: "url(/assets/images/png/nightly-tiles.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
            <FlexContainer
                className="py-md-5 col-md-8 mx-auto"
                sx={{
                    flexDirection: "column",
                }}>
                <Div className="mx-auto mb-5" sx={{
                    marginTop: "72px",
                    "@media (max-width: 700px)": {
                        marginTop: "56px"
                    }
                }}>
                    <GWBadge text={t('goldwise_for_business')} variant="emphasis" />
                </Div>
                <FlexContainer className="row">
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2" sx={{ color: Colors.white }}>{t('easily_securely')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
            <Div className={`col-lg-8 col-md-9 mx-auto ${width >= 1000 ? "row" : "column"}`} sx={{ gap: "35px", alignItems: "flex-start" }}>
                <Div className="col mx-auto"
                    sx={{
                        padding: "0 24px",
                        width: "100%",
                        marginTop: "72px",
                        "@media (max-width: 700px)": {
                            marginTop: "56px",
                            marginBottom: "24px"
                        }
                    }}>
                    <GWCard variant="emphasis" padding={width >= 1000 ? "32px 0px" : "40px 32px"} borderColor={width >= 1000 ? "transparent" : "grey500"} background="transparent" borderRadius="25px" sx={{ width: "100%" }}>
                        <FlexContainer style={{ flexDirection: "column" }}>
                            <GWAvenirFont tag="h4" color="white" fontSize={width >= 1000 ? "18px" : "22px"} fontWeight="500">{t('fix_or_rest')}</GWAvenirFont>
                            <GWAvenirFont color="grey300" fontSize="16px" >{t('fix_or_rest_info')}</GWAvenirFont>
                        </FlexContainer>
                    </GWCard>
                </Div>
                <Div className="col mx-auto"
                    sx={{
                        padding: "0 24px",
                        width: "100%",
                        "@media (max-width: 700px)": {
                            marginBottom: "24px",
                        }
                    }}>
                    <GWCard padding={width >= 1000 ? "32px 0px" : "40px 32px"} variant="emphasis" borderColor={width >= 1000 ? "transparent" : "grey500"} background="transparent" borderRadius="25px" sx={{ width: "100%" }}>
                        <FlexContainer style={{ flexDirection: "column" }}>
                            <GWAvenirFont tag="h4" color="white" fontSize={width >= 1000 ? "18px" : "22px"} fontWeight="500">{t('customizable')}</GWAvenirFont>
                            <GWAvenirFont color="grey300" fontSize="16px" >{t('choose_the_metal')}</GWAvenirFont>
                        </FlexContainer>
                    </GWCard>
                </Div>
                <Div className="col mx-auto"
                    sx={{
                        padding: "0 24px",
                        width: "100%",
                        "@media (max-width: 700px)": {
                            marginBottom: "24px"
                        }
                    }}>
                    <GWCard padding={width >= 1000 ? "32px 0px" : "40px 32px"} variant="emphasis" borderColor={width >= 1000 ? "transparent" : "grey500"} background="transparent" borderRadius="25px" sx={{ width: "100%" }}>
                        <FlexContainer style={{ flexDirection: "column" }}>
                            <GWAvenirFont tag="h4" color="white" fontSize={width >= 1000 ? "18px" : "22px"} fontWeight="500">{t('global_247')}</GWAvenirFont>
                            <GWAvenirFont color="grey300" fontSize="16px" >{t('global_247_info')}</GWAvenirFont>
                        </FlexContainer>
                    </GWCard>
                </Div>
                <Div className="col mx-auto"
                    sx={{
                        padding: "0 24px",
                        width: "100%"
                    }}>
                    <GWCard padding={width >= 1000 ? "32px 0px" : "40px 32px"} variant="emphasis" borderColor={width >= 1000 ? "transparent" : "grey500"} background="transparent" borderRadius="25px" sx={{ width: "100%" }}>
                        <FlexContainer style={{ flexDirection: "column" }}>
                            <GWAvenirFont tag="h4" color="white" fontSize={width >= 1000 ? "18px" : "22px"} fontWeight="500">{t('enterprise')}</GWAvenirFont>
                            <GWAvenirFont color="grey300" fontSize="16px" >{t('enterprise_info')}</GWAvenirFont>
                        </FlexContainer>
                    </GWCard>
                </Div>
            </Div>
            <FlexContainer sx={{
                marginTop: "72px",
                marginBottom: "80px",
                "@media (max-width: 700px)": {
                    marginTop: "56px",
                    marginBottom: "56px",
                }
            }}>
                <GWButton text={t('learn_more_on_our_page')} color="navy" bgColor="white" sx={{
                    "@media (max-width: 700px)": {
                        width: "100%",
                        marginX: "24px"
                    }
                }} />
            </FlexContainer>
        </FlexContainer>
    )
}

export default GWBusinessSection;