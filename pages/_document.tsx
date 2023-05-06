import { AppConstant } from "constant/AppConstant";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="/images/favicon.png"
            type="image/png"
          />
          {/* <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />
          <link href="https://unpkg.com/aos@next/dist/aos.js" /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="/fonts/High Speed.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/Satoshi-Black.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=PT+Sans:wght@700&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
            rel="stylesheet"
          />
          {/* <link rel="stylesheet" href="bower_components/aos/dist/aos.css" /> */}
          <link
            rel="stylesheet"
            href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content={AppConstant.meta.description} />
          <meta property="og:title" content={AppConstant.meta.title} />
          <meta property="og:url" content={AppConstant.meta.url} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={AppConstant.meta.description}
          />
          <meta property="og:image" content={AppConstant.meta.image} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={AppConstant.meta.title} />
          <meta
            name="twitter:description"
            content={AppConstant.meta.description}
          />

          <meta name="twitter:image" content={AppConstant.meta.image} />
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
