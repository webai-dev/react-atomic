import { useState } from "react";
import Colors from "../../../colors/colors";
import GWAvenirFont from "../../atoms/GWAvenirFont";
import GWBadge from "../../atoms/GWBadge";
import GWButton from "../../atoms/GWButton";
import GWSelect from "../../molecules/GWSelect";
import Div from "../../styled/Div";
import FlexContainer from "../../styled/FlexContainer";

const items = [
    {
        value: "All Tags"
    },
    {
        value: <GWBadge variant="plain" bgcolor={Colors.gold} color={Colors.white} text="oz" padding="4px 12px" />
    },
    {
        value: <GWBadge variant="plain" bgcolor={Colors.purple} color={Colors.white} text="oz1" padding="4px 12px" />
    },
    {
        value: <GWBadge variant="plain" bgcolor={Colors.teal} color={Colors.white} text="oz2" padding="4px 12px" />
    },
    {
        value: <GWBadge variant="plain" bgcolor={Colors.grey300} color={Colors.white} text="oz3" padding="4px 12px" />
    }
];
const items2 = [
    {
        value: "All Tags"
    },
    {
        value: <GWBadge variant="plain" bgcolor={Colors.gold} color={Colors.white} text="EUR" padding="4px 12px" />
    },
    {
        value: <GWBadge variant="plain" bgcolor={Colors.purple} color={Colors.white} text="USD" padding="4px 12px" />
    },
];

const metaldata = {
    gold: {
        title: "gold",
        symbol: "Au"
    },
    silver: {
        title: "silver",
        symbol: "Ag"
    },
    platinum: {
        title: "platinum",
        symbol: "Pt"
    },
    palladium: {
        title: "palladium",
        symbol: "Pd"
    }
}


const GWHeaderSection = ({ metal }) => {
    const [unit, setUnit] = useState("oz");
    const handleUnitChange = (e) => {
        if (e.target) {
            setUnit(e.target.value);
        }
    }

    return (
        <Div sx={{ boxShadow: "inset 0px -1px 0px #E0E1E4", padding: "40px" }}>
            <Div sx={{ maxWidth: "1060px", margin: "0 auto" }}>
                <FlexContainer sx={{ alignItems: "space-between" }}>
                    <FlexContainer sx={{ alignItems: "center", gap: "24px", justifyContent: "start" }}>
                        <Div sx={{ textAlign: "center", fontWeight: "500", lineHeight: "52px", width: "56px", height: "56px", fontSize: "22px", borderRadius: "100%", backgroundColor: Colors[metaldata[metal]?.title], color: Colors.white }}>{metaldata[metal]?.symbol}</Div>
                        <GWAvenirFont sx={{ textTransform: "capitalize", marginRight: "2px", textTransform: "capitalize" }}>
                            Digital {metal}
                        </GWAvenirFont>
                    </FlexContainer>
                    <FlexContainer sx={{ marginLeft: "auto", gap: "16px" }}>
                        <Div>
                            <GWSelect onClick={handleUnitChange} leftIcon={true} items={items} width="1366" />
                        </Div>
                        <Div>
                            <GWSelect onClick={handleUnitChange} leftIcon={true} items={items2} width="1366" />
                        </Div>
                        <Div><GWButton text={"Buy"} color="white" bgColor="purple" location="common" /></Div>
                        <Div><GWButton text={"Sell"} color="white" bgColor="navy" location="common" /></Div>
                    </FlexContainer>
                </FlexContainer>
            </Div>
        </Div>
    )
}

export default GWHeaderSection;
