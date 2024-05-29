import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import GWSelect from "../components/molecules/GWSelect";

export const SpotDetailContext = React.createContext();

export const SpotDetailContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const fullscreen = useMediaQuery("(min-width:1200px)")
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [items, setItems] = useState([])

    const toggleModal = () => setIsOpen(!isOpen);

    const toggleCurrency = () => setIsCurrencyOpen(!isCurrencyOpen);

    return (
        <SpotDetailContext.Provider value={{ isOpen, toggleModal, items, setItems }}>
            {children}
            <GWSelect borderRadius="24px" items={items} leftIcon={true} />
        </SpotDetailContext.Provider>
    )
};

export const useSpotDetail = () => React.useContext(SpotDetailContext);