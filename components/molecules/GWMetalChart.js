import moment from "moment";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line, Chart } from 'react-chartjs-2';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useResizeDetector } from "react-resize-detector";
import FlexContainer from "../styled/FlexContainer";
import GWAvenirFont from "../atoms/GWAvenirFont";
import Colors from "../../colors/colors";
import GWInitial from "../atoms/GWInitial";
import GWCard from "../atoms/GWCard";
import Div from "../styled/Div";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    // responsive: true,
    maintainAspectRatio: false,
    height: "auto",
    plugins: {
        legend: {
            position: 'top',
            display: false
        },
        title: {
            display: true,
        }
    },
    scales: {
        x: {
            display: false
        },
        y: {
            display: false
        }
    },
    layout: {
        margin: {
            top: 0,
            bottom: 0
        }
    }
};

const gradient = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(1, 'rgba(21, 128, 56, 0.5)');
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    return gradient;
}


const GWMetalChart = ({ symbol, name, change, data }) => {
    const { width, ref } = useResizeDetector()

    const _data = {
        labels: data?.map((datum) => datum.date),
        datasets: [
            {
                fill: true,
                lineTension: 0.1,
                data: data?.map((datum) => datum.value),
                borderColor: "#5ABE80",
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(1, 'rgba(21, 128, 56, 1)');
                    gradient.addColorStop(0, 'rgba(21, 128, 56, 0)');
                    return gradient;
                },
                pointRadius: 0
            },
        ],
    };

    const isNegative = (value) => Math.sign(value) === -1;

    return (
        <Div ref={ref}>
            <GWCard variant="emphasis" borderColor="2px solid rgba(127, 129, 140, 0.18)" borderRadius="25px" padding="0" sx={{ height: "350px", width: "100%", overflow: "hidden" }}>
                <Box sx={{ margin: "32px 32px 0 32px" }}>
                    <GWInitial symbol={symbol} bgColor={name?.toLowerCase()} />
                    <Box sx={{ marginTop: "8px" }}>
                        <GWAvenirFont tag="h3" fontSize="18px">
                            {name} <span style={{ color: Colors.grey300 }}>({symbol})</span>
                        </GWAvenirFont>
                        <FlexContainer sx={{ justifyContent: "flex-start", gap: "4px" }}>
                            <GWAvenirFont fontSize="16px" color={isNegative(change) ? "red" : "green"}>{isNegative(change) ? change : `+${change}`}%</GWAvenirFont>
                            <GWAvenirFont fontSize="16px" color="grey300">Price change</GWAvenirFont>
                        </FlexContainer>
                    </Box>
                </Box>
                <Box sx={{ height: "53.97px", width: "100%", marginTop: "31.21px" }}>
                    <Line
                        options={options}
                        data={_data}
                        width="100%"
                        height="100%"
                        style={{ height: "auto" }}
                        plugins={[{ beforeDraw: (chart) => { _data.datasets[0].backgroundColor = gradient(chart.canvas); } }]}
                    />
                </Box>
                <FlexContainer sx={{ justifyContent: "unset", marginTop: "-1.5px", background: "linear-gradient(to bottom, rgba(21, 128, 56, 0.12), rgba(0, 0, 0, 0))", padding: "8.88px 32px 20px 32px" }}>
                    <FlexContainer style={{ marginTop: "60.88px", width: "100%", justifyContent: "space-between" }}>
                        <GWAvenirFont color="grey300">
                            {moment(data[0]).format("DD MMM")}
                        </GWAvenirFont>
                        <GWAvenirFont color="grey300">
                            {moment(data[data.length - 1]).format("DD MMM")}
                        </GWAvenirFont>
                    </FlexContainer>
                </FlexContainer>
            </GWCard>
        </Div>
    );
};

export default GWMetalChart;