import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import CreateGamePage from "./pages/CreateGamePage.page";
import GamePage from "./pages/GamePage.page";

import "./styles/main.scss"

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>
        <Route path="/" element={<CreateGamePage />} />
        <Route path="/game/:type/:id" element={<GamePage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
