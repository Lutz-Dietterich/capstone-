import styled from "styled-components";

export default function FilterButton({ id, text, isactive, setActive }) {
  const handleClick = () => {
    setActive({ id });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledFilterButton isactive={isactive} onClick={handleClick}>
      {text}
    </StyledFilterButton>
  );
}

const StyledFilterButton = styled.button`
  border: none;
  border-radius: 5px;
  color: ${({ isactive }) => (isactive ? "#fff" : "#000")};
  font-size: 1rem;
  font-weight: 200;
  padding: 3px 15px;
  cursor: pointer;
  box-shadow: 0 0 2px 0 rgba(55, 66, 250, 1);
  background-color: ${({ isactive }) => (isactive ? "#3742fa" : "#fff")};

  &:hover {
    transform: scale(1.05);
  }
`;
