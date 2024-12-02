"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

function AboutUs() {
  
  const [posts, setPosts] = useState<any>([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchPosts = async () => {
      
      const response = await client.getAllByType("about_us" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const title: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: isSmallScreen ? "14px" : "16px",
    fontWeight: 400,
    lineHeight: isSmallScreen ? "20px" : "24px",
    textAlign: "center",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#FFFFFF",
  };

  const description: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: isSmallScreen ? "32px" : "56px",
    fontWeight: 700,
    lineHeight: isSmallScreen ? "42px" : "78px",
    textAlign: "center",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#1874DA",
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        // gap: isSmallScreen ? "8px" : "16px",
        background: '#F6F6F6'
      }}
    >
      {posts.length > 0 && (
        <>
        <div style={{display:'flex',justifyContent:'center',textAlign:'center',flexDirection:'column'}}>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: isSmallScreen ? "32px" : "56px",
              fontWeight: 700,
              color: "#000000",
              textAlign: "center",
            }}
          >
            {posts[0]?.data.heading}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "center",              marginTop: "15px",
              color: "#6D6D6D",
            maxWidth:'58%',
            marginLeft: 'auto',  // Aligns the description to the center
      marginRight: 'auto', // Ensures the description is centered
              // padding: isSmallScreen ? "0px 10px" : "0px 50px 0px 70px",
            }}
          >
            {posts[0]?.data.description}
          </Typography></div>
          
          <div style={{ position: "relative", width: "100%" }}>
            {/* Prismic Image */}
            <PrismicNextImage
              field={posts[0]?.data.aboutusimage}
              alt={posts[0]?.data.aboutusimage?.alt || "Default alt text"}
              style={{
                width: "100%",
                height: "auto",
              }}
            />

            {/* Overlay Content */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: isSmallScreen ? "column" : "row",
                justifyContent: "center",
                gap: isSmallScreen ? "20px" : "90px",
                width: "100%",
                textAlign: "center",
              }}
            >
              {/* Title 1 and Description 1 */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography variant="h6" style={title}>
                  {posts[0]?.data.title1}
                </Typography>
                <Typography style={description}>
                  {posts[0]?.data.description1}
                </Typography>
              </Box>

              {/* Title 2 and Description 2 */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography variant="h6" style={title}>
                  {posts[0]?.data.title2}
                </Typography>
                <Typography style={description}>
                  {posts[0]?.data.description2}
                </Typography>
              </Box>

              {/* Title 3 and Description 3 */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography variant="h6" style={title}>
                  {posts[0]?.data.title3}
                </Typography>
                <Typography style={description}>
                  {posts[0]?.data.description3}
                </Typography>
              </Box>
            </Box>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutUs;
