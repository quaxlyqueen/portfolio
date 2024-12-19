/*
 * Create a ProjectCard.
 *
 * @param String frontend "The frontend framework/library used for the project. Used for sorting/filtering."
 * @param String backend "The backend framework/library used for the project. Used for sorting/filtering."
 * @param String id "Lowercase string representation of the project name."
 * @param String name "The name of the project."
 * @param String description "A description of the project."
 * @param String url "The URL for the repository of the project."
 * @param String img "Path to an image."
 * @param String imgCaption "Accessibile caption for the image."
 *
 * TODO: Add project keys.
 */
export default function ProjectCard( {frontend, backend, id, name, description, url, img, imgCaption} ) {
  return (
    <>
      <div className={`card ${frontend} ${backend}`}>
        <img className="card-img-top" src={img} alt={imgCaption}/>
        <div className="card-body">
          <h2 className="card-title dark-text">{name}</h2>
          <p className="dark-text">{description}</p>
          <a className = "btn btn-primary" target="_blank" href={url}>View Code on GitHub</a>
        </div>
      </div>
    </>
  );
}
