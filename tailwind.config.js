// tailwind.config.js

export default {
    darkMode: "class",
  
    theme: {
      extend: {
        colors: {
          background: "rgb(var(--bg) / <alpha-value>)",
          surface: "rgb(var(--surface) / <alpha-value>)",
          border: "rgb(var(--border) / <alpha-value>)",
          text: "rgb(var(--text) / <alpha-value>)",
          muted: "rgb(var(--muted) / <alpha-value>)",
  
          primary: "rgb(var(--primary) / <alpha-value>)",
          secondary: "rgb(var(--secondary) / <alpha-value>)",
          success: "rgb(var(--success) / <alpha-value>)",
          warning: "rgb(var(--warning) / <alpha-value>)",
        },
      },
    },
  };