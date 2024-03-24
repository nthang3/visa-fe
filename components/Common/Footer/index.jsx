import { useTranslation } from "react-i18next";
export default function Footer() {
    const { i18n, t } = useTranslation("common");
    return (<footer>
        <div className="footer-area footer-bg" data-bg-color="" data-background="" style={{ backgroundImage: 'url("")'
            }}>
            <div className="footer2-top pt-95">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 footer-col-2-1">
                            <div id="custom_html-4"
                                className="widget_text footer-widget footer-2 footer-btm-mobile widget_custom_html">
                                <div className="textwidget custom-html-widget">
                                    <div className="footer-about-1">
                                        <div className="footer-about-1-content">
                                            <div className="footer-logo footer-logo-3 mb-30">
                                                <a href="https://codeskdhaka.com/wp/visapass">
                                                    <img src="/images/logo.png" alt="" />
                                                </a>
                                            </div>
                                            <p className="mb-50">
                                                {t('footer.sumary')}
                                            </p>
                                            {/* <h4 className="footer-about-1__title mb-30">Follow Us</h4>
                                            <ul className="social_links">
                                                <li>
                                                    <a className="" href="https://codeskdhaka.com/wp/visapass/#">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="https://codeskdhaka.com/wp/visapass/#">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="https://codeskdhaka.com/wp/visapass/#">
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="https://codeskdhaka.com/wp/visapass/#">
                                                        <i className="fab fa-pinterest-p" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="https://codeskdhaka.com/wp/visapass/#">
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 footer-col-2-2">
                            <div id="nav_menu-4" className="footer-widget footer-2 footer-btm-mobile widget_nav_menu">
                                <h3 className="footer-widget__title mb-25">Quick Links</h3>
                                <div className="menu-quick-links-container">
                                    <ul id="menu-quick-links" className="menu">
                                        <li id="menu-item-1897"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1897">
                                            <a href="/about">
                                            {t('header.menu.about')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1900"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1900">
                                            <a href="/services"
                                            >
                                                {t('header.menu.services')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1898"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1898">
                                            <a href="/blogs">
                                            {t('header.menu.blogs')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1902"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1902">
                                            <a href="/contact">
                                            {t('header.menu.contact')}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-col-2-3">
                            <div id="nav_menu-5" className="footer-widget footer-2 footer-btm-mobile widget_nav_menu">
                                <h3 className="footer-widget__title mb-25">Visa Services</h3>
                                <div className="menu-visa-information-container">
                                    <ul id="menu-visa-information" className="menu">
                                        <li id="menu-item-1903"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1903">
                                            <a href="https://codeskdhaka.com/wp/visapass/about/">
                                            {t('home.service.service1.title')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1908"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1908">
                                            <a href="https://codeskdhaka.com/wp/visapass/about/">
                                            {t('home.service.service2.title')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1904"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1904">
                                            <a href="https://codeskdhaka.com/wp/visapass/countries/"
                                            >
                                                {t('home.service.service3.title')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1905"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1905">
                                            <a href="https://codeskdhaka.com/wp/visapass/faq/">
                                            {t('home.service.service4.title')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1907"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1907">
                                            <a href="https://codeskdhaka.com/wp/visapass/services/"
                                            >
                                                {t('home.service.service5.title')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1907"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1907">
                                            <a href="https://codeskdhaka.com/wp/visapass/services/"
                                            >
                                                {t('home.service.service6.title')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1907"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1907">
                                            <a href="https://codeskdhaka.com/wp/visapass/services/"
                                            >
                                                {t('home.service.service7.title')}
                                            </a>
                                        </li>
                                        <li id="menu-item-1907"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1907">
                                            <a href="https://codeskdhaka.com/wp/visapass/services/"
                                            >
                                                {t('home.service.service8.title')}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-col-2-4">
                            <div id="custom_html-5"
                                className="widget_text footer-widget footer-2 footer-btm-mobile widget_custom_html">
                                <h3 className="footer-widget__title mb-25">Get in Touch</h3>
                                <div className="textwidget custom-html-widget">
                                    <ul className="footer-widget_menu-link-info">
                                        <li>
                                            <a href="tel:1587203692">
                                                <i className="fal fa-phone-alt" />{" "}
                                                <span> +84 (0)886599566</span>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:support@gmail.com">
                                                <i className="fal fa-envelope" />{" "}
                                                <span>Katenguyenvnc@gmail.com</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://goo.gl/maps/BVJP2UB42DL6N6qy7">
                                                <i className="fal fa-map-marker-alt" />{" "}
                                                <span>
                                                Số 497 Thụy Khuê, Phường Bưởi, Quận Tây Hồ, Hà Nội, Việt Nam
                                                </span>{" "}
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
        {/* Footer Copy right start */}
        <div className="footer-copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                        <div
                            className="footer-copyright__wrapper footer-copyright-home dis-none d-flex align-items-center theme-bg">
                            <div className="footer-copyright__wrapper__icon mr-10">
                                <a href="tel:http://+1%20878%20298%20023">
                                    <i className="fal fa-headset" />
                                </a>
                            </div>
                            <div className="footer-copyright__wrapper__call-number copy-right-cell">
                                <span>Call - Or - SMS</span>
                                <h5>
                                    <a href="tel:+1 878 298 023">+84 (0)886599566</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                        <div className="row subscribe-top align-items-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <h4 className="copyright-title">
                                    Get More Update Join Our Newsletters
                                </h4>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                                <div className="subscribe-footer">
                                    <form method="get" action="https://codeskdhaka.com/wp/visapass/">
                                        <input type="search" name="s" defaultValue="" placeholder=" Enter your email" />
                                        <button type="submit">
                                            <i className="fal fa-long-arrow-right" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row copyright-botom-padding align-items-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="copyright-botom ">
                                    <p>Copyright © 2023 BDevs. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="copyright-botom-right ">
                                    <ul>
                                        <li>
                                            <a href="https://codeskdhaka.com/wp/visapass/#">
                                                Privacy Policy
                                            </a>
                                            <a href="https://codeskdhaka.com/wp/visapass/#">
                                                Terms &amp; Condition
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
    </footer>)
}
