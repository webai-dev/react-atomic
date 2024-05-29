import { useState } from "react";
import { styled } from "@mui/system";
import { useTranslation } from "next-i18next";
import { Box, ClickAwayListener, useMediaQuery } from "@mui/material";
import { ReactSVG } from "react-svg";
import Container from "../styled/Container";
import Div from "../styled/Div";
import GWCard from "../atoms/GWCard";
import GWButton from "../atoms/GWButton";
import FlexContainer from "../styled/FlexContainer";
import GWModal from "../atoms/GWModal";
import Colors from "../../colors/colors";

const GWShare = ({ location = "spot-prices-detail-page", children }) => {
    const { t } = useTranslation(location)
    const fullScreen = useMediaQuery("(min-width: 1200px)")
    const [isOpen, setIsOpen] = useState(false)
    const [buttonBg, setButtonBg] = useState("navy");
    const [isIconDisplayed, setIsIconDisplayed] = useState(false)
    const [buttonText, setButtonText] = useState("copy_to_clipboard")
    const [selected, setSelected] = useState()

    const copyToClipboard = () => {
        navigator.clipboard.writeText("https://facebook.com")
        setButtonText("copied")
        setButtonBg("teal");
        setIsIconDisplayed(true);
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

    const handleOutsideClick = () => {
        setIsOpen(false)
    }

    return (
        <ClickAwayListener onClickAway={handleOutsideClick}>
            <Box>
                <GWButton onClick={() => setIsOpen(!isOpen)} variant="icon" icon="/assets/images/svg/share-box-fill.svg" />
                {
                    isOpen && (
                        fullScreen ?
                            <GWCard padding="20px" borderRadius="8px" sx={{ marginTop: "12px", marginLeft: "-100px", width: "224px", position: "absolute", border: "1px solid #E4E7EC", boxShadow: "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)" }}>
                                <Div sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {children}
                                </Div>
                                <GWButton onClick={copyToClipboard} icon={isIconDisplayed && "/assets/images/svg/checkbox-circle-fill.svg"} text={t(buttonText)} bgColor={buttonBg} color="white" sx={{ width: "100%", marginTop: "8px" }} />
                            </GWCard>
                            :
                            <GWModal title="digital_gold" subTitle="digital_gold_info" backdrop={false} isOpen={isOpen} setIsOpen={setIsOpen} >
                                <FlexContainer sx={{ gap: "16px", flexDirection: "column" }}>
                                    {
                                        children?.map((item, i) => (
                                            <FlexContainer key={i} sx={{ justifyContent: "space-between", padding: "10px 14px", border: `1px solid ${Colors.grey300}`, borderRadius: "8px" }} onClick={() => selectOption(item)}>
                                                <Box>{intelliText(item.value)}</Box>
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
                    )

                }
            </Box>
        </ClickAwayListener>
    )
};

export default GWShare;