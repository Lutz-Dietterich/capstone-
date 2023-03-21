import useSWR from "swr";
import CardList from "../components/CardList";
import Image from "next/image";

export default function Home() {
  const { data, error } = useSWR("/api/db");
  console.log(data);
  return (
    <div>
      <CardList />
      {data && (
        <>
          <h1>{data[1].name}</h1>
          <p>{data[1].grooming}</p>
          <Image
            name={data[1].name}
            src={data[1].image_link}
            alt={data[1].name}
            width={100}
            height={100}
          />
        </>
      )}
      {data.map((dog) => (
        <div key={dog.id}>
          <h2>{dog.name}</h2>
          <Image src={dog.image_link} alt={dog.name} width={513} height={500} />
          <p>Energielevel: {dog.energy}</p>
          <p>Haarverlust: {dog.shedding}</p>
          <p>Sabbert viel: {dog.drooling}</p>
          <p>Energielevel: {dog.energy}</p>
        </div>
      ))}
      {data.length === 0 && <div>Loading...</div>}
    </div>
  );
}
