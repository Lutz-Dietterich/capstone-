import CardList from "../components/CardList";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Speichere die aktuelle Scrollposition beim Verlassen der Seite
    const handleRouteChange = () => {
      localStorage.setItem("scrollPosition", window.pageYOffset);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    // Setze die gespeicherte Scrollposition beim Zurückkehren zur Seite
    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo(0, storedScrollPosition);
    }

    // Entferne das Event-Listener beim Entladen der Komponente
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <CardList />
    </>
  );
}
