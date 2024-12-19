import Navigation from './components/Navigation';
import Splash from './components/Splash';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import FeaturedContent from './components/FeaturedContent';

export default function Home() {
  const projectCards = [
    <ProjectCard img="./assets/img/dnd.png" name="D&D" description="Dungeons and Dragons character builder app, developed in Java." url="https://github.com/quaxlyqueen/dnd"/>,
    <ProjectCard img="./assets/img/graph.png" name="Graph Visualizer" description="Interactive representation of a graph data structure, developed in Java." url="https://github.com/quaxlyqueen/2420-graph-visualizer"/>,
  ];
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
