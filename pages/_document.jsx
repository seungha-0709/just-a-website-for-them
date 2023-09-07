import { Html, Head, Main, NextScript, Script } from "next/document";

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
        <script
          defer
          async
          src="https://cdn.megadata.co.kr/dist/prod/v2/mtm.js?adverId=livertem&device=B"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
