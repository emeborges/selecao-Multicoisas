import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import { ChakraProvider, } from '@chakra-ui/react'
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import themeChakra from '../styles/chakratheme'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Multicoisas</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        
      </Head>
      <ChakraProvider theme={themeChakra}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
      
        
        
    </>
  );
};

export default MyApp;