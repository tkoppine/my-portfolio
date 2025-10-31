"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: trigger ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mx: 2,
            my: 1,
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              transform: "translateY(-2px)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
            },
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", py: 1, px: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: "#3b82f6",
                cursor: "pointer",
                fontSize: "1.5rem",
                background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => scrollToSection("#home")}
            >
              Teja
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color:
                      activeSection === item.href.substring(1)
                        ? "white"
                        : "rgba(255, 255, 255, 0.8)",
                    textTransform: "none",
                    fontWeight: 600,
                    position: "relative",
                    borderRadius: 3,
                    px: 3,
                    py: 1.5,
                    minWidth: "auto",
                    background:
                      activeSection === item.href.substring(1)
                        ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                        : "transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "white",
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                      transform: "translateY(-2px) scale(1.05)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
