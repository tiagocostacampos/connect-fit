"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
