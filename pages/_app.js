import { createContext, useState } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import Layout from "../components/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BreedData = createContext();
export const Favourite = createContext();

export default function App({ Component, pageProps }) {
  const { data: breedData, error } = useSWR("/api/db", fetcher);
  const [favourite, setFavourite] = useState(false);

  const handleFavorite = () => {
    setFavourite(!favourite);
  };

  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>PawfectMatch</title>
      </Head>
      <Favourite.Provider value={{ favourite, handleFavorite }}>
        <BreedData.Provider value={breedData}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BreedData.Provider>
      </Favourite.Provider>
    </>
  );
}
