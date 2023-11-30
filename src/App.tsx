import { useState, useEffect } from 'react';
import NavBar from "./navbar.tsx";
import Home from './Home.tsx';
import About from './About.tsx';
import Contacts from './Contacts.tsx';
import imagePath from "./assets/nav-icon.jpg";
import { Loading } from './Loading.tsx';
import './App.css';
import Projects from './Projects.tsx';

function App() {
  const NavItems = ["Home","About", "Projects", "Contacts"];
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 3000);
  }, []);
  if(loadingPage){
    return <Loading/>
  }
  return (
    <div className='wrapper'>
      <NavBar 
      brandName="Michael Hoang" 
      imageSrcPath={imagePath} 
      navItems={NavItems}/>
      <Home />
      <About />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App
