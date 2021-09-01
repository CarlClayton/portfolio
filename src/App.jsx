import { useState } from 'react';
import { Topbar, Intro, Menu, Portfolio, Works, Testimonials, Contact } from './components';
import { menu, testimonials, works } from './data';
import './assets/scss/main.scss';

function App() {
  const [ menuOpen, setMenuOpen ] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu data={menu} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio />
        <Works data={works}/>
        <Testimonials data={testimonials}/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
