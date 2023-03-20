import styled from "styled-components";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MainMenu() {
  const router = useRouter();
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyledLink
            href={"/"}
            className={router.pathname === "/" ? "active" : ""}
          >
            <BsHouseDoor />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            href={"/favourites"}
            className={router.pathname === "/favourites" ? "active" : ""}
          >
            <AiOutlineHeart />
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #989898;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;

  &.active {
    color: #000;
  }
`;
