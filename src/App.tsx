import './App.css';
import { About } from './components/about/About';
import { Cover } from './components/cover/Cover';
import { Experience } from './components/experience/Experience';

function App() {
  return (
    <div className='bg-white'>
      <Cover />
      <About />
      <Experience />
    </div>
  );
}

export default App;
