import { createContext, useState, useEffect } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";
import Layout from "../components/Layout";
import useSWR from "swr";
import CookieConsent from "../components/CookieConsent";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const BreedData = createContext();
export const Favorite = createContext();
export const Filter = createContext();
export const Test = createContext();

export default function App({ Component, pageProps }) {
  const { data: breedData } = useSWR("/api/db", fetcher);
  const [favorites, setFavorites] = useState([]);
  const [activeButtonId, setActiveButtonId] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [testComplete, setTestComplete] = useState(false);
  const [testData, setTestData] = useState([]);
  const [cookieConsent, setCookieConsent] = useState(false);
  const [consentDelay, setConstentDelay] = useState(false);

  useEffect(() => {
    const consent = JSON.parse(localStorage.getItem("cookieConsent"));
    if (consent) {
      setCookieConsent(consent);
    }
    setTimeout(() => {
      setConstentDelay(true);
    }, 1);
  }, []);

  useEffect(() => {
    const testCompleteValue = JSON.parse(localStorage.getItem("testComplete"));
    setTestComplete(testCompleteValue !== null ? testCompleteValue : false);
  }, []);

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem("parsedData"));
    setTestData(parsedData !== null ? parsedData : []);
  }, []);

  function handleSearchTerm(newTerm) {
    setSearchTerm(newTerm);
    setActiveButtonId(1);
  }

  function handleActiveButtonId(newId) {
    setActiveButtonId(newId);
  }

  function handleTest(toggleTest) {
    setTestComplete(toggleTest);
    localStorage.setItem("testComplete", toggleTest);
    if (!toggleTest) {
      localStorage.removeItem("parsedData");
      localStorage.removeItem("testComplete");
    }
  }

  function handleTestData(newData) {
    setTestData(newData);
    localStorage.setItem("parsedData", JSON.stringify(newData));
  }

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    } else if (breedData) {
      setFavorites(breedData);
    }
  }, [breedData]);

  function handleFavorite(breedID) {
    const newFavorites = favorites.map((item) => {
      return item._id === breedID
        ? { ...item, favorite: !item.favorite }
        : item;
    });

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>PawfectMatch</title>
      </Head>
      <Test.Provider
        value={{ testComplete, handleTest, testData, handleTestData }}
      >
        <Filter.Provider
          value={{
            activeButtonId,
            handleActiveButtonId,
            searchTerm,
            handleSearchTerm,
          }}
        >
          <Favorite.Provider value={{ favorites, handleFavorite }}>
            <BreedData.Provider value={breedData}>
              <Layout>
                {!cookieConsent && consentDelay ? <CookieConsent /> : null}
                <Component {...pageProps} />
              </Layout>
            </BreedData.Provider>
          </Favorite.Provider>
        </Filter.Provider>
      </Test.Provider>
    </>
  );
}
