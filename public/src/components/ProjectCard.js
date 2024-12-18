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
      <div>
        <img src={img} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <a target="_blank" href={url}>View Code on GitHub</a>
        </div>
      </div>
    </>
  );
}
