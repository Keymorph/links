import type { AppProps } from "next/app";
import Head from "next/head";
import "../../../components/src/styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Links — Keymorph</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
