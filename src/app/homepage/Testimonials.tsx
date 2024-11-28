"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

function Testimonials() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Typography
        style={{
           fontFamily: "Poppins",
          fontSize: "56px",
          fontWeight: 700,
          textAlign: "left",
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
          textAlign: "justify",
          color: "#6D6D6D",
        }}
      >
        {posts[0]?.data.description}
      </Typography>
      <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: "20px",
  }}
>
  {/* Left Icon */}
  <PrismicNextImage
    field={posts[0]?.data.right_icon}
    alt={posts[0]?.data.right_icon?.alt || "Right Icon"}
    style={{
      width: "30px",
      height: "auto",cursor: 'pointer '
    }}
  />
  

  {/* Center Content */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      flex: 1, // Ensures the center content takes available space
    }}
  >
    <PrismicNextImage
      field={posts[0]?.data.profileimage}
      alt={posts[0]?.data.profileimage?.alt || "Profile Image"}
      style={{
        // width: "150px",
        // height: "auto",
        // borderRadius: "50%", // Optional for circular profile image
      }}
    />
    <Typography
      sx={{
         fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        textAlign: "justify",
        marginTop: "15px",
        color: "#000000",
        padding:  "0px 100px 0px 200px",
      }}
    >
      {posts[0]?.data.image_description}
    </Typography>
    <Typography
      sx={{
         fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        textAlign: "justify",
        color: "#1874DA",
        marginTop: "10px",
      }}
    >
      {posts[0]?.data.image_name}
    </Typography>
  </div>

  {/* Right Icon */}
  <PrismicNextImage
    field={posts[0]?.data.left_icon}
    alt={posts[0]?.data.left_icon?.alt || "Left Icon"}
    style={{
      width: "30px",
      height: "auto",cursor: 'pointer '
    }}
  />
</div>


    </div>
  );
}

export default Testimonials;
