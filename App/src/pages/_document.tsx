import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html data-theme="synthwave">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico"></link>
          <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
