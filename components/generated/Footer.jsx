export default function Footer() {
  return (
    <>
      <footer style={{backgroundColor: "black"}}>
        <div className="footer-explore">
          <a className="footer-explore-btn" href="/">Explore the Blog</a>
        </div>
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-logo" style={{fontSize: "32px"}}>
              Journo
              <span style={{color: "red", fontFamily: "'Merriweather', serif"}}>
                Pulse
              </span>
            </div>
            <p>
              JournoPulse delivers the latest business, technology, and global news to a growing audience, providing reliable insights and stories that matter.
            </p>
          </div>
          <div className="footer-col">
            <h4 style={{textDecoration: "underline", margin: "2px"}}>
              Sections
            </h4>
            <ul>
              <li>
                <a href="/us">
                  U.S News
                </a>
              </li>
              <li>
                <a href="/technology">
                  Technology
                </a>
              </li>
              <li>
                <a href="/business">
                  Business
                </a>
              </li>
              <li>
                <a href="/politics">
                  Politics
                </a>
              </li>
              <li>
                <a href="/world">
                  World
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{textDecoration: "underline", margin: "2px"}}>
              Legal
            </h4>
            <ul>
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
          <div className="footer-col">
            <h4 style={{textDecoration: "underline", margin: "2px"}}>
              News room
            </h4>
            <ul>
              <li>
                <a href="/our-team">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/editorial-policy">
                  Editorial Policy
                </a>
              </li>
              <li>
                <a href="/corrections-policy">
                  Corrections Policy
                </a>
              </li>
              <li>
                <a href="/source-methodology">
                  Source Methodology
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{textDecoration: "underline", margin: "2px"}}>
              Standards
            </h4>
            <ul>
              <li>
                <a href="/ownership">
                  Ownership &amp; Funding
                </a>
              </li>
              <li>
                <a href="/advertising-policy">
                  Advertising Policy
                </a>
              </li>
              <li>
                <a href="/right-of-reply">
                  Right of Reply
                </a>
              </li>
              <li>
                <a href="/corrections-policy">
                  Corrections Policy
                </a>
              </li>
              <li>
                <a href="/legal">
                  Legal
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 style={{textDecoration: "underline", margin: "2px"}}>
              Follow Us
            </h4>
            <ul>
              <li>
                <a href="https://substack.com/@journopulse">
                  Substack
                </a>
              </li>
              <li>
                <a href="https://x.com/journopulse_">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://medium.com/@admin_30375">
                  Medium{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="enterly-news-diff-wrapper">
          <span className="enterly-news-diff-live">
            <span className="enterly-news-diff-dot"></span>
            {" "}LIVE{" "}
          </span>
          {" "}
          <span className="enterly-news-diff-all">
            ALL
          </span>
          <div className="enterly-news-diff-breaking">
            {" "}BREAKING NEWS UPDATES{" "}
          </div>
        </div>
        <div className="footer-bottom">
          {" "}© 2026 JournoPulse. Your Source for Business &amp; Technology News. All Rights Reserved. |{" "}
          <a href="#">
            Terms &amp; Conditions
          </a>
          {" "}|{" "}
          <a href="/privacy">
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  );
}
