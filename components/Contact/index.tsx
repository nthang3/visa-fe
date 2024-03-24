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
    <div
      data-elementor-type="wp-page"
      data-elementor-id={1385}
      className="elementor elementor-1385"
    >
      <div className="top-contact"></div>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-b8aa9b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="b8aa9b2"
        data-element_type="section"
      >
        <h2 className="contact-form__title bdevs-el-title text-center">
          {t("contact-page.title")}{" "}
        </h2>
        <div className="elementor-custom-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.614195647132!2d105.80654537597012!3d21.048117587112152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7468cf2951%3A0xffcdb0e8c5a6fe23!2zNDk3IMSQLiBUaOG7pXkgS2h1w6osIELGsOG7n2ksIFTDonkgSOG7kywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1711294675742!5m2!1svi!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-fa9e670 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="fa9e670"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-extended contact-page">
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-156e276"
            data-id="156e276"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-59c6d35 elementor-widget elementor-widget-contact_info bdevs-el contact_info"
                data-id="59c6d35"
                data-element_type="widget"
                data-widget_type="contact_info.default"
              >
                <div className="elementor-widget-container">
                  <div className="contact__gpinfo grey-soft2-bg bdevs-el-content mb-50">
                    <div className="contact__gpinfo-icon bdevs-el-icon text-center">
                      <span className="icon-contact"><img src="/images/address-icon.png"/></span>
                    </div>
                    <div className="contact__gpinfo-content">
                      <h3 className="contact__gpinfo-content-title bdevs-el-title text-center mb-25">
                        {t("contact-page.work-permit.title")}
                      </h3>
                      <ul>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.name")}:</span>
                            <p>{t("contact-page.work-permit.name")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.mail")}:</span>
                            <p> {t("contact-page.work-permit.Email")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.phone")}:</span>
                            <p>{t("contact-page.work-permit.phone")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a href="/wp/visapass/contact/">
                            <span className="label-contact">{t("contact-page.address")}:</span>
                            <p>{t("contact-page.contact-detail")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a href="/wp/visapass/contact/">
                            <span>Opening:</span>
                            <p>{t("contact-page.working-hour")}</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-156e276"
            data-id="156e276"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-59c6d35 elementor-widget elementor-widget-contact_info bdevs-el contact_info"
                data-id="59c6d35"
                data-element_type="widget"
                data-widget_type="contact_info.default"
              >
                <div className="elementor-widget-container">
                  <div className="contact__gpinfo grey-soft2-bg bdevs-el-content mb-50">
                    <div className="contact__gpinfo-icon bdevs-el-icon text-center">
                      <span className="icon-contact"><img src="/images/address-icon.png"/></span>
                    </div>
                    <div className="contact__gpinfo-content">
                      <h3 className="contact__gpinfo-content-title bdevs-el-title text-center mb-25">
                        {t("contact-page.tourist-visa.title")}
                      </h3>
                      <ul>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.name")}:</span>
                            <p>{t("contact-page.tourist-visa.name")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.mail")}:</span>
                            <p> {t("contact-page.tourist-visa.Email")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.phone")}:</span>
                            <p>{t("contact-page.tourist-visa.phone")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a href="/wp/visapass/contact/">
                            <span className="label-contact">{t("contact-page.address")}:</span>
                            <p>{t("contact-page.contact-detail")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a href="/wp/visapass/contact/">
                            <span>Opening:</span>
                            <p>{t("contact-page.working-hour")}</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-156e276"
            data-id="156e276"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-59c6d35 elementor-widget elementor-widget-contact_info bdevs-el contact_info"
                data-id="59c6d35"
                data-element_type="widget"
                data-widget_type="contact_info.default"
              >
                <div className="elementor-widget-container">
                  <div className="contact__gpinfo grey-soft2-bg bdevs-el-content mb-50">
                    <div className="contact__gpinfo-icon bdevs-el-icon text-center">
                      <span className="icon-contact"><img src="/images/address-icon.png"/></span>
                    </div>
                    <div className="contact__gpinfo-content">
                      <h3 className="contact__gpinfo-content-title bdevs-el-title text-center mb-25">
                        {t("contact-page.consular-legalization.title")}
                      </h3>
                      <ul>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.name")}:</span>
                            <p>{t("contact-page.consular-legalization.name")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.mail")}:</span>
                            <p> {t("contact-page.consular-legalization.Email")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a>
                            <span className="label-contact">{t("contact-page.phone")}:</span>
                            <p>{t("contact-page.consular-legalization.phone")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a href="/wp/visapass/contact/">
                            <span className="label-contact">{t("contact-page.address")}:</span>
                            <p>{t("contact-page.contact-detail")}</p>
                          </a>
                        </li>
                        <li className="contact-item">
                          <a href="/wp/visapass/contact/">
                            <span>Opening:</span>
                            <p>{t("contact-page.working-hour")}</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
