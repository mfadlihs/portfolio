import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-primary overflow-x-hidden relative min-h-[200vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
