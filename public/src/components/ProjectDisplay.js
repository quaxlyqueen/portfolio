/*
 * Create a clickable frame which expands to expose additional information on click.
 *
 * @param String id "Lowercase string representation of the project name."
 * @param String name "The name of the project."
 * @param String description "A description of the project."
 * @param String url "The URL for the repository of the project."
 * 
 * TODO: Need to implement onClick
 */
export default function ProjectDisplay( {frontend, backend, id, name, description, url} ) {
  return (
    <>
      <div className={`panel ${frontend} ${backend}`} id={id}>
        <h3 className="label">{name}</h3>
        <h4 className="label-text">{description}</h4>
        <button type="button" className="btn btn-primary"><a target="_blank" href={url}>View Code on GitHub</a></button>
      </div>
    </>
  );
}
