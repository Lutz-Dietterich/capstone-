import styled from "styled-components";
import MainMenu from "../MainMenu";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <h1>
          <Image src="/logo.png" alt="Logo" width={200} height={50} />
        </h1>
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
  padding: 1rem;
`;

const StyledMain = styled.main`
  padding: 1rem;
`;

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-top: 1px solid #000;
  bottom: 0;
  left: 0;
  width: 100%;
`;
