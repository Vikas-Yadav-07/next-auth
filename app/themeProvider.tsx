'use client'

import React from "react";
import { ThemeProvider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};
function NextThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
}

export default NextThemeProvider;
