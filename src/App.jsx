import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

const Home = lazy(() => import("./pages/Home"));
const LogoDesignInSangli = lazy(() => import("./pages/LogoDesignInSangli"));
const PackagingDesignInSangli = lazy(() => import("./pages/PackagingDesignInSangli"));
const SocialMediaDesignInSangli = lazy(() => import("./pages/SocialMediaDesignInSangli"));
const BrochureDesignInSangli = lazy(() => import("./pages/BrochureDesignInSangli"));
const FlyerDesignInSangli = lazy(() => import("./pages/FlyerDesignInSangli"));
const InvitationDesignInSangli = lazy(() => import("./pages/InvitationDesignInSangli"));
const SignageBoardDesignInSangli = lazy(() => import("./pages/SignageBoardDesignInSangli"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const BookletMagazineDesignInSangli = lazy(() => import("./pages/BookletMagazineDesignInSangli"));
const BlogListing = lazy(() => import("./pages/BlogListing"));
const BlogPost = lazy(() => import("./pages/BlogPost"));


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#0B0F14]">
    <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <CustomCursor />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logo-design-in-sangli" element={<LogoDesignInSangli />} />
            <Route path="/invitation-design-sangli" element={<InvitationDesignInSangli />} />
            <Route path="/packaging-design-in-sangli" element={<PackagingDesignInSangli />} />
            <Route path="/social-media-design-sangli" element={<SocialMediaDesignInSangli />} />
            <Route path="/brochure-design-sangli" element={<BrochureDesignInSangli />} />
            <Route path="/flyer-design-sangli" element={<FlyerDesignInSangli />} />
            <Route path="/signage-design-sangli" element={<SignageBoardDesignInSangli />} />
            <Route path="/booklet-magazine-design-sangli" element={<BookletMagazineDesignInSangli />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio-graphic-designer-sangli" element={<Portfolio />} />
            
         
          </Routes>
        </Suspense>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
