import GlowCursor from "@/components/GlowCursor";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 640;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  return (
    <>
      <Head>
        <title>Fadli Hasan</title>
        <meta charSet="utf-8" />
        <meta name="title" content="Fadli Hasan" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Fadli Hasan is a software engineer who builds accessible, inclusive product and digital experiences for web & mobile."
          key="description"
        />
        <meta
          name="keywords"
          content="Fadli Hasan, M Fadli Hasan, Muhammad Fadli Hasan, Fadli, Hasan, M Fadli H, Fadlii, fdl, mfadlihs"
        />
        <meta property="og:url" content="https://mfadlihs.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlowCursor />
    </>
  );
}
