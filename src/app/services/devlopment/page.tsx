"use client";

import { useState, useEffect } from "react";

import { PrismicNextImage } from "@prismicio/next";
import Header from "@/app/homepage/Header";
import { Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { client } from "../../../../lib/prismic-configuration";

function DevelopmentServices() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("development_services" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const textStyle: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#1874DA",
    padding: "10px",
  };
  const [showForm, setShowForm] = useState(false);
  const handleKnowMoreClick = () => {
    setShowForm(true);
  };
  const handleClose = () => {
    setShowForm(false);
  };
  const theme = useTheme();

  // Define breakpoints using Material-UI's theme breakpoints
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // Desktop and above
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg")); // Laptop
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Tablet

  const fontSize = isDesktop
    ? "48px"
    : isLaptop
    ? "38px"
    : isTablet
    ? "30px"
    : "22px"; 
    useEffect(() => {
      if (showForm) {
        document.addEventListener("mousedown", handleClose);
        return () =>
          document.removeEventListener("mousedown", handleClose);
      }
    }, [showForm]);
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main Wrapper */}
      <div
        className="relative bg-white min-h-screen"
        style={{
          padding: "125px 0px  20px 0px",
          // backgroundColor: showForm ? "black" : "white",
        }}
      >
        {/* Introductory Text */}
        <div className="text-center py-6">
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: fontSize,
              fontWeight: 700,
              color: "#1874DA",padding:'20px 0px 10px 0px'
            }}
          >
            {posts[0]?.data.heading}
          </h1>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 400,
              color: "#333333", padding:'0px 0px 20px 0px'
            }}
          >
            {posts[0]?.data.description}
          </p>
        </div>

        {/* Main Content */}
        <Grid
          container
          spacing={0}
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PrismicNextImage
              field={posts[0]?.data.developmentservices}

              alt={""}
              style={{ width: "550px", height: "400px" }}
            />
          </Grid>

          {/* Text Content Section */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 20px",
            }}
          >
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25px",
                textAlign: "left" as const,
                color: "#7A7A7A",
                maxWidth: "70%",
                padding: "24px 0 24px 0px",
              }}
            >
              {posts[0]?.data.imagedesc}
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                textAlign: "left" as const,
                color:'#000000',
              }}
            >
              {posts[0]?.data.heading2}
            </Typography>
            <Typography style={textStyle}>{posts[0]?.data.title1}</Typography>
            <Typography style={textStyle}>{posts[0]?.data.title2}</Typography>
            <Typography style={textStyle}>{posts[0]?.data.title3}</Typography>
            <Typography style={textStyle}>{posts[0]?.data.title4}</Typography>

            <Button
              style={{
                fontFamily: "Poppins",
                marginTop: "24px",
                fontSize: "18px",
                textTransform: "none",
                fontWeight: 400,
                color: "#FFFFFF",
                background: "#1874DA",
                cursor: "pointer",
                borderRadius: "6px",
                padding: "11px 20px", // Adjust padding for better responsiveness
                alignItems: "center",
                justifyContent: "center",
                width: "100%", // Full width for small screens
                maxWidth: "200px", // Restrict the max width for large screens
                height: "auto",
              }}
              onClick={handleKnowMoreClick}
            >
              {posts[0]?.data.button}
            </Button>
            {showForm && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 9999,
                  marginTop: "10%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "80%",
                    maxWidth: "900px",
                    height: "70%",
                    maxHeight: "600px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    overflowY: "auto",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Left Panel */}
                  <div
                    style={{
                      flex: 1,
                      padding: "2rem",
                      backgroundColor: "#123456",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        fontSize: "1.5rem",
                        color: "white",
                        cursor: "pointer",
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                      }}
                      onClick={handleClose}
                    >
                      ✕
                    </button>

                    <h1 style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
                      Love To Hear From You,{" "}
                      <span style={{ color: "#1874DA" }}>Get In Touch 👋</span>
                    </h1>
                    <p style={{ fontSize: "0.9rem" }}>
                      We are here for you! Fill out the inquiry form so we can
                      help you.
                    </p>
                  </div>

                  {/* Right Panel */}
                  <div
                    style={{
                      flex: 1.5,
                      padding: "1.5rem",
                      backgroundColor: "#ffffff",
                      color: "#000",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      overflowY: "auto",
                    }}
                  >
                    <form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        overflowY: "auto",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label
                          htmlFor="name"
                          style={{
                            fontSize: "0.9rem",
                            marginBottom: "0.5rem",
                            textAlign: "left",
                            fontFamily: "Poppins",
                          }}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Your full name"
                          style={styles.input}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label
                          htmlFor="phone"
                          style={{
                            fontSize: "0.9rem",
                            marginBottom: "0.5rem",
                            textAlign: "left",
                            fontFamily: "Poppins",
                          }}
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          id="phone"
                          placeholder="Your phone number"
                          style={styles.input}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label
                          htmlFor="email"
                          style={{
                            fontSize: "0.9rem",
                            marginBottom: "0.5rem",
                            textAlign: "left",
                            fontFamily: "Poppins",
                          }}
                        >
                          Mail ID
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your email ID"
                          style={styles.input}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label
                          htmlFor="description"
                          style={{
                            fontSize: "0.9rem",
                            marginBottom: "0.5rem",
                            textAlign: "left",
                            fontFamily: "Poppins",
                          }}
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          placeholder="Tell us about your project..."
                          style={{
                            ...styles.input,
                            height: "80px",
                            resize: "none",
                          }}
                        />
                      </div>
                      <button type="submit" style={styles.submitButton}>
                        Get a call back →
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DevelopmentServices;
const styles = {
  
  input: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "0.8rem",
    fontSize: "0.9rem",
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#1874DA",
    border: "none",
    color: "#fff",
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#00cc70",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.9rem",
    backgroundColor: "#123456",
    color: "#fff",
  },
};
