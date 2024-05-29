import { Box } from "@mui/system";
import GWButton from "../../atoms/GWButton";
import Container from "../../styled/Container";
import FlexContainer from "../../styled/FlexContainer";
import Colors from "../../../colors/colors"
import GWAvenirFont from "../../atoms/GWAvenirFont";

const GWArticleBody = ({ data }) => {
    const { response } = data;

    return (
        <Container sx={{  flex: 10, minHeight: "80vh", boxShadow: "none", paddingRight: "10px" }}>
            <FlexContainer sx={{ justifyContent: "flex-start" }}>
                <GWButton icon="/assets/images/svg/arrow-left.svg" text="Overview" sx={{ color: Colors.grey400, border: "none", boxShadow: "none" }} />
            </FlexContainer>
            <FlexContainer sx={{ marginTop: "44px", flexDirection: "column" }}>
                <GWAvenirFont fontWeight="800" fontSize="72px">{response?.title?.rendered}</GWAvenirFont>
                <Box component="img" sx={{ width: "100%", aspectRatio: "auto 1/1", borderRadius: "0" }} src={response?.imageUrl} />
                <GWAvenirFont fontSize="18px" fontWeight="500" color="grey500" sx={{ marginTop: "72px" }}>
                    {response?.excerpt?.rendered}
                </GWAvenirFont>
            </FlexContainer>
        </Container>
    )
}

export default GWArticleBody;
