import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

export default function Field({ value, handleSearchChange }) {
  const [showSearch, setShowSearch] = useState(false);
  const searchFieldRef = useRef(null);

  const handleSearchClick = () => setShowSearch(!showSearch);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setShowSearch(window.innerWidth >= 900);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   const searchField = searchFieldRef.current;
  //   if (searchField && showSearch) {
  //     searchField.style.display = "block";
  //     const initialWidth = searchField.offsetWidth;
  //     searchField.style.right = `-${initialWidth}px`;
  //     searchField.style.transition = "right 0.3s ease-in-out";
  //     setTimeout(() => {
  //       searchField.style.right = "0px";
  //     }, 0);
  //   } else if (searchField) {
  //     const finalWidth = searchField.offsetWidth;
  //     searchField.style.right = `-${finalWidth}px`;
  //     setTimeout(() => {
  //       searchField.style.display = "none";
  //       searchField.style.transition = "";
  //     }, 300);
  //   }
  // }, [showSearch]);

  // useEffect(() => {
  //   const searchField = searchFieldRef.current;
  //   if (searchField) {
  //     const originalPosition = searchField.style.position;
  //     searchField.addEventListener("focus", () => {
  //       searchField.style.position = "absolute";
  //       searchField.style.bottom = "auto";
  //       searchField.style.top = "0";
  //     });
  //     searchField.addEventListener("blur", () => {
  //       searchField.style.position = originalPosition;
  //     });
  //   }
  // }, []);

  return (
    <SearchWrapper>
      {value && (
        <ClearButton
          onClick={() => handleSearchChange({ target: { value: "" } })}
        >
          <AiOutlineClose />
        </ClearButton>
      )}
      {showSearch && (
        <SearchFieldWrapper ref={searchFieldRef}>
          <SearchField
            type="text"
            placeholder="Search breeds..."
            value={value}
            onChange={handleSearchChange}
          />
        </SearchFieldWrapper>
      )}
      <SearchButton onClick={handleSearchClick}>
        <AiOutlineSearch size={30} />
      </SearchButton>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 27px;
  width: 700px;
  z-index: 100;

  @media (min-width: 900px) {
    margin-right: 70px;
  }

  @media (max-width: 1080px) {
    width: 85%;
  }
`;

const SearchFieldWrapper = styled.div`
  position: relative;
  width: 68vw;
`;

const SearchField = styled.input`
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

const SearchButton = styled.button`
  z-index: 2;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-top: 5px;
  color: darkslategray;

  &:hover {
    transform: scale(1.2);
  }

  i {
    font-size: 1.5rem;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  top: 55%;
  right: 10px;
  transform: translate(0, -50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
`;
