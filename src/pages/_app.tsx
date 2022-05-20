import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ArtboarsProvider } from 'hooks'
const client = new ApolloClient({
  uri: 'https://graphql.sketch.cloud/api',
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Challenge</title>
        <link rel="short cut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <ArtboarsProvider>
          <Component {...pageProps} />
        </ArtboarsProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
