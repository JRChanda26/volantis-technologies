"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";
import { Button, Typography } from "@mui/material";

function OurBlogs(){
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("blog" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);
  const description: React.CSSProperties = {
    fontFamily: "Satoshi",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "left",
    color: "#7A7A7A",
  };

  const title: React.CSSProperties = {
    fontFamily: "Satoshi",
    fontSize: "16px",
    fontWeight: 700,
    textAlign: "left",
    color: "#000000",
  };

  return (
    <div
      style={{
        padding: "40px 50px 20px 78px",
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
            fontFamily: "Satoshi",
            fontSize: "56px",
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          {posts[0]?.data.heading1}
        </Typography>

       
        <Typography
          style={{
            fontFamily: "Helvetica",
            fontSize: "16px",
            fontWeight: 400,
            textAlign: "left",
            color: "#6D6D6D",
            padding: "18px 0px 50px 0px",
          }}
        >
          {posts[0]?.data.description1}
        </Typography>
      </div>

      </div>
    
      

   
);
}
export default OurBlogs