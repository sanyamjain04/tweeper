import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Twipper</title>
      <meta name='og:title' content='Twipper' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='twipper:site' content='@ccrsxx' />
      <meta name='twipper:card' content='summary_large_image' />
    </Head>
  );
}
