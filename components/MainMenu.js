import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export default function MainMenu() {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink to="/" exact>
            <BsHouseDoor />
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/favorites">
            <AiOutlineHeart />
          </StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #000;
  padding: 0.5rem 0;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem 1rem;

  &.active {
    color: #fff;
    background-color: #000;
  }
`;
