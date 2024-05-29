import { Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Inter } from "@next/font/google";
import { ReactSVG } from "react-svg";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWSectionTable from "../../molecules/GWSectionTable";
import { useMediaQuery } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const GWOtherFeesSection = () => {
    const { t } = useTranslation("fees");
    const mobile = useMediaQuery("(max-width:1200px)");

    const data = [
        {
            otherFees: <b>{t("deposits")}</b>,
            perTransactionFee: "",
            sectionIndicator: true,
        },
        {
            otherFees: t("account_fees"),
            perTransactionFee: t("free"),
        },
        {
            otherFees: t("regular_bank_transfer"),
            perTransactionFee: t("free"),
        },
        {
            otherFees: t("easy_bank_transfer"),
            perTransactionFee: t("free"),
        },
        {
            otherFees: <b>{t("widthdrawals")}</b>,
            perTransactionFee: "",
            sectionIndicator: true,
        },
        {
            otherFees: t("local"),
            perTransactionFee: t("free"),
        },
        {
            otherFees: t("international"),
            perTransactionFee: t("free"),
        },
    ];

    return (
        <Div sx={{ marginTop: mobile ? "56px" : "72px" }}>
            <GWAvenirFont variant="black" fontWeight="600" fontSize="24px">
                {t("other_title")}
            </GWAvenirFont>
            <FlexContainer sx={{ marginTop: mobile ? "12px" : "16px", marginBottom: mobile ? "32px" : "44px", gap: "12px" }}>
                <ReactSVG src="/assets/images/svg/info.svg" />
                <Typography className={inter.className} sx={{ color: "#323254", fontSize: "18px", lineHeight: "28px" }}>
                    {t("other_description")}
                </Typography>
            </FlexContainer>
            <GWSectionTable data={data} columns={[{ title: t("other_fees") }, { title: t("per_transaction_fee") }]} />
        </Div>
    );
};

export default GWOtherFeesSection;
