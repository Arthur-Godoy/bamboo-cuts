import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify, useTheme } from "vuetify";

const darkTheme = {
    dark: true,
    colors: {
        primary: "#55B948",
        dark: "#1D1B20",
        surface: "#27242B",
        background: "#1D1B20",
        gray: "#555555",
        "dark-1": "#27242B",
        "dark-2": "#343139",
        secondary: "#747474",
        bright: "#E7E7E7",
    },
};

const lightTheme = {
    dark: false,
    colors: {
        primary: "#55B948",
        dark: "#1D1B20",
        surface: "#27242B",
        background: "#1D1B20",
        gray: "#555555",
        "dark-1": "#27242B",
        "dark-2": "#343139",
        secondary: "#747474",
        bright: "#E7E7E7",
    },
};

export default createVuetify({
    theme: {
        defaultTheme: "darkTheme",
        themes: {
            darkTheme,
            lightTheme,
        },
    },
});
