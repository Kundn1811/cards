
import './App.css';
import Card from './Components/Card';
import Data from "./Data/data.json"


function App() {
  return (
    <div className="App" >
     <Card data={Data}/>
    </div>
  );
}

export default App;
