import { Box, Paper, Typography, useMediaQuery } from "@mui/material"
import { styled } from "@mui/system"
import { useState } from "react"
import { useTranslation } from "next-i18next"
import { ReactSVG } from "react-svg"
import Colors from "../../../colors/colors"
import { useSpotDetail } from "../../../contexts/SpotDetailContext"
import { isImageOrSVG } from "../../../utils/utils"
import GWButton from "../../atoms/GWButton"
import GWModal from "../../atoms/GWModal"
import Div from "../../styled/Div"
import FlexContainer from "../../styled/FlexContainer"

const _GWBottomNavigation = styled(Div)({
})

const GWBottomNavigation = ({ style }) => {
    const { isOpen, toggleModal, items, setItems } = useSpotDetail();
    const { t } = useTranslation("spot-price-detail")
    const [option, selectOption] = useState();
    const fullScreen = useMediaQuery("(min-width:1200px)")

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

    const showShareModal = () => {
        setItems([
            {
                leftIcon: "/assets/images/svg/instagram-fill.svg",
                value: "Instagram"
            },
            {
                leftIcon: "/assets/images/svg/linkedin-box-fill.svg",
                value: "LinkedIn"
            },
            {
                leftIcon: "/assets/images/svg/facebook-circle-fill.svg",
                value: "Facebook"
            },
            {
                leftIcon: "/assets/images/svg/whatsapp-fill.svg",
                value: "WhatsApp"
            },
            {
                leftIcon: "/assets/images/svg/file-copy-line.svg",
                value: t('copy_to_clipboard')
            },
        ]);

        toggleModal();
    }

    const showCurrencyModal = () => {
        setItems([
            {
                value: "EUR"
            },
            {
                value: "GBP"
            }
        ]);

        toggleModal();
    }

    const showUnitModal = () => {
        setItems([
            {
                value: "t/OZ"
            },
            {
                value: "Kilogram"
            },
            {
                value: "Gram"
            }
        ]);

        toggleModal();
    }

    return (
        <_GWBottomNavigation>
            <Paper sx={
                {
                    ...style,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    transform: 'translate(0, 0)',
                    width: "100%",
                    borderRadius: "25px 25px 0 0",
                    position: "fixed",
                    boxShadow: "0px -56px 140px rgba(14, 18, 100, 0.06)"
                }}
            >
                <Box sx={{ margin: "0px", padding: "24px 25px 52px 25px" }}>
                    <FlexContainer sx={{ justifyContent: "space-between" }}>
                        <GWButton icon="/assets/images/svg/share-box-fill.svg" onClick={showShareModal} bgColor="grey200" sx={{ width: "44px", height: "44px", border: "none" }} variant="icon" />
                        <GWButton icon="/assets/images/svg/asterisk-bold.svg" onClick={showUnitModal} bgColor="grey200" sx={{ width: "44px", height: "44px", border: "none" }} variant="icon" />
                        <GWButton icon="/assets/images/svg/money-dollar-circle-line.svg" onClick={showCurrencyModal} bgColor="grey200" sx={{ width: "44px", height: "44px", border: "none" }} variant="icon" />
                        <GWButton icon="/assets/images/svg/notification-3-line.svg" onClick={toggleModal} bgColor="grey200" sx={{ width: "44px", height: "44px", border: "none" }} variant="icon" />
                        <GWButton icon="/assets/images/svg/arrow-down-line.svg" bgColor="purple" sx={{ width: "44px", height: "44px", border: "none" }} variant="icon" />
                        <GWButton icon="/assets/images/svg/arrow-up-line-.svg" bgColor="navy" sx={{ width: "44px", height: "44px", border: "none" }} variant="icon" />
                    </FlexContainer>
                </Box>
            </Paper>
            <GWModal title="digital_gold" subTitle="digital_gold_info" backdrop={false} isOpen={!fullScreen && (isOpen)} closeModal={toggleModal} >
                <FlexContainer sx={{ gap: "16px", flexDirection: "column" }}>
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
                                        option?.value === item.value && <FlexContainer sx={{ flexDirection: "column" }}><ReactSVG src="/assets/images/svg/check.svg" /></FlexContainer>
                                    }
                                </Box>
                            </FlexContainer>
                        ))
                    }
                </FlexContainer>
            </GWModal>
        </_GWBottomNavigation>
    )
}

export default GWBottomNavigation;