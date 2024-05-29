import { ReactSVG } from "react-svg";
import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Inter } from "@next/font/google";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Div from "../../styled/Div";
import GWSectionTable from "../../molecules/GWSectionTable";
import { useMediaQuery } from "@mui/material";
import Colors from "../../../colors/colors";

const inter = Inter({ subsets: ["latin"] });

const GWTransactionFeesSection = () => {
    const { t } = useTranslation("fees");
    const mobile = useMediaQuery("(max-width:1200px)");

    const data = [
        {
            buy: (<Div sx={{ textAlign: "center" }}>
                <GWAvenirFont tag="h3" variant="black" fontWeight="800" fontSize="18px" color={Colors.navy}>
                    0.50%
                </GWAvenirFont>
            </Div>),
            sell: (<Div sx={{ textAlign: "center" }}>
                <GWAvenirFont variant="black" fontWeight="800" fontSize="18px" color={Colors.navy}>
                    0.50%
                </GWAvenirFont>
            </Div>)
        }
    ];

    return (
        <Div sx={{ marginTop: mobile ? "56px" : "120px", position: "relative", zIndex: 0 }}>
            <GWAvenirFont variant="black" fontWeight="600" fontSize="24px">
                {t("transaction_title")}
            </GWAvenirFont>
            <FlexContainer sx={{ marginTop: "12px", marginBottom: mobile ? "32px" : "44px", gap: "12px" }}>
                <ReactSVG src="/assets/images/svg/info.svg" />
                <Typography className={inter.className} sx={{ color: "#323254", fontSize: "18px", lineHeight: "28px" }}>
                    {t("transaction_description")}
                </Typography>
            </FlexContainer>
            <GWSectionTable data={data} columns={[{ title: t("buy_fee") }, { title: t("sell_fee") }]} />
        </Div>
    );
};

export default GWTransactionFeesSection;
