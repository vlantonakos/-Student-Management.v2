import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Add from './components/Add';
import Del from './components/Del';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<Add />} />
        <Route path="delete" element={<Del />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
