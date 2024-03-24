"use client";
import Blog from "./Blog";
import Service from "./Service";
import Slider from "./Slider";
import WhyChooseUs from "./WhyChooseUs";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function HomePage() {
  const { i18n, t } = useTranslation("common");
  return (
    <div
      className="home page-template page-template-elementor_header_footer page page-id-219 wp-embed-responsive theme-visapass tutor-lms woocommerce-js no-sidebar elementor-default elementor-template-full-width elementor-kit-204 elementor-page elementor-page-219 e--ua-blink e--ua-chrome e--ua-webkit"
      data-elementor-device-mode="desktop"
      data-new-gr-c-s-check-loaded="14.1162.0"
      data-gr-ext-installed=""
      style={{ overflow: "visible" }}
    >
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
      <div
        data-elementor-type="wp-page"
        data-elementor-id={219}
        className="elementor elementor-219"
      >
        <Slider />
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-027da0c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="027da0c"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-41e630a"
              data-id="41e630a"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-f7a59f6 elementor-widget elementor-widget-featured_list bdevs-el featured_list"
                  data-id="f7a59f6"
                  data-element_type="widget"
                  data-settings='{"design_style":"style_4"}'
                  data-widget_type="featured_list.default"
                >
                  <div className="elementor-widget-container">
                    {/* visa area start here */}
                    <section className="visa-area theme-bg bdevs-el-area">
                      <div className="container">
                        <div className="row g-0">
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="visa__items br-none ">
                              <div className="visa__items-single d-flex align-items-center bdevs-el-content">
                                <div className="visa__items-single-icon bdevs-el-icon">
                                  <i
                                    className="bdevs-btn-icon  flaticon-passport"
                                    aria-hidden="true"
                                  />
                                </div>
                                <h4 className="visa__items-single-title bdevs-el-title">
                                  <a href="/tourist-visitor-visa-available/">
                                    {" "}
                                    {t("home.top-info.online-visa")}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="visa__items  ">
                              <div className="visa__items-single d-flex align-items-center bdevs-el-content">
                                <div className="visa__items-single-icon bdevs-el-icon">
                                  <i
                                    className="bdevs-btn-icon  flaticon-content"
                                    aria-hidden="true"
                                  />
                                </div>
                                <h4 className="visa__items-single-title bdevs-el-title">
                                  <a href="/tourist-visitor-visa-available/">
                                    {" "}
                                    {t("home.top-info.visa-info")}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="visa__items  ">
                              <div className="visa__items-single d-flex align-items-center bdevs-el-content">
                                <div className="visa__items-single-icon bdevs-el-icon">
                                  <i
                                    className="bdevs-btn-icon  flaticon-customer"
                                    aria-hidden="true"
                                  />
                                </div>
                                <h4 className="visa__items-single-title bdevs-el-title">
                                  <a href="/tourist-visitor-visa-available/">
                                    {t("home.top-info.Immigration-Resources")}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="visa__items  ">
                              <div className="visa__items-single d-flex align-items-center bdevs-el-content">
                                <div className="visa__items-single-icon bdevs-el-icon">
                                  <i
                                    className="bdevs-btn-icon  flaticon-passport-1"
                                    aria-hidden="true"
                                  />
                                </div>
                                <h4 className="visa__items-single-title bdevs-el-title">
                                  <a href="/tourist-visitor-visa-available/">
                                    {" "}
                                    {t("home.top-info.Online-Passport")}
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* visa area end here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Service />
        <WhyChooseUs />

        <section
          className="section-home section-promo elementor-section elementor-top-section elementor-element elementor-element-25b226f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="25b226f"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f0ee227"
              data-id="f0ee227"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-a7e790e elementor-widget elementor-widget-cta bdevs-el cta"
                  data-id="a7e790e"
                  data-element_type="widget"
                  data-settings='{"design_style":"style_3"}'
                  data-widget_type="cta.default"
                >
                  <div className="elementor-widget-container">
                    <section className="calltoaction-area d-flex align-items-center">
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-xxl-3 col-xl-3 col-lg-3">
                            <div className="calltoaction-img ">
                              <img
                                decoding="async"
                                src="https://codeskdhaka.com/wp/visapass/wp-content/uploads/2022/01/cl-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
                            <h4 className="calltoaction-title pt-80 pb-75 bdevs-el-title">
                           {t('home.promo')}
                            </h4>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                            <div className="calltoaction-btn text-right">
                              <a
                                className="theme-btn cl-btn bdevs-el-btn"
                                href="/wp/visapass/contact/"
                              >
                                 {t('contact-me')}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-519bce1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="519bce1"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fa21cbb"
              data-id="fa21cbb"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-4bc3a1c elementor-widget elementor-widget-about bdevs-el about"
                  data-id="4bc3a1c"
                  data-element_type="widget"
                  data-settings='{"design_style":"style_4"}'
                  data-widget_type="about.default"
                >
                  <div className="elementor-widget-container">
                    {/* About start here */}
                    <section className="about-area">
                      <div className="container">
                        <div
                          className="row wow fadeInUp2"
                          data-wow-delay="0.2s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.2s",
                            animationName: "fadeInUp2",
                          }}
                        >
                          <div className="col-xxl-6 col-xl-6 col-lg-6 mb-30">
                            <div className="section_title_wrapper bdevs-el-content">
                              <span className="subtitle bdevs-el-subtitle">
                                {t('home.about.sub-title')}
                              </span>
                              <h2 className="section-title about-span mb-30 bdevs-el-title">
                                <span>5+</span> {t('home.about.title')}
                              </h2>
                              <div className="section_title_wrapper-about-content">
                                <h5 className="bdevs-el-date">
                                  <span>5+</span> {t('home.about.sub-title')}
                                </h5>
                                <p className="bdevs-el-desc">
                                {t('home.about.sumary')}
                                </p>
                                <a
                                  className="theme-btn bdevs-el-btn"
                                  data-wow-delay="1.2s"
                                  href="https://codeskdhaka.com/wp/visapass/about/"
                                >
                                  {t('read-more')}
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-6 col-xl-6 col-lg-6 mb-30">
                            <div className="about_wrapper">
                              <div className="about_wrapper__certificate">
                                <img
                                  decoding="async"
                                  src="/images/certificate-1.png"
                                  alt=""
                                />
                              </div>
                              <div className="about_wrapper__group">
                                <div className="about_wrapper__group-top mb-15">
                                  <img
                                    decoding="async"
                                    src="/images/about-1-1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="about_wrapper__group-btm d-flex align-items-center justify-content-end">
                                  <div className="about_wrapper__group-btm-img1 ml-30">
                                    <img
                                      decoding="async"
                                      src="/images/about-3-1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="about_wrapper__group-btm-img2 ml-15">
                                    <img
                                      decoding="async"
                                      src="/images/about-2-1.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* About end here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-d3ff0d6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="d3ff0d6"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-extended">
            <div
              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1604268"
              data-id={1604268}
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-4782ebc elementor-widget elementor-widget-icon_box bdevs-el icon_box"
                  data-id="4782ebc"
                  data-element_type="widget"
                  data-settings='{"design_style":"style_2"}'
                  data-widget_type="icon_box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="fact v-fact-border text-center bdevs-el-content">
                      <h1 className="counter-count bdevs-el-title">
                        <span className="counter">4</span>k+
                      </h1>
                      <span className="bdevs-el-subtitle">
                      {t('home.statistic.statistic1')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-54fef93"
              data-id="54fef93"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-a3ac242 elementor-widget elementor-widget-icon_box bdevs-el icon_box"
                  data-id="a3ac242"
                  data-element_type="widget"
                  data-settings='{"design_style":"style_2"}'
                  data-widget_type="icon_box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="fact v-fact-border text-center bdevs-el-content">
                      <h1 className="counter-count bdevs-el-title">
                        <span className="counter">3</span>k+
                      </h1>
                      <span className="bdevs-el-subtitle">
                      {t('home.statistic.statistic2')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-2a7fd3d"
              data-id="2a7fd3d"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-a82e305 elementor-widget elementor-widget-icon_box bdevs-el icon_box"
                  data-id="a82e305"
                  data-element_type="widget"
                  data-settings='{"design_style":"style_2"}'
                  data-widget_type="icon_box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="fact v-fact-border text-center bdevs-el-content">
                      <h1 className="counter-count bdevs-el-title">
                        <span className="counter">12</span>k+
                      </h1>
                      <span className="bdevs-el-subtitle">
                      {t('home.statistic.statistic3')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-8d34a76"
              data-id="8d34a76"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-5f96ecc elementor-widget elementor-widget-icon_box bdevs-el icon_box"
                  data-id="5f96ecc"
                  data-element_type="widget"
                  data-settings='{"design_style":"style_2"}'
                  data-widget_type="icon_box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="fact v-fact-border text-center bdevs-el-content">
                      <h1 className="counter-count bdevs-el-title">
                        <span className="counter">57</span>k+
                      </h1>
                      <span className="bdevs-el-subtitle">
                      {t('home.statistic.statistic4')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Blog />
      </div>
    </div>
  );
}
