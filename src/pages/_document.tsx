import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <title>Fadli Hasan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Landingpage for Website. Website for gaining information what you need"
          key="description"
        />
      </Head>
      <body className="bg-primary overflow-x-hidden relative min-h-[200vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
