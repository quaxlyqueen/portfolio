import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProjectDisplay from './components/ProjectDisplay';

/*
 * The Projects page.
 */
export default function Projects() {
  /*
   * An array of project data to feed to the ProjectDisplay component.
   */
  const data = [
    { 
      frontend: "flutter",
      backend: "go",
      id: "one-ai",
      name: 'One AI',
      description: "TODO",
      url: "https://github.com/quaxlyqueen/one-ai"
    },
  ];

  return (
    <>
      <Navigation />
        <div>
          {data.map(item => (
            <ProjectDisplay frontend={item.frontend} backend={item.backend} id={item.id} name={item.name} description={item.description} url={item.url} />
          ))}
        </div>
      <Footer />
    </>
  );
}
