import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="preload"
          href="/fonts/Pretendard-Black.subset.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-ExtraBold.subset.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Bold.subset.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-SemiBold.subset.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Medium.subset.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Regular.subset.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Pretendard-Light.subset.woff2"
          as="font"
          type="font/woff2"
        />
        <meta
          name="ahrefs-site-verification"
          content="bce11dd1e79258121a73a137633566152ab1d60a8584185afcc2f880797effa5"
        />
        <script
          defer
          async
          src="https://cdn.megadata.co.kr/dist/prod/v2/mtm.js?adverId=livertem&device=B"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
