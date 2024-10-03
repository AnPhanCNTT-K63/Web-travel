import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <GpsFixedIcon sx={{ color: "black" }} />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" sx={{ mx: 2 }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <Link
                to="/tour"
                style={{ textDecoration: "none", color: "black" }}
              >
                Tour
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blog
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <Link
                to="/gallery"
                style={{ textDecoration: "none", color: "black" }}
              >
                Gallery
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ mx: 2 }}>
              <Link
                to="/test"
                style={{ textDecoration: "none", color: "black" }}
              >
                Category
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />{" "}
      {/* This Toolbar is used to add padding to the top of the content */}
    </>
  );
};

export default Navbar;
