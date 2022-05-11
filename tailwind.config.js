module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#333b75",
                accent: "#73e6ff",
                primary_black: "#07090a",
                primary_dark: "#111419",
                primary_white: "#ffffff",
            },
            spacing: {
                67.75: "16.938rem", // 271px
                68.5: "17.125rem", // 274px
                128: "32rem",
                190: "47.5rem", // 760px
            },
            maxWidth: {
                190: "47.5rem", // 760px
            },
            borderRadius: {
                2.5: "0.625rem", // 10px
                1.25: "0.313rem", // 5px
            },
        },
    },
    plugins: [],
};
