/*
 * Expects an array of Cards to display in a responsive grid.
 *
 * @param ProjectCard[] content "An array of ProjectCards or other Cards."
 * TODO: Need to implement dynamic grid layout.
 * TODO: Need to implement dynamic number of content, based on content size.
 */
export default function FeaturedContent( {content} ) {
  return (
    <>
      <div className="row">
        {content[0]}
        {content[1]}
      </div>
      <div className="row">
        {content[2]}
        {content[3]}
      </div>
    </>
  );
}
