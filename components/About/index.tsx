"use client";
import { useTranslation } from "next-i18next";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const About = () => {
    const { i18n, t } = useTranslation("common");
  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
  ];

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-368b562 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="368b562"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-686adba"
          data-id="686adba"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-4db4abc elementor-widget elementor-widget-about bdevs-el about"
              data-id="4db4abc"
              data-element_type="widget"
              data-settings='{"design_style":"style_1"}'
              data-widget_type="about.default"
            >
              <div className="elementor-widget-container">
                {/* About-2 area start here */}
                <section
                  className="about-area-2 wow fadeInUp2"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp2",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6 mb-30">
                        <div className="about2-left d-flex">
                          <div className="about2-left__img1 mr-10">
                            <img
                              decoding="async"
                              src="https://codeskdhaka.com/wp/visapass/wp-content/uploads/2022/01/about2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="about2-left__img2">
                            <img
                              decoding="async"
                              src="https://codeskdhaka.com/wp/visapass/wp-content/uploads/2022/01/about2-1.jpg"
                              alt=""
                            />
                            <div className="about2-left__info d-flex align-items-center">
                              <div className="about2-left__info__left mr-15">
                                <img
                                  decoding="async"
                                  src="https://codeskdhaka.com/wp/visapass/wp-content/uploads/2022/01/seal.png"
                                  alt=""
                                />
                              </div>
                              <div className="about2-left__info__right">
                                <h4>ISO Certified</h4>
                                <p>1990-2000</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6 mb-30">
                        <div className="section_title_wrapper bdevs-el-content">
                          <span className="subtitle bdevs-el-subtitle">
                           {t('about-page.title')}
                          </span>
                          <h2 className="section-title bdevs-el-title about-span mb-30">
                            <span>5+</span> {t('home.about.title')}
                          </h2>{" "}
                          <div className="section_title_wrapper__about-content mb-40">
                            <p className="bdevs-el-desc">
                            {t('about-page.content')}
                            </p>
                          </div>
                        </div>
                        {/* <div className="about-trust">
                          <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                              <div className="about2__item d-flex  mb-20 mr-20">
                                <div className="about2__icon bdevs-list-icon">
                                  <i
                                    className="bdevs-btn-icon  flaticon-fair-trade"
                                    aria-hidden="true"
                                  />{" "}
                                </div>
                                <div className="about2__content">
                                  <h4 className="bdevs-list-title">
                                    Trusted by Millions
                                  </h4>
                                  <p className="bdevs-list-desc">
                                    Most trusted &amp; recommended by millions
                                    of students
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                              <div className="about2__item d-flex  mb-20 mr-20">
                                <div className="about2__icon bdevs-list-icon">
                                  <i
                                    className="bdevs-btn-icon fal fa-trophy-alt"
                                    aria-hidden="true"
                                  />{" "}
                                </div>
                                <div className="about2__content">
                                  <h4 className="bdevs-list-title">
                                    Awards Winner
                                  </h4>
                                  <p className="bdevs-list-desc">
                                    Most trusted &amp; recommended by millions
                                    of students
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </section>
                {/* About-2 area end here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
