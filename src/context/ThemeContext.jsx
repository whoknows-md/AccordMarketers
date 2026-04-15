import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize from localStorage so it persists on refresh
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      document.body.style.backgroundColor = "#060f23";
      document.body.style.color = "#e2e8f0";
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#0f172a";
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) return { isDark: false, setIsDark: () => {} };
  return context;
};