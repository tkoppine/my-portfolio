import Navbar from "../components/Front Page/Navbar";
import Hero from "../components/Front Page/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Front Page/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero section with seamless background - no padding top */}
      <Box
        id="home"
        sx={{
          scrollMarginTop: { xs: "80px", md: "90px" },
        }}
      >
        <Hero />
      </Box>
      <Box
        id="skills"
        sx={{
          scrollMarginTop: { xs: "80px", md: "90px" },
        }}
      >
        <About />
      </Box>
      <Box
        id="experience"
        sx={{
          scrollMarginTop: { xs: "80px", md: "90px" },
        }}
      >
        <Experience />
      </Box>
      <Box
        id="education"
        sx={{
          scrollMarginTop: { xs: "80px", md: "90px" },
        }}
      >
        <Education />
      </Box>
      <Box
        id="projects"
        sx={{
          scrollMarginTop: { xs: "80px", md: "90px" },
        }}
      >
        <Projects />
      </Box>
      <Box
        id="contact"
        sx={{
          scrollMarginTop: { xs: "80px", md: "90px" },
        }}
      >
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
