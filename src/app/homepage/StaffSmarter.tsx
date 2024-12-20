"use client";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";

// import Subscribe from "./Subscribe";
// import GlobalPartnership from "./GlobalPartnerships";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import Footer from "./Footer";
// import LatestNews from "./LatestNews";
// import ServicesOfferedbyUs from "./ServicesOfferedbyUs";
// import Testimonials from "./Testimonials";
// import Header from "./Header";

function StaffSmarter() {
     const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
       const response = await client.getAllByType("home" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  console.log(posts.slide_icon1);

  const videoUrl = posts[0]?.data.background_video?.url;
  const theme = useTheme();

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
  return (
    <>
      {/* <Header /> */}
      <div
        style={{
         
          position: "relative",
          width: "100%",
          height: "100vh",
          // overflow: "hidden",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
          autoPlay
          loop
          muted
          // controls
        >
          {videoUrl ? (
            <source src={videoUrl} type="video/mp4" />
          ) : (
            <p>
              Your browser does not support the video tag or the video is not
              available.
            </p>
          )}
        </video>
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          zIndex: -1, 
        }}
      ></div>
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: fontSize,
              fontWeight: 700,
              // lineHeight: "80px",
              textAlign: "left",
              // paddingBottom:'30px'
              
            }}
          >
            {posts[0]?.data.title1}
          </Typography>
          <Typography
            sx={{

              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
              paddingRight: { xs: "0%", sm: "50%", lg: "60%" },
              // paddingRight: { xs: "0%", sm: "40%", lg: "50%" },
            }}
          >
            {posts[0]?.data.description1}
          </Typography>
        </div>
        {/* {data.slide_text1} */}
      </div>
      {/* <GlobalPartnership />
      <ServicesOfferedbyUs />
      <AboutUs />
      <Testimonials />
      <LatestNews />
      <ContactUs />
      <Subscribe />

      <Footer /> */}
    </>
  );
}
export default StaffSmarter;
