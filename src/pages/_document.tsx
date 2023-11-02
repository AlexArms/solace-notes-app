import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ height: "auto" }}>
      <Head></Head>
      {/* <script
        src="https://accounts.google.com/gsi/client"
        async
      /> */}
      <body style={{ height: "auto" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
