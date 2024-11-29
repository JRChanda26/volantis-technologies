"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

function Testimonials() {
     const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
       const response = await client.getAllByType("testimonials" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  return (
    <div
      style={{
        padding: "0px 50px 20px 78px",
        display: "flex",
        flexDirection: "column",
         
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <div style={{
       
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        
      }}>
      <Typography
        style={{
           fontFamily: "Poppins",
          fontSize: "56px",
          fontWeight: 700,
          textAlign: "center",
          color: "#000000",
        }}
      >
        {posts[0]?.data.heading}
      </Typography>
      <Typography
        sx={{
           fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: 400,
          textAlign: "center",
          color: "#6D6D6D",
        }}
      >
        {posts[0]?.data.description}
      </Typography>
      </div>
      <div
  style={{
    display: "flex",
     
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  }}
>
  {/* Left Icon */}
  {/* <PrismicNextImage
    field={posts[0]?.data.right_icon}
    alt={posts[0]?.data.right_icon?.alt || "Right Icon"}
    style={{
      width: "30px",
      height: "auto",cursor: 'pointer '
    }}
  /> */}
  

  {/* Center Content */}
  <div
    style={{
      display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flex: 1, // Ensures the center content takes available space
    justifyContent: "center",  
    }}
  >
     <PrismicNextImage
    field={posts[0]?.data.profileimage}
    alt={posts[0]?.data.profileimage?.alt || "Profile Image"}
    style={{
      width: "auto",  
      height: "150px", 
      display: "block", 
      marginLeft: "auto", 
      marginRight: "auto", 
    }}
  />
    <Typography
      sx={{
         fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        textAlign: "center",
        marginTop: "15px",
        color: "#000000",
        // padding:  "0px 100px 0px 200px",
      }}
    >
      {posts[0]?.data.image_description}
    </Typography>
    <Typography
      sx={{
         fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        textAlign: "center",
        color: "#1874DA",
        marginTop: "10px",
      }}
    >
      {posts[0]?.data.image_name}
    </Typography>
  </div>

  {/* Right Icon */}
  {/* <PrismicNextImage
    field={posts[0]?.data.left_icon}
    alt={posts[0]?.data.left_icon?.alt || "Left Icon"}
    style={{
      width: "30px",
      height: "auto",cursor: 'pointer '
    }}
  /> */}
</div>


    </div>
  );
}

export default Testimonials;
