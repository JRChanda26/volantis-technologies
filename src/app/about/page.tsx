"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import ContactUs from "../homepage/ContactUs";
import Footer from "../homepage/Footer";
import Subscribe from "../homepage/Subscribe";
import Header from "../homepage/Header";
import { client } from "../../../lib/prismic-configuration";

function About() {
  const [posts, setPosts] = useState<any>([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const containerStyles = {
    padding: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
    paddingTop: "100px", 
    backgroundColor: isSmallScreen ? theme.palette.grey[200] : theme.palette.grey[100],
    textAlign: isSmallScreen ? "center" : "left",
  };

  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("about_us" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);
  const titlenum: React.CSSProperties = {
    background: "none",
    borderRadius: "12px",
    padding: "8px",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    color: "#FFFFFF",
    width: "100px",
    height: "64px",
    textAlign: "center",
    border: "1px solid #FFFFFF",
    display: "flex", // Add flexbox
    justifyContent: "center", // Horizontal centering
    alignItems: "center", // Vertical centering
  };

  const title: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#FFFFFF",
    padding: "10px 0px 10px 0px",
  };
  const desc: React.CSSProperties = {
    fontFamily: "Poppins", 
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#FFFFFF",
    maxWidth: "60%",
  };

  // Define breakpoints using Material-UI's theme breakpoints
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // Desktop and above
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg")); // Laptop
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Tablet
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  // Adjust font size based on the breakpoints
  const fontSize = isDesktop
    ? "56px"
    : isLaptop
    ? "48px"
    : isTablet
    ? "40px"
    : "32px"; 
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: isSmallScreen ? "40px" : "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: isSmallScreen ? "8px" : "10px",
          background: "#F6F6F6",
        }}
      >
     <Box sx={containerStyles}>
        {posts.length > 0 && (
          <>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: "40px", sm: "50px", md: "50px" },
              }}
            >
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: fontSize,
                  fontWeight: 700,
                  color: "#1874DA",
                  textAlign: "center",
                }}
              >
                {posts[0]?.data.heading}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: isSmallScreen ? "0px 15px" : "0px 50px 0px 82px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "30px",
                    textAlign: "center",
                    marginTop: "15px",
                    color: "#6D6D6D",
                    maxWidth: "80%",
                    margin: "0 auto",
                  }}
                >
                  {posts[0]?.data.description4}
                </Typography>
              </div>
            </Grid>

            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "10px 20px 10px 20px",
                background: "#F6F6F6",
              }}
            >
              <Grid item xs={12} sm={12} md={12}>
                {" "}
                <PrismicNextImage
                  field={posts[0]?.data.aboutusimage2}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "60px 70px 60px 70px",
                textAlign: "center",
                background: "#F6F6F6",
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "40px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    textAlign: "center",
                    color: "#1874DA",
                    padding: "10px",
                  }}
                >
                  {posts[0]?.data.missiontitle1}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "27px",
                    textAlign: "justify", // Keeping text alignment as justify
                    color: "#7A7A7A",
                    padding: "10px",
                    maxWidth: "90%",
                  }}
                >
                  {posts[0]?.data.missiondesc1}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PrismicNextImage
                  field={posts[0]?.data.missionimg1}
                  alt={""}
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PrismicNextImage
                  field={posts[0]?.data.missionimg2}
                  alt={""}
                  style={{ maxWidth: "70%", height: "auto" }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center", // Center content horizontally within this grid item
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "40px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    textAlign: "center", // Centering text horizontally
                    padding: "10px",
                    color: "#1874DA",
                  }}
                >
                  {posts[0]?.data.missiontitle1}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "27px",
                    textAlign: "justify", // Keeping text alignment as justify
                    color: "#7A7A7A",
                    paddingTop: "10px",
                    maxWidth: "82%",
                  }}
                >
                  {posts[0]?.data.missiondesc2}
                </Typography>
              </Grid>
            </Grid>

            <Box
              sx={{
                background:
                  "linear-gradient(108.13deg, #1874DA 0%, #0D3E74 100%)",
                padding: "10px 40px 40px 40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize:fontSize,
                    fontWeight: 700,
                    lineHeight: "78px",
                    textAlign: "center",
                    color: "#FFFFFF",
                    padding: "20px 0px 12px 0px",
                  }}
                >
                  {posts[0]?.data.heading2}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    textAlign: "center",
                    color: "#FFFFFF",
                    maxWidth: "70%",
                    // wordWrap: "break-word",
                    margin: "0 auto",
                  }}
                >
                  {posts[0]?.data.chhoseusdesc}
                </Typography>
              </div>

              <Grid
                container
                spacing={2} 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px 0px 0px 10%", 
                  textAlign:'center'
                }}
              >
                {/* Repeated Grid Items */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start", 
                      justifyContent: "center",
                      marginBottom: "10px", 
                    }}
                    key={i}
                  >
                    <Typography style={titlenum}>
                      {posts[0]?.data[`chooseno${i}`]}
                    </Typography>
                    <Typography style={title}>
                      {posts[0]?.data[`choosetitle${i}`]}
                    </Typography>
                    <Typography style={desc}>
                      {posts[0]?.data[`chhosetitledesc${i}`]}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
           
          </>
        )}
     </Box>
     </div>
      <ContactUs />
      <Subscribe />
      <Footer />
    </>
  );
}

export default About;
