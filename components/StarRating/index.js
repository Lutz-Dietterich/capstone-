import { IoPawSharp, IoPawOutline } from "react-icons/io5";
import styled from "styled-components";

export default function StarRating({ score, title }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Number(score)) {
      stars.push(
        <StyledStar key={i}>
          <IoPawSharp />
        </StyledStar>
      );
    } else {
      stars.push(
        <StyledStar key={i}>
          <IoPawOutline />
        </StyledStar>
      );
    }
  }

  return (
    <>
      <h3>{title}</h3>
      <StyledStarRating>{stars}</StyledStarRating>
    </>
  );
}
const StyledStarRating = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStar = styled.span`
  margin-right: 5px;
  font-size: 1.5rem;
`;
