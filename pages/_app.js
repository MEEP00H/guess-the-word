import "styles/globals.css";
import "styles/font.css";
import SafeHydrate from "../components/SafeHydrate";
import MetaHead from "../components/MetaHead";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <MetaHead />
        <SafeHydrate>
          <Component {...pageProps} />
        </SafeHydrate>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
