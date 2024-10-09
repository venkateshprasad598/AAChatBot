import { theme } from "antd";
const { defaultAlgorithm, darkAlgorithm } = theme;

export const lightTheme = {
    algorithm: defaultAlgorithm,
    token: {
        colorPrimary: "#c1a06a", // Main primary color
        colorBgBase: "#ffffff", // Global background color
        colorTextBase: "#000000", // Global text color
        colorBgContainer: "#f7f7f7", // Lighter background for containers
    },
    components: {
        Input: {
            colorBgContainer: "#ffffff",
            hoverBg: "#eaeaea",
            colorText: "#000000",
            borderRadius: 8,
        },
        Button: {
            defaultBg: "#f0f0f0",
            colorText: "#000000",
            borderRadius: 4,
            defaultShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        },
        Table: {
            colorBgContainer: "#ffffff",
            colorText: "#000000",
        },
        Modal: {
            colorBgContainer: "#ffffff",
            titleFontSize: 24,
        },
        Tooltip: {
            colorBgBase: "#ffffff",
            colorText: "#000000",
        },
        // Add other components similarly
    },
};

export const darkTheme = {
    algorithm: darkAlgorithm,
    token: {
        colorPrimary: "#c1a06a", // Primary color with high contrast
        colorBgBase: "#1a1a1a", // Global dark background
        colorTextBase: "#ffffff", // White text for better contrast
        colorBgContainer: "#2c2c2c", // Darker background for containers
    },
    components: {
        Input: {
            colorBgContainer: "#2c2c2c",
            hoverBg: "#3c3c3c",
            colorText: "#ffffff",
            borderRadius: 8,
        },
        Button: {
            defaultBg: "#464646",
            colorText: "#ffffff",
            borderRadius: 4,
            defaultShadow: "0px 1px 2px rgba(255, 255, 255, 0.1)",
        },
        Table: {
            colorBgContainer: "#2c2c2c",
            colorText: "#ffffff",
        },
        Modal: {
            colorBgContainer: "#323232",
            titleFontSize: 24,
        },
        Tooltip: {
            colorBgBase: "#2c2c2c",
            colorText: "#ffffff",
        },
        // Add other components similarly
    },
};
