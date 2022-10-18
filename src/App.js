import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import ListProyect from "./components/work/ListProyect/ListProyect";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="center">
        <Main></Main>
        {/* <ListProyect id="work"></ListProyect> */}
      </div>
    </div>
  );
}

export default App;
