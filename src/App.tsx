import {lazy, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Personal";
import Company from "./pages/Company";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import FaqsPage from "./pages/Faq";
import Business from "./pages/products/Business";
import Contact from "./pages/Contact";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/personal" element={<Portfolio />} />
      <Route path="/business" element={<Business />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/company" element={<Company />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/security" element={<Security />} />
      <Route path="/faq" element={<FaqsPage />} />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}
export default App;
