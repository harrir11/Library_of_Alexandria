import "./LibraryOfAlexandria.css";

// The whole game lives inside this component so it can be dropped into
// the portfolio as-is. All class names start with "loa-" so they won't
// clash with the portfolio's styles.
export default function LibraryOfAlexandria() {
  return (
    <div className="loa-library" role="region" aria-label="Library of Alexandria game">
      <h2 className="loa-title">Library of Alexandria</h2>
    </div>
  );
}
