import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogoDesignInSangli from "./pages/LogoDesignInSangli";
import PackagingDesignInSangli from "./pages/PackagingDesignInSangli";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logo-design-in-sangli" element={<LogoDesignInSangli />} />
          <Route path="/packaging-design-in-sangli" element={<PackagingDesignInSangli />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio-graphic-designer-sangli" element={<Portfolio />} /> 
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;