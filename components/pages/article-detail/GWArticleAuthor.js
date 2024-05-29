import { Avatar } from "@mui/material";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWCard from "../../atoms/GWCard";
import FlexContainer from "../../styled/FlexContainer";


const GWArticleAuthor = ({ data, mobile }) => {
    const { response } = data;

    const genBgColor = (name) => {
        let nameToLowerCase = name.toLowerCase();
        if (Colors[nameToLowerCase]) {
            return nameToLowerCase;
        } else {
            return "purple"
        }
    }

    return (
        <GWCard sx={{ border: mobile ? "2px solid rgba(127, 129, 140, 0.18)" : "none", borderRadius: "25px", padding: "24px", minWidth: mobile ? "180px" : "290px", width: "fit-content", flex: "2", boxShadow: mobile ? "0px 8px 10px -6px rgba(0, 0, 0, 0.1)" : "none", marginTop: "44px" }}>
            <Avatar src={response?.authorInformation?.avatarUrls["24"]} />
            <GWAvenirFont fontWeight="500" fontSize="18px" color="navy" sx={{ marginTop: "20px" }}>{response?.authorInformation?.name}</GWAvenirFont>
            <GWAvenirFont fontWeight="400" fontSize="16px" color="purple">Project Management</GWAvenirFont>
            <FlexContainer sx={{ gap: "8px", marginTop: "16px", justifyContent: "flex-start", padding: "", flexWrap: "wrap" }}>
                {
                    response?.tags?.map((tag, i) =>  <GWBadge key={i} text={tag.name} bgcolor={genBgColor(tag.name)} color="white" />)
                }
                {/* <GWBadge text="News" bgcolor="purple" color="white" />
                <GWBadge text="Gold" bgcolor="gold" color="white" /> */}
            </FlexContainer>
        </GWCard>
    )
};

export default GWArticleAuthor
