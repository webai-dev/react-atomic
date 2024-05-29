import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import GWSelect from "../components/molecules/GWSelect";

export const HeaderControlContext = React.createContext();

export const HeaderControlContextProvider = ({ children }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    return (
        <HeaderControlContext.Provider value={{ expandedIndex, setExpandedIndex }}>
            {children}
        </HeaderControlContext.Provider>
    )
};

export const useHeaderControl = () => React.useContext(HeaderControlContext);