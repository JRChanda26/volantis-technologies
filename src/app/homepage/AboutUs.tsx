"use client";
import React, { useEffect, useState } from "react";

import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { client } from "../../../lib/prismic-configuration";

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
  // Define breakpoints using Material-UI's theme breakpoints
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // Desktop and above
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg")); // Laptop
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Tablet

  const fontSize = isDesktop
    ? "56px"
    : isLaptop
    ? "48px"
    : isTablet
    ? "40px"
    : "32px"; 

  const title: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: isSmallScreen ? "14px" : "16px",
    fontWeight: 400,
    lineHeight: isSmallScreen ? "20px" : "24px",
    textAlign: "center",

    color: "#FFFFFF",
  };

  const description: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: fontSize,
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
        padding: "84px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // gap: isSmallScreen ? "8px" : "16px",
        background: "#F6F6F6",
      }}
    >
      {posts.length > 0 && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize:fontSize,
                fontWeight: 700,
                color: "#000000",
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
                width:'100%',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "21px",
                  textAlign: "center",
                  marginTop: "15px",
                  color: "#6D6D6D",
                  // alignItems: "center",
                maxWidth:'90%',
                  padding: isSmallScreen ? "0px 15px" : "0px 200px 0px 82px",
                }}
              >
                {posts[0]?.data.description}
              </Typography>
            </div>
          </div>

          <div style={{ position: "relative", width: "100%",marginTop:'2%' }}>
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
                flexDirection: isSmallScreen ? "row" : "row",
                justifyContent: "center",
                gap: isSmallScreen ? "20px" : "90px",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography style={title}>{posts[0]?.data.title1}</Typography>
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
                <Typography style={title}>{posts[0]?.data.title2}</Typography>
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
                <Typography style={title}>{posts[0]?.data.title3}</Typography>
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
