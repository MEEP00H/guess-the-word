import "styles/globals.css";
import "styles/font.css";
import SafeHydrate from "../components/SafeHydrate";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <SafeHydrate>
          <Component {...pageProps} />
        </SafeHydrate>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
