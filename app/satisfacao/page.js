"use client";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  color: white;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input, textarea {
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: black;
    font-weight: bold;
    border: none;
    padding: 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default function Satisfacao() {
  return (
    <FormContainer>
      <h2>Avalie sua experiência</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea rows="4" placeholder="Deixe seu comentário"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </FormContainer>
  );
}
