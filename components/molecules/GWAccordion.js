import { styled } from "@mui/system";
import Container from "../styled/Container";
import Div from "../styled/Div";

const _GWAccordion = styled(Div)({
    display: "flex",
    flexDirection: "column",
    gap: "12px"
});

const GWAccordion = ({ children }) => {
    return (
        <Container sx={{ boxShadow: "none", border: "0" }}>
            <_GWAccordion>
                {children}
            </_GWAccordion>
        </Container>
    )
};

export default GWAccordion;