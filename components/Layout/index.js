import styled from "styled-components";
import MainMenu from "../MainMenu";
import Image from "next/image";
import Impressum from "../Impressum";
import { useState } from "react";
import { ImInfo } from "react-icons/im";

export default function Layout({ children }) {
  const [showImpressum, setShowImpressum] = useState(false);

  const handleImpressumClick = () => {
    setShowImpressum(!showImpressum);
  };

  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <Image src="/pmlogo.png" alt="PawfectMatch" width={200} height={50} />
        </StyledLogo>
        <StyledImpressumButton onClick={handleImpressumClick}>
          <ImInfo />
        </StyledImpressumButton>
        {showImpressum && (
          <Impressum handleImpressumClick={handleImpressumClick} />
        )}
      </StyledHeader>
      {!showImpressum && <StyledMain>{children}</StyledMain>}
      {!showImpressum && (
        <StyledFooter>
          <MainMenu />
        </StyledFooter>
      )}
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  background-color: #fffefa;
  width: 100%;
  z-index: 15;
  margin: 0;
`;

const StyledLogo = styled.h1`
  margin: 0;
  padding: 20px 0 0 0;
`;

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  top: 60px;
  padding: 1rem;
`;

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #fff;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 15;
`;

const StyledImpressumButton = styled.button`
  cursor: pointer;
  background-color: var(--color-text);
  border: none;
  color: var(--color-text-light);
  font-size: 1.2rem;
  text-align: center;
  padding: 10px;
  margin-left: auto;
`;
