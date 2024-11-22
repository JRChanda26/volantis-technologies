"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

function GlobalPartnership() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("home" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const textStyle: React.CSSProperties = {
    fontFamily: "Satoshi, sans-serif",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "48px",
    textAlign: "center",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    // padding: "0px 4px 0px 30px",
  };

  return (
    <div
      style={{
        padding: "0px 50px 0px 78px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Typography
        style={{
          fontFamily: "Satoshi, sans-serif",
          fontSize: "56px",
          fontWeight: 700,
          lineHeight: "80px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "#000000",
        }}
      >
        {posts[0]?.data.title2}
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Change to column for a vertical list
          gap: "16px",
        }}
      >
        {[
          { text: posts[0]?.data.slide_text1, image: posts[0]?.data.slide_icon1 },
          { text: posts[0]?.data.slide_text2, image: posts[0]?.data.slide_icon2 },
          { text: posts[0]?.data.slide_text3, image: posts[0]?.data.slide_icon3 },
          { text: posts[0]?.data.slide_text4, image: posts[0]?.data.slide_icon4 },
          { text: posts[0]?.data.slide_text5, image: posts[0]?.data.slide_icon5 },
          { text: posts[0]?.data.slide_text6, image: posts[0]?.data.slide_icon6 },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {item.image && (
              <PrismicNextImage
                field={item.image}
                style={{ width: "40px", height: "40px" }}
                alt={item.image?.alt || ""}
              />
            )}
            <Typography style={textStyle}>{item.text}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlobalPartnership;
