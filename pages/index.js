import CardList from "../components/CardList";
import useScrollPosition from "../utils/hooks/useScrollPosition";
import SrcollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  useScrollPosition();

  return (
    <>
      <CardList />
      <SrcollToTopButton />
    </>
  );
}
