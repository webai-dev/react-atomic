import { useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";
import Colors from "../../../colors/colors";
import Div from "../../styled/Div";

const [ GWTransactionFeesSection, GWStorageFeesSection ] = [ "GWTransactionFeesSection", "GWStorageFeesSection" ].map((page) => dynamic(() => import(`../../../components/pages/fees/${page}`), { ssr: true }));

const GWFeeSection = () => {
    const mobile = useMediaQuery("(max-width:1200px)");

    return (<Div sx={{ backgroundColor: Colors.grey100, padding: mobile ? "56px 24px" : "24px" }}>
        <Div sx={{ position: "relative" }}>
            <Div sx={{ margin: "0 auto", maxWidth: "1060px" }}>
                <GWTransactionFeesSection/>
            </Div>
        </Div>
        <Div sx={{ "& *": { position: "relative" } }}>
            <Div sx={{ margin: "0 auto", maxWidth: "1060px" }}>
                <GWStorageFeesSection/>
            </Div>
        </Div>
    </Div>)
}
export default GWFeeSection;
