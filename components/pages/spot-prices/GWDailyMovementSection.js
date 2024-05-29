import { Box, styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import { useResizeDetector } from "react-resize-detector";
import { useMediaQuery } from "@mui/material";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWSelect from "../../molecules/GWSelect";
import Div from "../../styled/Div"
import FlexContainer from "../../styled/FlexContainer";
import GWTableComponent from "../home/GWTableComponent";
import GWMetalChart from "../../molecules/GWMetalChart";

const _GWDailyMovementSection = styled(Div)({

})

const _GWText = styled(Box)({
    fontStyle: "normal",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    marginBottom: "10px"
})

const GWDailyMovementSection = (props) => {
    const { t } = useTranslation("spot-prices")
    const { width, ref } = useResizeDetector();
    const mobile = useMediaQuery("(max-width:1200px)");


    return (
        <_GWDailyMovementSection ref={ref}>
            <FlexContainer sx={{ flexWrap: "wrap", width: "100%" }}>
                <Div sx={{ flex: width >= 1200 ? 1 : "unset", display: "flex", flexWrap: "wrap" }}>
                    <GWAvenirFont tag="h2" fontWeight="800" variant="black" fontSize="24px" fontColor="grey500">{t('daily_movement')}</GWAvenirFont>
                    <_GWText>
                        <ReactSVG src="/assets/images/svg/check-circle.svg" />
                        <GWAvenirFont>{t('daily_movement_info')}</GWAvenirFont>
                    </_GWText>
                </Div>
                <Div sx={{ flex: 1 }}>
                    <Div className="row" style={{ marginBottom: "24px" }}>
                        <FlexContainer className="col-12" style={{ justifyContent: mobile ? "flex-start" : "flex-end", gap: "14px" }}>
                            <GWSelect items={[{
                                leftIcon: "/assets/images/svg/asterisk.svg",
                                value: "OZ"
                            },]} leftIcon={true} width={width} />
                            <GWSelect items={[{
                                leftIcon: "/assets/images/svg/euro-sign.svg",
                                value: "EUR"
                            },]} leftIcon={true} width={width} />
                        </FlexContainer>
                    </Div>
                </Div>
            </FlexContainer>
            <FlexContainer sx={{ flexWrap: "wrap", paddingTop: "40px", gap: "40px" }}>
                <Div sx={{ flex: width >= 1200 ? "unset" : 1 }}>
                    <GWMetalChart
                        symbol="Au"
                        name="Gold"
                        change={-20.45}
                        data={[
                            {
                                date: "11/12/2022",
                                value: 100
                            },
                            {
                                date: "12/12/2022",
                                value: 200
                            },
                            {
                                date: "13/12/2022",
                                value: 120
                            },
                            {
                                date: "14/12/2022",
                                value: 105
                            }
                        ]}
                    />
                </Div>
                <Div sx={{ flex: width >= 1200 ? "unset" : 1 }}>
                    <GWMetalChart
                        symbol="Ag"
                        name="Silver"
                        change={27.45}
                        data={[
                            {
                                date: "09/10/2022",
                                value: 50
                            },
                            {
                                date: "10/10/2022",
                                value: 250
                            },
                            {
                                date: "11/10/2022",
                                value: 1000
                            },
                            {
                                date: "12/10/2022",
                                value: 300
                            }
                        ]}
                    />
                </Div>
                <Div sx={{ flex: width >= 1200 ? "unset" : 1 }}>
                    <GWMetalChart
                        symbol="Pt"
                        name="Platinum"
                        change={40.45}
                        data={[
                            {
                                date: "05/09/2022",
                                value: 60
                            },
                            {
                                date: "06/09/2022",
                                value: 100
                            },
                            {
                                date: "07/09/2022",
                                value: 120
                            },
                            {
                                date: "08/09/2022",
                                value: 15
                            }
                        ]}
                    />
                </Div>
                <Div sx={{ flex: width >= 1200 ? "unset" : 1 }}>
                    <GWMetalChart
                        symbol="Pd"
                        name="Palladium"
                        change={-70.50}
                        data={[
                            {
                                date: "05/06/2022",
                                value: 10
                            },
                            {
                                date: "06/06/2022",
                                value: 260
                            },
                            {
                                date: "07/06/2022",
                                value: 20
                            },
                            {
                                date: "08/06/2022",
                                value: 1050
                            }
                        ]}
                    />
                </Div>
            </FlexContainer>
        </_GWDailyMovementSection>
    )
}

export default GWDailyMovementSection;