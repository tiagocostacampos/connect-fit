"use client";
import styled from "styled-components";

const Container = styled.div`
  padding: 3rem;
  text-align: center;
  color: white;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export default function Sobre() {
  return (
    <Container>
      <h2>Sobre a ConnectFit</h2>
      <p>
        A ConnectFit nasceu da paixão por estilo, conforto e performance.
        Criamos roupas que inspiram confiança e energia para treinar e viver com intensidade.
      </p>
    </Container>
  );
}
