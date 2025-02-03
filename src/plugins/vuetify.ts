import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

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
        'surface-dark': "#47444B",
    },
};

const lightTheme = {
    dark: false,
    colors: {
        background: '#EEE',
        surface: '#E5E5E5',
        primary: '#55B948',
        secondary: '#747474',
        'surface-dark': "#979797",
    },
};

export default createVuetify({
    theme: {
        defaultTheme: localStorage.getItem("theme") || "lightTheme",
        themes: {
            darkTheme,
            lightTheme,
        },
    },
});
