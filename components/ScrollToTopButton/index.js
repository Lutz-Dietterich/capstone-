import { BsChevronCompactUp } from "react-icons/bs";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledButton
      style={{ display: visible ? "inline" : "none" }}
      onClick={handleScrollToTop}
    >
      <StyledIcon />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: fixed;
  bottom: 70px;
  right: 20px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  background-color: rgba(55, 66, 250, 0.7);

  &:hover {
    background-color: rgba(55, 66, 250, 1);
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    background-color: transparent;
    width: 20%;
    color: black;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;

    &:hover {
      background-color: transparent;
      transform: scale(1.1);
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const StyledIcon = styled(BsChevronCompactUp)`
  stroke: white;
  stroke-width: 0.5;
  font-size: 2rem;
  font-weight: 800;
  width: 100%;
  height: 100%;
`;
