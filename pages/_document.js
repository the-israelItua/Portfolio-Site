/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta name="author" content="Israel Itua" />
          <meta
            name="keywords"
            content="Israel Itua, Frontend, Software, engineer."
          />
          <meta property="og:locale" content="en-US" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Hi, I&#x27;m Israel Itua, Frontend Developer"
          />
          <meta
            property="og:description"
            content="Hi, I&#x27;m Israel Itua, Frontend Developer"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="robots" content="index, nofollow" />

          <meta property="og:title" content="Israel Itua" />
          <meta
            property="og:url"
            content="https://the-israelitua.vercel.app/"
          />
          <meta name="apple-mobile-web-app-title" content="Israel Itua" />
          <meta name="next-head-count" content="21" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Extrabold.otf");
                font-weight:bold;
                font-display:swap;
                font-style:normal
              }
              
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Regular.otf");
                font-weight:normal;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Medium.otf");
                font-weight:500;
                font-display:swap;
                font-style:normal
              }
              @font-face{
                font-family:'Blorado';
                src:url("/fonts/NeurialGrotesk-Bold.otf");
                font-weight:600;
                font-display:swap;
                font-style:normal
              }
            `,
            }}
          />
          <link rel="stylesheet" href="/css/normalize.css" />
          <link rel="stylesheet" href="/css/base.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
