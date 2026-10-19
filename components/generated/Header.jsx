export default function Header() {
  return (
    <>
      <header id="site-header" className="header-wrap rb-section header-5 header-fw style-tb-shadow-border has-quick-menu">
        <div className="logo-wrap site-branding">
          <a href="/" className="logo text-logo" title="JournoPulse">
            <span className="logo-text">
              <span className="logo-journo">
                Journo
              </span>
              <span className="logo-pulse">
                Pulse
              </span>
            </span>
          </a>
        </div>
        <div className="header-social-list wnav-holder">
          <a className="social-link-facebook" aria-label="substack" href="https://substack.com/@journopulse" rel="noopener nofollow" target="_blank">
            <img width="24" height="24" src="/img/substack.png" alt="Substack" style={{filter: "brightness(0)"}} />
          </a>
          {" "}
          <a className="social-link-twitter" aria-label="X" data-title="X" href="https://x.com/journopulse_" target="_blank" rel="noopener nofollow">
            <img width="24" height="24" src="/img/icons/x.svg" alt="twitterx--v2" />
          </a>
          {" "}
          <a className="social-link-youtube" aria-label="medium" data-title="medium" href="https://medium.com/@admin_30375" target="_blank" rel="noopener nofollow">
            <img width="24" height="28" src="/img/medium.png" alt="Substack" style={{filter: "brightness(0)"}} />
          </a>
        </div>
        <div className="logo-sec-right">
          <div className="navbar-right">
            <div className="wnav-holder header-dropdown-outer">
              <div className="dropdown-trigger notification-icon notification-trigger">
                <span className="notification-icon-inner" data-title="Notification">
                  <span className="notification-icon-holder">
                    <span>
                      <img width="24" height="24" src="/img/icons/bell.svg" alt="bell" />
                    </span>
                    {" "}
                    <span className="notification-info"></span>
                  </span>
                </span>
              </div>
              <div className="header-dropdown notification-dropdown">
                <div className="notification-popup">
                  <div className="notification-header">
                    <span className="h4">
                      Notification
                    </span>
                    {" "}
                    <a className="notification-url meta-text" href="#">
                      Show More{" "}
                      <i className="rbi rbi-cright" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="notification-content">
                    <div className="scroll-holder">
                      <div className="rb-notification ecat-l-dot is-feat-right" data-interval="15"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wnav-holder w-header-search header-dropdown-outer">
              <a href="#" role="button" data-title="Search" className="icon-holder header-element search-btn search-trigger" aria-label="Search">
                <img width="24" height="24" src="/img/icons/search.svg" alt="search--v1" />
              </a>
              <div className="header-dropdown">
                <div className="header-search-form is-icon-layout">
                  <form method="get" action="https://www.journopulse.com/" className="rb-search-form live-search-form" data-search="post" data-limit="0" data-follow="0" data-tax="category" data-dsource="0" data-ptype="">
                    <div className="search-form-inner">
                      <span className="search-icon">
                        <span className="search-icon-svg"></span>
                      </span>
                      <span className="search-text">
                        <input type="text" className="field" placeholder="Search Headlines, News..." defaultValue="" name="s" />
                      </span>
                      <span className="rb-search-submit">
                        <input type="submit" defaultValue="Search" />
                        <i className="rbi rbi-cright" aria-hidden="true"></i>
                      </span>
                      <span className="live-search-animation rb-loader"></span>
                    </div>
                    <div className="live-search-response"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="dark-mode-toggle-wrap">
              <div className="dark-mode-toggle">
                <span className="dark-mode-slide">
                  <i className="dark-mode-slide-btn mode-icon-dark" data-title="Switch to Light">
                    <svg className="svg-icon svg-mode-dark" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                      <path fill="currentColor" d="M968.172 426.83c-2.349-12.673-13.274-21.954-26.16-22.226-12.876-0.22-24.192 8.54-27.070 21.102-27.658 120.526-133.48 204.706-257.334 204.706-145.582 0-264.022-118.44-264.022-264.020 0-123.86 84.18-229.676 204.71-257.33 12.558-2.88 21.374-14.182 21.102-27.066s-9.548-23.81-22.22-26.162c-27.996-5.196-56.654-7.834-85.176-7.834-123.938 0-240.458 48.266-328.098 135.904-87.638 87.638-135.902 204.158-135.902 328.096s48.264 240.458 135.902 328.096c87.64 87.638 204.16 135.904 328.098 135.904s240.458-48.266 328.098-135.904c87.638-87.638 135.902-204.158 135.902-328.096 0-28.498-2.638-57.152-7.828-85.17z"></path>
                    </svg>
                  </i>
                  {" "}
                  <i className="dark-mode-slide-btn mode-icon-default" data-title="Switch to Dark">
                    <svg className="svg-icon svg-mode-light" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.447 232.447">
                      <path fill="currentColor" d={"M116.211,194.8c-4.143,0-7.5,3.357-7.5,7.5v22.643c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5V202.3\n C123.711,198.157,120.354,194.8,116.211,194.8z"}></path>
                      {" "}
                      <path fill="currentColor" d={"M116.211,37.645c4.143,0,7.5-3.357,7.5-7.5V7.505c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v22.641\n C108.711,34.288,112.068,37.645,116.211,37.645z"}></path>
                      {" "}
                      <path fill="currentColor" d={"M50.054,171.78l-16.016,16.008c-2.93,2.929-2.931,7.677-0.003,10.606c1.465,1.466,3.385,2.198,5.305,2.198\n c1.919,0,3.838-0.731,5.302-2.195l16.016-16.008c2.93-2.929,2.931-7.677,0.003-10.606C57.731,168.852,52.982,168.851,50.054,171.78\n z"}></path>
                      {" "}
                      <path fill="currentColor" d={"M177.083,62.852c1.919,0,3.838-0.731,5.302-2.195L198.4,44.649c2.93-2.929,2.931-7.677,0.003-10.606\n c-2.93-2.932-7.679-2.931-10.607-0.003l-16.016,16.008c-2.93,2.929-2.931,7.677-0.003,10.607\n C173.243,62.12,175.163,62.852,177.083,62.852z"}></path>
                      {" "}
                      <path fill="currentColor" d={"M37.645,116.224c0-4.143-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h22.645\n C34.287,123.724,37.645,120.366,37.645,116.224z"}></path>
                      {" "}
                      <path fill="currentColor" d={"M224.947,108.724h-22.652c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h22.652c4.143,0,7.5-3.357,7.5-7.5\n S229.09,108.724,224.947,108.724z"}></path>
                      {" "}
                      <path fill="currentColor" d={"M50.052,60.655c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196c2.93-2.929,2.93-7.678,0.001-10.606\n L44.652,34.042c-2.93-2.93-7.679-2.929-10.606-0.001c-2.93,2.929-2.93,7.678-0.001,10.606L50.052,60.655z"}></path>
                      {" "}
                      <path fill="currentColor" d={"M182.395,171.782c-2.93-2.929-7.679-2.93-10.606-0.001c-2.93,2.929-2.93,7.678-0.001,10.607l16.007,16.008\n c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196c2.93-2.929,2.93-7.678,0.001-10.607L182.395,171.782z"}></path>
                      {" "}
                      <path fill="currentColor" d={"M116.22,48.7c-37.232,0-67.523,30.291-67.523,67.523s30.291,67.523,67.523,67.523s67.522-30.291,67.522-67.523\n S153.452,48.7,116.22,48.7z M116.22,168.747c-28.962,0-52.523-23.561-52.523-52.523S87.258,63.7,116.22,63.7\n c28.961,0,52.522,23.562,52.522,52.523S145.181,168.747,116.22,168.747z"}></path>
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="navbar-outer" className="navbar-outer">
          <div id="sticky-holder" className="sticky-holder">
            <div className="navbar-wrap">
              <div className="rb-container edge-padding">
                <div className="navbar-inner">
                  <div className="navbar-center">
                    <nav id="site-navigation" className="main-menu-wrap" aria-label="main menu">
                      <ul id="menu-main" className="main-menu rb-menu large-menu" itemScope itemType="https://www.schema.org/SiteNavigationElement">
                        <li id="menu-item-1655" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-1655">
                          <a href="#">
                            <span>
                              Home
                            </span>
                            <img width="12" height="12" src="/img/icons/chevron-down.svg" alt="chevron-down" />
                          </a>
                          {" "}
                        </li>
                        <li id="menu-item-1578" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1578 menu-item-has-children menu-has-child-mega is-child-wide mega-hierarchical">
                          <a href="/us">
                            <span>
                              U.S News
                            </span>
                            <img width="12" height="12" src="/img/icons/chevron-down.svg" alt="chevron-down" />
                          </a>
                          <div className="mega-dropdown is-mega-category">
                            <div className="rb-container edge-padding">
                              <div className="mega-dropdown-inner">
                                <div className="mega-col mega-col-intro">
                                  <div className="h3">
                                    <a className="p-url" href="#">
                                      U.S News
                                    </a>
                                  </div>
                                  <div className="category-hero-wrap">
                                    <div className="category-hero-item">
                                      <div className="category-hero-item-inner">
                                        <img loading="lazy" decoding="async" src="/img/illustrations/northeast-us-recovers-severe-storm-flight-delays-school-closures.webp" alt="" />
                                      </div>
                                    </div>
                                    <div className="category-hero-item">
                                      <div className="category-hero-item-inner">
                                        <img loading="lazy" decoding="async" src="/img/illustrations/northeast-us-recovers-severe-storm-flight-delays-school-closures.webp" alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cbox-description">
                                    The Northeast US recovers from a severe storm that caused aircraft delays and school closures.
                                  </div>
                                  <a className="mega-link p-readmore" href="/us">
                                    <span>
                                      Show More
                                    </span>
                                  </a>
                                </div>
                                <div className="mega-col mega-col-trending">
                                  <div className="mega-header">
                                    <i className="rbi rbi-trending" aria-hidden="true"></i>
                                    <span className="h4">
                                      Top News
                                    </span>
                                  </div>
                                  <div id="mega-listing-trending-1578" className="block-wrap block-small block-list block-list-small-2 rb-columns rb-col-1 meta-s-default">
                                    <div className="block-inner">
                                      <div className="p-wrap p-small p-list-small-2" data-pid="56">
                                        <div className="feat-holder">
                                          <div className="p-featured ratio-v1">
                                            <a className="p-flink" href="/us/us-supreme-court-hear-exxon-suncor-bid-toss-boulders-climate-suit" title="The States Braces for Protests Over New COVID Rules">
                                              <img loading="lazy" width="150" height="150" src="/img/illustrations/us-supreme-court-hear-exxon-suncor-bid-toss-boulders-climate-suit.webp" className="featured-img wp-post-image" alt="" decoding="async" />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="p-content">
                                          <div className="entry-title h4 is-p-protected">
                                            <a className="p-url" href="/us/us-supreme-court-hear-exxon-suncor-bid-toss-boulders-climate-suit" rel="bookmark">
                                              {" "}Supreme Court to Hear Oil Firms’ Appeals in Climate Lawsuits.Top Court Takes Up Oil Climate Case{" "}
                                            </a>
                                          </div>
                                          <div className="p-meta">
                                            <div className="meta-inner is-meta">
                                              <div className="meta-el meta-update">
                                                <time className="updated" dateTime="2022-04-07T11:19:53+00:00">
                                                  March 05, 26
                                                </time>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="p-wrap p-small p-list-small-2" data-pid="199">
                                        <div className="feat-holder">
                                          <div className="p-featured ratio-v1">
                                            <a className="p-flink" href="#" title="Key Trends Developing in Global Equity Markets">
                                              <img loading="lazy" width="150" height="150" src="/img/illustrations/us-supreme-court-hear-exxon-suncor-bid-toss-boulders-climate-suit.webp" className="featured-img wp-post-image" alt="" decoding="async" />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="p-content">
                                          <div className="entry-title h4">
                                            <a className="p-url" href="/us/supreme-court-ruling-against-trump-tariffs-creates-uncertainty" rel="bookmark">
                                              {" "}Although the Supreme Court's ruling against Trump's tariffs creates uncertainty.{" "}
                                            </a>
                                          </div>
                                          <div className="p-meta">
                                            <div className="meta-inner is-meta">
                                              <div className="meta-el meta-update">
                                                <time className="updated" dateTime="2022-04-07T09:02:34+00:00">
                                                  March 05, 26
                                                </time>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="p-wrap p-small p-list-small-2" data-pid="216">
                                        <div className="feat-holder">
                                          <div className="p-featured ratio-v1">
                                            <a className="p-flink" href="#" title="Global Warming Is Changing How Hurricanes Work">
                                              <img loading="lazy" width="150" height="150" src="/img/illustrations/kosovo-poor-economy-struggles-iran-war-fuel-price-surge.webp" className="featured-img wp-post-image" alt="" decoding="async" />
                                            </a>
                                          </div>
                                        </div>
                                        <div className="p-content">
                                          <div className="entry-title h4">
                                            <a className="p-url" href="/us/inflation-increased-faster-than-expected-in-december" rel="bookmark">
                                              {" "}In December, inflation increased more fast than anticipated.{" "}
                                            </a>
                                          </div>
                                          <div className="p-meta">
                                            <div className="meta-inner is-meta">
                                              <div className="meta-el meta-update">
                                                <time className="updated" dateTime="2022-04-07T09:43:08+00:00">
                                                  March 05, 26
                                                </time>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mega-col mega-col-latest">
                                  <div className="mega-header">
                                    <i className="rbi rbi-clock" aria-hidden="true"></i>
                                    <span className="h4">
                                      Latest News
                                    </span>
                                  </div>
                                  <div id="mega-listing-latest-1578" className="block-wrap block-small block-list block-list-small-1 bottom-border is-b-border-gray no-last-bb meta-s-default">
                                    <div className="block-inner">
                                      <div className="p-wrap p-small p-list-small-1" data-pid="56">
                                        <div className="p-content">
                                          <div className="entry-title h4 is-p-protected">
                                            <a className="p-url" href="/us/governors-break-free-trump-party-hold-washington" rel="bookmark">
                                              {" "}Governors are eager to’ break free from Trump' ‘s party hold when they arrive in Washington.{" "}
                                            </a>
                                          </div>
                                          <div className="p-meta">
                                            <div className="meta-inner is-meta">
                                              <div className="meta-el meta-update">
                                                <time className="updated" dateTime="2022-04-07T11:19:53+00:00">
                                                  April 04, 26
                                                </time>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="p-wrap p-small p-list-small-1" data-pid="199">
                                        <div className="p-content">
                                          <div className="entry-title h4">
                                            <a className="p-url" href="/politics/one-crew-member-missing-after-two-us-aircraft-crash-middle-east" rel="bookmark">
                                              {" "}Live updates: One crew member is missing after two US aircraft went down in the Middle East{" "}
                                            </a>
                                          </div>
                                          <div className="p-meta">
                                            <div className="meta-inner is-meta">
                                              <div className="meta-el meta-update">
                                                <time className="updated" dateTime="2022-04-07T09:02:34+00:00">
                                                  April 04, 26
                                                </time>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="p-wrap p-small p-list-small-1" data-pid="216">
                                        <div className="p-content">
                                          <div className="entry-title h4">
                                            <a className="p-url" href="/us/fact-focus-us-israel-strike-iran-false-images-circulate" rel="bookmark">
                                              {" "}FACT FOCUS: After the US and Israel strike Iran, false pictures circulate.
                                            </a>
                                          </div>
                                          <div className="p-meta">
                                            <div className="meta-inner is-meta">
                                              <div className="meta-el meta-update">
                                                <time className="updated" dateTime="2022-04-07T09:43:08+00:00">
                                                  March 05, 26
                                                </time>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="p-wrap p-small p-list-small-1" data-pid="43">
                                        <div className="p-content">
                                          <div className="entry-title h4">
                                            <a className="p-url" href="/fashion/fashion-week-siriano-inaugural-collection-fantasy-surrealism" rel="bookmark">
                                              {" "}Fashion week: Siriano's inaugural collection is infused with "fantasy" and "surrealism."
                                            </a>
                                          </div>
                                          <div className="p-meta">
                                            <div className="meta-inner is-meta">
                                              <div className="meta-el meta-update">
                                                <time className="updated" dateTime="2022-04-07T09:40:40+00:00">
                                                  March 05, 26
                                                </time>
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
                          </div>
                        </li>
                        <li id="menu-item-1577" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1577 menu-item-has-children menu-has-child-mega is-child-wide">
                          <a href="/technology">
                            <span>
                              Technology
                            </span>
                            <img width="12" height="12" src="/img/icons/chevron-down.svg" alt="chevron-down" />
                          </a>
                          <div className="mega-dropdown is-mega-category">
                            <div className="rb-container edge-padding">
                              <div className="mega-dropdown-inner">
                                <div className="mega-header mega-header-fw">
                                  <span className="h4">
                                    Technology
                                  </span>
                                  <a className="mega-link is-meta" href="#">
                                    <span>
                                      Show More
                                    </span>
                                    <i className="rbi rbi-cright" aria-hidden="true"></i>
                                  </a>
                                </div>
                                <div id="mega-listing-1577" className="block-wrap block-small block-grid block-grid-small-1 rb-columns rb-col-5 is-gap-10 meta-s-default">
                                  <div className="block-inner">
                                    <div className="p-wrap p-grid p-grid-small-1" data-pid="1350">
                                      <div className="feat-holder">
                                        <div className="p-featured">
                                          <a className="p-flink" href="#" title={"How to Take the Perfect Instagram Selfie: Dos & Don’ts"}>
                                            <img loading="lazy" width="330" height="220" src="/img/illustrations/waymo-robotaxi-expansion-us.webp" className="featured-img wp-post-image" alt="" decoding="async" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="p-content">
                                        <div className="entry-title h4">
                                          <a className="p-url" href="/technology/bloomberg-philanthropies-mayors-challenge-ai-improves-city-services" rel="bookmark">
                                            {" "}Bloomberg Philanthropies Mayors Challenge Winners Use AI to Improve City Services.{" "}
                                          </a>
                                        </div>
                                        <div className="p-meta has-bookmark">
                                          <div className="meta-inner is-meta">
                                            <div className="meta-el meta-date">
                                              <time className="date published" dateTime="2021-10-01T13:21:00+00:00">
                                                March 05, 26
                                              </time>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-wrap p-grid p-grid-small-1" data-pid="1079">
                                      <div className="feat-holder">
                                        <div className="p-featured">
                                          <a className="p-flink" href="/technology/why-americans-love-iphones-but-wish-they-didnt-need-them" title="Apple iMac M1 Review: the All-In-One for Almost Everyone">
                                            <img loading="lazy" width="330" height="220" src="/img/illustrations/why-americans-love-iphones-but-wish-they-didnt-need-them.webp" className="featured-img wp-post-image" alt="" decoding="async" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="p-content">
                                        <div className="entry-title h4">
                                          <a className="p-url" href="/technology/why-americans-love-iphones-but-wish-they-didnt-need-them" rel="bookmark">
                                            {" "}Americans love their iPhones though sometimes they wish they could live without them..{" "}
                                          </a>
                                        </div>
                                        <div className="review-meta is-meta is-rstyle-0 type-score has-bookmark">
                                          <div className="review-meta-inner">
                                            <span className="rline-wrap">
                                              <span className="rline activated"></span>
                                              <span className="rline activated"></span>
                                              <span className="rline activated"></span>
                                              <span className="rline activated"></span>
                                              <span className="rline activated"></span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-wrap p-grid p-grid-small-1" data-pid="163">
                                      <div className="feat-holder">
                                        <div className="p-featured">
                                          <a className="p-flink" href="/technology/trump-tariffs-us-stocks-plummet-ai-losers" title="Google’s Self-Designed Tensor Chips will Power Its Next">
                                            <img loading="lazy" width="330" height="220" src="/img/illustrations/trump-tariffs-us-stocks-plummet-ai-losers.webp" className="featured-img wp-post-image" alt="" decoding="async" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="p-content">
                                        <div className="entry-title h4">
                                          <a className="p-url" href="/technology/trump-tariffs-us-stocks-plummet-ai-losers" rel="bookmark">
                                            {" "}Trump's increased tariffs cause US stocks to plummet, as investors dump possible AI losers.
                                          </a>
                                        </div>
                                        <div className="p-meta has-bookmark">
                                          <div className="meta-inner is-meta">
                                            <div className="meta-el meta-date">
                                              <time className="date published" dateTime="2021-09-08T08:01:50+00:00">
                                                March 05, 26
                                              </time>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-wrap p-grid p-grid-small-1" data-pid="155">
                                      <div className="feat-holder">
                                        <div className="p-featured">
                                          <a className="p-flink" href="http://1.envato.market/6bEx7Q" title="Sony WF-10XM4: Headphones Are Our Absolute Favorite">
                                            <img loading="lazy" width="330" height="220" src="/img/illustrations/india-joins-us-effort-safe-technologies-supply-chains.webp" className="featured-img wp-post-image" alt="" decoding="async" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="p-content">
                                        <div className="entry-title h4">
                                          <a className="p-url" href="/technology/india-joins-us-effort-safe-technologies-supply-chains" rel="noopener nofollow">
                                            {" "}India joins the US-led effort to create supply chains for safe technologies.{" "}
                                          </a>
                                        </div>
                                        <div className="sponsor-meta meta-text sponsor-logo">
                                          <div className="sponsor-inner">
                                            <a className="sponsor-link" href="/img/ads/sponsor.webp" target="_blank" rel="noopener nofollow" aria-label="Tech Bird">
                                              <span className="sponsor-label">
                                                Sponsored by
                                              </span>
                                              <div className="sponlogo-wrap meta-bold">
                                                <img loading="lazy" decoding="async" className="sponsor-brand-logo" data-mode="default" src="/img/ads/sponsor-logo.webp" width="212" height="52" alt="Tech Bird" />
                                                <img loading="lazy" decoding="async" className="sponsor-brand-logo" data-mode="dark" src="/img/ads/sponsor-logo.webp" width="212" height="52" alt="Tech Bird" />
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="p-wrap p-grid p-grid-small-1" data-pid="1316">
                                      <div className="feat-holder">
                                        <div className="p-featured">
                                          <a className="p-flink" href="#" title="Hands-On With the iPhone 13, Pro, Max, and Mini">
                                            <img loading="lazy" width="330" height="220" src="/img/illustrations/love-my-woke-pope-leo-first-encyclical-viral-papal-approach.webp" className="featured-img wp-post-image" alt="" decoding="async" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="p-content">
                                        <div className="entry-title h4">
                                          <a className="p-url" href="/technology/gates-foundation-project-rwanda-ai-powered-technology-clinics" rel="bookmark">
                                            {" "}Under a new Gates Foundation project, Rwanda will test AI-powered technology in clinics..{" "}
                                          </a>
                                        </div>
                                        <div className="p-meta has-bookmark">
                                          <div className="meta-inner is-meta">
                                            <div className="meta-el meta-date">
                                              <time className="date published" dateTime="2021-09-04T08:10:00+00:00">
                                                March 05, 26
                                              </time>
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
                        </li>
                        <li id="menu-item-1588" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1588">
                          <a href="/business">
                            <span>
                              Business
                            </span>
                            <img width="12" height="12" src="/img/icons/chevron-down.svg" alt="chevron-down" />
                          </a>
                          {" "}
                        </li>
                        <li id="menu-item-1594" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1594">
                          <a href="/politics">
                            <span>
                              politics
                            </span>
                            <img width="12" height="12" src="/img/icons/chevron-down.svg" alt="chevron-down" />
                          </a>
                          {" "}
                        </li>
                        <li id="menu-item-1789" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1789">
                          <a href="/world">
                            <span>
                              World
                            </span>
                          </a>
                        </li>
                        <li id="menu-item-1789" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1789">
                          <a href="/puertorico">
                            <span>
                              Puerto Rico
                            </span>
                          </a>
                        </li>
                        <li id="menu-item-1789" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1789">
                          <a href="/bancredito">
                            <span>
                              Bancredito
                            </span>
                          </a>
                        </li>
                        <li id="menu-item-1769" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1769">
                          <a href="/about">
                            <span>
                              <i className="menu-item-icon rbi rbi-heart" aria-hidden="true"></i>
                              About Us
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div id="header-mobile" className="header-mobile mh-style-shadow">
              <div className="header-mobile-wrap">
                <div className="mbnav mbnav-center edge-padding">
                  <div className="navbar-left">
                    <div className="mobile-toggle-wrap">
                      <a href="#" className="mobile-menu-trigger" role="button" rel="nofollow" aria-label="Open mobile menu">
                        <span className="burger-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="navbar-center">
                    <div className="logo-wrap site-branding">
                      <a href="/" className="logo text-logo" title="JournoPulse">
                        <span className="logo-texts">
                          <span className="logo-journo">
                            Journo
                          </span>
                          <span className="logo-pulse">
                            Pulse
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="navbar-right">
                    <div className="dark-mode-toggle-wrap">
                      <div className="dark-mode-toggle">
                        <span className="dark-mode-slide">
                          <i className="dark-mode-slide-btn mode-icon-dark" data-title="Switch to Light">
                            <svg className="svg-icon svg-mode-dark" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                              <path fill="currentColor" d="M968.172 426.83c-2.349-12.673-13.274-21.954-26.16-22.226-12.876-0.22-24.192 8.54-27.070 21.102-27.658 120.526-133.48 204.706-257.334 204.706-145.582 0-264.022-118.44-264.022-264.020 0-123.86 84.18-229.676 204.71-257.33 12.558-2.88 21.374-14.182 21.102-27.066s-9.548-23.81-22.22-26.162c-27.996-5.196-56.654-7.834-85.176-7.834-123.938 0-240.458 48.266-328.098 135.904-87.638 87.638-135.902 204.158-135.902 328.096s48.264 240.458 135.902 328.096c87.64 87.638 204.16 135.904 328.098 135.904s240.458-48.266 328.098-135.904c87.638-87.638 135.902-204.158 135.902-328.096 0-28.498-2.638-57.152-7.828-85.17z"></path>
                            </svg>
                          </i>
                          {" "}
                          <i className="dark-mode-slide-btn mode-icon-default" data-title="Switch to Dark">
                            <svg className="svg-icon svg-mode-light" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232.447 232.447">
                              <path fill="currentColor" d={"M116.211,194.8c-4.143,0-7.5,3.357-7.5,7.5v22.643c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5V202.3\n C123.711,198.157,120.354,194.8,116.211,194.8z"}></path>
                              {" "}
                              <path fill="currentColor" d={"M116.211,37.645c4.143,0,7.5-3.357,7.5-7.5V7.505c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v22.641\n C108.711,34.288,112.068,37.645,116.211,37.645z"}></path>
                              {" "}
                              <path fill="currentColor" d={"M50.054,171.78l-16.016,16.008c-2.93,2.929-2.931,7.677-0.003,10.606c1.465,1.466,3.385,2.198,5.305,2.198\n c1.919,0,3.838-0.731,5.302-2.195l16.016-16.008c2.93-2.929,2.931-7.677,0.003-10.606C57.731,168.852,52.982,168.851,50.054,171.78\n z"}></path>
                              {" "}
                              <path fill="currentColor" d={"M177.083,62.852c1.919,0,3.838-0.731,5.302-2.195L198.4,44.649c2.93-2.929,2.931-7.677,0.003-10.606\n c-2.93-2.932-7.679-2.931-10.607-0.003l-16.016,16.008c-2.93,2.929-2.931,7.677-0.003,10.607\n C173.243,62.12,175.163,62.852,177.083,62.852z"}></path>
                              {" "}
                              <path fill="currentColor" d={"M37.645,116.224c0-4.143-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h22.645\n C34.287,123.724,37.645,120.366,37.645,116.224z"}></path>
                              {" "}
                              <path fill="currentColor" d={"M224.947,108.724h-22.652c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h22.652c4.143,0,7.5-3.357,7.5-7.5\n S229.09,108.724,224.947,108.724z"}></path>
                              {" "}
                              <path fill="currentColor" d={"M50.052,60.655c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196c2.93-2.929,2.93-7.678,0.001-10.606\n L44.652,34.042c-2.93-2.93-7.679-2.929-10.606-0.001c-2.93,2.929-2.93,7.678-0.001,10.606L50.052,60.655z"}></path>
                              {" "}
                              <path fill="currentColor" d={"M182.395,171.782c-2.93-2.929-7.679-2.93-10.606-0.001c-2.93,2.929-2.93,7.678-0.001,10.607l16.007,16.008\n c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196c2.93-2.929,2.93-7.678,0.001-10.607L182.395,171.782z"}></path>
                              {" "}
                              <path fill="currentColor" d={"M116.22,48.7c-37.232,0-67.523,30.291-67.523,67.523s30.291,67.523,67.523,67.523s67.522-30.291,67.522-67.523\n S153.452,48.7,116.22,48.7z M116.22,168.747c-28.962,0-52.523-23.561-52.523-52.523S87.258,63.7,116.22,63.7\n c28.961,0,52.522,23.562,52.522,52.523S145.181,168.747,116.22,168.747z"}></path>
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mobile-qview">
                  <ul id="menu-mobile-quick-access-1" className="mobile-qview-inner">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1542">
                      <a href="/us">
                        <span>
                          U.S News
                        </span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1447">
                      <a href="/technology">
                        <span>
                          Technology
                        </span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1543">
                      <a href="/business">
                        <span>
                          Business
                        </span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1544">
                      <a href="/politics">
                        <span>
                          politics
                        </span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1545">
                      <a href="/world">
                        <span>
                          World News
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-1789" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1789">
                      <a href="/puertorico">
                        <span>
                          Puerto Rico
                        </span>
                      </a>
                    </li>
                    <li id="menu-item-1789" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1789">
                      <a href="/bancredito">
                        <span>
                          Bancredito
                        </span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1546">
                      <a href="/about">
                        <span>
                          About us
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mobile-collapse">
                <div className="collapse-holder">
                  <div className="collapse-inner">
                    <div className="mobile-search-form edge-padding">
                      <div className="header-search-form is-form-layout">
                        <span className="h5">
                          Search
                        </span>
                        <form method="get" action="https://www.journopulse.com/" className="rb-search-form" data-search="post" data-limit="0" data-follow="0" data-tax="category" data-dsource="0" data-ptype="">
                          <div className="search-form-inner">
                            <span className="search-icon">
                              <span className="search-icon-svg"></span>
                            </span>
                            <span className="search-text">
                              <input type="text" className="field" placeholder="Search Headlines, News..." defaultValue="" name="s" />
                            </span>
                            <span className="rb-search-submit">
                              <input type="submit" defaultValue="Search" />
                              <i className="rbi rbi-cright" aria-hidden="true"></i>
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                    <nav className="mobile-menu-wrap edge-padding">
                      <ul id="mobile-menu" className="mobile-menu">
                        <li id="menu-item-1832" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1832">
                          <a href="#">
                            <span></span>
                          </a>
                          <ul className="sub-menu">
                            <li id="menu-item-1833" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-1833">
                              <a href="/">
                                <span>
                                  Home{" "}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="menu-item-1547" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1547">
                          <a href="#">
                            <span>
                              Categories
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li id="menu-item-1548" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1548">
                              <a href="/us">
                                <span>
                                  U.S News
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-1549" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1549">
                              <a href="/technology">
                                <span>
                                  Technology
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-1550" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1550">
                              <a href="/business">
                                <span>
                                  Business
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-1551" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1551">
                              <a href="/politics">
                                <span>
                                  politics
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-1552" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1552">
                              <a href="/world">
                                <span>
                                  World
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-1789" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1789">
                              <a href="/puertorico">
                                <span>
                                  Puerto Rico
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-1789" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1789">
                              <a href="/bancredito">
                                <span>
                                  Bancredito
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-1553" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1553">
                              <a href="/about">
                                <span>
                                  About us
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li id="menu-item-1557" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1557">
                          <a href="/terms">
                            <span>
                              Terms and conditions
                            </span>
                          </a>
                          <ul className="sub-menu">
                            <li id="menu-item-1603" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1603">
                              <a href="/privacy">
                                <span>
                                  Privacy policy
                                </span>
                              </a>
                            </li>
                            <li id="menu-item-1604" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1604">
                              <a href="/contact">
                                <span>
                                  Contact us
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                    <div className="collapse-sections">
                      <div className="mobile-login">
                        <span className="mobile-login-title h6">
                          {" "}Have an existing account?{" "}
                        </span>
                        {" "}
                        <a href="#" className="login-toggle is-login is-btn" rel="nofollow">
                          Sign In
                        </a>
                      </div>
                      <div className="mobile-socials">
                        <span className="mobile-social-title h6">
                          Follow US
                        </span>
                        {" "}
                        <a className="social-link-facebook" aria-label="Facebook" data-title="Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://www.journopulse.com/" target="_blank" rel="noopener nofollow">
                          <img width="24" height="24" src="/img/icons/facebook.svg" alt="facebook-new" />
                        </a>
                        {" "}
                        <a className="social-link-twitter" aria-label="X" data-title="X" href="https://x.com/journopulse_" target="_blank" rel="noopener nofollow">
                          <img width="24" height="24" src="/img/icons/x.svg" alt="twitterx--v2" />
                        </a>
                        <a className="social-link-youtube" aria-label="YouTube" data-title="YouTube" href="#" target="_blank" rel="noopener nofollow">
                          <img width="24" height="24" src="/img/icons/youtube.svg" alt="youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
