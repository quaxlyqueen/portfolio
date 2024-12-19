import Navigation from './components/Navigation';
import Splash from './components/Splash';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import FeaturedContent from './components/FeaturedContent';

export default function Home( {projects} ) {
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
      <Splash primaryText="Hi, I'm Josh Ashton!" secondaryText="Junior full stack developer."/>
      <div className="row custom-container cards">
        <h3 className="light-text">Featured Projects</h3>
        <FeaturedContent content={projectCards} />
      </div>
      <Footer />
    </>
  );
}
