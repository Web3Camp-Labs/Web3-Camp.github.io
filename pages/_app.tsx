import React from "react";
import Head from "next/head";
import { NextPage } from 'next'
import { ReactNode,ComponentType,ReactElement } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/globals.css'

import type { AppProps } from 'next/app'

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}

type IAppProps = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: IAppProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  return  <>
    <Head>
      <title>Web3 Camp - The camp for web3 developers</title>
      <meta name="description" content="Web3 Camp - Tools and resources for all Web 3.0 enthusiasts. Sharpen your weapon and get started with Web 3.0 from here." />
      <link rel="icon" href="./favicon.ico" />
    </Head>
    {getLayout(<Component {...pageProps} />)}
  </>
}

export default MyApp
