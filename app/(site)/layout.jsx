import Script from "next/script";
import SiteTail from "@/components/generated/SiteTail";
import "./site-inline.css";

export const metadata = {
  metadataBase: new URL("https://www.journopulse.com"),
  icons: { icon: "/img/Group8 (1).svg" },
};

const themeInit = `(function () {
  var ok = function () { try { localStorage.setItem('__rbStorageSet', 'x'); localStorage.removeItem('__rbStorageSet'); return true; } catch (e) { return false; } };
  var id = 'D_journopulse.io_news';
  var mode = ok() ? localStorage.getItem(id) || null : 'default';
  if (!mode) { mode = 'default'; ok() && localStorage.setItem(id, 'default'); }
  document.body.setAttribute('data-theme', mode === 'dark' ? 'dark' : 'default');
})();`;

const coreParams = `window.journopulseCoreParams = window.journopulseCoreParams || { ajaxurl: '', nonce: '', isLoggedIn: false };`;

export default function SiteLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/detail.css" />
        <link rel="stylesheet" href="/extras.css" />
        <link rel="stylesheet" href="/icons.css" />
        <link rel="stylesheet" href="/pillar.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInit + coreParams }} />
        {children}
        <SiteTail />
        <Script src="/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
