import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import localFont from "@next/font/local";
import GWCard from "./GWCard";

const avenir = localFont({ src: '../../fonts/avenir_ff/AvenirLTStd-Book.otf' })

const _GWAccordionItem = styled(Accordion)({
    padding: 0,
    boxShadow: "none"
});

const _GWAccordionItemText = styled(Typography)({
    fontFamily: avenir.style,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    padding: "unset",
    "@media (max-width: 700px)": {
        fontSize: "22px",
        fontWeight: 400,
    }
})

const GWAccordionItem = ({ title, location, children }) => {
    const { t } = useTranslation(location)

    return (
        <GWCard borderRadius="12px" sx={{
            padding: "16px 32px",
            "@media (max-width: 700px)": {
                padding: "32px 24px",
                border: "2px solid rgba(127, 129, 140, 0.18)",
                borderRadius: "25px"
            }
        }}>
            <_GWAccordionItem>
                <AccordionSummary
                    sx={{ margin: "unset", padding: "unset" }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <_GWAccordionItemText>{t(title)}</_GWAccordionItemText>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingLeft: "unset", paddingTop: "12px" }}>
                    {children}
                </AccordionDetails>
            </_GWAccordionItem>
        </GWCard>
    )
};

GWAccordionItem.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    children: PropTypes.node
}

export default GWAccordionItem;