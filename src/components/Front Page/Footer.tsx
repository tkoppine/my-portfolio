"use client";
import { Box, Typography, IconButton, Container, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        py: 4,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            © 2025 Teja Naidu
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://github.com/tkoppine"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  color: "#60a5fa",
                  transform: "translateY(-2px) scale(1.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/tejanaidukoppineni/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  color: "#60a5fa",
                  transform: "translateY(-2px) scale(1.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:tkoppine@asu.edu"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  color: "#60a5fa",
                  transform: "translateY(-2px) scale(1.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <Email />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
