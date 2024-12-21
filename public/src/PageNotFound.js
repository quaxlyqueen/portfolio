import Navigation from './components/Navigation';
import Splash from './components/Splash';
import Footer from './components/Footer';

export default function Home( {projects} ) {
  return (
    <>
      <Navigation />
      <Splash primaryText="404" secondaryText="This is not the page you're looking for."/>
      <Footer />
    </>
  );
}
