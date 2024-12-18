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
      <div>
        <h1>{primaryText}</h1>
        <h2>{secondaryText}</h2>
      </div>
    </>
  );
}
