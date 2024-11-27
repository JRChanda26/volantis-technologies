"use client";
import { Box, Button, Grid, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";

function Contact() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("contact" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };
 const label : React.CSSProperties={ fontFamily: "Satoshi Variable, sans-serif",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#1874DA",}
  return (
    <div>
        <PrismicNextImage
                field={posts[0]?.data.bgimg}
                alt={""}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
    <div
      style={{
        padding: isSmallScreen ? "20px 10px" : "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: isSmallScreen ? "16px" : "24px",
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
            {posts[0]?.data.title}
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
            {posts[0]?.data.description}
          </Typography>
        </>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
        //   width: isSmallScreen ? "100%" : "60%",
          display: "flex",
          flexDirection: "column",
        //   gap: isSmallScreen ? "16px" : "24px",
        }}
      >
        <Grid container spacing={isSmallScreen ? 2 : 3}>
          {/* First Row: First Name and Last Name */}
          <Grid item xs={12} sm={6}>
            <Typography style={label}>{posts[0]?.data.label1}</Typography>
            <TextField
              fullWidth
            //   label="First Name"
            placeholder={posts[0]?.data.placeholder1 || "Enter your first name"}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography style={label}>{posts[0]?.data.label2}</Typography>

            <TextField
              fullWidth
           
              placeholder={posts[0]?.data.placeholder2 || "Enter your last name"}
              variant="outlined"
            />
          </Grid>

          {/* Second Row: Email and Contact Number */}
          <Grid item xs={12} sm={6}>
          <Typography style={label}>{posts[0]?.data.label3}</Typography>

            <TextField
              fullWidth
              placeholder={posts[0]?.data.placeholder3 || "Enter your email"}

              type="email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography style={label}>{posts[0]?.data.label4}</Typography>

            <TextField
              fullWidth
            //   label="Contact Number"
            placeholder={posts[0]?.data.placeholder4 || "Enter your contact number"}
              
              type="tel"
              variant="outlined"
            />
          </Grid>

          {/* Third Row: Message */}
          <Grid item xs={12}>
          <Typography style={label}>{posts[0]?.data.label5}</Typography>

            <TextField
              fullWidth
            //   label="Message"
            placeholder={posts[0]?.data.placeholder5 || "Enter your message"}
            
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" marginTop="20px">
          <Button type="submit" variant="contained" style={{fontFamily: "Satoshi",
    fontSize: "14px",
    textTransform: "none",
    fontWeight: 700,
    color: "#FFFFFF",
    background: "#1874DA",
    
    cursor: "pointer",
    borderRadius: "8px",
    padding: "10px 100px",
    display: "flex",
    alignItems: "center",
    gap: "8px",}}>
          
          {posts[0]?.data.button}
          </Button>
        </Box>
      </form>
    </div>
    </div>
  );
}

export default Contact;
