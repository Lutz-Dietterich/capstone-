import styled from "styled-components";
import MainMenu from "../MainMenu";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <Image src="/pmlogo.png" alt="PawfectMatch" width={200} height={50} />
        </StyledLogo>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        <MainMenu />
      </StyledFooter>
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  background-color: #f1f1f1f1;
  width: 100%;
  z-index: 1;
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
`;
