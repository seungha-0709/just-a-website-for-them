import { Html, Head, Main, NextScript, Script } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="preload"
          href="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/fonts/Pretendard-Black.subset.woff2"
          as="font"
          type="font/woff2"
          // crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/fonts/Pretendard-ExtraBold.subset.woff2"
          as="font"
          type="font/woff2"
          // crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/fonts/Pretendard-Bold.subset.woff2"
          as="font"
          type="font/woff2"
          // crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/fonts/Pretendard-SemiBold.subset.woff2"
          as="font"
          type="font/woff2"
          // crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/fonts/Pretendard-Medium.subset.woff2"
          as="font"
          type="font/woff2"
          // crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/fonts/Pretendard-Regular.subset.woff2"
          as="font"
          type="font/woff2"
          // crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="https://just-a-website-for-theme.s3.ap-northeast-2.amazonaws.com/fonts/Pretendard-Light.subset.woff2"
          as="font"
          type="font/woff2"
          // crossorigin="anonymous"
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
