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
  { id: 1, name: "Top Fitness", price: "R$ 89,90", image: "https://th.bing.com/th/id/OIP.rj073icszrj8Xecn7jP7JgHaKX?w=202&h=282&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: 2, name: "Legging Power", price: "R$ 129,90", image: "https://i.pinimg.com/originals/62/d0/59/62d059602060ab12dee25839ebbb7847.jpg" },
  { id: 3, name: "Camisa Dry Fit", price: "R$ 99,90", image: "https://th.bing.com/th/id/OIP.2sUc49E_DkRAIb1cfIK96QHaLH?w=202&h=303&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: 4, name: "Top Fitness", price: "R$ 89,90", image: "https://th.bing.com/th/id/OIP._kci00J3as56gH9VEK0Z-AHaHf?w=202&h=204&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: 5, name: "Legging Power", price: "R$ 129,90", image: "https://tse2.mm.bing.net/th/id/OIP.qcWUHjsYZFDApmYIHSFuZQAAAA?pid=ImgDet&w=151&h=350&c=7&dpr=1,5&o=7&rm=3" },
  { id: 6, name: "Camisa Dry Fit", price: "R$ 99,90", image: "https://th.bing.com/th/id/OIP.U9p7qnAG1I8axrSBmWqorQHaHa?w=202&h=202&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: 7, name: "Top Fitness", price: "R$ 89,90", image: "https://th.bing.com/th/id/OIP.6smB24MCFDieOqu9AasXQwHaJQ?w=149&h=190&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: 8, name: "Legging Power", price: "R$ 129,90", image: "https://th.bing.com/th/id/OIP.d9805L2a-MeLq6z2SnRvIgHaKk?w=202&h=288&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
  { id: 9, name: "Camisa Dry Fit", price: "R$ 99,90", image: "https://th.bing.com/th/id/OIP.8lmpRhO8CFIMx8Y_quq-xwHaHa?w=211&h=211&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
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
