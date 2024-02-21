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
    <StyledBanner>
      <StyledText>
        Deine Eingaben, Favoriten und Testergebnisse speichern wir sicher im
        lokalen Browser-Speicher deines Computers – privat und nur für dich
        zugänglich.
      </StyledText>
      <StyledButton onClick={() => setCookieConsent(true)}>
        Einverstanden und weiter...
      </StyledButton>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45vw;
  padding: 20px;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  line-height: 1.5;
  font-weight: 800;
  z-index: 200;

  @media (max-width: 778px) {
    min-width: 300px;
  }

  @media (max-height: 500px) {
    font-size: 1rem;
    min-width: 600px;
  }
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  text-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 778px) {
    font-size: 1rem;
  }

  @media (max-height: 500px) {
    font-size: 1rem;
  }
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
