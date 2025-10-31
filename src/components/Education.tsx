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
  School,
  CalendarToday,
  LocationOn,
  ArrowBackIos,
  ArrowForwardIos,
  EmojiEvents,
} from "@mui/icons-material";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Education() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Arizona State University",
      location: "Tempe, AZ, USA",
      duration: "August 2023 - May 2025",
      gpa: "4.0/4.0",
      schoolSymbol: "🏛️",
      coursework: [
        "Advanced Algorithms",
        "Machine Learning",
        "Artificial Intelligence",
        "Database Management",
        "Software Development Life Cycle",
        "Distributed Systems",
        "Cloud Computing",
      ],
      achievements: ["Graduate Teaching Assistant", "Academic Excellence"],
    },
    {
      degree:
        "Bachelor of Technology in Electronics and Communication Engineering",
      school: "Vellore Institute of Technology",
      location: "Chennai, India",
      duration: "June 2018 - May 2022",
      gpa: "8.0/10.0",
      schoolSymbol: "🎓",
      coursework: [
        "Semiconductors",
        "Operating Systems",
        "Computer Architecture",
        "Optical Communication",
        "Data Structures and Algorithms",
        "Computer Networking",
      ],
      achievements: ["First Class", "Academic Excellence"],
    },
  ];

  const nextEducation = () => {
    setCurrentIndex((prev) => (prev + 1) % education.length);
  };

  const prevEducation = () => {
    setCurrentIndex((prev) => (prev - 1 + education.length) % education.length);
  };

  const currentEdu = education[currentIndex];

  return (
    <Box
      ref={ref}
      id="education"
      sx={{
        py: 8,
        background:
          "linear-gradient(135deg, #0d1b2a 0%, #1b263b 30%, #2d3748 60%, #1a365d 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, rgba(56, 178, 172, 0.2) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
                       radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 70%)`,
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
              color: "#38b2ac",
              mb: 8,
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 4px 20px rgba(56, 178, 172, 0.4)",
            }}
          >
            Education
          </Typography>
        </Fade>

        <Box sx={{ position: "relative", maxWidth: 1000, mx: "auto" }}>
          {/* Navigation Arrows */}
          <IconButton
            onClick={prevEducation}
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
                background: "rgba(56, 178, 172, 0.3)",
                transform: "translateY(-50%) scale(1.1)",
                boxShadow: "0 8px 25px rgba(56, 178, 172, 0.4)",
              },
            }}
          >
            <ArrowBackIos />
          </IconButton>

          <IconButton
            onClick={nextEducation}
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
                background: "rgba(56, 178, 172, 0.3)",
                transform: "translateY(-50%) scale(1.1)",
                boxShadow: "0 8px 25px rgba(56, 178, 172, 0.4)",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          {/* Education Card */}
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
                  border: "1px solid rgba(56, 178, 172, 0.3)",
                },
              }}
            >
              {/* School Info Section */}
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
                  <Typography
                    sx={{
                      fontSize: "3rem",
                      filter: "drop-shadow(0 4px 8px rgba(56, 178, 172, 0.3))",
                    }}
                  >
                    {currentEdu.schoolSymbol}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: "#38b2ac",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                  >
                    {currentEdu.degree}
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
                  {currentEdu.school}
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
                      {currentEdu.duration}
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
                      {currentEdu.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EmojiEvents
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
                      GPA: {currentEdu.gpa}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Coursework */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#4fd1c7",
                    fontWeight: 600,
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Key Coursework
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  {currentEdu.coursework.map((course, courseIndex) => (
                    <Chip
                      key={courseIndex}
                      label={course}
                      sx={{
                        background: "rgba(56, 178, 172, 0.2)",
                        color: "#4fd1c7",
                        fontWeight: 600,
                        border: "1px solid rgba(56, 178, 172, 0.4)",
                        borderRadius: 3,
                        fontSize: "0.85rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(56, 178, 172, 0.4)",
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 12px rgba(56, 178, 172, 0.3)",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Achievements */}
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#4fd1c7",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Achievements
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    justifyContent: "center",
                  }}
                >
                  {currentEdu.achievements.map(
                    (achievement, achievementIndex) => (
                      <Chip
                        key={achievementIndex}
                        label={achievement}
                        sx={{
                          background: "rgba(255, 215, 0, 0.2)",
                          color: "#ffd700",
                          fontWeight: 600,
                          border: "1px solid rgba(255, 215, 0, 0.4)",
                          borderRadius: 3,
                          fontSize: "0.85rem",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "rgba(255, 215, 0, 0.4)",
                            transform: "scale(1.05)",
                            boxShadow: "0 4px 12px rgba(255, 215, 0, 0.3)",
                          },
                        }}
                      />
                    )
                  )}
                </Box>
              </Box>
            </Paper>
          </Fade>

          {/* Pagination Dots */}
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1 }}
          >
            {education.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background:
                    index === currentIndex
                      ? "#38b2ac"
                      : "rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    background:
                      index === currentIndex
                        ? "#4fd1c7"
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
