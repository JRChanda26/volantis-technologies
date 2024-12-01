"use client";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import Subscribe from "./Subscribe";
import GlobalPartnership from "./GlobalPartnerships";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import LatestNews from "./LatestNews";
import ServicesOfferedbyUs from "./ServicesOfferedbyUs";
import Testimonials from "./Testimonials";
import Header from "./Header";

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

  return (
    <>
      <Header />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
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
            zIndex: -1,
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
            padding: "0px 50px 0px 78px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "flex-start",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: "80px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            {posts[0]?.data.title1}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              marginTop: "15px",

              paddingRight: { xs: "0%", sm: "50%", lg: "70%" },
            }}
          >
            {posts[0]?.data.description1}
          </Typography>
        </div>
        {/* {data.slide_text1} */}
      </div>
      <GlobalPartnership />
      <ServicesOfferedbyUs />
      <AboutUs />
      <Testimonials />
      <LatestNews />
      <ContactUs />
      <Subscribe />

      <Footer />
    </>
  );
}
export default StaffSmarter;
