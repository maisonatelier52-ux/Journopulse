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
            Contact Us
          </strong>
        </div>
      </div>
      <div className="main-wrapper">
        <main className="content-area">
          <div className="page-title-bar">
            <h1>
              Get in Touch with JournoPulse
            </h1>
            <div className="meta">
              Last Updated:{" "}
              <strong>
                May 21, 2026
              </strong>
              {" "}| JournoPulse Editorial
            </div>
          </div>
          <div className="intro-box">
            {" "}JournoPulse is an independent digital news platform committed to accurate, timely, and transparent journalism. We welcome news tips, corrections, feedback, and communication from readers, journalists, organizations, and individuals responding to our coverage.{" "}
          </div>
          <div className="contact-wrapper">
            <div className="section-title">
              <h1>
                Get in Touch with JournoPulse
              </h1>
              <p>
                {" "}JournoPulse is an independent digital newsroom dedicated to delivering trustworthy reporting. We welcome news tips, corrections, editorial feedback, and inquiries from readers, journalists, and organizations.{" "}
              </p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-header">
                  <i className="fa-regular fa-envelope contact-icon"></i>
                  <h2 className="contact-title">
                    Editorial &amp; General Contact
                  </h2>
                </div>
                <p className="contact-desc">
                  {" "}Questions about our reporting, coverage ideas, or editorial matters.{" "}
                </p>
                <a href="mailto:editorial@journopulse.com" className="contact-email">
                  {" "}editorial@journopulse.com{" "}
                </a>
              </div>
              <div className="contact-card">
                <div className="contact-header">
                  <i className="fa-regular fa-paper-plane contact-icon"></i>
                  <h2 className="contact-title">
                    Confidential News Tips
                  </h2>
                </div>
                <p className="contact-desc">
                  {" "}Share information that you believe should be investigated or reported.{" "}
                </p>
                <a href="mailto:tips@journopulse.com" className="contact-email">
                  {" "}tips@journopulse.com{" "}
                </a>
              </div>
              <div className="contact-card">
                <div className="contact-header">
                  <i className="fa-regular fa-circle-check contact-icon"></i>
                  <h2 className="contact-title">
                    Corrections
                  </h2>
                </div>
                <p className="contact-desc">
                  {" "}If you believe we made an error, please notify us so we can correct it promptly.{" "}
                </p>
                <a href="mailto:corrections@journopulse.com" className="contact-email">
                  {" "}corrections@journopulse.com{" "}
                </a>
              </div>
              <div className="contact-card">
                <div className="contact-header">
                  <i className="fa-solid fa-users contact-icon"></i>
                  <h2 className="contact-title">
                    Media &amp; Press Inquiries
                  </h2>
                </div>
                <p className="contact-desc">
                  {" "}Journalists, researchers, or organizations seeking collaboration.{" "}
                </p>
                <a href="mailto:press@journopulse.com" className="contact-email">
                  {" "}press@journopulse.com{" "}
                </a>
              </div>
              <div className="contact-card">
                <div className="contact-header">
                  <i className="fa-solid fa-scale-balanced contact-icon"></i>
                  <h2 className="contact-title">
                    Rights &amp; Permissions
                  </h2>
                </div>
                <p className="contact-desc">
                  {" "}Permissions, copyright requests, licensing inquiries, and legal notices.{" "}
                </p>
                <a href="mailto:editorial@journopulse.com" className="contact-email">
                  {" "}editorial@journopulse.com{" "}
                </a>
              </div>
              <div className="contact-card" style={{border: "none"}}>
                <p className="contact-desc">
                  {" "}Follow JournoPulse for breaking news, analysis, and updates.{" "}
                </p>
                <a href="https://x.com/journopulse_" target="_blank" className="contact-email">
                  {" "}Follow on X (Twitter){" "}
                </a>
              </div>
            </div>
          </div>
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
