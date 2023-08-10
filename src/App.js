import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Container from "./components/container/Container";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <Container children={<Home />}></Container>
      <div className="center"></div>
    </div>
  );
}

export default App;
