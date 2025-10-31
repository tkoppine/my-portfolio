"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  useTheme,
  IconButton,
  Fade,
} from "@mui/material";
import {
  Work,
  CalendarToday,
  LocationOn,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Experience() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const experiences = [
    {
      role: "Software Engineer",
      company: "Sowfin",
      logo: "/my-portfolio/sowfin_logo.jpg", // Sowfin logo
      location: "Remote, USA",
      duration: "June 2025 – September 2025",
      description: [
        "Delivered a Deal Engine reporting module with React and AWS, enabling 5000 clients to create customized reports and improving analysis speed by 25%",
        "Built scalable microservices using Python FastAPI and PostgreSQL on AWS EC2 with Docker, ensuring data consistency and persistent report formatting across sessions",
        "Developed retrieval-augmented financial pipelines with SageMaker and Lambda, integrating EDGAR filings into FAISS and Qdrant for faster insights delivery",
        "Orchestrated multi-agent LLM frameworks with GPT, Claude, and Sonnet, automating financial data enrichment and cutting insight generation time by 25%",
      ],
      tech: [
        "React",
        "AWS",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "SageMaker",
        "Lambda",
        "FAISS",
        "Qdrant",
        "GPT",
        "Claude",
      ],
    },
    {
      role: "Graduate Assistant / Software Engineer",
      company: "Arizona State University",
      logo: "/my-portfolio/asu_logo.jpg", // ASU logo
      location: "Tempe, Arizona, USA",
      duration: "August 2024 – May 2025",
      description: [
        "Reduced API response time from 5s to under 1s using Spring Boot and AWS Lambda, improving student sign-up experience during peak traffic",
        "Designed distributed systems with query optimization and EC2 scaling, supporting 160 requests per second at 99.9% uptime for academic applications",
        "Implemented GitHub Actions CI/CD pipelines with JUnit and Mockito achieving 95% coverage, accelerating stable production releases",
        "Collaborated with DevOps, QA, and PM teams in Agile sprints to enhance backend reliability and deliver scalable, high-quality student services",
      ],
      tech: [
        "Spring Boot",
        "AWS Lambda",
        "EC2",
        "GitHub Actions",
        "JUnit",
        "Mockito",
        "DevOps",
        "Agile",
      ],
    },
    {
      role: "Software Engineer",
      company: "Wipro Limited",
      logo: "https://logo.clearbit.com/wipro.com", // Wipro logo
      location: "Hyderabad, Telangana, India",
      duration: "May 2022 – September 2023",
      description: [
        "Developed Kafka consumers in Spring Boot processing 7000 vendor updates daily, maintaining accurate inventory for 1.5 million users",
        "Optimized RESTful APIs and caching to reduce response time from 1.5s to 700ms, improving checkout reliability and user satisfaction by 30%",
        "Enhanced backend query performance and indexing, cutting data retrieval latency from 1.8s to 1s and increasing throughput by 40%",
        "Partnered with QA and DevOps teams in Agile sprints using Jira, achieving 95% test coverage and ensuring dependable CI/CD deployments",
      ],
      tech: [
        "Kafka",
        "Spring Boot",
        "RESTful APIs",
        "Caching",
        "Query Optimization",
        "Jira",
        "CI/CD",
        "Agile",
      ],
    },
  ];

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  const currentExp = experiences[currentIndex];

  return (
    <Box
      ref={ref}
      id="experience"
      sx={{
        py: 8,
        background:
          "linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0a0e1a 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in={isVisible} timeout={600}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              color: "#3b82f6",
              mb: 8,
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            Work Experience
          </Typography>
        </Fade>

        <Box sx={{ position: "relative", maxWidth: 1000, mx: "auto" }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={prevExperience}
            sx={{
              position: "absolute",
              left: { xs: -20, md: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              width: 50,
              height: 50,
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(59, 130, 246, 0.3)",
                transform: "translateY(-50%) scale(1.1)",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          <IconButton
            onClick={nextExperience}
            sx={{
              position: "absolute",
              right: { xs: -20, md: -60 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              width: 50,
              height: 50,
              transition: "all 0.3s ease",
              "&:hover": {
                background: "rgba(59, 130, 246, 0.3)",
                transform: "translateY(-50%) scale(1.1)",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          {/* Experience Card */}
          <Fade in={isVisible && true} key={currentIndex} timeout={500}>
            <Paper
              elevation={0}
              sx={{
                p: 6,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                },
              }}
            >
              {/* Company Info Section */}
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={currentExp.logo}
                    alt={`${currentExp.company} logo`}
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "contain",
                      borderRadius: 2,
                      background: "rgba(255, 255, 255, 0.9)",
                      p: 1,
                      filter: "drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))",
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "#3b82f6",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                  >
                    {currentExp.role}
                  </Typography>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "rgba(255, 255, 255, 0.9)",
                    mb: 2,
                  }}
                >
                  {currentExp.company}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    flexWrap: "wrap",
                    mb: 3,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarToday
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "1.1rem",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {currentExp.duration}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOn
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "1.1rem",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {currentExp.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Description */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#60a5fa",
                    fontWeight: 600,
                    mb: 3,
                    textAlign: "center",
                  }}
                >
                  Key Achievements
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {currentExp.description.map((desc, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(59, 130, 246, 0.05)",
                        border: "1px solid rgba(59, 130, 246, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(59, 130, 246, 0.1)",
                          border: "1px solid rgba(59, 130, 246, 0.2)",
                          transform: "translateX(8px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(45deg, #3b82f6, #60a5fa)",
                          mt: 1,
                          flexShrink: 0,
                          boxShadow: "0 2px 8px rgba(59, 130, 246, 0.4)",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          lineHeight: 1.6,
                          fontSize: "1rem",
                          fontWeight: 400,
                        }}
                      >
                        {desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Tech Stack */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#60a5fa",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Technologies Used
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    justifyContent: "center",
                  }}
                >
                  {currentExp.tech.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      sx={{
                        background: "rgba(59, 130, 246, 0.2)",
                        color: "#60a5fa",
                        fontWeight: 600,
                        border: "1px solid rgba(59, 130, 246, 0.4)",
                        borderRadius: 3,
                        fontSize: "0.85rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(59, 130, 246, 0.4)",
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Fade>

          {/* Pagination Dots */}
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1 }}
          >
            {experiences.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background:
                    index === currentIndex
                      ? "#3b82f6"
                      : "rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    background:
                      index === currentIndex
                        ? "#60a5fa"
                        : "rgba(255, 255, 255, 0.5)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
