"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import ContactUs from "../homepage/ContactUs";
import Footer from "../homepage/Footer";
import Subscribe from "../homepage/Subscribe";

function About() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("about_us" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);
  const titlenum: React.CSSProperties = {
    background: "none",
    borderRadius: "12px",
    padding: "8px",
    fontFamily: "Satoshi",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    color: "#FFFFFF",
    width: "100px",
    height: "64px",
    // textAlign: "center",
    border: "1px solid #FFFFFF",
    display: "flex", // Add flexbox
    justifyContent: "center", // Horizontal centering
    alignItems: "center", // Vertical centering
  };

  const title: React.CSSProperties = {
    fontFamily: "Satoshi",
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
    fontFamily: "Satoshi, sans-serif", // Include a fallback font
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "justify",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#FFFFFF",
    maxWidth: "60%",
  };
  return (
    <div
      style={{
        padding: isSmallScreen ? "20px 10px" : "40px 20px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        gap: isSmallScreen ? "8px" : "10px",
      }}
    >
      {posts.length > 0 && (
        <>
          <Typography
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: isSmallScreen ? "32px" : "56px",
              fontWeight: 700,
              color: "#1874DA",
              textAlign: "center",
            }}
          >
            {posts[0]?.data.heading}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "justify",
              marginTop: "15px",
              color: "#6D6D6D",
              padding: isSmallScreen ? "0px 10px" : "0px 50px 0px 70px",
            }}
          >
            {posts[0]?.data.description4}
          </Typography>

          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "0px 20px 10px 20px",
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

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography
                  style={{
                    fontFamily: "Satoshi",
                    fontSize: "40px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    textAlign: "left" as const,
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#1874DA",
                  }}
                >
                  {posts[0]?.data.missiontitle1}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Satoshi Variable",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "27px",
                    textAlign: "left" as const,
                    color: "#7A7A7A",
                    padding: "10px",
                  }}
                >
                  {posts[0]?.data.missiondesc1}
                </Typography>
              </div>
            </Grid>
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
                field={posts[0]?.data.missionimg1}
                alt={""}
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "space-around",
              // padding:'0px 20px 10px 20px'
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
                field={posts[0]?.data.missionimg2}
                alt={""}
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography
                  style={{
                    fontFamily: "Satoshi",
                    fontSize: "40px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    textAlign: "left" as const,
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#1874DA",
                  }}
                >
                  {posts[0]?.data.missiontitle1}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Satoshi Variable",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "27px",
                    textAlign: "left" as const,
                    color: "#7A7A7A",
                    padding: "10px",
                  }}
                >
                  {posts[0]?.data.missiondesc2}
                </Typography>
              </div>
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
                  fontFamily: "Satoshi Variable, sans-serif",
                  fontSize: "56px",
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
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "center",
                  color: "#FFFFFF",
                  maxWidth: "60%",
                  wordWrap: "break-word",
                }}
              >
                {posts[0]?.data.chhoseusdesc}
              </Typography>
            </div>

            <Grid
              container
              spacing={4}
              style={{
                display: "flex",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 0px 0px 10%",
              }}
            >
              {/* Repeated Grid Items */}
              {[
                1,
                2,
                3,
                4,
                5,
                6, 
              ].map((i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "center",
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
          <div>
            <Typography
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: isSmallScreen ? "32px" : "56px",
                fontWeight: 700,
                color: "#1874DA",
                textAlign: "center",
              }}
            >
              {posts[0]?.data.heading3}
            </Typography>

         
     <Grid
  container
  spacing={0} // Reduced spacing between Grid items
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 0px 0px 0px",
  }}
>
  <Grid
    item
    xs={12}
    sm={6}
    md={6}
    style={{
      display: "flex",
      flexDirection: "column", // Stack items vertically
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    }}
  >
    {/* First Row - First 2 Images */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "10px", 
        alignItems: "center",
        width: "100%", 
      }}
    >
      <PrismicNextImage field={posts[0]?.data.teamimage1} alt={""} />
      <PrismicNextImage field={posts[0]?.data.teamimage2} alt={""} />
    </Box>

    {/* Second Row - Last 2 Images */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "10px", // Adjust gap as needed
        alignItems: "center", // Vertically center the images in this row
        width: "100%", // Ensure full width for this row
      }}
    >
      <PrismicNextImage field={posts[0]?.data.teamimage3} alt={""} />
      <PrismicNextImage field={posts[0]?.data.teamimage4} alt={""} />
    </Box>
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
      height: "100%", 
    }}
  >
    <PrismicNextImage field={posts[0]?.data.teamimage5} alt={""} />
  </Grid>
  <Grid
    item
    xs={12}
    sm={12}
    md={12}> <Typography
    sx={{
      fontFamily: "Satoshi, sans-serif",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "30px",
      textAlign: "justify",
      marginTop: "15px",
      color: "#6D6D6D",
      padding: isSmallScreen ? "0px 10px" : "0px 50px 0px 70px",
    }}
  >
    {posts[0]?.data.teamdesc}
  </Typography></Grid>
 
</Grid>


          </div>
          <ContactUs/>
      <Subscribe/>
      <Footer/>
        </>
      )}
    </div>
  );
}

export default About;
