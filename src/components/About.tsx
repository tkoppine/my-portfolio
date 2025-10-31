"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  useTheme,
  Fade,
  Slide,
} from "@mui/material";
import {
  Code,
  Web,
  Storage,
  CloudQueue,
  Build,
  Psychology,
  IntegrationInstructions,
} from "@mui/icons-material";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code />,
      skills: [
        "Python",
        "Java",
        "Go",
        "C++",
        "SQL",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Frontend Technologies",
      icon: <Web />,
      skills: ["React", "Next.js", "HTML5", "CSS3", "Material-UI", "Redux"],
    },
    {
      title: "Backend & APIs",
      icon: <IntegrationInstructions />,
      skills: [
        "FastAPI",
        "Spring Boot",
        "Django",
        "Node.js",
        "Microservices Architecture",
        "RESTful APIs",
        "Distributed Systems",
      ],
    },
    {
      title: "Databases & Data Engineering",
      icon: <Storage />,
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Apache Kafka",
        "Spark",
        "ETL Pipelines",
      ],
    },
    {
      title: "Cloud & AI/ML",
      icon: <CloudQueue />,
      skills: [
        "AWS",
        "EC2",
        "Lambda",
        "S3",
        "SQS",
        "ECS",
        "IAM",
        "RDS",
        "SageMaker",
        "Pandas",
        "LLMs (GPT, Claude, LLaMA2)",
        "Retrieval-Augmented Generation (RAG)",
        "PyTorch",
        "LangChain",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Build />,
      skills: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Jenkins",
        "GitHub Actions",
        "JUnit",
        "Mockito",
        "PyTest",
        "Agile",
        "Jira",
        "Git",
      ],
    },
  ];

  return (
    <Box
      ref={ref}
      id="skills"
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
          background: `radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in={isVisible} timeout={600}>
          <Box>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              sx={{
                color: "#6366f1",
                mb: 8,
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                textShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
              }}
            >
              Skills
            </Typography>

            <Grid container spacing={4}>
              {skillCategories.map((category, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Slide
                    in={isVisible}
                    direction="up"
                    timeout={700 + index * 100}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: "100%",
                        borderRadius: 4,
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                        transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                        "&:hover": {
                          transform: "translateY(-12px) scale(1.02)",
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(99, 102, 241, 0.3)",
                          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)",
                          "& .skill-icon": {
                            transform: "scale(1.2) rotate(5deg)",
                            color: "#6366f1",
                          },
                          "& .skill-title": {
                            color: "#6366f1",
                          },
                          "& .skill-chip": {
                            transform: "translateY(-2px)",
                            background: "rgba(99, 102, 241, 0.2)",
                            borderColor: "rgba(99, 102, 241, 0.5)",
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 3 }}
                      >
                        <Box
                          className="skill-icon"
                          sx={{
                            p: 2,
                            borderRadius: 3,
                            background: "rgba(99, 102, 241, 0.1)",
                            border: "1px solid rgba(99, 102, 241, 0.3)",
                            color: "rgba(255, 255, 255, 0.8)",
                            mr: 3,
                            transition: "all 0.4s ease",
                            fontSize: "2rem",
                          }}
                        >
                          {category.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          className="skill-title"
                          sx={{
                            fontWeight: 700,
                            color: "rgba(255, 255, 255, 0.9)",
                            transition: "color 0.3s ease",
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                          }}
                        >
                          {category.title}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1.5,
                        }}
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            className="skill-chip"
                            sx={{
                              background: "rgba(255, 255, 255, 0.1)",
                              color: "rgba(255, 255, 255, 0.9)",
                              fontWeight: 500,
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                              borderRadius: 3,
                              fontSize: "0.85rem",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                background: "rgba(99, 102, 241, 0.3)",
                                borderColor: "rgba(99, 102, 241, 0.6)",
                                transform: "scale(1.05)",
                                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Paper>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}
