import styled from "styled-components";
import Image from "next/image";

export default function ListCard({ name, img }) {
  return (
    <StyledCard>
      <StyledCardHeader>{name}</StyledCardHeader>
      <StyledCardImage
        src={img}
        alt={`Bild ${name}`}
        width={512}
        height={500}
      />
    </StyledCard>
  );
}

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 500px;
  height: 40vh;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #3742fa;
`;

const StyledCardHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 30px;
  margin-top: 10px;
`;

const StyledCardImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;
