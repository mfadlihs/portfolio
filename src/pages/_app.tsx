import GlowCursor from "@/components/GlowCursor";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Fadli Hasan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Fadli Hasan is a software engineer who builds accessible, inclusive product and digital experiences for web & mobile."
          key="description"
        />
        <meta
          name="keywords"
          content="Fadli Hasan, M Fadli Hasan, Muhammad Fadli Hasan, Fadli, Hasan, M Fadli H,"
        />
      </Head>
      <Component {...pageProps} />
      <GlowCursor />
    </>
  );
}
