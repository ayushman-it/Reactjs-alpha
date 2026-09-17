import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./screens/About";
import Product from "./screens/Product";
import Contact from "./screens/Contact";


function App() {
  return (
    <BrowserRouter>
        <Navigation />
        {/* Route Area */}
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App;