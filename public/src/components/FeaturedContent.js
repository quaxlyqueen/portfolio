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
        <div className="col">
          {content[0]}
        </div>
        <div className="col">
          {content[1]}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {content[2]}
        </div>
        <div className="col">
          {content[3]}
        </div>
      </div>
    </>
  );
}
