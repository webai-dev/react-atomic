import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Head from "next/head";
import Script from "next/script";
import { HeaderControlContextProvider } from "../contexts/HeaderControlContext";
import { PriceAPIContextProvider } from "../contexts/PriceAPIContext";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [queryClient] = React.useState(() => new QueryClient());

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <PriceAPIContextProvider>
        <HeaderControlContextProvider>
          <QueryClientProvider client={queryClient} >
            <Component {...pageProps} />
          </QueryClientProvider>
        </HeaderControlContextProvider>
      </PriceAPIContextProvider>
    </>
  );
}

export default appWithTranslation(App);