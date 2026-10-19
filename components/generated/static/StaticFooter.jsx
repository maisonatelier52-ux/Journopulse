export default function StaticFooter() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-logo">
              Journo
              <span>
                Pulse
              </span>
            </div>
            <p>
              JournoPulse delivers the latest business, technology, and global news to a growing audience, providing reliable insights and stories that matter.
            </p>
          </div>
          <div className="footer-col">
            <h4>
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
            <h4>
              Legal
            </h4>
            <ul>
              <li>
                <a href="#">
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
            <h4>
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
            <h4>
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
            <h4>
              Follow Us
            </h4>
            <ul>
              <li>
                <a href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/journopulse_">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#">
                  YouTube
                </a>
              </li>
            </ul>
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
