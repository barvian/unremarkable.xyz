import Layout from '../components/Layout'
import Head from 'next/head'
import '../app.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
	    <Head>
				<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
      <Component {...pageProps} />
    </Layout>
  )
}