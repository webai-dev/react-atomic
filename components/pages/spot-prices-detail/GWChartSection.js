import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { Chart } from "react-google-charts";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import { Box, Tabs, Tab, useMediaQuery } from "@mui/material";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWMarketTime from "../../molecules/GWMarketTime";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import GWCard from "../../atoms/GWCard";
import GWSelect from "../../molecules/GWSelect";
import { useSpotDetail } from "../../../contexts/SpotDetailContext";
import { useResizeDetector } from "react-resize-detector";

const _GWChartSection = styled(Div)({
    background: Colors.white
});

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    borderRadius: "24px",
    minHeight: 0,
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        // maxWidth: 40,
        width: '100%',
        backgroundColor: 'transparent',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme, timeofday }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: Colors.grey400,
        padding: timeofday === "true" ? "2px 16.4px" : "4px 8px",
        minHeight: 0,
        minWidth: 0,
        '&.Mui-selected': {
            backgroundColor: Colors.white,
            color: Colors.navy,
            margin: "4px",
            borderRadius: "24px",
            minHeight: "36px",
            minWidth: "28px",
            boxShadow: "0px 6px 12px -6px rgba(141, 141, 148, 0.08), 0px 2px 3px -6px rgba(141, 141, 148, 0.08), 0px 1px 2px -6px rgba(141, 141, 148, 0.08)"
        },
        '&.Mui-focusVisible': {
            backgroundColor: Colors.white,
            color: Colors.navy
        },
    }),
);

export const data = [
    ["time", "a", "b", "c", "d"],
    ["08:00", 20, 28, 38, 45],
    ["09:00", 31, 38, 55, 66],
    ["10:00", 50, 55, 77, 80],
    ["11:00", 50, 77, 66, 77],
    ["12:00", 15, 66, 22, 68],
    ["01:00", 25, 33, 44, 51],
    ["02:00", 40, 45, 63, 72],
    ["03:00", 30, 36, 48, 57],
    ["04:00", 42, 49, 66, 75],
    ["05:00", 55, 60, 77, 84],
    ["06:00", 60, 72, 80, 88],
    ["07:00", 20, 66, 30, 72],
];

export const options = {
    legend: "none",
    bar: { groupWidth: "61.8%" },
    candlestick: {
        fallingColor: { strokeWidth: 0, fill: "#a52714" },
        risingColor: { strokeWidth: 0, fill: "#0f9d58" },
    },
    chartArea: {
        left: 50,
        right: 10,
        backgroundColor: "transparent"
    }
};



const GWChartSection = ({ }) => {
    const { t } = useTranslation("spot-prices-detail");
    const { width, ref } = useResizeDetector();
    const fullScreen = useMediaQuery("(min-width:1200px)")
    const { isShareOpen, toggleShare } = useSpotDetail();

    return (
        <_GWChartSection ref={ref} sx={{ padding: fullScreen ? "40px 270px" : "24px" }}>
            <FlexContainer sx={{ justifyContent: "space-between", flexDirection: "column" }}>
                <GWMarketTime dateTime="01 JAN 2022, 09:45:34 MEZ" />
                <Div>
                    {
                        fullScreen ?
                            <FlexContainer sx={{ justifyContent: "space-between", alignItems: "center", margin: "58px 0 38px 0" }}>
                                <GWAvenirFont fontWeight="800" fontSize="24px" >{t('live_chart')}</GWAvenirFont>
                                <FlexContainer sx={{ gap: "16px", }}>
                                    <_GWTab>
                                        <StyledTab label={<ReactSVG src="/assets/images/svg/stock-fill.svg" />} />
                                        <StyledTab label={<ReactSVG src="/assets/images/svg/line-chart-line.svg" />} />
                                    </_GWTab>
                                    <_GWTab>
                                        <StyledTab label={<GWAvenirFont fontSize="16px" sx={{ width: "36px", height: "28px", paddingTop: "5px" }}>1H</GWAvenirFont>} timeofday="true" />
                                        <StyledTab label={<GWAvenirFont fontSize="16px" sx={{ width: "36px", height: "28px", paddingTop: "5px" }}>1D</GWAvenirFont>} timeofday="true" />
                                        <StyledTab label={<GWAvenirFont fontSize="16px" sx={{ width: "36px", height: "28px", paddingTop: "5px" }}>1W</GWAvenirFont>} timeofday="true" />
                                        <StyledTab label={<GWAvenirFont fontSize="16px" sx={{ width: "36px", height: "28px", paddingTop: "5px" }}>1M</GWAvenirFont>} timeofday="true" />
                                        <StyledTab label={<GWAvenirFont fontSize="16px" sx={{ width: "36px", height: "28px", paddingTop: "5px" }}>1Y</GWAvenirFont>} timeofday="true" />
                                    </_GWTab>
                                </FlexContainer>
                            </FlexContainer>
                            :
                            <FlexContainer sx={{ justifyContent: "space-between", padding: "24px 0" }}>
                                <_GWTab>
                                    <StyledTab label={<ReactSVG src="/assets/images/svg/stock-fill.svg" />} />
                                    <StyledTab label={<ReactSVG src="/assets/images/svg/line-chart-line.svg" />} />
                                </_GWTab>
                                <GWSelect borderRadius="24px" items={
                                    [
                                        {
                                            value: t('hour_1')
                                        },
                                        {
                                            value: t('day_1')
                                        },
                                        {
                                            value: t('week_1')
                                        },
                                        {
                                            value: t('month_1')
                                        },
                                        {
                                            value: t('year_1')
                                        }
                                    ]
                                } leftIcon={true} width={width} />
                            </FlexContainer>
                    }
                    <Chart
                        chartType="CandlestickChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                    <Div sx={{ marginTop: "24px" }}>
                        <GWAvenirFont fontSize="13px" fontWeight="400" color="grey400">Disclaimer: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</GWAvenirFont>
                    </Div>
                    {
                        fullScreen ?
                            <FlexContainer sx={{ gap: "20px", marginTop: "52px" }}>
                                <_GWInfoCard title={t('market_cap')} value="€4.51B" />
                                <_GWInfoCard title={t('daily_change')} value="-13.71%" isNegative />
                                <_GWInfoCard title={t('daily_change')} value="-2,490.02€" isNegative />
                            </FlexContainer>
                            :
                            <FlexContainer sx={{ gap: "20px", marginTop: "24px", flexDirection: "column" }}>
                                <FlexContainer>
                                    <_GWInfoCard title={t('market_cap')} value="€4.51B" borderRadius="25px 0 0 25px" sx={{ borderRight: "none" }} />
                                    <_GWInfoCard title={t('daily_change')} value="-13.71%" borderRadius="0 25px 25px 0" isNegative />
                                </FlexContainer>
                                <_GWInfoCard borderRadius="25px" title={t('daily_change')} value="-2,490.02€" isNegative />
                            </FlexContainer>
                    }
                </Div>
            </FlexContainer>
        </_GWChartSection>
    )
}

const _GWInfoCard = ({ title, value, isNegative, borderRadius = "12px", sx = {} }) => {
    return (
        <Div sx={{ flex: 1 }}>
            <GWCard variant="plain" padding="20px" borderRadius={borderRadius} sx={{ ...sx }}>
                <FlexContainer sx={{ justifyContent: "flex-start", alignItems: "center" }}>
                    <GWAvenirFont fontSize="12px" fontWeight="400" color="#8D8D94">{title}</GWAvenirFont>
                    <ReactSVG src="/assets/images/svg/information.svg" />
                </FlexContainer>
                <Div sx={{ marginTop: "4px" }}>
                    <GWAvenirFont fontSize="18px" fontWeight="500" color={isNegative ? "red" : "#121315"}>{value}</GWAvenirFont>
                </Div>
            </GWCard>
        </Div>
    )
}

const _GWTab = ({ children }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: Colors.grey200, color: "#7F818C", borderRadius: "24px", height: "fit-content", width: "fit-content" }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
            >
                {children}
            </StyledTabs>
        </Box>
    )
}

export default GWChartSection;