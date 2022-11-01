import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="center">
        <Main></Main>
        <Work></Work>
      </div>
    </div>
  );
}

export default App;
