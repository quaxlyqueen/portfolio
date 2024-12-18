/*
 * Create a splash screen.
 *
 * @param String primaryText "The headline (h1) text."
 * @param String secondaryText "The byline (h2) text."
 *
 * TODO: Need to add classes and styling.
 */
export default function Splash( { primaryText, secondaryText }) {
  return (
    <>
      <div className="custom-container" id="splash">
        <h1 className="light-text">{primaryText}</h1>
        <h2 className="light-text">{secondaryText}</h2>
      </div>
    </>
  );
}
