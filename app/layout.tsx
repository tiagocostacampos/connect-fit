"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <PageWrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ocupa a tela toda */
`;

const Main = styled.main`
  flex: 1; /* faz o conteúdo empurrar o footer pro fim */
`;
