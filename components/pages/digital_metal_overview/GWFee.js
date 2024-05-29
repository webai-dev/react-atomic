import { useMediaQuery } from "@mui/material";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import Colors from "../../../colors/colors";
import Div from "../../styled/Div";
import GWAvenirFont from "../../atoms/GWAvenirFont";

const [ GWTransactionFeesSection, GWStorageFeesSection ] = [ "GWTransactionFeesSection", "GWStorageFeesSection" ].map((page) => dynamic(() => import(`../../../components/pages/fees/${page}`), { ssr: true }));

const GWFee = () => {
    const { t } = useTranslation([ "digital_metal_overview", "fees" ]);
    const mobile = useMediaQuery("(max-width:1200px)");

    return (<Div sx={{ backgroundColor: Colors.grey100, padding: mobile ? "56px 24px" : "70px 24px" }}>
        <Div sx={{ position: "relative" }}>
            <Div sx={{ margin: "0 auto", maxWidth: "1060px" }}>
                <Div sx={{ textAlign: "center", position: "relative", zIndex: 0 }}>
                    <GWAvenirFont variant="black" fontWeight="600" fontSize={mobile ? "46px" : "72px"}>
                        {t("Fees")}
                    </GWAvenirFont>
                </Div>
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
export default GWFee;
