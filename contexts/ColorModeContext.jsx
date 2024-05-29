import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
    toggleDarkMode: () => {},
    toggleLightMode: () => {},
    mode: "light"
})

export const ColorModeContextProvider = ({ children }) => {
    const [mode, setMode] = React.useState("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
            },
            toggleDarkMode: () => {
                setMode("dark")
            },
            toggleLightMode: () => {
                setMode("light")
            },
            mode
        }),
        [mode]
    );

    const theme = React.useMemo(() =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === "light" ? {
                        secondary: {
                            main: "#F5F5F5",
                            light: "#F5F5F5",
                            dark: "#01041A",
                        },
                        primary: {
                            main: "#01041A",
                            light: "#01041A",
                            dark: "#F5F5F5",
                        },
                        background: {
                            default: "#FFFFFF",
                            paper: "#FFFFFF",
                            badge: "#FFFFFF",
                        },
                        text: {
                            primary: "#01041A",
                            secondary: "#404353",
                        },
                        grey: {
                            "100": "#FBFBFD",
                            "200": "#F5F5F7",
                            "300": "#BFC0C5",
                            "400": "#7F818C", /* Dark Grey */
                            "500": "#404353", /* Very Dark Grey */
                        }
                    } : {
                        secondary: {
                            main: "#F5F5F5",
                            light: "#F5F5F5",
                            dark: "#01041A",
                        },
                        primary: {
                            main: "#01041A",
                            light: "#01041A",
                            dark: "#F5F5F5",
                        },
                        background: {
                            default: "#01041A",
                            paper: "#01041A",
                            badge: "#01041A",
                        },
                        text: {
                            primary: "#FFFFFF",
                            secondary: "#FFFFFF",
                        },
                        grey: {
                            "100": "#FBFBFD",
                            "200": "#F5F5F7",
                            "300": "#BFC0C5",
                            "400": "#7F818C",
                            "500": "#404353",
                        }
                    })
                }
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )
};

export const useColorMode = () => React.useContext(ColorModeContext)
