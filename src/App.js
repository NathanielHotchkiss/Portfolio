import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import NotFound from "./components/NotFound";

import { ThemeProvider } from "./utils/ThemeContext";
import Background from "./utils/Background";
import Toggle from "./components/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider>
      <Background>
        <Router>
          <Toggle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </Background>
    </ThemeProvider>
  );
}
