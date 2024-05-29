import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const _GWCarouselItem = styled(Paper)({
    boxSizing: "border-box",
    background: "#FFFFFF",
    border: "2px solid rgba(127, 129, 140, 0.18)",
    boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
    borderRadius: "25px",
    padding: "40px 32px",
    width: "inherit"
});

const GWCarouselItem = ({sx, children}) => {
    return (
        <_GWCarouselItem sx={sx}>
            {children}
        </_GWCarouselItem>
    )
};

export default GWCarouselItem;