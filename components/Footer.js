"use client";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.card};
  text-align: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} ConnectFit — Todos os direitos reservados
    </FooterContainer>
  );
}
