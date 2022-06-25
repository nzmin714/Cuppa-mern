import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Product from "./Product/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">CuppaT </Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
