import { styled } from "@mui/system";
import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import GWCard from "../../atoms/GWCard";
import Div from "../../styled/Div";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import FlexContainer from "../../styled/FlexContainer";
import GWButton from "../../atoms/GWButton";
import { usePriceApiContext } from "../../../contexts/PriceAPIContext";
import { formatCurrency } from "../../../services";

const _GWTableComponent = styled(Div)({

});

const _TableCell = styled(TableCell)({
    padding: "16px 0 16px 0px"
})

const GWTableComponent = ({ padding = "0 24px", screenWidth, isSpot = false, data }) => {
    return (
        <_GWTableComponent sx={{ margin: screenWidth >= 1000 ? "0" : padding }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <GWTable screenWidth={screenWidth} isSpot={isSpot} data={data} />
                </Grid>
            </Grid>
        </_GWTableComponent>
    )
}



const _GWTable = styled(Paper)({
    borderRadius: "25px",
    boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
    border: "2px solid rgba(127, 129, 140, 0.18)"
})

const GWTable = ({ screenWidth, isSpot = false, data }) => {
    const { currency } = usePriceApiContext();
    const tableData = [
        {
            symbol: "Au",
            name: "Gold",
            display: isSpot ? `(XAU/${currency})` : " (Au)",
            tradeSymbol: "XAU"
        },
        {
            symbol: "Ag",
            name: "Silver",
            display: isSpot ? `(XAG/${currency})` : " (Ag)",
            tradeSymbol: "XAG"
        },
        {
            symbol: "Pt",
            name: "Platinum",
            display: isSpot ? `(XPT/${currency})` : " (Pt)",
            tradeSymbol: "XPT"
        },
        {
            symbol: "Pd",
            name: "Palladium",
            display: isSpot ? `(XPD/${currency})` : " (Pd)",
            tradeSymbol: "XPD"
        }
    ]

    return (
        <_GWTable>
            {
                screenWidth >= 1000 ?
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><GWAvenirFont fontWeight="400" fontSize="14px" color="grey400">Product</GWAvenirFont></TableCell>
                                <TableCell><GWAvenirFont fontWeight="400" fontSize="14px" color="grey400">Buy price</GWAvenirFont></TableCell>
                                <TableCell><GWAvenirFont fontWeight="400" fontSize="14px" color="grey400">Sell price</GWAvenirFont></TableCell>
                                <TableCell><GWAvenirFont fontWeight="400" fontSize="14px" color="grey400">Daily change value</GWAvenirFont></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                tableData.map((obj, i) => (
                                    <TableRow sx={{ "& td": { borderBottom: i === 3 ? "none" : "" } }}>
                                        <TableCell>
                                            <FlexContainer sx={{ gap: "24px", justifyContent: "flex-start" }}>
                                                <FlexContainer sx={{ background: Colors[obj.name.toLowerCase()], width: "32px", height: "32px", borderRadius: "50%", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                                                    <GWAvenirFont fontSize="13.3333px" fontWeight="800" color="white" >{obj.symbol}</GWAvenirFont>
                                                </FlexContainer>
                                                <FlexContainer sx={{ marginTop: "5px", flexDirection: isSpot ? "column" : "row" }}>
                                                    <GWAvenirFont>{obj.name}</GWAvenirFont>
                                                    <GWAvenirFont fontWeight="400" fontSize="14px" color="grey400" sx={{ marginTop: "1px" }}>{isSpot ? "(XAU/EUR)" : " (Au)"}</GWAvenirFont>
                                                </FlexContainer>
                                            </FlexContainer>
                                        </TableCell>
                                        <TableCell>{formatCurrency(Number(data?.[obj.tradeSymbol]?.iPBP || 0).toFixed(2), currency)}</TableCell>
                                        <TableCell>{formatCurrency(Number(data?.[obj.tradeSymbol]?.iPSP || 0).toFixed(2), currency)}</TableCell>
                                        <TableCell sx={{ color: Colors[data?.[obj.tradeSymbol]?.PVCA  < 0 ? "red" : "green"] }}>{formatCurrency((data?.[obj.tradeSymbol]?.PVCA || 0), currency)} ({data?.[obj.tradeSymbol]?.PVCP || 0} %)</TableCell>
                                        <TableCell><GWButton color="purple" text="View chart" sx={{ boxShadow: "none" }} /></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                    :
                    <Table>
                        <TableBody>
                            {
                                tableData.map((obj, i) => (
                                    <TableRow sx={{ "& td": { borderBottom: i === 3 ? "none" : "" } }}>
                                        <_TableCell>
                                            <FlexContainer sx={{ gap: "24px", padding: "20px", justifyContent: "flex-start" }}>
                                                <FlexContainer sx={{ background: Colors[obj.name.toLowerCase()], width: "32px", height: "32px", borderRadius: "50%", alignItems: "center", flex: "none", order: 0, flexGrow: 0 }}>
                                                    <GWAvenirFont fontSize="13.3333px" fontWeight="800" color="white" >{obj.symbol}</GWAvenirFont>
                                                </FlexContainer>
                                                <FlexContainer sx={{ marginTop: "5px", flexDirection: isSpot ? "column" : "row" }}>
                                                    <GWAvenirFont>{obj.name}</GWAvenirFont>
                                                    <GWAvenirFont fontWeight="400" fontSize="14px" color="grey400" sx={{ marginTop: "1px" }}>{obj.display}</GWAvenirFont>
                                                </FlexContainer>
                                            </FlexContainer>
                                        </_TableCell>
                                        <_TableCell sx={{ minWidth: "152px" }}>
                                            <FlexContainer sx={{ justifyContent: "center", flexDirection: "column" }}>
                                                <FlexContainer sx={{ gap: "10px" }}>
                                                    <GWAvenirFont fontWeight="400" fontSize="14px" color="grey400">Buy</GWAvenirFont>
                                                    <GWAvenirFont>€ {Number(data?.[obj.tradeSymbol]?.iMBP || 0).toFixed(2)}</GWAvenirFont>
                                                </FlexContainer>
                                                <FlexContainer sx={{ gap: "10px" }}>
                                                    <GWAvenirFont fontWeight="400" fontSize="14px" color="grey400">Sell</GWAvenirFont>
                                                    <GWAvenirFont>€ {Number(data?.[obj.tradeSymbol]?.iMSP || 0).toFixed(2)}</GWAvenirFont>
                                                </FlexContainer>
                                            </FlexContainer>
                                        </_TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
            }
        </_GWTable>
    )
}

export default GWTableComponent;