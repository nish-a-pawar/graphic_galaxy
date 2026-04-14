import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogoDesignInSangli from "./pages/LogoDesignInSangli";
import PackagingDesignInSangli from "./pages/PackagingDesignInSangli";
import SocialMediaDesignInSangli from "./pages/SocialMediaDesignInSangli";
import BrochureDesignInSangli from "./pages/BrochureDesignInSangli";
import FlyerDesignInSangli from "./pages/FlyerDesignInSangli";
import SignageBoardDesignInSangli from "./pages/SignageBoardDesignInSangli";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog.jsx";
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
          {/* <Route path="/invitation-design-in-sangli" element={<InvitationDesignInSangli />} /> */}
          <Route path="/packaging-design-in-sangli" element={<PackagingDesignInSangli />} />
          <Route path="/social-media-design-sangli" element={<SocialMediaDesignInSangli />} />
          <Route path="/brochure-design-sangli" element={<BrochureDesignInSangli />} />
          <Route path="/flyer-design-sangli" element={<FlyerDesignInSangli />} />
          <Route path="/signage-design-sangli" element={<SignageBoardDesignInSangli />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio-graphic-designer-sangli" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
