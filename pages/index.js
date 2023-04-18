import { lazy, Suspense } from "react";
import useScrollPosition from "../utils/hooks/useScrollPosition";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from "../components/LoadingSpinner";

const LazyCardList = lazy(() => import("../components/CardList"));

export default function Home() {
  useScrollPosition();

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyCardList />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
}
