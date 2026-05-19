import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProductsPage from "./pages/ProductsPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar />
      <main className={isHome ? "" : "pt-24"}>
        <Routes>
          <Route path="/" element={<Home />} />
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
    </>
  );
}

export default App;
