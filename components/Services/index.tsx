import { useTranslation } from "next-i18next";

export default function Service() {
  const { i18n, t } = useTranslation("common");
  return (
    <div className="section-home section-service">
      <div className="_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p0">
              <div className="photography portfolio__item portfolio__item--style1">
                <div className="portfolio-image">
                  <a href="#">
                    <img src="/images/evisas.png" alt="" />
                  </a>
                  
                </div>
                <div className="portfolio-content">
                  <h3 className="title-image">
                    <a href="#">{t('home.service.service1.title')}</a>
                  </h3>
                  
                  <div className="text-content">
                  {t('home.service.service1.content')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p0">
              <div className="photography portfolio__item portfolio__item--style2">
                <div className="portfolio-image">
                  <a href="#">
                    <img src="/images/Vietnam-visa.jpeg" alt="" />
                  </a>
                  
                </div>
                <div className="portfolio-content">
                  <h3 className="title-image">
                    <a href="#">{t('home.service.service2.title')}</a>
                  </h3>
                  
                  <div className="text-content">
                  {t('home.service.service2.content')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p0">
              <div className="photography portfolio__item portfolio__item--style1">
                <div className="portfolio-image">
                  <a href="#">
                    <img src="/images/featurs-2-4.jpg" alt="" />
                  </a>
                </div>
                <div className="portfolio-content">
                  <h3 className="title-image">
                    <a href="#">{t('home.service.service3.title')}</a>
                  </h3>
                  
                  <div className="text-content">
                  {t('home.service.service3.content')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p0">
              <div className="photography portfolio__item portfolio__item--style2">
                <div className="portfolio-image">
                  <a href="#">
                    <img  src="/images/work-permit.jpg" alt="" />
                  </a>
                  
                </div>
                <div className="portfolio-content">
                  <h3 className="title-image">
                    <a href="#">{t('home.service.service4.title')}</a>
                  </h3>
                  
                  <div className="text-content">
                  {t('home.service.service4.content')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p0">
              <div className="photography portfolio__item portfolio__item--style1">
                <div className="portfolio-image">
                  <a href="#">
                    <img src="/images/Document-Legalization.png" alt="" />
                  </a>
                  
                </div>
                <div className="portfolio-content">
                  <h3 className="title-image">
                    <a href="#">{t('home.service.service5.title')}</a>
                  </h3>
                  
                  <div className="text-content">
                  {t('home.service.service5.content')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p0">
              <div className="photography portfolio__item portfolio__item--style2">
                <div className="portfolio-image">
                  <a href="#">
                    <img  src="/images/CONSULAR-ATTESTATION.jpg" alt="" />
                  </a>
                  
                </div>
                <div className="portfolio-content">
                  <h3 className="title-image">
                    <a href="#">{t('home.service.service6.title')}</a>
                  </h3>
                  
                  <div className="text-content">
                  {t('home.service.service6.content')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p0">
              <div className="photography portfolio__item portfolio__item--style1">
                <div className="portfolio-image">
                  <a href="#">
                    <img src="/images/apostille-service.jpg" alt="" />
                  </a>
                  
                </div>
                <div className="portfolio-content">
                  <h3 className="title-image">
                    <a href="#">{t('home.service.service7.title')}</a>
                  </h3>
                  
                  <div className="text-content">
                  {t('home.service.service7.content')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p0">
              <div className="photography portfolio__item portfolio__item--style2">
                <div className="portfolio-image">
                  <a href="#">
                    <img src="/images/global-visa.jpg" alt="" />
                  </a>
                  
                </div>
                <div className="portfolio-content">
                  <h3 className="title-image">
                    <a href="#">{t('home.service.service8.title')}</a>
                  </h3>
                  
                  <div className="text-content">
                  {t('home.service.service8.content')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
