import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Blogs from "./pages/Blogs";
import BlogSubtopic from "./pages/BlogSubtopic";
import Proposal from "./pages/Proposal";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import ServiceDetails from "./pages/ServiceDetails";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  return (
    <HelmetProvider>
      <ThemeProvider>
        {/*  Hide navbar when admin logged in */}
        {!isAdminLoggedIn && <Navigation />}

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/get-proposal" element={<Proposal />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:subtopic" element={<BlogSubtopic />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />

            {/*  Pass state to Admin */}
            <Route
              path="/admin"
              element={<Admin setIsAdminLoggedIn={setIsAdminLoggedIn} />}
            />
          </Routes>
        </div>

        {/*  Hide footer also when admin logged in */}
        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
