
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Header from "components/Common/Header";
import Footer from "components/Common/Footer";
import { Providers } from "providers";
import "public/styles/styles.css";
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Header />
    <Component {...pageProps} />
    <Footer />
    {/* <main className="main" id="main">
            <div id="wrapper">
              {pathname != "/login" ? (
                <div className="wrapper-menu">
                  <Menu />
                </div>
              ) : (
                ""
              )}
              <div className="wrapper-menu">
                <Menu />
              </div>

              <div id="container">
                {pathname != "/login" ? (
                  <div className="menu-bg"></div>
                ) : (
                  <Wellcome />
                )}
                <div className="pl-[40px] flex-1">
                  <div className="wrapper-header">
                   { pathname != "/login" ? <Header /> : null }
                  </div>
                  {children}
                </div>
              </div>
              {pathname != "/login" && <Footer />}
            </div>
          </main> */}
  </Providers>
);

// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */);
