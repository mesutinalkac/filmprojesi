import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Add from "./Components/Add/Add";
import Watched from "./Components/Watched/Watched";
import Watchlist from "./Components/Watchlist/Watchlist";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
