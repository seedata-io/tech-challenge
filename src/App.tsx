import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainHeader } from "./components";

import Main from "./pages/Main";

import "./App.css";

function App() {
  return (
    <Router>
      <MainHeader header="Event Report" />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
