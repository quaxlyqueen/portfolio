import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

/*
 * The Projects page.
 */
export default function Projects() {
  /*
   * An array of project data to feed to the ProjectDisplay component.
     {
        frontend: "",
        backend: "",
        id: "",
        name: "",
        description: "",
        url: "",
        img: ""
     },
   */
  const data = [
     {
        frontend: "java",
        backend: "",
        id: "dnd",
        name: "D&D",
        description: "Dungeons and Dragons character builder app, developed in Java.",
        url: "https://github.com/quaxlyqueen/dnd",
        img: "/assets/img/dnd.png"
     },
     {
        frontend: "java",
        backend: "",
        id: "graph",
        name: "Graph Visualizer",
        description: "Interactive representation of a graph data structure, developed in Java.",
        url: "https://github.com/quaxlyqueen/2420-graph-visualizer",
        img: "/assets/img/graph.png"
     },
  ];

  let i = 0;
  return (
    <>
      <Navigation />
        <div className="project-grid">
          {data.map(item => (
            <ProjectCard frontend={item.frontend} backend={item.backend} id={item.id} name={item.name} description={item.description} url={item.url} img={item.img} />
          ))}
        </div>
      <Footer />
    </>
  );
}
