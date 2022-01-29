import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/index';
import Map from './pages/Map/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
