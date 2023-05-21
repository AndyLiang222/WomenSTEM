import Main from './Main.js'
import Home from './Home.js'
import './App.css';
import {useState} from "react"

function App() {
  const[start, setStart] = useState(false)
  function startGame(){
    setStart(true);
    return;
  }
  return (
    <div className="App">
      <div className = "Background">
        {!start && <Home props = {{onClick: startGame}}></Home>}
        {start && <Main></Main>}
      </div>
    </div>
  );
}

export default App;
