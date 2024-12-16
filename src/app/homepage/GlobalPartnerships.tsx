
"use client";

import React, { useEffect, useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { client } from "../../../lib/prismic-configuration";

function GlobalPartnership() {
  const [posts, setPosts] = useState<any>("");

  const theme = useTheme();
  // Define breakpoints using Material-UI's theme breakpoints
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const fontSize = isDesktop
    ? "56px"
    : isLaptop
    ? "48px"
    : isTablet
    ? "40px"
    : "32px";

  const itemsFontSize = isDesktop
    ? "16px"
    : isLaptop
    ? "14px"
    : isTablet
    ? "12px"
    : "10px";

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("home" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const textStyle: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: itemsFontSize,
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "center",
    color: "#000000",
  };

  return (
    <Box
      sx={{
        padding: "40px 59px 49px 58px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        background: "#F6F6F6",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: fontSize,
          fontWeight: 700,
          lineHeight: { xs: "40px", sm: "64px", md: "70px" },
          textAlign: "center",
          color: "#000000",
          paddingBottom: "37px",
        }}
      >
        {posts[0]?.data.title2}
      </Typography>

      {/* Container for the sliding items */}
      <Box
        sx={{
          display: "flex",
          overflow: "hidden", // Hide overflow to prevent showing off-screen items
          justifyContent:'center',
          
        }}
      >
        {/* Animating container for continuous sliding */}
        <Box
          sx={{
            display: "flex",
            overflowX: isMobile ? "auto" : "hidden",

            // animation: "slide 5s linear infinite", // Continuous sliding animation
            // alignItems:'center'
          }}
        >  
        {/* {[ 
          { text: posts[0]?.data.slide_text1, image: posts[0]?.data.slide_icon1 },
          { text: posts[0]?.data.slide_text2, image: posts[0]?.data.slide_icon2 },
          { text: posts[0]?.data.slide_text3, image: posts[0]?.data.slide_icon3 },
          { text: posts[0]?.data.slide_text4, image: posts[0]?.data.slide_icon4 },
          { text: posts[0]?.data.slide_text5, image: posts[0]?.data.slide_icon5 },
          { text: posts[0]?.data.slide_text6, image: posts[0]?.data.slide_icon6 },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              flexShrink: 0, // Prevent the items from shrinking
              paddingRight: "24px", // Space between items
            }}
          >
            {item.image && (
              <PrismicNextImage
                field={item.image}
                style={{ width: "40px", height: "40px" }}
                alt={item.image?.alt || ""}
              />
            )}
            <Typography style={textStyle}>{item.text}</Typography>
          </Box>
        ))} */}
          {[ 
            { text: posts[0]?.data.slide_text1, image: posts[0]?.data.slide_icon1 },
            { text: posts[0]?.data.slide_text2, image: posts[0]?.data.slide_icon2 },
            { text: posts[0]?.data.slide_text3, image: posts[0]?.data.slide_icon3 },
            { text: posts[0]?.data.slide_text4, image: posts[0]?.data.slide_icon4 },
            { text: posts[0]?.data.slide_text5, image: posts[0]?.data.slide_icon5 },
            { text: posts[0]?.data.slide_text6, image: posts[0]?.data.slide_icon6 },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexShrink: 0, // Prevent the items from shrinking
                paddingRight: "24px", // Adding some space between items for clarity
              }}
            >
              {item.image && (
                <PrismicNextImage
                  field={item.image}
                  style={{ width: "40px", height: "40px" }}
                  alt={item.image?.alt || ""}
                />
              )}
              <Typography style={textStyle}>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Adding CSS for the sliding animation using a regular <style> tag */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0); /* Start from the initial position */
            }
            -100% {
              transform: translateX(100%); /* Move all items off-screen to the left */
            }
          }
        `}
      </style>
    </Box>
  );
}

export default GlobalPartnership;
