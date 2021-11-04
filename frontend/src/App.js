import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import CreateGamePage from "./pages/CreateGamePage.page";

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>
        <Route path="/" element={<CreateGamePage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
