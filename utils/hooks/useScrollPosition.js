import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useScrollPosition() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      localStorage.setItem("scrollPosition", window.pageYOffset);
    };
    router.events.on("routeChangeStart", handleRouteChange);

    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo(0, storedScrollPosition);
    }

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);
}
