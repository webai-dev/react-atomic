import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import GWAvenirFont from "../atoms/GWAvenirFont";
import GWCard from "../atoms/GWCard";

const _GWTable = styled(Paper)({})
const GWSectionTable = ({ columns, data }) => {
    return (
        <GWCard variant="emphasis" padding="0px" borderRadius="25px" sx={{ overflow: "hidden", width: "100%" }}>
            <_GWTable>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns && columns.map((column, index) => {
                                return (
                                    <TableCell sx={{ textAlign: "center" }} key={index}>
                                        <GWAvenirFont fontWeight="400" fontSize="14px" color="grey400">
                                            {column.title}
                                        </GWAvenirFont>
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map(rowData => {
                            return (
                                <TableRow sx={{ backgroundColor: rowData[ "sectionIndicator" ] === true ? "#FBFBFD" : "transparent" }}>
                                    {Object.keys(rowData) && Object.keys(rowData).filter(key => key !== "sectionIndicator").map((key, index) => {
                                        const cellValue = rowData[ key ];
                                        return (
                                            <TableCell key={index}>
                                                {typeof cellValue === "function" ? cellValue() : cellValue}
                                            </TableCell>
                                        );
                                    })
                                    }
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </_GWTable>
        </GWCard>
    )
}
GWSectionTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
};

export default GWSectionTable;
