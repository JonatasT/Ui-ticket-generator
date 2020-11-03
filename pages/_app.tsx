import React from "react";
import type { AppProps } from "next/app";
import PropTypes from "prop-types";
import Head from "next/head";
import ThemeContainer from "../contexts/theme/ThemeContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>UI Ticket Generator</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeContainer >
        <Component {...pageProps} />
      </ThemeContainer>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};