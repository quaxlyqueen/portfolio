import Nav from './components/Nav';
import Splash from './components/Splash';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import FeaturedContent from './components/FeaturedContent';

export default function Home() {
  const projectCards = [
    //ProjectCard("img/one-ai.png", "One AI", "ASDF", "https://github.com/quaxlyqueen/one-ai"),
    <ProjectCard img="img/one-ai.png" title="One AI" description="ASDF" url="https://github.com/quaxlyqueen/one-ai"/>,
    <ProjectCard img="img/one-ai.png" title="One AI" description="ASDF" url="https://github.com/quaxlyqueen/one-ai"/>,
    <ProjectCard img="img/one-ai.png" title="One AI" description="ASDF" url="https://github.com/quaxlyqueen/one-ai"/>,
    <ProjectCard img="img/one-ai.png" title="One AI" description="ASDF" url="https://github.com/quaxlyqueen/one-ai"/>
  ];
  return (
    <>
      <Nav />
      <Splash primaryText="Hi, I'm Josh Ashton!" secondaryText="Junior full stack developer."/>
      <FeaturedContent content={projectCards} />
      <Footer />
    </>
  );
}
