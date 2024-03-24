import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Blog() {
  const { i18n, t } = useTranslation("common");
  return (
    <section className="home-section section-blog">
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-804a828 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="804a828"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6ac64c2"
            data-id="6ac64c2"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-141505f elementor-widget elementor-widget-heading bdevs-el heading"
                data-id="141505f"
                data-element_type="widget"
                data-settings='{"design_style":"style_3"}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="section_title_wrapper mb-50">
                          <span className="subtitle bdevs-el-subtitle">
                            <span className="subtitle"> {t('home.blog.reccent-blog')}</span>{" "}
                          </span>
                          <h2 className="section-title bdevs-el-title">
                            {t('home.blog.title')}
                          </h2>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="section-title-right bdevs-el-content mb-30 mr-20">
                          <p>
                          {t('home.blog.summary')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-a74c1f7 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="a74c1f7"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d6a0761"
            data-id="d6a0761"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-c207396 elementor-widget elementor-widget-post_list bdevs-el post_list"
                data-id="c207396"
                data-element_type="widget"
                data-settings='{"design_style":"style_3"}'
                data-widget_type="post_list.default"
              >
                <div className="elementor-widget-container">
                  {/* Blog start */}
                  <section className="blog-area">
                    <div className="container">
                      <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                          <article className="blog mb-30">
                            <div className="blog__thumb">
                              <a href="https://codeskdhaka.com/wp/visapass/designing-better-links-for-websites-and-emails-a-guideline/">
                                <img
                                  decoding="async"
                                  src="/images/blog-1-2.jpg"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="blog__content bdevs-el-content">
                              <div className="blog-meta bdevs-el-meta">
                                <span>
                                  <i className="far fa-user" />{" "}
                                  <a href="https://codeskdhaka.com/wp/visapass/author/visapass/">
                                    Visapass
                                  </a>
                                </span>
                                <span>
                                  <i
                                    aria-hidden="true"
                                    className="far fa-calendar-check"
                                  />
                                  Jan 11, 2022{" "}
                                </span>
                              </div>
                              <div className="blog-text">
                                <h3 className=" blog__content__title bdevs-el-title">
                                  <a href="https://codeskdhaka.com/wp/visapass/designing-better-links-for-websites-and-emails-a-guideline/">
                                    Designing Better Links For Websites And
                                    Emails
                                  </a>
                                </h3>
                                <p className="bdevs-el-desc">
                                  Nancy boy Charles down the pub get stuffed
                                  mate easy peasy…
                                </p>
                                <div className="read-more">
                                  <a
                                    className="bdevs-el-btn"
                                    href="https://codeskdhaka.com/wp/visapass/designing-better-links-for-websites-and-emails-a-guideline/"
                                  >
                                    Read More{" "}
                                    <i className="fal fa-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                          <article className="blog mb-30">
                            <div className="blog__thumb">
                              <a href="https://codeskdhaka.com/wp/visapass/a-guide-to-attracting-clients-to-your-agency/">
                                <img
                                  decoding="async"
                                  src="/images/blog-1-2-3.jpg"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="blog__content bdevs-el-content">
                              <div className="blog-meta bdevs-el-meta">
                                <span>
                                  <i className="far fa-user" />{" "}
                                  <a href="https://codeskdhaka.com/wp/visapass/author/visapass/">
                                    Visapass
                                  </a>
                                </span>
                                <span>
                                  <i
                                    aria-hidden="true"
                                    className="far fa-calendar-check"
                                  />
                                  Jan 11, 2022{" "}
                                </span>
                              </div>
                              <div className="blog-text">
                                <h3 className=" blog__content__title bdevs-el-title">
                                  <a href="https://codeskdhaka.com/wp/visapass/a-guide-to-attracting-clients-to-your-agency/">
                                    A Guide To Attracting Clients To Your Agency
                                  </a>
                                </h3>
                                <p className="bdevs-el-desc">
                                  Nancy boy Charles down the pub get stuffed
                                  mate easy peasy…
                                </p>
                                <div className="read-more">
                                  <a
                                    className="bdevs-el-btn"
                                    href="https://codeskdhaka.com/wp/visapass/a-guide-to-attracting-clients-to-your-agency/"
                                  >
                                    Read More{" "}
                                    <i className="fal fa-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                          <article className="blog mb-30">
                            <div className="blog__thumb">
                              <a href="https://codeskdhaka.com/wp/visapass/web-development-to-update-react-hooks-cons/">
                                <img
                                  decoding="async"
                                  src="/images/Untitled-1.jpg"
                                  alt="image not found"
                                />
                              </a>
                            </div>
                            <div className="blog__content bdevs-el-content">
                              <div className="blog-meta bdevs-el-meta">
                                <span>
                                  <i className="far fa-user" />{" "}
                                  <a href="https://codeskdhaka.com/wp/visapass/author/visapass/">
                                    Visapass
                                  </a>
                                </span>
                                <span>
                                  <i
                                    aria-hidden="true"
                                    className="far fa-calendar-check"
                                  />
                                  Jan 11, 2022{" "}
                                </span>
                              </div>
                              <div className="blog-text">
                                <h3 className=" blog__content__title bdevs-el-title">
                                  <a href="https://codeskdhaka.com/wp/visapass/web-development-to-update-react-hooks-cons/">
                                    Web Development To Update React Hooks Cons
                                  </a>
                                </h3>
                                <p className="bdevs-el-desc">
                                  Nancy boy Charles down the pub get stuffed
                                  mate easy peasy…
                                </p>
                                <div className="read-more">
                                  <a
                                    className="bdevs-el-btn"
                                    href="https://codeskdhaka.com/wp/visapass/web-development-to-update-react-hooks-cons/"
                                  >
                                    Read More{" "}
                                    <i className="fal fa-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Blog end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
