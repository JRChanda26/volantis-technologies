"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Typography, Box, Grid } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

function GlobalPartnership() {
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("home" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const textStyle: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "center",
   
  };

  return (
    <Box
      sx={{
        padding: "40px 59px 49px 58px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        gap: "32px",
        background: "#F6F6F6",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: { xs: "32px", sm: "48px", md: "56px" },
          fontWeight: 700,
          lineHeight: { xs: "40px", sm: "64px", md: "80px" },
          textAlign: "center",
          color: "#000000",
          paddingBottom: "37px",
        }}
      >
        {posts[0]?.data.title2}
      </Typography>

      <Grid
        container
        spacing={4}
        // spacing={{ xs: 4, sm: 6, md: 8 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "stretch", 
        }}
      >
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
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {item.image && (
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <PrismicNextImage
                  field={item.image}
                  style={{ width: "40px", height: "40px" }}
                  alt={item.image?.alt || ""}
                />
              </Box>
            )}
            <Typography style={textStyle}>{item.text}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GlobalPartnership;
