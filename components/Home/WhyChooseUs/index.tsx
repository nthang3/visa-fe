import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function WhyChooseUs() {
  const { i18n, t } = useTranslation("common");
  return (
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
                        {t('home.why-us.title')}
                        </span>
                        <h2 className="section-title bdevs-el-title">
                        {t('home.why-us.title')}
                        </h2>
                      </div>
                      <div className="why-wrapper">
                        <div className="content-why">
                          <div className="why-item">
                            <span className="icon"><img src="/images/check.png"/></span>
                            {t('home.why-us.experienced-consultant')}
                          </div>
                          <div className="why-item">
                             <span className="icon"><img src="/images/check.png"/></span>
                             {t('home.why-us.high-quality')}
                          </div>
                          <div className="why-item">
                             <span className="icon"><img src="/images/check.png"/></span>
                             {t('home.why-us.experienced-consultant')}
                          </div>
                          <div className="why-item">
                             <span className="icon"><img src="/images/check.png"/></span>
                             {t('home.why-us.cost')}
                          </div>
                        </div>
                        <div className="image-why">
                          <Image
                            src="/images/why.png"
                            width="400"
                            height="315"
                            alt="good visa service"
                          />
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
  );
}
