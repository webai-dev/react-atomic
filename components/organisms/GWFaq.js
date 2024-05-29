import { Box, Paper, styled } from "@mui/material";
import GWAvenirFont from "../atoms/GWAvenirFont";
import GWAccordion from "../molecules/GWAccordion";
import FlexContainer from "../styled/FlexContainer";
import GWAccordionItem from "../atoms/GWAccordionItem.js"
import Container from "../styled/Container";

const _GWFaq = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    borderRadius: "0",
    boxShadow: "none"
});

const GWFaq = ({ title, items }) => {
    return (
        <Container sx={{ boxShadow: "none", border: "0", background: "none" }}>
            <_GWFaq>
                <GWAvenirFont tag="h3" sx={{ marginBottom: "40px" }} fontSize="24px" variant="black" color="grey500" fontWeight="800">{title}</GWAvenirFont>
                <GWAccordion>
                    {
                        items?.map((item, i) => (
                            <GWAccordionItem key={i} title={item?.title}>
                                {
                                    typeof item?.content === "object" ?
                                        item?.content
                                        :
                                        <GWAvenirFont key={i} sx={{ marginBottom: "10px" }} fontSize="18px" color="grey400" fontWeight="400">{item?.content}</GWAvenirFont>
                                }
                            </GWAccordionItem>
                        ))
                    }
                </GWAccordion>
            </_GWFaq>
        </Container>
    )
}

export default GWFaq;