import Header from "./generated/Header";
import HomeHeader from "./generated/HomeHeader";
import Footer from "./generated/Footer";

export default function SiteShell({ home = false, topFooter = false, children }) {
  return (
    <div className="site-outer">
      {home ? <HomeHeader /> : <Header />}
      {children}
      {topFooter && (
        <aside className="rb-section fw-widget top-footer edge-padding">
          <div className="top-footer-inner"></div>
        </aside>
      )}
      <Footer />
    </div>
  );
}
