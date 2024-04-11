import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import News from "./News";
import { useState } from "react";

function App() {
  const [page, setPage] = useState('home');

  function back(e) {
    e.preventDefault();
    setPage('home');
  }

  function pageSetter(page) {
    return (e) => {
      e.preventDefault();
      setPage(page);
    }
  }

  if (page == 'about') {
    return <About back={back}/>
  }
  else if (page == 'contact') {
    return <Contact back={back}/>
  }
  else if (page == 'news') {
    return <News back={back}/>
  }
  else {
    return <Home pageSetter={pageSetter}/>
  }
}

export default App;
