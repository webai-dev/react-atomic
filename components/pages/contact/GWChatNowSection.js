import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "next-i18next";
import { ReactSVG } from "react-svg";
import GWCard from "../../atoms/GWCard";
import FlexContainer from "../../styled/FlexContainer";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWButton from "../../atoms/GWButton";
import Div from "../../styled/Div";
import Colors from "../../../colors/colors";

const GWChatNowSection = () => {
    const { t } = useTranslation("contact");
    const isMobile = useMediaQuery("(max-width:1200px)");

    return (
        <GWCard
            variant="emphasis"
            borderRadius="25px"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: !isMobile ? "22px" : "16px",
            }}
        >
            <FlexContainer sx={{ position: "relative", top: "9px" }}>
                <ReactSVG
                    src="/assets/images/svg/info.svg"
                />
                <GWAvenirFont
                    fontWeight="500"
                    fontSize="18px"
                    color={Colors.navy}
                    sx={{
                        marginLeft: "12px",
                        lineHeight: "28px",
                    }}
                >
                    {t("chat_with_our_live_chat")}
                </GWAvenirFont>
            </FlexContainer>
            <Div>
                <GWAvenirFont
                    fontWeight="800"
                    fontSize="16px"
                    color={Colors.navy}
                    sx={{ lineHeight: "24px" }}
                    variant="black"
                >
                    <GWButton
                        text={t("chat_now")}
                        bgColor="linear-gradient(180deg, #7A73FF 0%, #655CFF 100%)"
                        color="white"
                        variantStyles="default"
                        location="common"
                    />
                </GWAvenirFont>
            </Div>
        </GWCard>
    );
};

export default GWChatNowSection;
