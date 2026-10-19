export default function StaticTop() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>
            Your Source for Business &amp; Technology News
          </span>
          <div className="topbar-social">
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
      <header>
        <div className="header-inner">
          <a href="/" className="logo">
            Journo
            <span>
              Pulse
            </span>
          </a>
        </div>
      </header>
      <nav>
        <div className="nav-inner">
          <a href="/">
            Home
          </a>
          {" "}
          <a href="/us">
            U.S News
          </a>
          {" "}
          <a href="/technology">
            Technology
          </a>
          {" "}
          <a href="/business">
            Business
          </a>
          {" "}
          <a href="/politics">
            Politics
          </a>
          {" "}
          <a href="/world">
            World
          </a>
          {" "}
          <a href="/puertorico">
            puerto-rico
          </a>
          {" "}
          <a href="/bancredito">
            Bancredito
          </a>
          {" "}
          <a href="/about">
            About Us
          </a>
        </div>
      </nav>
    </>
  );
}
