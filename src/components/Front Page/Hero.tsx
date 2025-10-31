"use client";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useTheme,
  Paper,
} from "@mui/material";
import Image from "next/image";
import { Download, LinkedIn, GitHub, Code } from "@mui/icons-material";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: { xs: "80px", md: "90px" }, // Account for fixed navbar
        backgroundImage: `url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.7) 0%, rgba(30,41,59,0.8) 50%, rgba(15,23,42,0.7) 100%)",
          backdropFilter: "blur(1px)",
          zIndex: 1,
        },
      }}
    >
      {/* Animated particles */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.3) 0%, transparent 50%)`,
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", lg: "row" },
            gap: 8,
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          {/* Content Section */}
          <Box sx={{ flex: 1, maxWidth: { xs: "100%", lg: 600 } }}>
            {/* Name and Title - No Box */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "3rem", md: "4.5rem" },
                  fontWeight: 800,
                  mb: 2,
                  background: "linear-gradient(135deg, #fff 0%, #f0f0f0 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                  letterSpacing: "-2px",
                }}
              >
                Hi, I&apos;m Teja
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: 600,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, #64b5f6)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-1px",
                }}
              >
                Software Engineer
              </Typography>
            </Box>

            {/* About Me Highlighted Box - No Title */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 6,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  background: "rgba(255, 255, 255, 0.15)",
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  color: "rgba(255, 255, 255, 0.95)",
                  lineHeight: 1.8,
                  fontWeight: 400,
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Focused on building reliable, scalable applications that solve
                real problems. I&apos;m passionate about full-stack development,
                crafting intuitive user interfaces, and leveraging AI/ML to
                create smarter systems. With experience across modern web
                technologies, cloud platforms, and machine learning frameworks,
                I love turning complex ideas into simple, elegant solutions that
                make a meaningful impact.
              </Typography>
            </Paper>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              sx={{ justifyContent: { xs: "center", lg: "flex-start" } }}
            >
              <Button
                variant="contained"
                startIcon={<Download />}
                size="large"
                sx={{
                  borderRadius: 4,
                  textTransform: "none",
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    background: "rgba(255, 255, 255, 0.25)",
                  },
                }}
                href="https://drive.google.com/uc?export=download&id=1fBPnf4kbFgusj_lNpovYvQpUYekUXegS"
                target="_blank"
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                size="large"
                sx={{
                  borderRadius: 4,
                  textTransform: "none",
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    background: "#0077b5",
                    borderColor: "#0077b5",
                    boxShadow: "0 20px 40px rgba(0,119,181,0.4)",
                  },
                }}
                href="https://www.linkedin.com/in/tejanaidukoppineni/"
                target="_blank"
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                size="large"
                sx={{
                  borderRadius: 4,
                  textTransform: "none",
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    background: "#333",
                    borderColor: "#333",
                    boxShadow: "0 20px 40px rgba(51,51,51,0.4)",
                  },
                }}
                href="https://github.com/tkoppine"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<Code />}
                size="large"
                sx={{
                  borderRadius: 4,
                  textTransform: "none",
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  "&:hover": {
                    transform: "translateY(-4px) scale(1.02)",
                    background: "#FFA116",
                    borderColor: "#FFA116",
                    boxShadow: "0 20px 40px rgba(255,161,22,0.4)",
                  },
                }}
                href="https://leetcode.com/u/Tejak1403/"
                target="_blank"
              >
                LeetCode
              </Button>
            </Stack>
          </Box>

          {/* Profile Image Section */}
          <Box sx={{ flex: 0.8, display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                position: "relative",
                p: 1,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                "&:hover": {
                  transform: "scale(1.05) rotate(2deg)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: 300, md: 350 },
                  height: { xs: 300, md: 350 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  border: "3px solid rgba(255, 255, 255, 0.5)",
                }}
              >
                <Image
                  src="/my-portfolio/profile.jpeg"
                  alt="Teja Profile"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
