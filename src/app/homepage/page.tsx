"use client";
import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";

function HomePage() {
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("home" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const videoUrl = posts[0]?.data.background_video?.url;

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

      <div style={{  padding: "0px 50px 0px 78px",
          display: "flex",
          flexDirection: "column", 
          alignItems: "flex-start", 
          justifyContent: "center",
          gap: "16px",}}>
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
          {posts[0]?.data.title1}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            marginTop: "15px",
            
            paddingRight:{xs:'0%', sm:'50%', lg:'70%'}
          }}
        >
          {posts[0]?.data.description1}
        </Typography>
        <Button style={{ background: "#1874DA", color: "#FFFFFF" ,borderRadius:'8px',padding:'9px 23px 9px 23px',textTransform:'none',fontFamily: 'Satoshi',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '32px',
    textAlign: 'center',
    textUnderlinePosition: 'from-font',
   }}>
        {posts[0]?.data.button_text1}
        </Button>
      </div>
      
    </div>
  );
}
export default HomePage;