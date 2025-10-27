"use client";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  color: white;
  padding: 1rem;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    margin-top: 0.5rem;
  }
`;

const products = [
  { id: 1, name: "Top Fitness", price: "R$ 89,90", image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1" },
  { id: 2, name: "Legging Power", price: "R$ 129,90", image: "https://images.unsplash.com/photo-1600181953940-5d4bd0b3dd08" },
  { id: 3, name: "Camisa Dry Fit", price: "R$ 99,90", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c" },
];

export default function Catalogo() {
  return (
    <Grid>
      {products.map((item) => (
        <Card key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </Card>
      ))}
    </Grid>
  );
}
