import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

/*
 * The Projects page.
 *
 * @param String[] projects "An array of attributes, frontend, backend, id, name, description, url, img, and imgCaption"
 */
export default function Projects( {projects} ) {
   const projectCards = projects.map((project) => {
      // Create a new ProjectCard object for each project in the 'projects' array
      return (
         <ProjectCard
         key={project.id} // Add a unique key for each ProjectCard
         frontend={project.frontend}
         backend={project.backend}
         id={project.id}
         name={project.name}
         description={project.description}
         url={project.url}
         img={project.img}
         />
      );
   });
  return (
    <>
      <Navigation />
        <div className="project-grid">
            {projectCards}
        </div>
      <Footer />
    </>
  );
}
