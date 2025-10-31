"use client";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  CardActions,
  IconButton,
  Container,
  Chip,
  Stack,
  Button,
  useTheme,
  Fade,
  Slide,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { getAssetPath } from "../lib/utils";

export default function Projects() {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const projects = [
    {
      title: "AWS Student Face Recognition System",
      description:
        "A scalable cloud-based face recognition system for student attendance. Built with microservices architecture using AWS services including S3, Lambda, SQS, and EC2 for automatic scaling. Features Spring Boot API, Python face recognition workers with FaceNet, and real-time processing pipeline.",
      image: getAssetPath("./attendance1.png"),
      github: "https://github.com/tkoppine/AWS_Project",
      tech: [
        "AWS",
        "S3",
        "Lambda",
        "SQS",
        "EC2",
        "Spring Boot",
        "Python",
        "FaceNet",
        "Docker",
      ],
    },
    {
      title: "NYC Cab ETL Pipeline",
      description:
        "A comprehensive graph data processing pipeline for NYC taxi trip analysis. Implements Neo4j graph database with PageRank and BFS algorithms on large-scale transportation data. Features Docker containerization, Minikube orchestration, real-time data ingestion, and interactive graph visualizations.",
      image: getAssetPath("./taxi.jpg"),
      github: "https://github.com/tkoppine/Graph-Data-Processing-Pipeline",
      tech: [
        "Neo4j",
        "Docker",
        "Minikube",
        "Python",
        "Graph Algorithms",
        "PageRank",
        "BFS",
        "Data Processing",
      ],
    },
    {
      title: "Distributed Coding Platform",
      description:
        "A comprehensive coding platform with distributed architecture featuring Java Spring Boot backend, Next.js TypeScript frontend, and microservices worker system. Deployed on AWS EC2 with RDS database, supports multiple programming languages, real-time code execution, automated testing with SQS message queuing, and S3 integration.",
      image: getAssetPath("./coding.webp"),
      github: "https://github.com/tkoppine/coding_platform_backend",
      demo: "https://coding-platform-demo.vercel.app",
      tech: [
        "Java",
        "Spring Boot",
        "Next.js",
        "TypeScript",
        "Docker",
        "AWS",
        "EC2",
        "RDS",
        "SQS",
        "S3",
        "Microservices",
      ],
    },
    {
      title: "Crime Forecasting ML System",
      description:
        "Advanced machine learning system for crime prediction in Tempe, Arizona using spatial-temporal analysis. Implements Gradient Boosting, feature engineering with 7x7 spatial grids, and interactive visualization with choropleth maps. Achieves high accuracy with comprehensive model evaluation metrics.",
      image: getAssetPath("./crime_patterns.jpg"),
      github:
        "https://github.com/tkoppine/Forecasting-Crime-for-the-City-of-Tempe",
      tech: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Folium",
        "Plotly",
        "Gradient Boosting",
        "Geospatial Analysis",
      ],
    },
    {
      title: "RAG Academic Research Assistant",
      description:
        "Intelligent retrieval-augmented generation system for academic paper analysis. Features PDF scraping, multi-modal content processing with CLIP embeddings, FAISS vector storage, and LLM integration. Supports text and image vectorization with Django web interface for seamless research assistance.",
      image: getAssetPath("./rag.png"),
      github: "https://github.com/tkoppine/RAG-App",
      tech: [
        "Python",
        "Django",
        "CLIP",
        "FAISS",
        "OpenAI",
        "RAG",
        "PDF Processing",
        "Vector Search",
      ],
    },
    {
      title: "Instagram Performance Analyzer",
      description:
        "Comprehensive social media analytics platform for Instagram performance tracking. Features real-time engagement metrics, audience insights, content performance analysis, and automated reporting. Built with modern web technologies and API integrations for comprehensive social media management.",
      image: getAssetPath("./instagram.jpg"),
      github: "https://github.com/tkoppine/Instagram-Performance-Analyzer",
      tech: [
        "Streamlit",
        "Instaloader",
        "Plotly",
        "Selenium",
        "Python",
        "Jupyter",
        "Analytics",
        "Data Visualization",
        "Social Media",
        "Performance Metrics",
      ],
    },
  ];

  return (
    <Box
      ref={ref}
      id="projects"
      sx={{
        py: 8,
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
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
              color: "#22c55e",
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 4px 20px rgba(34, 197, 94, 0.3)",
            }}
          >
            Featured Projects
          </Typography>
        </Fade>

        <Fade in={isVisible} timeout={700}>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 6,
              maxWidth: 600,
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            A showcase of some of my recent work, featuring full-stack
            applications, AI integrations, and scalable cloud solutions.
          </Typography>
        </Fade>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <Slide in={isVisible} direction="up" timeout={800 + index * 100}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    "&:hover": {
                      boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                      transform: "translateY(-12px) scale(1.02)",
                      border: "1px solid rgba(34, 197, 94, 0.3)",
                      "& .project-image": {
                        transform: "scale(1.1)",
                      },
                      "& .project-title": {
                        color: "#22c55e",
                      },
                      "& .tech-chip": {
                        transform: "translateY(-2px)",
                        backgroundColor: "rgba(34, 197, 94, 0.25)",
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      height: 200,
                      objectFit: [
                        "NYC Cab ETL Pipeline",
                        "Distributed Coding Platform",
                        "Crime Forecasting ML System",
                      ].includes(project.title)
                        ? "contain"
                        : "cover",
                      backgroundColor:
                        project.title === "NYC Cab ETL Pipeline"
                          ? "#f0f9ff"
                          : project.title === "Distributed Coding Platform"
                          ? "#4dd0e1"
                          : project.title === "Crime Forecasting ML System"
                          ? "#2d2d2d"
                          : "transparent",
                      padding: [
                        "NYC Cab ETL Pipeline",
                        "Distributed Coding Platform",
                        "Crime Forecasting ML System",
                      ].includes(project.title)
                        ? "8px"
                        : "0",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      className="project-title"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "rgba(255, 255, 255, 0.9)",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        fontSize: "0.95rem",
                        color: "rgba(255, 255, 255, 0.7)",
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ flexWrap: "wrap", gap: 1 }}
                      >
                        {project.tech.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            className="tech-chip"
                            sx={{
                              backgroundColor: "rgba(34, 197, 94, 0.2)",
                              color: "#4ade80",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              border: "1px solid rgba(34, 197, 94, 0.4)",
                              borderRadius: 3,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: "rgba(34, 197, 94, 0.4)",
                                transform: "scale(1.05)",
                                boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>

                  <CardActions
                    sx={{ p: 3, pt: 0, justifyContent: "space-between" }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        size="small"
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          textTransform: "none",
                          fontWeight: 600,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#22c55e",
                            transform: "translateY(-2px)",
                            backgroundColor: "rgba(34, 197, 94, 0.1)",
                          },
                        }}
                      >
                        Code
                      </Button>
                      {project.demo && (
                        <Button
                          size="small"
                          startIcon={<Launch />}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "#22c55e",
                            textTransform: "none",
                            fontWeight: 600,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "rgba(34, 197, 94, 0.15)",
                              transform: "translateY(-2px)",
                            },
                          }}
                        >
                          Demo
                        </Button>
                      )}
                    </Stack>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
