import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import "./App.css";

import Home from "./components/Atividade02/Home";
import About from "./components/Atividade02/About";

import CreateStudent from "./components/Atividade02/students/CreateStudent";
import ListStudent from "./components/Atividade02/students/ListStudent";
import EditStudent from "./components/Atividade02/students/EditStudent";
import CreateProfessor from "./components/Atividade02/professor/CreateProfessor";
import ListProfessor from "./components/Atividade02/professor/ListProfessor";
import EditProfessor from "./components/Atividade02/professor/EditProfessor";

//import Page1 from "./components/Atividade02/Page1";
//import Page2 from "./components/Atividade02/Page2";

/*
function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Student
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="navitem">
                  <Link to="/createStudent" className="nav-link">Create Student</Link>
                </li>
                <li className="navitem">
                  <Link to="/listStudent" className="nav-link">List Student</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
      </Routes>
    </div>

  );
}

export default App;
*/

function App() {
  function studentDropDown() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle" href="/#"  id="navbarDropdownMenuLink"  role="button"  data-bs-toggle="dropdown" aria-expanded="false"
        >
          Student
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="dropdown-item">
            <Link to="/createStudent" className="nav-link">
              Create Student
            </Link>
          </li>
          <li className="dropdown-item">
            <Link to="/listStudent" className="nav-link">
              List Student
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  function professorDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle" href="/#"  id="navbarDropdownMenuLink"  role="button"  data-bs-toggle="dropdown"  aria-expanded="false"
        >
          Professor
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li> <a className="dropdown-item" href="/#">
            <Link to="/createProfessor" className="nav-link">
              Create Professor
            </Link>
            </a></li>
          <li> <a className="dropdown-item" href="/#"> 
            <Link to="/listProfessor" className="nav-link">
              List Professor
            </Link>
          </a> </li>
        </ul>
      </li>
    );
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li> <a className="dropdown-item" href = "/#">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </a></li>
            <li> <a className="dropdown-item" href="/#">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </a></li>
            {studentDropDown()}
            {professorDropDown()}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;



/*
function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{paddingLeft:10}}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navitem">
              <Link to="/createStudent" className="nav-link">Create Student</Link>
            </li>
            <li className="navitem">
              <Link to="/listStudent" className="nav-link">List Student</Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
      </Routes>
    </div>

  );
}

export default App;









*/




/*
import './App.css';
//import Usuario from './components/Usuario';
//import HelloWorld from './components/HelloWorld';
//import Welcome from './components/Welcome';
// import Questao01 from './components/Atividade01/Questao01';
//import Questao02 from './components/Atividade01/Questao02';
//import Questao03 from './components/Atividade01/Questao03';
//import Questao04 from './components/Atividade01/Questao04';
//import Casa from './components/Got/Casa';
//import Personagem from './components/Got/Personagem';
import World from './components/Atividade01/World';
import Arena from './components/Atividade01/Arena';
import Hero from './components/Atividade01/Hero';
import Enemy from './components/Atividade01/Enemy';


/*const App = () =>
  <div className="App">
    <h1> a</h1>
    
      
        <Hero nome="Sicrano de Tal" />
        <Enemy nome="Fulano de Tal" />
  </div>

const App = () =>
  <div className="App">
    <World>
      <Arena arena="Final Millenium Tower">
        <Hero nome="Kiryu" />
        <Enemy nome="NIshikiyama" />
      </Arena>
      <Arena arena="Jujutsu High">
        <Hero nome="Gojo Satoru" />
        <Enemy nome="Fushiguro Toji" />
      </Arena>
      <Arena arena="Cidade Viking ">
        <Hero nome="Thorfinn" />
        <Enemy nome="Askeladd" />
      </Arena>
    </World>
  </div>





/*const App = () =>
  <div className="App">
    <Casa casa="Targeryan" localizacao="Winterfell">
      <Personagem nome="Arya"/>
      <Personagem nome="Robert"/>
      <Personagem nome="Sansa"/>
      <Personagem nome="John"/>
      <Personagem nome="Ned"/>
    </Casa>
  </div>
*/

/*function App() {
  return (
    <div className = "App"> 
    <Questao04/>
    </div>
  )
}
*/
/*function App() {
  return (
    <div className = "App"> 
    <Questao03/>
    </div>
  )
}
*/
/*function App() {
  return (
    <div className = "App"> 
    <Questao02/>
    </div>
  )
}*/

/*
function App() {
  return (
    <div className = "App"> 
    <Questao01/>
    </div>
  )
}
*/
/*function App() {
  return (
    <div className="App">
      <Usuario />
      <HelloWorld />
      <Welcome />
    </div>
  );
}
*/
/*function App() {
  return (
    <div className="App">
      <MeusDados />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <h2>Jefferson de Carvalho Silva</h2>
      <HelloWorld />
    </div>
  );
}

export default App;
*/