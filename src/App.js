import "./App.css";
import AboutUs from "./components/AboutUs";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div classNameName="App">
      <div className="wrapper">
        <header className="App-header">
          <NavBar />
        </header>
        <AboutUs />
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
