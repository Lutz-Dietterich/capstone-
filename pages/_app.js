import { createContext, useState, useEffect } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import Layout from "../components/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BreedData = createContext();
export const Favorite = createContext();

export default function App({ Component, pageProps }) {
  const { data: breedData, error } = useSWR("/api/db", fetcher);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (breedData) {
      setFavorites(breedData);
    }
  }, [breedData]);

  // useEffect(() => {
  //   const savedFavorites = localStorage.getItem("favorites");
  //   if (savedFavorites) {
  //     setFavorites(JSON.parse(savedFavorites));
  //   }
  // }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(breedID) {
    const newFavorites = favorites.map((item) => {
      return item._id === breedID
        ? { ...item, favorite: !item.favorite }
        : item;
    });

    setFavorites(newFavorites);
    // localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>PawfectMatch</title>
      </Head>
      <Favorite.Provider value={{ favorites, handleFavorite }}>
        <BreedData.Provider value={breedData}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BreedData.Provider>
      </Favorite.Provider>
    </>
  );
}
