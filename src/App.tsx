import { Routes, Route } from "react-router-dom"
import { render } from 'react-dom';
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NotFound from "./NotFound"
import ContainerCards from "./ContainerCards";
import SearchBar from "./SearchBar";
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="notFound" element={ <NotFound/> } />
      </Routes>

    </div>
  )
}

render(<Home />, document.getElementById('root'));


export default App


