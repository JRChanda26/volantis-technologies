"use client";

import React, { useEffect, useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { client } from "../../../lib/prismic-configuration";

function GlobalPartnership() {
  const [posts, setPosts] = useState<any>("");

  const theme = useTheme();
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

  const items = isDesktop
    ? "16px"
    : isLaptop
      ? "14px"
      : isTablet
        ? "10px"
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
    fontSize: items,
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "center",
    color: "#000000",
  };

  return (
    <Box
      sx={{
        padding: "50px 20px 49px 58px",
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

      <Box
        sx={{
          display: "flex",
          overflowX: isMobile ? "auto" : "hidden",
          position: "relative",
          flexWrap: "nowrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            animation: "slide 20s linear infinite", // Controls the animation speed
            gap: "24px",
          }}
        >
          {/* Iterate over the items */}
          {[
            {
              text: posts[0]?.data.slide_text1,
              image: posts[0]?.data.slide_icon1,
            },
            {
              text: posts[0]?.data.slide_text2,
              image: posts[0]?.data.slide_icon2,
            },
            {
              text: posts[0]?.data.slide_text3,
              image: posts[0]?.data.slide_icon3,
            },
            {
              text: posts[0]?.data.slide_text4,
              image: posts[0]?.data.slide_icon4,
            },
            {
              text: posts[0]?.data.slide_text5,
              image: posts[0]?.data.slide_icon5,
            },
            {
              text: posts[0]?.data.slide_text6,
              image: posts[0]?.data.slide_icon6,
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexShrink: 0,
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

          {/* Duplicate the items for infinite scroll */}
          {[
            {
              text: posts[0]?.data.slide_text1,
              image: posts[0]?.data.slide_icon1,
            },
            {
              text: posts[0]?.data.slide_text2,
              image: posts[0]?.data.slide_icon2,
            },
            {
              text: posts[0]?.data.slide_text3,
              image: posts[0]?.data.slide_icon3,
            },
            {
              text: posts[0]?.data.slide_text4,
              image: posts[0]?.data.slide_icon4,
            },
            {
              text: posts[0]?.data.slide_text5,
              image: posts[0]?.data.slide_icon5,
            },
            {
              text: posts[0]?.data.slide_text6,
              image: posts[0]?.data.slide_icon6,
            },
          ].map((item, index) => (
            <Box
              key={`duplicate-${index}`}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexShrink: 0,
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

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              -30%
            ); /* Move by 50% of the container width for seamless looping */
          }
        }
      `}</style>
    </Box>
  );
}

export default GlobalPartnership;
