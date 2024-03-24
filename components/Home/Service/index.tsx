import { useTranslation } from "next-i18next";


export default function Service() {
  const { i18n, t } = useTranslation("common");
  return (
    <section className="section-home section-service">
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-6435c80 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="6435c80"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ba6ed97"
            data-id="ba6ed97"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-4796313 elementor-widget elementor-widget-heading bdevs-el heading"
                data-id={4796313}
                data-element_type="widget"
                data-settings='{"design_style":"style_1"}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <div className="container">
                    <div
                      className="row justify-content-center wow fadeInUp2"
                      data-wow-delay="0.3s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp2",
                      }}
                    >
                      <div className="col-xxl-10">
                        <div className="section_title_wrapper text-center">
                          <span className="subtitle bdevs-el-subtitle">
                          {t('home.service.feature-service')}
                          </span>
                          <h2 className="section-title bdevs-el-title">
                          {t('home.service.title-home')}
                          </h2>
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
        className="elementor-section elementor-top-section elementor-element elementor-element-8cb2e50 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="8cb2e50"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-extended">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e3954ac"
            data-id="e3954ac"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-9b7f4fe elementor-widget elementor-widget-post_list bdevs-el post_list"
                data-id="9b7f4fe"
                data-element_type="widget"
                data-settings='{"design_style":"style_2"}'
                data-widget_type="post_list.default"
              >
                <div className="elementor-widget-container">
                  {/* service */}
                  <div className="container">
                    <div className="row">
                      <div
                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp2"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp2",
                        }}
                      >
                        <div className="features bdevs-el">
                          <div className="features__thumb">
                            <a href="https://codeskdhaka.com/wp/visapass/ourservices/tourist-visitor-visa-available/">
                              <img
                                decoding="async"
                                src="/images/evisas.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="features__content bdevs-el-content">
                            <h3  title={t('home.service.service1.title')}  className=" features__content-title bdevs-el-title">
                              <a href="https://codeskdhaka.com/wp/visapass/ourservices/tourist-visitor-visa-available/">
                              {t('home.service.service1.title')}
                              </a>
                            </h3>
                            <p className="mb-25 bdevs-el-desc">
                            {t('home.service.service1.content')}
                            </p>
                            <a
                              href="https://codeskdhaka.com/wp/visapass/ourservices/tourist-visitor-visa-available/"
                              className="bdevs-el-btn"
                            >
                              {t('read-more')}
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp2"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp2",
                        }}
                      >
                        <div className="features bdevs-el">
                          <div className="features__thumb">
                            <a href="/">
                              <img
                                decoding="async"
                                src="/images/Vietnam-visa.jpeg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="features__content bdevs-el-content">
                            <h3  title={t('home.service.service2.title')}  className=" features__content-title bdevs-el-title features__content-title bdevs-el-title">
                              <a href="/">
                              {t('home.service.service2.title')}
                              </a>
                            </h3>
                            <p className="mb-25 bdevs-el-desc">
                            {t('home.service.service2.content')}
                            </p>
                            <a
                              href="https://codeskdhaka.com/wp/visapass/ourservices/business-visa/"
                              className="bdevs-el-btn"
                            >
                               {t('read-more')}
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp2"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp2",
                        }}
                      >
                        <div className="features bdevs-el">
                          <div className="features__thumb">
                            <a href="https://codeskdhaka.com/wp/visapass/ourservices/student-visa/">
                              <img
                                decoding="async"
                                src="/images/featurs-2-4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="features__content bdevs-el-content">
                            <h3  title={t('home.service.service3.title')}  className=" features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title">
                              <a href="https://codeskdhaka.com/wp/visapass/ourservices/student-visa/">
                              {t('home.service.service3.title')}
                              </a>
                            </h3>
                            <p className="mb-25 bdevs-el-desc">
                            {t('home.service.service3.content')}
                            </p>
                            <a
                              href="https://codeskdhaka.com/wp/visapass/ourservices/student-visa/"
                              className="bdevs-el-btn"
                            >
                              {t('read-more')}
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp2"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp2",
                        }}
                      >
                        <div className="features bdevs-el">
                          <div className="features__thumb">
                            <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              <img
                                decoding="async"
                                src="/images/work-permit.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="features__content bdevs-el-content">
                            <h3  title={t('home.service.service4.title')}  className=" features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title">
                              <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              {t('home.service.service4.title')}
                              </a>
                            </h3>
                            <p className="mb-25 bdevs-el-desc">
                            {t('home.service.service4.content')}
                            </p>
                            <a
                              href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/"
                              className="bdevs-el-btn"
                            >
                                {t('read-more')}
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp2"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp2",
                        }}
                      >
                        <div className="features bdevs-el">
                          <div className="features__thumb">
                            <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              <img
                                decoding="async"
                                src="/images/Document-Legalization.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="features__content bdevs-el-content">
                            <h3  title={t('home.service.service5.title')}  className=" features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title">
                              <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              {t('home.service.service5.title')}
                              </a>
                            </h3>
                            <p className="mb-25 bdevs-el-desc">
                            {t('home.service.service5.content')}
                            </p>
                            <a
                              href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/"
                              className="bdevs-el-btn"
                            >
                                {t('read-more')}
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp2"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp2",
                        }}
                      >
                        <div className="features bdevs-el">
                          <div className="features__thumb">
                            <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              <img
                                decoding="async"
                                src="/images/CONSULAR-ATTESTATION.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="features__content bdevs-el-content">
                            <h3 title={t('home.service.service6.title')}  className=" features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title">
                              <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              {t('home.service.service6.title')}
                              </a>
                            </h3>
                            <p className="mb-25 bdevs-el-desc">
                            {t('home.service.service6.content')}
                            </p>
                            <a
                              href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/"
                              className="bdevs-el-btn"
                            >
                                {t('read-more')}
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp2"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp2",
                        }}
                      >
                        <div className="features bdevs-el">
                          <div className="features__thumb">
                            <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              <img
                                decoding="async"
                                src="/images/apostille-service.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="features__content bdevs-el-content">
                            <h3 title={t('home.service.service7.title')} className=" features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title">
                              <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              {t('home.service.service7.title')}
                              </a>
                            </h3>
                            <p className="mb-25 bdevs-el-desc">
                            {t('home.service.service7.content')}
                            </p>
                            <a
                              href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/"
                              className="bdevs-el-btn"
                            >
                                {t('read-more')}
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp2"
                        data-wow-delay="0.3s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.3s",
                          animationName: "fadeInUp2",
                        }}
                      >
                        <div className="features bdevs-el">
                          <div className="features__thumb">
                            <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              <img
                                decoding="async"
                                src="/images/global-visa.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="features__content bdevs-el-content">
                            <h3 title={t('home.service.service8.title')} className="features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title features__content-title bdevs-el-title">
                              <a href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/">
                              {t('home.service.service8.title')}
                              </a>
                            </h3>
                            <p className="mb-25 bdevs-el-desc">
                            {t('home.service.service8.content')}
                            </p>
                            <a
                              href="https://codeskdhaka.com/wp/visapass/ourservices/job-work-visa/"
                              className="bdevs-el-btn"
                            >
                                {t('read-more')}
                              <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
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
    </section>
  );
}
