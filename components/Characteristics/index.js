import styled from "styled-components";

export default function Characteristics({ title, min, max, unit }) {
  return (
    <>
      <h3>{title}</h3>
      <StyledCharacteristics>
        {min} - {max}
        {""} {unit}
      </StyledCharacteristics>
    </>
  );
}

const StyledCharacteristics = styled.span`
  margin-right: 5px;
  font-size: 1.2rem;
  margin-bottom: 25px;
  line-height: 0.5;
`;
