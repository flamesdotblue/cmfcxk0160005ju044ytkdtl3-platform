import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Hero />
      <Features />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
