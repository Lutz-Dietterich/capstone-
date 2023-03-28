import styled from "styled-components";

export default function FilterButton({ text }) {
  return <StyledFilterButton>{text}</StyledFilterButton>;
}

const StyledFilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  font-weight: 200;
  padding: 3px 15px;
  cursor: pointer;
  box-shadow: 0 0 2px 0 rgba(55, 66, 250, 0.4);
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
