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
import World from './components/Atividade02/World';
import Arena from './components/Atividade02/Arena';
import Hero from './components/Atividade02/Hero';
import Enemy from './components/Atividade02/Enemy';


/*const App = () =>
  <div className="App">
    <h1> a</h1>
    
      
        <Hero nome="Sicrano de Tal" />
        <Enemy nome="Fulano de Tal" />
  </div>
*/
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
}*/

export default App;