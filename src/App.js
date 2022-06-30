import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <header class="App-header">
          <nav class="navbar">
            <div class="brand">
              <h2>
                Ambrosia and <span>Butter</span>
              </h2>
            </div>
            <ul class="menu">
              <li>
                <a class="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Buy some!</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
