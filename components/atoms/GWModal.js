import { Box, Button, List, Modal, Paper, SwipeableDrawer, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import { useResizeDetector } from "react-resize-detector";
import Colors from "../../colors/colors";
import FlexContainer from "../styled/FlexContainer";
import GWButton from "./GWButton";
import GWAvenirFont from "./GWAvenirFont";

const _GWModal = styled(Modal)({
    ":focus:not(:focus-visible)": {
        outline: "2px solid #FFFFFF"
    }
});

let style = {
    position: 'fixed',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: "2px solid rgba(127, 129, 140, 0.18)",
    boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
    borderRadius: "25px",
    height: "fit-content"
};

const GWModal = ({ title, screenWidth, subTitle, children, isOpen, closeModal, size, backdrop }) => {
    const { width, height, ref } = useResizeDetector();
    const { t } = useTranslation("common");
    const handleClose = () => closeModal();

    switch (size) {
        case "sm":
            style = { ...style, width: "25%" }
            break;
        case "md":
            style = { ...style, width: "50%" }
            break;
        case "lg":
            style = { ...style, width: "75%" }
            break;
        case "xl":
            style = { ...style, width: "100%" }
            break;
        default:
            style = { ...style, width: "75%" }
            break;
    }

    return (
        <Box ref={ref}>
            <_GWModal
                open={isOpen}
                onClose={handleClose}
                slotProps={{
                    backdrop: {
                        open: backdrop,
                        classes: {
                            root: 'default-backdrop-color'
                        }
                    }
                }}
                sx={{ border: width < 1200 ? 0 : "2px solid rgba(127, 129, 140, 0.18)", padding: width >= 1200 ? "52px" : "0", top: (width || screenWidth) >= 1200 ? "50%" : "100%" }}
            >
                <Paper sx={
                    (width || screenWidth) >= 1200 ?
                        { ...style } :
                        {
                            ...style,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            transform: 'translate(0, 0)',
                            width: "100%",
                            borderRadius: "25px 25px 0 0"
                        }}
                >
                    {
                        (width || screenWidth) >= 1200 &&
                        <FlexContainer style={{ justifyContent: "space-between", padding: "32px 24px 0 24px" }}>
                            <Box>
                                <GWAvenirFont fontWeight="800" variant="black" fontSize="18px">{title}</GWAvenirFont>
                            </Box>
                            <Box>
                                <ReactSVG src="/assets/images/svg/close-line.svg" style={{ cursor: "pointer" }} onClick={handleClose} />
                            </Box>
                        </FlexContainer>
                    }
                    <Box sx={{ margin: width >= 1200 ? "40px" : "0px", padding: "32px 24px 0 24px" }}>
                        {children}
                    </Box>
                    {
                        (width || screenWidth) < 1200 && <Box sx={{ padding: "52px 24px", position: "relative", bottom: 0, left: 0, width: "100%" }}>
                            <GWButton bgColor="navy" text="Close" color="white" sx={{ width: "100%" }} onClick={closeModal} />
                        </Box>
                    }
                </Paper>
            </_GWModal>
        </Box>
    )
}

export default GWModal;