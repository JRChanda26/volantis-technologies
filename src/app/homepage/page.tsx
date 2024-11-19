"use client";
import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";

function HomePage() {
  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("home" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);
    const backgroundVideo = posts?.data.background_video?.url;
  console.log(backgroundVideo);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
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
        controls
      >
        {/* {backgroundVideo ? (
          <source src={backgroundVideo} type="video/mp4" />
        ) : (
          <p>Your browser does not support the video tag or the video is not available.</p>
        )} */}
      </video>

      <div style={{}}>
        <Typography
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: "80px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Staff Smarter, Grow Faster
        </Typography>
        <Typography
          style={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            marginTop: "16px",
          }}
        >
          Transform your business with strategic staffing.
          <br />
          Elevate your team&apos;s performance with our expert solutions.
          <br />
          Drive success through intelligent talent management.
          <br />
          Maximize your potential with our tailored augmentation <br />
          services.
        </Typography>
        <Button style={{ background: "#1874DA", color: "#FFFFFF" }}>
          Let’s Talk About Your Project
        </Button>
      </div>
    </div>
  );
}
export default HomePage;
