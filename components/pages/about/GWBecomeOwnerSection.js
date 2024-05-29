import { Typography } from "@mui/material";
import { Inter, Roboto } from "@next/font/google";
import { ReactSVG } from "react-svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import Colors from "../../../colors/colors";
import GWInput from "../../atoms/GWInput";
import GWButton from "../../atoms/GWButton";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

const GWBecomeOwner = () => {
    const fullScreen = useMediaQuery("(min-width:1200px)");
    const mobile = useMediaQuery("(max-width:458px)");
    const { t } = useTranslation("about");

    return (
        <Div sx={{ backgroundPositionX: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(/assets/images/png/become_owner.png)`, backgroundSize: "cover", padding: fullScreen ? "120px 24px" : "56px 24px", backgroundColor: Colors.purple }}>
            <FlexContainer sx={{ margin: "0 auto", flexDirection: "column", alignItems: "center", maxWidth: "620px", zIndex: 0 }}>
                <ReactSVG src="/assets/images/svg/logo-goldwise-blue.svg" />
                <GWAvenirFont tag="h2" color={Colors.white} fontSize={fullScreen ? "40px" : "36px"} fontWeight="500" sx={{ lineHeight: "56px", letterSpacing: "-1px", marginTop: "40px", padding: fullScreen ? "0 110px" : "", textAlign: "center", marginTop: "72px" }}>
                    {t(`become_owner`)}
                </GWAvenirFont>
                <Typography className={inter.className} sx={{ fontSize: "18px", lineHeight: "32px", textAlign: "center", color: Colors.white, marginTop: "24px" }}>
                    {t("owner_text")}
                </Typography>
                <FlexContainer sx={{ flexDirection: mobile ? "column" : "row", gap: "12px", marginTop: "40px", "& input": { marginRight: "12px" }, "& ::placeholder": { fontSize: "16px", color: Colors.white, fontFamily: roboto } }}>
                    <GWInput width={mobile ? "100%" : ""} color={Colors.white} bgColor="rgba(101, 92, 255, 0.8)" placeholder="youremail@example.com" />
                    <GWButton text={t("sign_up")} color={Colors.purple} bgColor={Colors.white} />
                </FlexContainer>
            </FlexContainer>
        </Div>
    );
};

export default GWBecomeOwner;
