import Link from '../atoms/GWLink'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Typography, useMediaQuery } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { useTranslation } from 'next-i18next';
import { Box } from '@mui/system';
import Switch from '@mui/material/Switch';
import { Close } from '@mui/icons-material';
import FlexContainer from "../styled/FlexContainer";
import GWButton from "../atoms/GWButton";
import Div from '../styled/Div';
import GWCard from "../atoms/GWCard";
import GWModal from "../atoms/GWModal"
import GWAvenirFont from '../atoms/GWAvenirFont';

const USER_CONSENT_ESSENTIAL_COOKIE_KEY = 'essential_cookie_consent_is_true'
const USER_CONSENT_MARKETING_COOKIE_KEY = 'marketing_cookie_consent_is_true'
const USER_CONSENT_FUNCTIONAL_COOKIE_KEY = 'functional_cookie_consent_is_true'
const USER_CONSENT_ANALYTICS_COOKIE_KEY = 'analytics_cookie_consent_is_true'
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365

const CookieConsent = () => {
    const { width, ref } = useResizeDetector();
    const mobile = useMediaQuery("(max-width:1200px)");
    const { t } = useTranslation("common");
    const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);
    const [marketingCookies, setMarketingCookies] = useState(false)
    const [functionalCookies, setFunctionalCookies] = useState(false)
    const [analyticsCookies, setAnalyticsCookies] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const consentIsTrue = [
            Cookies.get(USER_CONSENT_ESSENTIAL_COOKIE_KEY),
            Cookies.get(USER_CONSENT_MARKETING_COOKIE_KEY),
            Cookies.get(USER_CONSENT_FUNCTIONAL_COOKIE_KEY),
            Cookies.get(USER_CONSENT_ANALYTICS_COOKIE_KEY)
        ].some((cookieCheck) => cookieCheck === 'true');

        setCookieConsentIsTrue(consentIsTrue)
    }, [])

    const onClick = (e) => {
        e.preventDefault()

        if (!cookieConsentIsTrue) {
            Cookies.set(USER_CONSENT_ESSENTIAL_COOKIE_KEY, 'true', {
                expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
            })
            Cookies.set(USER_CONSENT_MARKETING_COOKIE_KEY, 'true', {
                expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
            })
            Cookies.set(USER_CONSENT_FUNCTIONAL_COOKIE_KEY, 'true', {
                expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
            })
            Cookies.set(USER_CONSENT_ANALYTICS_COOKIE_KEY, 'true', {
                expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
            })
            setCookieConsentIsTrue(true)
        }
    }

    const onSave = (e) => {
        if (!cookieConsentIsTrue) {
            Cookies.set(USER_CONSENT_MARKETING_COOKIE_KEY, 'true', {
                expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
            })
            Cookies.set(USER_CONSENT_MARKETING_COOKIE_KEY, String(marketingCookies), {
                expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
            })
            Cookies.set(USER_CONSENT_FUNCTIONAL_COOKIE_KEY, String(functionalCookies), {
                expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
            })
            Cookies.set(USER_CONSENT_ANALYTICS_COOKIE_KEY, String(analyticsCookies), {
                expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
            })
            setCookieConsentIsTrue(true)
        }
    }

    const toggleSettingsModal = () => {
        setIsOpen(!isOpen);
    }

    if (cookieConsentIsTrue) {
        return null
    }

    return (
        <Box ref={ref}>
            <GWCard sx={{ position: "fixed", bottom: "0", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "100" }}>
                <FlexContainer sx={{ gap: "20px" }}>
                    <FlexContainer style={{ height: "fit-content", alignItems: "center", gap: "25px", flexDirection: mobile ? "column" : "row" }}>
                        <Div sx={{ flex: 10 }}>
                            <Typography>
                                {t('cookie_consent_message')} &nbsp;
                                <Link href="/privacy-policy">
                                    {t('privacy_policy')}
                                </Link>
                            </Typography>
                        </Div>
                        <FlexContainer sx={{ gap: "20px", width: width >= 1200 ? "fit-content" : "100%", flex: 1 }}>
                            <GWButton onClick={toggleSettingsModal} bgColor="grey200" color="navy" text={t('settings')} sx={{ flex: width >= 1200 ? "unset" : 1 }} />
                            <GWButton onClick={onClick} bgColor="navy" color="white" text={t('agree')} sx={{ flex: width >= 1200 ? "unset" : 1 }} />
                        </FlexContainer>
                    </FlexContainer>
                    <FlexContainer sx={{ marginTop: "10px" }}>
                        <Close style={{ cursor: "pointer" }} onClick={() => setCookieConsentIsTrue(true)} />
                    </FlexContainer>
                </FlexContainer>
                <GWModal screenWidth={width} size="md" isOpen={isOpen} setIsOpen={setIsOpen} backdrop={true} title={t('advanced_cookie_settings')} >
                    <Box sx={{ height: "50vh", overflowY: "scroll" }}>
                        <FlexContainer sx={{ flexDirection: "column", gap: "10px" }}>
                            <CookieListItem
                                title={t('essential_cookies')}
                                subtitle={t('essential_cookies_info')}
                                defaultChecked={true}
                                disabled={true}
                            />
                            <CookieListItem
                                title={t('enable_marketing_cookies')}
                                subtitle={t('enable_marketing_cookies_info')}
                                onChange={(e) => setMarketingCookies(e.target.checked)}
                            />
                            <CookieListItem
                                title={t('enable_functional_cookies')}
                                subtitle={t('enable_functional_cookies_info')}
                                onChange={(e) => setFunctionalCookies(e.target.checked)}
                            />
                            <CookieListItem
                                title={t('enable_analytics_cookies')}
                                subtitle={t('enable_analytics_cookies_info')}
                                onChange={(e) => setAnalyticsCookies(e.target.checked)}
                                last
                            />
                        </FlexContainer>
                    </Box>
                    <Box sx={{ width: "100%", padding: width >= 1200 ? "32px 0px 24px 0px" : "32px 0px 0px 0px", borderTop: "2px solid rgba(127, 129, 140, 0.18)" }}>
                        <FlexContainer sx={{ justifyContent: "flex-end" }}>
                            <GWButton text={t('save')} onClick={onSave} bgColor="navy" color="white" sx={{ width: width >= 1200 ? "fit-content" : "100%" }} />
                        </FlexContainer>
                    </Box>
                </GWModal>
            </GWCard>
        </Box>
    )
}

const CookieListItem = ({ title, subtitle, defaultChecked, disabled, last, onChange }) => {

    return (
        <FlexContainer sx={{ padding: "20px 0", gap: "8px", borderBottom: last ? "none" : "2px solid rgba(127, 129, 140, 0.18)", justifyContent: "space-between" }}>
            <Box>
                <GWAvenirFont fontWeight="800" fontSize="16px">{title}</GWAvenirFont>
                <GWAvenirFont>{subtitle}</GWAvenirFont>
            </Box>
            <Box>
                <Switch defaultChecked={defaultChecked} disabled={disabled} onChange={onChange} />
            </Box>
        </FlexContainer>
    )
}

export default CookieConsent;