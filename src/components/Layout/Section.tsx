"use client";
import * as React from "react";
import { Box, Container } from "@mui/material";


type Props = {
    id: string;
    children: React.ReactNode;
    full?: boolean;          // use for Hero
    bg?: string;             // MUI color key or CSS color
  };

  export default function Section({ id, children, full, bg }: Props) {
    return (
      <Box
        component="section"
        id={id}
        sx={{
          scrollMarginTop: { xs: 72, md: 88 },       // offset for sticky AppBar
          py: full ? 0 : { xs: 8, md: 12 },
          minHeight: full ? "100svh" : "auto",
          display: full ? "flex" : "block",
          alignItems: full ? "center" : "unset",
          bgcolor: bg ?? "transparent",
        }}
      >
        <Container maxWidth="md">{children}</Container>
      </Box>
    );
  }