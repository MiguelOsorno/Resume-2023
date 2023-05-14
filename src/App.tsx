import './App.css';
import { About } from './components/about/About';
import { Cover } from './components/cover/Cover';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className='bg-white'>
      <Cover />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
