"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  useTheme,
  Fade,
  Slide,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Send,
  GitHub,
  LinkedIn,
  Description,
} from "@mui/icons-material";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const theme = useTheme();
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: "tkoppine@asu.edu",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Email />,
      title: "Email",
      value: "tkoppine@asu.edu",
      link: "mailto:tkoppine@asu.edu",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+1 (602) 596-7290",
      link: "tel:+16025967290",
    },
    {
      icon: <LocationOn />,
      title: "Location",
      value: "Seattle, WA, USA",
      link: null,
    },
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      value: "linkedin.com/in/tejanaidukoppineni",
      link: "https://www.linkedin.com/in/tejanaidukoppineni/",
    },
    {
      icon: <GitHub />,
      title: "GitHub",
      value: "github.com/tkoppine",
      link: "https://github.com/tkoppine",
    },
  ];

  return (
    <Box
      ref={ref}
      id="contact"
      sx={{
        py: 8,
        background:
          "linear-gradient(135deg, #0f0a19 0%, #1e293b 50%, #0f0a19 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`,
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
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            Get In Touch
          </Typography>
        </Fade>

        <Fade in={isVisible} timeout={700}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              mb: 2,
              fontWeight: 600,
              fontSize: { xs: "1.3rem", md: "1.8rem" },
            }}
          >
            Let's Build Something Amazing Together
          </Typography>
        </Fade>

        <Fade in={isVisible} timeout={800}>
          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 8,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            Driven to turn complex ideas into impactful, intelligent software
            solutions. Specializes in building scalable systems, integrating AI
            for smarter user experiences, and delivering products with
            reliability and precision. Focused on creating technology that not
            only works efficiently but also inspires trust and innovation in
            every interaction.
          </Typography>
        </Fade>

        <Grid container spacing={6}>
          {/* Contact Methods */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              {contactMethods.map((method, index) => (
                <Slide
                  key={index}
                  in={isVisible}
                  direction="right"
                  timeout={900 + index * 100}
                >
                  <Paper
                    elevation={0}
                    component={method.link ? "a" : "div"}
                    href={method.link || undefined}
                    target={method.link ? "_blank" : undefined}
                    rel={method.link ? "noopener noreferrer" : undefined}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      textDecoration: "none",
                      color: "inherit",
                      transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                      cursor: method.link ? "pointer" : "default",
                      "&:hover": {
                        transform: method.link
                          ? "translateY(-4px) scale(1.02)"
                          : "none",
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(59, 130, 246, 0.3)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                        "& .contact-icon": {
                          transform: "scale(1.2) rotate(5deg)",
                          background: "rgba(59, 130, 246, 0.3)",
                        },
                      },
                    }}
                  >
                    <Box
                      className="contact-icon"
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        background: "rgba(59, 130, 246, 0.2)",
                        color: "#60a5fa",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        minWidth: 56,
                        height: 56,
                      }}
                    >
                      {method.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "rgba(255, 255, 255, 0.9)",
                          mb: 0.5,
                        }}
                      >
                        {method.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "0.95rem",
                        }}
                      >
                        {method.value}
                      </Typography>
                    </Box>
                  </Paper>
                </Slide>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Slide in={isVisible} direction="left" timeout={1000}>
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#60a5fa",
                    fontWeight: 700,
                    mb: 4,
                    textAlign: "center",
                  }}
                >
                  Send me a message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            background: "rgba(255, 255, 255, 0.05)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(59, 130, 246, 0.5)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3b82f6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.7)",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "rgba(255, 255, 255, 0.9)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            background: "rgba(255, 255, 255, 0.05)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(59, 130, 246, 0.5)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3b82f6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.7)",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "rgba(255, 255, 255, 0.9)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Company (Optional)"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            background: "rgba(255, 255, 255, 0.05)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(59, 130, 246, 0.5)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3b82f6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.7)",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "rgba(255, 255, 255, 0.9)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            background: "rgba(255, 255, 255, 0.05)",
                            "& fieldset": {
                              borderColor: "rgba(255, 255, 255, 0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(59, 130, 246, 0.5)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3b82f6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255, 255, 255, 0.7)",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "rgba(255, 255, 255, 0.9)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Box sx={{ textAlign: "center" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          disabled={isSubmitting}
                          sx={{
                            borderRadius: 4,
                            textTransform: "none",
                            px: 6,
                            py: 2.5,
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            background:
                              "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                            border: "1px solid rgba(59, 130, 246, 0.3)",
                            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                            transition:
                              "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                            "&:hover": {
                              transform: isSubmitting
                                ? "none"
                                : "translateY(-3px) scale(1.05)",
                              boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                              background:
                                "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                            },
                            "&:disabled": {
                              opacity: 0.7,
                              transform: "none",
                            },
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Slide>
          </Grid>
        </Grid>

        {/* Success/Error Notification */}
        <Snackbar
          open={submitStatus.type !== null}
          autoHideDuration={6000}
          onClose={() => setSubmitStatus({ type: null, message: "" })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSubmitStatus({ type: null, message: "" })}
            severity={submitStatus.type || "info"}
            sx={{ width: "100%" }}
          >
            {submitStatus.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
