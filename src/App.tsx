import { useEffect, useRef, useState } from 'react';
import './App.css';
import { About } from './components/about/About';
import { Cover } from './components/cover/Cover';
import { Experience } from './components/experience/Experience';
import { Navigation } from './components/navigation/Navigation';
import { Skills } from './components/skills/Skills';

function App() {

  const cover = useRef(null)
  const [coverIsIntersecting, setConverIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, _) => {
      const entry = entries[0];
      setConverIsIntersecting(entry.isIntersecting)
    });
    if(cover.current){
      observer.observe(cover.current)
    }
  }, [cover.current])

  return (
    <div className='bg-white'>
      <Navigation coverIsIntersecting={coverIsIntersecting} />
      <Cover coverRef={cover}/>
      <About />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
