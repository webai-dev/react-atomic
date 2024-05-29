import { styled } from "@mui/system";
import Div from "../styled/Div";
import FlexContainer from "../styled/FlexContainer";


const _GWFooterTop = styled(Div)(({ isfullscreen }) => ({
    alignItems: "flex-start",
    gap: isfullscreen === 'true' ? "48px" : "34px",
    padding: isfullscreen === 'true' ? "64px 160px" : "24px",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
}))

const GWFooterTop = (props) => {
    return (
        <_GWFooterTop isfullscreen={String(props.width >= 1200)} >
            {props.children}
        </_GWFooterTop>
    )
}

export default GWFooterTop;