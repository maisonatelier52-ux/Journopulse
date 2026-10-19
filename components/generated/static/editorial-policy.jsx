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
            About us
          </strong>
        </div>
      </div>
      <div className="main-wrapper">
        <main className="content-area">
          <div className="page-title-bar">
            <h1>
              Editorial Policy
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
            {" "}JournoPulse is an independent digital news platform committed to accurate, transparent, and responsible journalism. Our editorial standards are designed to ensure that readers can trust our reporting and understand how our news coverage is produced.{" "}
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                1
              </span>
              Editorial Independence
            </h2>
            <p>
              JournoPulse maintains full editorial independence. We do not accept payment, gifts, political influence, or outside pressure in exchange for favorable coverage.
            </p>
            <p>
              All editorial decisions are made exclusively by our journalists and editors. Advertising partnerships, sponsorships, affiliate relationships, and commercial agreements do not influence our newsroom's reporting, story selection, or editorial judgment.
            </p>
            <article>
              Our editorial principles include:
            </article>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                2
              </span>
              Accuracy and Verification
            </h2>
            <sub>
              Accuracy is the foundation of our journalism.
            </sub>
            <p>
              Before publication, our editorial team seeks to verify information using credible sources, official records, direct reporting, and reliable documentation whenever available.
            </p>
            <p>
              Our standards include:
            </p>
            <ul style={{padding: "20px"}}>
              <li>
                Verifying facts before publication.
              </li>
              <li>
                Clearly attributing information to sources.
              </li>
              <li>
                Providing context for complex or developing stories
              </li>
              <li>
                Updating articles when significant new information becomes available
              </li>
              <li>
                Correcting errors promptly and transparently
              </li>
            </ul>
            <p>
              When information cannot be independently confirmed, we clearly communicate the limitations of available reporting.
            </p>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                3
              </span>
              Disclosure and Labeling
            </h2>
            <p>
              We believe readers should understand when commercial relationships exist.
            </p>
            <p>
              Any sponsored content, advertising partnerships, affiliate links, or promotional material will be clearly identified and separated from independent editorial coverage.
            </p>
            <p>
              Commercial arrangements never determine newsroom coverage decisions.
            </p>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                4
              </span>
              Ethical Standards
            </h2>
            <p style={{fontWeight: "800"}}>
              No Undisclosed Conflicts of Interest.
            </p>
            <p>
              Journalists and contributors are expected to disclose any personal, professional, or financial relationships that may create a conflict of interest.
            </p>
            <p style={{fontWeight: "800"}}>
              No Hidden Sponsored Content
            </p>
            <p>
              Sponsored or paid content must be clearly labeled and distinguishable from independent reporting.
            </p>
            <p style={{fontWeight: "800"}}>
              Respect for Privacy
            </p>
            <p>
              JournoPulse recognizes the importance of balancing the public's right to know with individual privacy rights and personal dignity.
            </p>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                5
              </span>
              {" "}Reader Feedback and Accountability
            </h2>
            <p>
              Journalism is strengthened through transparency and public feedback.
            </p>
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
