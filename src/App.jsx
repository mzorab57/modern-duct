import { Route, Routes, useLocation } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProductsPage from "./pages/ProductsPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-1 ${isHome ? "" : "pt-24"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/manufacturing"
            element={<ServiceDetailPage serviceKey="manufacturing" />}
          />
          <Route
            path="/design"
            element={<ServiceDetailPage serviceKey="design" />}
          />
          <Route
            path="/export"
            element={<ServiceDetailPage serviceKey="export" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
