import CardList from "../components/CardList";
import useScrollPosition from "../utils/hooks/useScrollPosition";

export default function Home() {
  useScrollPosition();

  return (
    <>
      <CardList />
    </>
  );
}
