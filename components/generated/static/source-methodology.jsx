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
              Source Methodology
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
            {" "}At JournoPulse, we believe readers deserve transparency about how our reporting is produced. This methodology explains the standards we follow when gathering information, evaluating evidence, verifying claims, and presenting news.{" "}
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                1
              </span>
              Our Reporting Approach
            </h2>
            <p>
              JournoPulse prioritizes verifiable information over speculation, aggregation, or unsupported claims. Our reporting process begins with evidence that can be independently examined whenever possible.
            </p>
            <article>
              Sources may include:
            </article>
            <ul>
              <li>
                Official government and institutional records
              </li>
              <li>
                Court filings and legal documents
              </li>
              <li>
                Regulatory disclosures
              </li>
              <li>
                Public statements and press releases
              </li>
              <li>
                Original media, audio, and video materials
              </li>
              <li>
                Public datasets and research publications
              </li>
            </ul>
            <br />
            <p>
              When verification is incomplete, we narrow our language to accurately reflect what is known. We do not present uncertain information as established fact.
            </p>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                2
              </span>
              Source Hierarchy and Verification Standards
            </h2>
            <sub>
              JournoPulse gives greater weight to primary sources and firsthand reporting than to summaries, commentary, or repeated claims.
            </sub>
            <p>
              Our verification principles include:
            </p>
            <ul style={{padding: "20px"}}>
              <li>
                Primary documents and firsthand sources are preferred whenever available.
              </li>
              <li>
                Secondary reporting may provide context but should not be treated as confirmed fact without independent verification.
              </li>
              <li>
                Claims made by public officials, corporations, organizations, political campaigns, or public figures are subject to verification and contextual review.
              </li>
              <li>
                Important figures, dates, timelines, and legal details should be checked against original records whenever feasible.
              </li>
              <li>
                The prominence of a source does not replace the need for verification.
              </li>
            </ul>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                3
              </span>
              Anonymous Sources and Background Information
            </h2>
            <p>
              When anonymity is granted, our editors seek to understand the source's identity, access to the information, motivations, and reliability.
            </p>
            <p>
              Whenever possible, we provide readers with meaningful context about why anonymity was necessary without compromising the source's safety.
            </p>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                4
              </span>
              Documents, Media, and Data
            </h2>
            <p style={{fontWeight: "800"}}>
              Documents, screenshots, audio recordings, videos, images, and datasets require careful review.
            </p>
            <ul>
              <sub>
                JournoPulse aims to evaluate:
              </sub>
              <li>
                Authenticity and provenance
              </li>
              <li>
                Timing and relevance
              </li>
              <li>
                Context surrounding excerpts or clips
              </li>
              <li>
                Whether selective presentation may create a misleading impression
              </li>
            </ul>
            <p>
              The existence of a document does not automatically prove every conclusion that may be drawn from it. Our reporting seeks to distinguish between what evidence directly shows and where interpretation begins.
            </p>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                5
              </span>
              {" "}Attribution, Citations, and Source Notes
            </h2>
            <p>
              Clear attribution helps readers understand the basis for our reporting.
            </p>
            <p>
              Our goal is to make sourcing visible and understandable rather than obscuring how information was obtained. For finance, legal, policy, business, and institutional reporting, additional source documentation may be provided when it strengthens transparency and reader understanding.
            </p>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                6
              </span>
              {" "}Handling Uncertainty and Evolving Information
            </h2>
            <p>
              Accuracy requires acknowledging uncertainty when it exists.
            </p>
            <sub>
              JournoPulse strives to:
            </sub>
            <ul>
              <li>
                Avoid presenting unresolved claims as settled facts.
              </li>
              <li>
                Distinguish clearly between reporting, analysis, and opinion.
              </li>
              <li>
                Update articles when new evidence becomes available.
              </li>
              <li>
                Revise language when public records change or better sourcing emerges.
              </li>
              <li>
                Clearly identify disputed, contested, or incomplete information.
              </li>
            </ul>
            <p>
              We do not exaggerate certainty for headlines, traffic, or engagement.
            </p>
          </div>
          <div className="terms-section">
            <h2>
              <span className="num">
                7
              </span>
              Corrections and Updates
            </h2>
            <p>
              When significant factual errors are identified, JournoPulse will correct them promptly and transparently.
            </p>
            <p>
              Corrections, clarifications, and updates may be added to articles when necessary to ensure readers have access to the most accurate information available.
            </p>
          </div>
          <div className="contact-box">
            {" "}📧{" "}
            <a href="/contact">
              Contact Page
            </a>
            {" "}| 📧{" "}
            <a href="mailto:editorial@journopulse.com">
              editorial@journopulse.com
            </a>
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
