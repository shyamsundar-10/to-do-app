import "./App.css";
import NavBar from "./components/NavBar";
import { TodoWrapperLocalStorage } from "./components/TodoWrapperLocalStorage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TodoWrapperLocalStorage />
    </div>
  );
}
export default App;
