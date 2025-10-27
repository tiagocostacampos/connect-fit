"use client";
import styled from "styled-components";
import Link from "next/link";

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.card};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>ConnectFit</Logo>
      <Nav>
        <Link href="/">Home</Link>
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/satisfacao">Satisfação</Link>
      </Nav>
    </HeaderContainer>
  );
}
