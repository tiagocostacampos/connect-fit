"use client";
import styled from "styled-components";
import Link from "next/link";

const Hero = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("https://images.unsplash.com/photo-1599058917212-d750089bc07a?auto=format&fit=crop&w=1400&q=60")
    center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Button = styled(Link)`
  background: #ffcc00;
  color: black;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export default function Page() {
  return (
    <Hero>
      <Title>Vista-se para o Sucesso</Title>
      <Button href="/catalogo">Ver Catálogo</Button>
    </Hero>
  );
}
