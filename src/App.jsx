import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogoDesignInSangli from "./pages/LogoDesignInSangli";
import PackagingDesignInSangli from "./pages/PackagingDesignInSangli";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo-design-in-sangli" element={<LogoDesignInSangli />} />
        <Route path="/packaging-design-in-sangli" element={<PackagingDesignInSangli />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio-graphic-designer-sangli" element={<Portfolio />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;