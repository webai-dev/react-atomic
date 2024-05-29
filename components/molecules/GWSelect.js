import { Paper, Typography, useMediaQuery } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import Colors from "../../colors/colors";
import FlexContainer from "../styled/FlexContainer";
import { isImageOrSVG } from "../../utils/utils";
import GWModal from "../atoms/GWModal";
import useOutsideClick from "../../lib/clickOutsideComponentDetector";

const _GWSelect = styled(Box)({
    width: "fit-content"
});

const _GWSelectInput = styled(Paper)({
    padding: "8px 8px 8px 12px",
    display: "flex",
    borderRadius: "8px",
    border: "1px solid #E0E1E4",
    boxShadow: "none",
    cursor: "pointer",
    justifyContent: "space-between"
});

const _GWSelectItems = styled(Paper)({
    display: "flex",
    borderRadius: "8px",
    border: "1px solid #E0E1E4",
    marginTop: "4px",
    flexDirection: "column",
    position: "absolute",
    // right: 0,
    alignItems: "flex-start",
    cursor: "pointer",
    boxShadow: "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)"
});

const GWSelect = ({ leftIcon, items, onClick, width, borderRadius = "8px", showAll = false, allText = "" }) => {
    const { t } = useTranslation("common")
    const fullScreen = useMediaQuery("(min-width:1200px)")
    const [selected, setSelected] = useState(showAll ? {
        value: allText
    }: items[0] );
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    }

    const intelliText = (textOrComponent) => {
        return (
            typeof textOrComponent === "string" ?
                isImageOrSVG(textOrComponent, true) ?
                    <ReactSVG src={textOrComponent} style={{ marginTop: "-2px", marginRight: "4px" }} />
                    :
                    <Typography>{t(textOrComponent)}</Typography>
                :
                textOrComponent
        )
    }

    const selectOption = (value) => {
        setSelected(value);
        onClick && onClick(value);
    }

    const handleOutsideClick = () => {
        setIsOpen(false);
    };

    const ref = useOutsideClick(handleOutsideClick);

    return (
        <Box>
            <_GWSelect ref={ref} onClick={toggleSelect} borderRadius={borderRadius}>
                <_GWSelectInput sx={{ borderRadius, width: fullScreen ? "fit-content" : "121px" }}>
                    {
                        leftIcon && intelliText(selected?.leftIcon)
                    }
                    <Box sx={{ marginRight: "4px" }}>{selected === null ? allText : intelliText(selected?.value)}</Box>
                    <Box><ReactSVG src="/assets/images/svg/arrow-down-s-line.svg" /></Box>
                </_GWSelectInput>
            </_GWSelect>
            {
                fullScreen ?
                    <_GWSelectItems sx={{ display: isOpen ? "flex" : "none" }}>
                        {showAll && <FlexContainer sx={{
                            flexDirection: "row",
                            padding: "10px 14px", width: "100%",
                            borderRadius: "8px 8px 0 0",
                            justifyContent: "space-between",
                            background: hoveredIndex === -1 ? Colors.grey200 : Colors.white
                        }}
                                                   onMouseOver={() => setHoveredIndex(-1)}
                                                   onMouseLeave={() => setHoveredIndex(-1)}
                                                   onClick={() => selectOption(null)}
                        >
                            <Box sx={{ marginRight: "8px" }}>{intelliText(allText)}</Box>
                            {
                                (selected?.value === allText) && <FlexContainer sx={{ flexDirection: "column" }}><ReactSVG src="/assets/images/svg/check.svg" /></FlexContainer>
                            }
                        </FlexContainer>}
                        {
                            items?.map((item, i) => (
                                <FlexContainer key={i} sx={{
                                    flexDirection: "row",
                                    padding: "10px 14px", width: "100%",
                                    borderRadius: i === 0 ? "8px 8px 0 0" : i === (items.length - 1) ? "0 0 8px 8px" : "0px",
                                    justifyContent: "space-between",
                                    background: hoveredIndex === i ? Colors.grey200 : Colors.white
                                }}
                                               onMouseOver={() => setHoveredIndex(i)}
                                               onMouseLeave={() => setHoveredIndex(-1)}
                                               onClick={() => selectOption(item)}
                                >
                                    {
                                        leftIcon && intelliText(item.leftIcon)
                                    }
                                    <Box sx={{ marginRight: "8px" }}>{intelliText(item.value)}</Box>
                                    {
                                        selected?.value === item.value && <FlexContainer sx={{ flexDirection: "column" }}><ReactSVG src="/assets/images/svg/check.svg" /></FlexContainer>
                                    }
                                </FlexContainer>
                            ))
                        }
                    </_GWSelectItems>
                    :
                    <GWModal title="digital_gold" subTitle="digital_gold_info" backdrop={false} isOpen={!fullScreen && (isOpen)} closeModal={toggleSelect}>
                        <FlexContainer sx={{ gap: "16px", flexDirection: "column" }}>
                            <FlexContainer sx={{ justifyContent: "space-between", padding: "10px 14px", border: `1px solid ${Colors.grey300}`, borderRadius: "8px" }} onClick={() => selectOption(null)}>
                                <FlexContainer sx={{ gap: "12px", justifyContent: "unset" }}>
                                    <Box>--</Box>
                                    <Box>All</Box>
                                </FlexContainer>
                                <Box>
                                    {
                                        selected?.value === "All" && <FlexContainer sx={{ flexDirection: "column" }}><ReactSVG src="/assets/images/svg/check.svg" /></FlexContainer>
                                    }
                                </Box>
                            </FlexContainer>
                            {
                                items?.map((item, i) => (
                                    <FlexContainer key={i} sx={{ justifyContent: "space-between", padding: "10px 14px", border: `1px solid ${Colors.grey300}`, borderRadius: "8px" }} onClick={() => selectOption(item)}>
                                        <FlexContainer sx={{ gap: "12px", justifyContent: "unset" }}>
                                            <Box>
                                                {
                                                    item?.leftIcon && intelliText(item?.leftIcon)
                                                }
                                            </Box>
                                            <Box>{intelliText(item.value)}</Box>
                                        </FlexContainer>
                                        <Box>
                                            {
                                                selected?.value === item.value && <FlexContainer sx={{ flexDirection: "column" }}><ReactSVG src="/assets/images/svg/check.svg" /></FlexContainer>
                                            }
                                        </Box>
                                    </FlexContainer>
                                ))
                            }
                        </FlexContainer>
                    </GWModal>
            }
        </Box>
    )
}

export default GWSelect;
