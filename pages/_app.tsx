// @ts-check
import { useEffect } from "react";

import "../styles/globals.css";
import splitbee from "@splitbee/web";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    splitbee.init();
  }, []);

  return (
    <div>
      <ThemeProvider attribute="class">
        <NextNProgress height={2} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default App;
