import { ReactSVG } from "react-svg";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";
import GWCard from "../atoms/GWCard";
import FlexContainer from "../styled/FlexContainer";
import GWAvenirFont from "../atoms/GWAvenirFont";
import Colors from "../../colors/colors";

const GWContactCard = ({ title, phone, email }) => {
    const { t } = useTranslation("about");
    const mobile = useMediaQuery("(max-width:1200px)");

    return (
        <GWCard variant="emphasis" borderRadius="25px" sx={{ padding: mobile ? "32px 8px" : "30px 32px", marginTop: "32px", width: "100%" }}>
            <FlexContainer sx={{ flexDirection: mobile ? "column" : "row", justifyContent: mobile ? "start" : "space-between" }}>
                <FlexContainer sx={{ alignItems: "center" }}>
                    <ReactSVG src="/assets/images/svg/info.svg" />
                    <GWAvenirFont fontWeight="500" fontSize="18px" color={Colors.navy} sx={{ marginLeft: mobile ? "8px" : "12px" }}>
                        {t(title)}
                    </GWAvenirFont>
                </FlexContainer>
                <FlexContainer sx={{ flexDirection: mobile ? "column" : "row", marginTop: mobile ? "24px" : "" }}>
                    <FlexContainer sx={{ marginRight: mobile ? "" : "32px", alignItems: "center", textAlign: "center" }}>
                        <ReactSVG src="/assets/images/svg/phone.svg" />
                        <GWAvenirFont fontWeight="500" fontSize="18px" color={Colors.navy} sx={{ marginLeft: "8px" }}>
                            {phone}
                        </GWAvenirFont>
                    </FlexContainer>
                    <FlexContainer sx={{ alignItems: "center", marginTop: mobile ? "24px" : "" }}>
                        <ReactSVG src="/assets/images/svg/mail.svg" />
                        <GWAvenirFont fontWeight="500" fontSize="18px" color={Colors.navy} sx={{ marginLeft: "8px" }}>
                            {email}
                        </GWAvenirFont>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </GWCard>
    );
};

export default GWContactCard;
