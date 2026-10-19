export default function Page() {
  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <a href="/">
            Home
          </a>
          {" "}
          <span>
            ›
          </span>
          {" "}
          <strong>
            Our Team
          </strong>
        </div>
      </div>
      <div className="main-wrapper">
        <main className="content-area">
          <div className="page-title-bar">
            <h1>
              Our Team
            </h1>
            <div className="meta">
              Last Updated:{" "}
              <strong>
                May 21, 2026
              </strong>
              {" "}| JournoPulse Editorial
            </div>
          </div>
          <section className="team-intro">
            <div className="team-left">
              <h1>
                Our Team
              </h1>
              <p>
                {" "}At JournoPulse, our journalists, editors, fact-checkers, and analysts collaborate across the globe to deliver accurate, fearless, and independent journalism that informs, empowers, and inspires readers.{" "}
              </p>
            </div>
            <div className="team-right">
              <span className="label">
                OUR MISSION
              </span>
              <p>
                {" "}We are an independent newsroom committed to truth, transparency, and accountability. Our mission is to deliver fact-based reporting, amplify diverse voices, and hold power to account through journalism that matters.{" "}
              </p>
            </div>
          </section>
          <div className="jp-leader-card">
            <div className="jp-leader-image">
              <img src="/img/illustrations/author-ryan-sillers.webp" alt="Ryan Sillers" width="100px" height="100px" style={{objectFit: "cover", borderRadius: "50%"}} />
            </div>
            <div className="jp-leader-content">
              <h3>
                Ryan Sillers
              </h3>
              <span className="jp-role" style={{fontSize: "12px"}}>
                {" "}SENIOR NEWS AUTHOR AT JOURNOPULSE{" "}
              </span>
              <p>
                {" "}Ryan Sillers covers breaking news, politics, business, and major global developments for JournoPulse. Known for clear, fact-driven reporting, he focuses on delivering timely news and meaningful context that helps readers understand the stories shaping the world today.{" "}
              </p>
              <a href="/author/ryan-sillers" className="jp-bio-link">
                {" "}View full bio{" "}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2"></path>
                  {" "}
                  <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </a>
            </div>
          </div>
          <section className="jp-staff">
            <div className="jp-heading">
              <span>
                JOURNOPULSE STAFF
              </span>
            </div>
            <div className="jp-intro">
              <p>
                {" "}Behind every story is a network of journalists, editors, researchers, and digital specialists working together to deliver accurate, independent, and impactful reporting.{" "}
              </p>
            </div>
            <div className="jp-departments">
              <div className="jp-box">
                <div className="jp-icon">
                  ✍️
                </div>
                <h3>
                  Editorial
                </h3>
                <p>
                  {" "}Our editors shape stories with accuracy, fairness, and a commitment to truth.{" "}
                </p>
              </div>
              <div className="jp-box">
                <div className="jp-icon">
                  ✓
                </div>
                <h3>
                  Fact Checking
                </h3>
                <p>
                  {" "}Every article is verified and reviewed before publication.{" "}
                </p>
              </div>
              <div className="jp-box">
                <div className="jp-icon">
                  📚
                </div>
                <h3>
                  Research
                </h3>
                <p>
                  {" "}Analysts provide context, data, and deeper insight behind every story.{" "}
                </p>
              </div>
              <div className="jp-box">
                <div className="jp-icon">
                  👥
                </div>
                <h3>
                  Audience &amp; Community
                </h3>
                <p>
                  {" "}We engage with readers and build meaningful conversations around news.{" "}
                </p>
              </div>
            </div>
          </section>
          <section className="jp-authors">
            <div className="jp-heading">
              <span>
                ALL AUTHORS
              </span>
            </div>
            <div className="jp-author-list">
              <a href="#" className="jp-author-link">
                Sarah Mitchell
              </a>
              {" "}
              <a href="#" className="jp-author-link">
                James Carter
              </a>
              {" "}
              <a href="#" className="jp-author-link">
                Emma Wilson
              </a>
              {" "}
              <a href="/author/ryan-sillers" className="jp-author-link">
                Ryan Sillers
              </a>
              {" "}
              <a href="#" className="jp-author-link">
                Olivia Parker
              </a>
            </div>
          </section>
          <div className="last-updated">
            {" "}🗓{" "}
            <span>
              <strong>
                Last Updated:
              </strong>
              {" "}May 21, 2026 — JournoPulse reserves the right to update these terms periodically.
            </span>
          </div>
        </main>
        <aside className="sidebar">
          <div className="widget">
            <div className="widget-title">
              Quick Links
            </div>
            <div className="widget-body">
              <ul className="quick-links">
                <li>
                  <a href="/terms">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/about">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget">
            <div className="widget-title">
              Categories
            </div>
            <div className="widget-body">
              <ul className="categories-list">
                <li>
                  <a href="/us">
                    U.S News
                  </a>
                  <span className="cat-count">
                    Latest
                  </span>
                </li>
                <li>
                  <a href="/technology">
                    Technology
                  </a>
                  <span className="cat-count">
                    Latest
                  </span>
                </li>
                <li>
                  <a href="/business">
                    Business
                  </a>
                  <span className="cat-count">
                    Latest
                  </span>
                </li>
                <li>
                  <a href="/politics">
                    Politics
                  </a>
                  <span className="cat-count">
                    Latest
                  </span>
                </li>
                <li>
                  <a href="/world">
                    World News
                  </a>
                  <span className="cat-count">
                    Latest
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget">
            <div className="widget-title">
              About JournoPulse
            </div>
            <div className="widget-body">
              <div className="about-widget">
                <p>
                  JournoPulse delivers the latest business, technology, and global news to a growing audience, providing reliable insights and stories that matter.
                </p>
                <div className="social-row">
                  <a href="#" title="Facebook">
                    <img src="/img/icons/facebook.svg" alt="Facebook" />
                  </a>
                  {" "}
                  <a href="https://x.com/journopulse_" title="Twitter / X">
                    <img src="/img/icons/x.svg" alt="X" />
                  </a>
                  {" "}
                  <a href="#" title="YouTube">
                    <img src="/img/icons/youtube.svg" alt="YouTube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
