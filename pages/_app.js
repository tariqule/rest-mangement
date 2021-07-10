import "../styles/globals.css";
import "../styles/main.css";
import ContextWrapper from "../src/context/context";
import { wrapper } from "../src/store/store";
/**
 *
 * @param {*} ROOT
 * @returns
 */
function MyApp({ Component, pageProps }) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}
//learn
// HOC higher order components
export default wrapper.withRedux(MyApp);
