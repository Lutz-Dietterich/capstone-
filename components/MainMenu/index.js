import styled from "styled-components";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiQuestionnaireLine, RiChatDeleteLine } from "react-icons/ri";
import { BiCommentCheck } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Test } from "../../pages/_app";

export default function MainMenu() {
  const router = useRouter();
  const { testComplete, handleTest } = useContext(Test);
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
          <StyledLinkText className={router.pathname === "/" ? "active" : ""}>
            Home
          </StyledLinkText>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            href={
              testComplete ? "/personalityTest/results" : "/personalityTest/1"
            }
            className={
              router.pathname.includes("/personalityTest") ? "active" : ""
            }
          >
            {testComplete ? <BiCommentCheck /> : <RiQuestionnaireLine />}
          </StyledLink>
          <StyledLinkText
            className={
              router.pathname.includes("/personalityTest") ? "active" : ""
            }
          >
            {testComplete ? "Test Results" : "Matching Test"}
          </StyledLinkText>
        </StyledListItem>
        {testComplete && (
          <StyledListItem>
            <StyledLink
              href={"/personalityTest/1"}
              onClick={() => {
                handleTest(false);
              }}
            >
              <RiChatDeleteLine />
            </StyledLink>
            <StyledLinkText>retake Test</StyledLinkText>
          </StyledListItem>
        )}
        <StyledListItem>
          <StyledLink
            href={"/favorites"}
            className={router.pathname === "/favorites" ? "active" : ""}
          >
            <AiOutlineHeart />
          </StyledLink>
          <StyledLinkText
            className={router.pathname === "/favorites" ? "active" : ""}
          >
            Favorites
          </StyledLinkText>
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
  margin: 8px 0 0;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: #989898;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 600;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  &.active {
    color: #000;
  }
`;

const StyledLinkText = styled.p`
  color: #989898;
  font-size: 0.7rem;
  font-weight: 400;
  margin-top: -6px;
  padding: 0;

  &.active {
    color: #000;
  }
`;
