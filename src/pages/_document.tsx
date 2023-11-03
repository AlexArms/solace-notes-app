import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ height: "auto" }}>
      <Head />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        //@ts-ignore - // todo: fix typing - is this needed? was from google fonts
        crossOrigin
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,700&display=swap"
        rel="stylesheet"
      />
      {/* <script
        src="https://accounts.google.com/gsi/client"
        async
      /> */}
      <body
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "grey !important",
          fontFamily: "Ubuntu, sans-serif",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
