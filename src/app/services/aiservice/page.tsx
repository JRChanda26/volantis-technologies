"use client";

import { useState, useEffect } from "react";
import { client } from "../../../../prismic-configuration";
import { Button, Grid, Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import Header from "@/app/homepage/Header";

function GenerativeAIServices() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("generativeaiservices" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const textStyle: React.CSSProperties = {
    fontFamily: "Satoshi",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "left" as const,
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#1874DA",
    padding: "10px",
  };

  return (
    <><Header /><div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        flexDirection: "column",
        height: "100vh", // This ensures it takes full viewport height
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center", // Centers the heading and description
        }}
      >
        <Typography
          style={{
            fontFamily: "Satoshi",
            fontSize: "56px",
            fontWeight: 700,
            color: "#1874DA",
          }}
        >
          {posts[0]?.data.heading}
        </Typography>

        <Typography
          style={{
            fontFamily: "Helvetica",
            fontSize: "16px",
            fontWeight: 400,
            color: "#6D6D6D",
            padding: "18px 0px 50px 0px",
          }}
        >
          {posts[0]?.data.description}
        </Typography>
      </div>

      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "space-evenly", // Centers the grid items horizontally
          textAlign: "center", // Centers the text inside the grid items
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          style={{
            display: "flex",
            justifyContent: "center", // Centers the image horizontally
          }}
        >
          <PrismicNextImage
            field={posts[0]?.data.generativeaiservicesimg}
            alt={""}
            style={{ maxWidth: "100%", height: "auto" }} // Make the image responsive
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

            padding: "0 20px", // Adds spacing around text
          }}
        >
          <div>
            <Typography
              style={{
                fontFamily: "Satoshi Variable",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "15px",
                textAlign: "left" as const,

                color: "#7A7A7A",
                padding: '24px 10% 24px 0px'
              }}
            >
              {posts[0]?.data.imagedesc}
            </Typography>
            <Typography
              style={{
                fontFamily: "Satoshi",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                textAlign: "left" as const,
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
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
                fontFamily: "Satoshi",
                fontSize: "18px",
                textTransform: "none",
                fontWeight: 400,
                color: "#FFFFFF",
                background: "#1874DA",
                cursor: "pointer",
                borderRadius: "6px",
                padding: "10px 50px",
                display: "flex",
                marginTop: "20px",
              }}
            >
              {posts[0]?.data.button}
            </Button>
          </div>
        </Grid>
      </Grid>
    </div></>
  );
}

export default GenerativeAIServices;
