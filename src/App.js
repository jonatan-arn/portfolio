import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Container from "./components/container/Container";
import Home from "./components/home/Home";
import About from "./components/about/About";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <Container children={<Home />}></Container>
      <Container children={<About />}></Container>
      <div className="center"></div>
    </div>
  );
}

export default App;
