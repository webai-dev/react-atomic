import { useMediaQuery } from "@mui/material";
import GWFaq from "../../organisms/GWFaq";
import Div from "../../styled/Div";


const GWFaqSection = () => {
    const fullScreen = useMediaQuery("(min-width:1200px)")

    return (
        <Div sx={{ padding: fullScreen ? "52px 270px 0 270px" : "56px 24px 0 24px" }}>
            <GWFaq
                title="FAQs"
                items={[
                    {
                        title: "Why are you regulated in the UK & EU",
                        content: "Unlike many bullion dealers, we are regulated by the FCA in the UK and the Central Bank of Lithuania in the EU. This means that our policies and operations need to meet strict financial services requirements giving you the confidence that we operate professionally, with you first in mind"
                    },
                    {
                        title: "Why are you regulated in the UK & EU",
                        content: "Unlike many bullion dealers, we are regulated by the FCA in the UK and the Central Bank of Lithuania in the EU. This means that our policies and operations need to meet strict financial services requirements giving you the confidence that we operate professionally, with you first in mind"
                    },
                    {
                        title: "Why are you regulated in the UK & EU",
                        content: "Unlike many bullion dealers, we are regulated by the FCA in the UK and the Central Bank of Lithuania in the EU. This means that our policies and operations need to meet strict financial services requirements giving you the confidence that we operate professionally, with you first in mind"
                    },
                    {
                        title: "Why are you regulated in the UK & EU",
                        content: "Unlike many bullion dealers, we are regulated by the FCA in the UK and the Central Bank of Lithuania in the EU. This means that our policies and operations need to meet strict financial services requirements giving you the confidence that we operate professionally, with you first in mind"
                    },
                    {
                        title: "Why are you regulated in the UK & EU",
                        content: "Unlike many bullion dealers, we are regulated by the FCA in the UK and the Central Bank of Lithuania in the EU. This means that our policies and operations need to meet strict financial services requirements giving you the confidence that we operate professionally, with you first in mind"
                    }
                ]}
            />
        </Div>
    )
};

export default GWFaqSection;