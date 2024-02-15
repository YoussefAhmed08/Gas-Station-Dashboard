/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "colored-gas-station":
          "url('./public/assets/colored-gas-station-svgrepo-com.png')",
        "white-gas-station":
          "url('./public/assets/white-gas-station-svgrepo-com.png')",
        "black-gas-station":
          "url('./public/assets/black-gas-station-svgrepo-com.png')",
        "last-update-refresh": "url('./public/assets/icons8-refresh-80.png')",
        pms: "url('./public/assets/PMS.png')",
        "control-room": "url('./public/assets/control-room.png')",
        dashboard: "url('./public/assets/dashboard.png')",
        elements: "url('./public/assets/elements.png')",
        settings: "url('./public/assets/settings.png')",
        notifications: "url('./public/assets/notifications.png')",
        logout: "url('./public/assets/logout.png')",
        barChart: "url('./public/assets/icons8-bar-chart-24.png')",
      },
      colors: {
        "#3D5161": "#3D5161;",
        "#f9f5f3": "#f9f5f3",
        "#f7cbb5": "#f7cbb5",
        "#F4DBD4": "#F4DBD4",
        "#00CBC0": "#00CBC0",
        "#F9F5F3": "#F9F5F3",
      },
      backgroundColor: {
        ff7f5c: "#FF7F5C",
      },
    },
    plugins: [],
  },
};
