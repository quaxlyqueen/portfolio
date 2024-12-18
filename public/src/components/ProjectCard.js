/*
 * Create a ProjectCard.
 *
 * @param String img "Path to an image."
 * @param String title "Title of the card."
 * @param String description "A short description for the card."
 * @param String url "URL to a project."
 *
 * TODO: Need to add classes and styling.
 */
export default function ProjectCard( {img, title, description, url} ) {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={img} alt="TODO: Image caption."/>
        <div className="card-body">
          <h2 className="card-title dark-text">{title}</h2>
          <p className="dark-text">{description}</p>
          <a className = "btn btn-primary" target="_blank" href={url}>View Code on GitHub</a>
        </div>
      </div>
    </>
  );
}
