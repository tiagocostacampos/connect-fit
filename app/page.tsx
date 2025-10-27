"use client";
import styled from "styled-components";
import Link from "next/link";

const Hero = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("https://th.bing.com/th/id/OIP.ipR1w1_qOLeBy5k143_yCAHaHa?w=210&h=210&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3")
    center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
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
