import StaticTop from "./generated/static/StaticTop";
import StaticFooter from "./generated/static/StaticFooter";

export default function StaticShell({ children }) {
  return (
    <>
      <StaticTop />
      {children}
      <StaticFooter />
    </>
  );
}
