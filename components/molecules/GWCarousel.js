import { Box, styled } from "@mui/system";
import { useRef } from "react";
import { useResizeDetector } from "react-resize-detector";
import GWButton from "../atoms/GWButton";
import FlexContainer from "../styled/FlexContainer";
import PropTypes from "prop-types";

const _GWCarousel = styled(Box)({
    flexDirection: "column",
    height: "auto"
})

const _GWCarouselItem = styled(FlexContainer)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
})

const GWCarousel = ({ itemCount, actionButton, sx, children }) => {
    const { width, ref } = useResizeDetector();
    const scrollRef = useRef();
    const itemRef = useRef();
    const mobileItemRef = useRef();

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -1 * width / itemCount,
            top: 0,
            behavior: 'smooth'
        });
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: width / itemCount,
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <_GWCarousel
            ref={ref}
            sx={{ marginLeft: width >= 1200 ? "24px" : "0", ...sx }}
        >
            {
                width >= 1000 ?
                    <>
                        <FlexContainer ref={scrollRef} className="full-screen-scrollbar-container" sx={{ overflowX: "scroll", width: "100%", height: "inherit", justifyContent: "unset", gap: "12px", paddingBottom: "23px" }}>
                            <FlexContainer sx={{ background: "linear-gradient(90deg, #FFFFFF 2.3%, rgba(255, 255, 255, 0) 100%)", position: "absolute", left: "0", height: scrollRef?.current?.offsetHeight, width: width >= 1200 ? "370px" : "100px" }}></FlexContainer>
                            {children.map((child, i) => <_GWCarouselItem key={i} ref={itemRef} sx={{ width: width / itemCount, marginLeft: i === 0 ? `${itemRef?.current?.offsetWidth / 2}px` : "0px", marginRight: i === children.length - 1 ? `${itemRef?.current?.offsetWidth / 2}px` : "0px" }}>{child}</_GWCarouselItem>)}
                            <FlexContainer sx={{ background: "linear-gradient(270deg, #FFFFFF 2.3%, rgba(255, 255, 255, 0) 100%)", position: "absolute", right: "0", height: scrollRef?.current?.offsetHeight, width: width >= 1200 ? "370px" : "100px" }}></FlexContainer>
                        </FlexContainer>
                        <FlexContainer className="row" sx={{ marginRight: "100px" }}>
                            <FlexContainer className="col-md-9" sx={{ justifyContent: actionButton ? "space-between" : "flex-end", width: "100%", padding: "17px 0px" }}>
                                {actionButton && <FlexContainer sx={{ alignItems: "center" }}>
                                    <GWButton text={actionButton?.label} color="white" bgColor="navy" location="common" />
                                </FlexContainer>}
                                <Box>
                                    <GWButton variant="circle" icon="/assets/images/svg/arrow-drop-left-line.svg" location="common" sx={{ marginRight: "20px" }} onClick={scrollLeft} />
                                    <GWButton variant="circle" icon="/assets/images/svg/arrow-drop-right-line.svg" location="common" onClick={scrollRight} />
                                </Box>
                            </FlexContainer>
                        </FlexContainer>
                    </>
                    :
                    <Box>
                        <FlexContainer ref={mobileItemRef} className="scrollbar-container" sx={{ overflowX: "scroll", width: "100vw", justifyContent: "unset", gap: "12px", padding: "0 24px 23px 24px" }}>
                            <FlexContainer sx={{ gap: "40px", background: "linear-gradient(90deg, #FFFFFF 2.3%, rgba(255, 255, 255, 0) 100%)", position: "absolute", left: "0", height: mobileItemRef?.current?.offsetHeight, width: "50px" }}></FlexContainer>
                            {children.map((child, i) => <FlexContainer key={i} sx={{ width: width - 24, marginLeft: i === 0 ? `0px` : "0px", marginRight: i === children.length - 1 ? `30px` : "0px" }}>{child}</FlexContainer>)}
                            <FlexContainer sx={{ gap: "40px", background: "linear-gradient(270deg, #FFFFFF 2.3%, rgba(255, 255, 255, 0) 100%)", position: "absolute", right: "0", height: mobileItemRef?.current?.offsetHeight, width: "50px" }}></FlexContainer>
                        </FlexContainer>
                        {
                            actionButton && <Box sx={{ padding: "52px 24px 0 24px" }}>
                                <GWButton text={actionButton?.label} color="white" bgColor="navy" sx={{
                                    width: "100%",
                                    "@media (max-width: 700px)": {
                                        margin: "auto",
                                        minWidth: "0"
                                    }
                                }} location="common" />
                            </Box>
                        }
                    </Box>
            }
        </_GWCarousel>
    )
};

export default GWCarousel;


GWCarousel.propTypes = {
    itemCount: PropTypes.number,
    actionButton: PropTypes.shape({
        label: PropTypes.string,
        action: PropTypes.func
    }),
    sx: PropTypes.object,
    children: PropTypes.node,
}