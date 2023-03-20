import styled from "styled-components";
import MainMenu from "../MainMenu";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <h1>🔱Atlantis Capstone Template🔱</h1>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <StyledFooter>
        <MainMenu />
      </StyledFooter>
    </>
  );
}

const StyledHeader = styled.header`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const StyledMain = styled.main`
  padding: 1rem;
`;

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;
