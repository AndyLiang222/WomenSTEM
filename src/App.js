import Main from './Main.js'
import Home from './Home.js'
import './App.css';
import React,{useState} from "react"
import Components from './Components.js';
const {Background} = Components
function App() {
  const[start, setStart] = useState(false)
  function startGame(){
    setStart(true);
    return;
  }
  return (
    <div className="App">
      <Background className = "Background">
        {!start && <Home props = {{onClick: startGame}}></Home>}
        {start && <Main></Main>}
      </Background>
    </div>
  );
}

export default App;
