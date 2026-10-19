export const metadata = {
  metadataBase: new URL("https://www.journopulse.com"),
  icons: { icon: "/img/Group8 (1).svg" },
};

export default function StaticLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
