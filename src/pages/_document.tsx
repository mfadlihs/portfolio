import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
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
      <body className="bg-primary overflow-x-hidden relative min-h-[200vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
