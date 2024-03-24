"use client";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Header() {
  const { i18n, t } = useTranslation("common");
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const handleChangeLanguage = (e: any) => {
    const newLocale = e.target.value;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  useEffect(() => {
    // change-locale
  }, []);
  return (
    <header className="common-header">
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-8 col-lg-6">
              <div className="header-top-left">
                <ul>
                  <li>
                    <span>{t("header.opening")}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="topheader-info">
                <div className="top-button f-right ">
                  <a href="https://codeskdhaka.com/wp/visapass/contact/">
                    {t("header.apply-now")}
                  </a>
                </div>
                <div className="header-location f-right mr-20">
                  <ul>
                    <li>
                      <i className="flaticon-pin" />
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/United+States/@37.2755536,-104.6574636,5z/data=!3m1!4b1!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891"
                      >
                        {t("header.location")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu header-sticky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-6">
              <div className="logo">
                <a
                  className="standard-logo-white"
                  href="https://codeskdhaka.com/wp/visapass/"
                >
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-6 justify-content-end">
              <div className="main-menu d-none d-lg-block ">
                <nav id="mobile-menu" style={{ display: "block" }}>
                  <ul id="menu-main-menu" className="">
                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-1879"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-219 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children dropdown active menu-item-1879 nav-items"
                    >
                      <a title="Home" href="#" className="nav-link">
                        {t("header.menu.home")}
                      </a>
                      {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                      {/* <ul className="sub-menu" role="menu">
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-1877"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-219 current_page_item active menu-item-1877 nav-items"
                        >
                          <a
                            title="Home Style 01"
                            href="https://codeskdhaka.com/wp/visapass/"
                            className="dropdown-items"
                          >
                            Home Style 01
                          </a>
                        </li>
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-1878"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1878 nav-items"
                        >
                          <a
                            title="Home Style 02"
                            href="https://codeskdhaka.com/wp/visapass/home-02/"
                            className="dropdown-items"
                          >
                            Home Style 02
                          </a>
                        </li>
                      </ul> */}
                    </li>
                    {/* <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-1880"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-1880 nav-items"
                    >
                      <a
                        title="Coaching"
                        href="https://codeskdhaka.com/wp/visapass/coaching/"
                        className="nav-link"
                      >
                        Coaching
                      </a>
                      <ul className="sub-menu" role="menu">
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-1881"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1881 nav-items"
                        >
                          <a
                            title="Coaching"
                            href="https://codeskdhaka.com/wp/visapass/coaching/"
                            className="dropdown-items"
                          >
                            Coaching
                          </a>
                        </li>
                        <li
                          itemType="https://www.schema.org/SiteNavigationElement"
                          id="menu-item-1882"
                          className="menu-item menu-item-type-post_type menu-item-object-courses menu-item-1882 nav-items"
                        >
                          <a
                            title="Coaching Details"
                            href="https://codeskdhaka.com/wp/visapass/courses/internation-english-language-testing-systems-ielts/"
                            className="dropdown-items"
                          >
                            Coaching Details
                          </a>
                        </li>
                      </ul>
                    </li> */}
                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-1883"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-1883 nav-items menu-last"
                    >
                      <a title="Services" href="#" className="nav-link">
                        {t("header.menu.services")}
                      </a>
                      {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                    </li>
                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-1883"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-1883 nav-items menu-last"
                    >
                      <a title="Services" href="#" className="nav-link">
                        {t("header.menu.about")}
                      </a>
                    </li>
                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-96"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-96 nav-items menu-last"
                    >
                      <a title="Pages" href="#" className="nav-link">
                        {t("header.menu.blogs")}
                      </a>
                    </li>

                    <li
                      itemType="https://www.schema.org/SiteNavigationElement"
                      id="menu-item-1889"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1889 nav-items menu-last"
                    >
                      <a title="Contact" href="#" className="nav-link">
                        {t("header.menu.contact")}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="side-menu-icon d-lg-none text-end">
                <button className="side-toggle">
                  <i className="far fa-bars" />
                </button>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="main-menu-wrapper d-flex align-items-center justify-content-end">
                <div className="main-menu-wrapper__search text-left">
                  <a
                    className="search-btn nav-search search-trigger"
                    href="https://codeskdhaka.com/wp/visapass/#"
                  >
                    <i className="fal fa-search" />
                  </a>
                </div>
                <div className="main-menu-wrapper__call-number d-flex align-items-center">
                  <div className="main-menu-wrapper__call-icon mr-10">
                    <a href="tel:(555) 5802 3059">
                      <i className="fad fa-comments-alt" />
                    </a>
                  </div>
                  <div className="main-menu-wrapper__call-text">
                    <span>{t("header.contact")}</span>
                    <h5>
                      <a href="tel:(555) 5802 3059">+84 (0)886599566</a>
                    </h5>
                  </div>
                  <div className="main-menu-wrapper__call-text select-language">
                    <span>{t("header.language")}</span>
                    <select onChange={handleChangeLanguage}>
                      <option value="vi">Viet Nam</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
}
