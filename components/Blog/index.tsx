import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Blog() {
  const { i18n, t } = useTranslation("common");
  const blogs = [
    {
      id: 1,
      updateDate: "march 11, 2024",
      title: "Designing Better Links For Websites And Emails",
      summary: "Nancy boy Charles down the pub get stuffed mate easy peasy…",
    },
    {
      id: 2,
      updateDate: "march 11, 2024",
      title: "A Guide To Attracting Clients To Your Agency",
      summary: "Nancy boy Charles down the pub get stuffed mate easy peasy…",
    },
    {
      id: 3,
      updateDate: "march 11, 2024",
      title: "Web Development To Update React Hooks Cons",
      summary: "Nancy boy Charles down the pub get stuffed mate easy peasy…",
    },
    {
      id: 4,
      updateDate: "march 11, 2024",
      title: "A Guide To Attracting Clients To Your Agency",
      summary: "Nancy boy Charles down the pub get stuffed mate easy peasy…",
    },
    {
      id: 5,
      updateDate: "march 11, 2024",
      title: "Web Development To Update React Hooks Cons",
      summary: "Nancy boy Charles down the pub get stuffed mate easy peasy…",
    },
    {
      id: 6,
      updateDate: "march 11, 2024",
      title: "Designing Better Links For Websites And Emails",
      summary: "Nancy boy Charles down the pub get stuffed mate easy peasy…",
    },
    {
      id: 7,
      updateDate: "march 11, 2024",
      title: "Web Development To Update React Hooks Cons",
      summary: "Nancy boy Charles down the pub get stuffed mate easy peasy…",
    },
    {
      id: 8,
      updateDate: "march 11, 2024",
      title: "Web Development To Update React Hooks Cons",
      summary: "Nancy boy Charles down the pub get stuffed mate easy peasy…",
    },
  ];

  const categories = [
    {id: 1, title: `${t('home.service.service1.title')}`},
    {id: 2, title: `${t('home.service.service2.title')}`},
    {id: 3, title: `${t('home.service.service3.title')}`},
    {id: 4, title: `${t('home.service.service4.title')}`},
    {id: 5, title: `${t('home.service.service5.title')}`},
    {id: 6, title: `${t('home.service.service6.title')}`},
    {id: 7, title: `${t('home.service.service7.title')}`},
    {id: 8, title: `${t('home.service.service8.title')}`},
  ]
  return (
    <section className="home-section section-blog">
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
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
                          <div className="row">
                            {blogs.map((item: any) => (
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
                                          VNC
                                        </a>
                                      </span>
                                      <span>
                                        <i
                                          aria-hidden="true"
                                          className="far fa-calendar-check"
                                        />
                                        {item.updateDate}
                                      </span>
                                    </div>
                                    <div className="blog-text">
                                      <h3 className=" blog__content__title bdevs-el-title">
                                        <a href="https://codeskdhaka.com/wp/visapass/designing-better-links-for-websites-and-emails-a-guideline/">
                                          {item.title}
                                        </a>
                                      </h3>
                                      <p className="bdevs-el-desc">
                                        {item.summary}
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
                            ))}
                          </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                          <div className="ablog__sidebar mb-50">
                            <div
                              id="search-2"
                              className="widget mb-45 widget_search"
                            >
                              <div className="sidebar--widget__search">
                                <form
                                  className="sidebar-search-form"
                                  action="https://codeskdhaka.com/wp/visapass/"
                                  method="get"
                                >
                                  <input
                                    type="text"
                                    defaultValue=""
                                    name="s"
                                    placeholder="Search"
                                  />
                                  <button type="submit">
                                    {" "}
                                    <i className="far fa-search" />
                                  </button>
                                </form>
                              </div>
                            </div>
                            <div
                              id="bdevs-latest-posts-2"
                              className="widget mb-45 widget_bdevs-latest-posts"
                            >
                              <h3 className="sidebar__widget--title mb-30">
                                Recent News{" "}
                              </h3>
                              <div className="sidebar__widget-content">
                                <div className="rc-post">
                                  <div className="d-flex mb-20">
                                    <div className="rc-thumb mr-15">
                                      <a href="https://codeskdhaka.com/wp/visapass/a-guide-to-undoing-mistakes-with-git/">
                                        <div
                                          className="sidebar-posts-bg-thumb"
                                          data-background="https://codeskdhaka.com/wp/visapass/wp-content/uploads/2021/12/blog-1-6.jpg"
                                          style={{
                                            backgroundImage:
                                              'url("https://codeskdhaka.com/wp/visapass/wp-content/uploads/2021/12/blog-1-6.jpg")',
                                          }}
                                        />
                                      </a>
                                    </div>
                                    <div className="rc-text">
                                      <h6>
                                        <a href="https://codeskdhaka.com/wp/visapass/a-guide-to-undoing-mistakes-with-git/">
                                          A Guide To Undoing Mistakes With
                                        </a>
                                      </h6>
                                      <div className="rc-meta">
                                        December 09, 2021{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex mb-20">
                                    <div className="rc-thumb mr-15">
                                      <a href="https://codeskdhaka.com/wp/visapass/useful-vs-code-extensions-for-front-end-developers/">
                                        <div
                                          className="sidebar-posts-bg-thumb"
                                          data-background="https://codeskdhaka.com/wp/visapass/wp-content/uploads/2021/12/blog-1-5.jpg"
                                          style={{
                                            backgroundImage:
                                              'url("https://codeskdhaka.com/wp/visapass/wp-content/uploads/2021/12/blog-1-5.jpg")',
                                          }}
                                        />
                                      </a>
                                    </div>
                                    <div className="rc-text">
                                      <h6>
                                        <a href="https://codeskdhaka.com/wp/visapass/useful-vs-code-extensions-for-front-end-developers/">
                                          Useful VS Code Extensions For
                                          Front-End
                                        </a>
                                      </h6>
                                      <div className="rc-meta">
                                        December 09, 2021{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex mb-20">
                                    <div className="rc-thumb mr-15">
                                      <a href="https://codeskdhaka.com/wp/visapass/useful-front-end-boilerplates-and-starter-kits/">
                                        <div
                                          className="sidebar-posts-bg-thumb"
                                          data-background="https://codeskdhaka.com/wp/visapass/wp-content/uploads/2021/12/blog-1-3.jpg"
                                          style={{
                                            backgroundImage:
                                              'url("https://codeskdhaka.com/wp/visapass/wp-content/uploads/2021/12/blog-1-3.jpg")',
                                          }}
                                        />
                                      </a>
                                    </div>
                                    <div className="rc-text">
                                      <h6>
                                        <a href="https://codeskdhaka.com/wp/visapass/useful-front-end-boilerplates-and-starter-kits/">
                                          Useful Front-End Boilerplates And
                                          Starter Kits
                                        </a>
                                      </h6>
                                      <div className="rc-meta">
                                        December 09, 2021{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              id="categories-2"
                              className="widget mb-45 widget_categories"
                            >
                              <h3 className="sidebar__widget--title mb-30">
                              {t('category')}
                              </h3>
                              <ul>
                                {categories.map((item: any) => <li className="cat-item cat-item-5">
                                  <a key={item.id} href="https://codeskdhaka.com/wp/visapass/category/app-saas/">
                                   <img src="/images/arror-category.png"/> {item.title}
                                  </a>
                                </li>)}
                                
                                
                              </ul>
                            </div>
                            
                          </div>
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
