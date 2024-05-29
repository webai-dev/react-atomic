import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useTranslation } from "next-i18next";
import React from 'react';
import { useResizeDetector } from "react-resize-detector";
import Colors from "../../../colors/colors";
import GWAccordionItem from '../../atoms/GWAccordionItem';
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";
import GWCard from "../../atoms/GWCard";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWAccordion from '../../molecules/GWAccordion';
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const GWSupportSection = () => {
    const { t } = useTranslation("home")
    const { width, ref } = useResizeDetector();

    return (
        <FlexContainer ref={ref} className="my-0" sx={{ flexDirection: "column" }}>
            <FlexContainer
                className="py-md-5 col-md-8 mx-auto"
                sx={{
                    flexDirection: "column"
                }}>
                <Div className="mx-auto mb-5" sx={{
                    marginTop: "72px",
                    "@media (max-width: 700px)": {
                        marginTop: "56px"
                    }
                }}>
                    <GWBadge text={t('support')} variant="emphasis" />
                </Div>
                <FlexContainer className="row">
                    <FlexContainer className="col-md-10 mx-auto">
                        <GWHeroHeadingText variant="h2">{t('support_faq')}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer className=" col-md-8 mx-auto mt-3 row" sx={{
                marginTop: "72px",
                gap: width > 1200 ? "16px" : "24px"
            }}>
                <GWAccordion>
                    <GWAccordionItem title={t('why_regulated_in_uk')}>
                        <GWAvenirFont color="grey500" fontSize="18px">{t('unlike_many_bullion')}</GWAvenirFont>
                    </GWAccordionItem>
                    <GWAccordionItem title={t('why_regulated_in_uk')}>
                        <GWAvenirFont color="grey500" fontSize="18px">{t('unlike_many_bullion')}</GWAvenirFont>
                    </GWAccordionItem>
                    <GWAccordionItem title={t('why_regulated_in_uk')}>
                        <GWAvenirFont color="grey500" fontSize="18px">{t('unlike_many_bullion')}</GWAvenirFont>
                    </GWAccordionItem>
                </GWAccordion>
            </FlexContainer>
            {width >= 1000 && <FlexContainer className=" col-md-8 mx-auto">
                <GWButton text={t('show_more')} variannt="link" sx={{ boxShadow: "none", marginTop: "72px", marginBottom: "120px" }} />
            </FlexContainer>}
            <GWButton text={"Chat Now"} color="white" bgColor="navy" sx={{
                display: "none",
                marginX: "24px",
                marginTop: "56px",
                marginBottom: "16px",
                "@media (max-width: 700px)": {
                    display: "block",
                }
            }}/>
            <GWButton text={"Get to our Knowledge Center"} color="navy" bgColor="white" sx={{
                display: "none",
                marginX: "24px",
                border: `1px solid ${Colors.grey300}`,
                marginBottom: "16px",
                "@media (max-width: 700px)": {
                    display: "block",
                }
            }}/>
            <GWButton text={"Contact us"} color="navy" bgColor="white" sx={{
                display: "none",
                marginX: "24px",
                border: `1px solid ${Colors.grey300}`,
                marginBottom: "6px",
                "@media (max-width: 700px)": {
                    display: "block",
                }
            }}/>
        </FlexContainer>
    )
}

export default GWSupportSection;