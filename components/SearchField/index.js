import { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { keyframes } from "styled-components";

export default function SearchField({ value, handleSearchChange }) {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => setShowSearch(!showSearch);

  useEffect(() => {
    const handleResize = () => {
      setShowSearch(window.innerWidth >= 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledSearchWrapper>
      {showSearch && (
        <StyledSearchFieldWrapper showSearch={showSearch}>
          <StyledSearchField
            type="search"
            placeholder="Search breeds..."
            value={value}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </StyledSearchFieldWrapper>
      )}
      {/* {showSearch && value && (
        <StyledClearButton
          showSearch={showSearch}
          onClick={() => handleSearchChange("")}
        >
          <AiOutlineClose />
        </StyledClearButton>
      )} */}
      <StyledSearchButton onClick={handleSearchClick}>
        <AiOutlineSearch size={25} />
      </StyledSearchButton>
    </StyledSearchWrapper>
  );
}

const slideInAnimation = keyframes`
  from {
    transform: translateX(70%);
    opacity: 0;

  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledSearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 29px;
  width: 700px;
  z-index: 100;

  @media (min-width: 900px) {
    margin-right: 90px;
  }

  @media (max-width: 1080px) {
    width: 85%;
  }
`;

const StyledSearchFieldWrapper = styled.div`
  display: ${(props) => (props.showSearch ? "block" : "none")};
  justify-content: center;
  position: relative;
  width: 69vw;

  animation: ${(props) => (props.showSearch ? slideInAnimation : "")} 0.5s
    ease-in;
  animation-fill-mode: ${(props) => (props.showSearch ? "forwards" : "")};
`;

const StyledSearchField = styled.input`
  width: 600px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(55, 66, 250, 0.3);
  padding: 5px;
  z-index: 1;
  transition: border 0.3s ease-in-out;
  &:focus {
    outline: none;
    border: 1px solid #3742fa;
  }

  @media (min-width: 900px) {
    margin-left: 60px;
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const StyledSearchButton = styled.button`
  z-index: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-top: 5px;
  color: darkslategray;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledClearButton = styled.button`
  position: absolute;
  right: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 2;

  &.show {
    display: block;
    animation: ${slideInAnimation} 0.5s ease-in;
    animation-fill-mode: forwards;
    top: 5px;
  }
`;
