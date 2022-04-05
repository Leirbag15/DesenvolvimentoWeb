import './App.css';
//import Usuario from './components/Usuario';
//import HelloWorld from './components/HelloWorld';
//import Welcome from './components/Welcome';
// import Questao01 from './components/Atividade01/Questao01';
//import Questao02 from './components/Atividade01/Questao02';
//import Questao03 from './components/Atividade01/Questao03';
//import Questao04 from './components/Atividade01/Questao04';
import Casa from './components/Got/Casa';
import Personagem from './components/Got/Personagem';
const App = () =>
  <div className="App">
    <Casa casa="Targeryan" localizacao="Winterfell">
      <Personagem nome="Arya"/>
      <Personagem nome="Robert"/>
      <Personagem nome="Sansa"/>
      <Personagem nome="John"/>
      <Personagem nome="Ned"/>
    </Casa>
  </div>


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