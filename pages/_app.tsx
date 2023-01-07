// pages/_app.js
import { AppProps } from "next/app";
import { Unbounded } from "@next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${unbounded.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
