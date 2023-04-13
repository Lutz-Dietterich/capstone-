// import CardList from "../components/CardList";
// import useScrollPosition from "../utils/hooks/useScrollPosition";
// import SrcollToTopButton from "../components/ScrollToTopButton";

// export default function Home() {
//   useScrollPosition();

//   return (
//     <>
//       <CardList />
//       <SrcollToTopButton />
//     </>
//   );
// }

// import { lazy, Suspense } from "react";
// import useScrollPosition from "../utils/hooks/useScrollPosition";
// import ScrollToTopButton from "../components/ScrollToTopButton";
// import LoadingSpinner from "../components/LoadingSpinner";

// const LazyCardList = lazy(() => import("../components/CardList"));

// export default function Home() {
//   useScrollPosition();

//   return (
//     <>
//       <Suspense fallback={<LoadingSpinner />}>
//         <LazyCardList />
//       </Suspense>
//       <ScrollToTopButton />
//     </>
//   );
// }

import { lazy, Suspense } from "react";
import useScrollPosition from "../utils/hooks/useScrollPosition";
import ScrollToTopButton from "../components/ScrollToTopButton";
import LoadingSpinner from "../components/LoadingSpinner";
const LazyCardList = lazy(() => import("../components/CardList"));
const LazyData = lazy(() => import("../data/data"));

export default function Home() {
  useScrollPosition();

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <LazyCardList />
        <LazyData />
      </Suspense>
      <ScrollToTopButton />
    </>
  );
}
