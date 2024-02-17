import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function CookieConsent() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    if (cookieConsent) {
      localStorage.setItem("cookieConsent", JSON.stringify(cookieConsent));
      window.location.reload();
    }
  }, [cookieConsent]);

  return (
    <StyledWrapper>
      <Image
        style={{ zIndex: "-1", objectFit: "cover" }}
        src="/CookieBackground.jpg"
        alt="Hintergrundbild"
        fill
      />
      <StyledContent>
        <Image
          style={{ width: "90%", height: "auto" }}
          src="/PM-Logo_XL.png"
          alt="Logo"
          width={323}
          height={224}
        />
        <StyledBanner>
          <p>
            Deine Eingaben, Favoriten und Testergebnisse speichern wir sicher im
            lokalen Browser-Speicher deines Computers – privat und nur für dich
            zugänglich.
          </p>
          <StyledButton onClick={() => setCookieConsent(true)}>
            setze cookieConsent
          </StyledButton>
        </StyledBanner>
      </StyledContent>
      <StyledAuthor>
        Foto von
        <a href="https://unsplash.com/de/@joshrako?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Josh Rakower
        </a>
        auf
        <a href="https://unsplash.com/de/fotos/brauner-hund-mit-sonnenbrille-auf-blauem-textil-zBsXaPEBSeI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </StyledAuthor>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  overflow-y: hidden;
  /* background-color: rgba(255, 255, 255, 0.3); */
  height: 100vh;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 10vh 20vw;
`;

const StyledBanner = styled.div`
  background-color: white;
  margin-top: 70px;
  padding: 20px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);

  line-height: 1.5;
  font-weight: 800;
`;

const StyledButton = styled.button`
  margin-top: 30px;
  border: none;
  border-radius: 100px;
  background-color: #3742fa;
  padding: 10px 20px;
  cursor: pointer;

  color: white;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const StyledAuthor = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
