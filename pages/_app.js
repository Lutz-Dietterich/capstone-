import { createContext } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import Layout from "../components/Layout";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BreedData = createContext();

export default function App({ Component, pageProps }) {
  const { data: breedData, error } = useSWR("/api/db", fetcher);

  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>PawfectMatch</title>
      </Head>
      <BreedData.Provider value={breedData}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BreedData.Provider>
    </>
  );
}
