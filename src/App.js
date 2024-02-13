import Home from "./Components/Home";
import Products from "./Components/Products";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
  );
}

export default App;
