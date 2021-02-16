import "./App.css";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage defaultValue={0} />;
    </div>
  )
}

export default App;
