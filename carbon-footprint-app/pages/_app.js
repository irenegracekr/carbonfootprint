// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RapidAPI - Carbon Footprint App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
