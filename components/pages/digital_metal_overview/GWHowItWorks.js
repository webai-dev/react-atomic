import { useTranslation } from "next-i18next";
import FlexContainer from "../../styled/FlexContainer";
import Div from "../../styled/Div";
import GWHeroHeadingText from "../../atoms/GWHeroHeadingText";
import GWStepCard from "../../molecules/GWStepCard";
import { useState } from "react";

const GWHowItWorks = () => {
    const { t } = useTranslation("digital_metal_overview")
    const [step, setStep] = useState(1);

    const handleStepClick = (selectedStep) => {
        setStep(selectedStep);
    }

    return (
        <FlexContainer className="my-0" style={{ background: "#FBFBFD" }}>
            <FlexContainer
                className="col-md-10 mx-auto"
                sx={{
                    marginTop: "165px",
                    flexDirection: "column",
                    "@media (max-width: 1000px)": {
                        marginTop: "56px"
                    }
                }}>
                <FlexContainer sx={{
                    marginTop: "40px",
                    marginBottom: "72px",
                    "@media (max-width: 1000px)": {
                        marginTop: "32px",
                    }
                }}>
                    <FlexContainer className="">
                        <GWHeroHeadingText fontSize="56px">{t("How it works.")}</GWHeroHeadingText>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer className="row my-0" style={{ background: "#FBFBFD" }}>
                    <FlexContainer
                        className="col-md-7 mx-auto"
                        sx={{
                            flexDirection: "column",
                            "@media (max-width: 1000px)": {
                                marginTop: "56px"
                            }
                        }}>
                        <Div className="">
                            <GWStepCard selected={step === 1} stepNumber={1} onClick={handleStepClick} title="Select a precious metal & vault 1" description="See the real time market spot prices of precious metal how it works points image." />
                            <GWStepCard selected={step === 2} stepNumber={2} onClick={handleStepClick} title="Select a precious metal & vault 2" description="See the real time market spot prices of precious metal how it works points image." />
                            <GWStepCard selected={step === 3} stepNumber={3} onClick={handleStepClick} title="Select a precious metal & vault 3" description="See the real time market spot prices of precious metal how it works points image." />
                            <GWStepCard selected={step === 4} stepNumber={4} onClick={handleStepClick} title="Select a precious metal & vault 4" description="See the real time market spot prices of precious metal how it works points image." />
                        </Div>
                    </FlexContainer>

                    <FlexContainer
                        className="col-md-5 mx-auto"
                        sx={{
                            flexDirection: "column",
                            "@media (max-width: 1000px)": {
                                marginTop: "56px"
                            }
                        }}>
                        <Div sx={{
                            width: 400,
                            height: 797,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: `url(/assets/images/png/app-mockup.PNG)`,
                            "@media (max-width: 700px)": {
                                width: 351,
                                height: 701,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                margin: "auto"
                            }
                        }} />
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>)
};
export default GWHowItWorks
