import styled from "styled-components";

export default function Characteristics({ title }) {
  return (
    <>
      <h3>{title}</h3>
      <StyledCharacteristics>Hallo</StyledCharacteristics>
    </>
  );
}
const StyledStarRating = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCharacteristics = styled.span`
  margin-right: 5px;
  font-size: 1.5rem;
`;
