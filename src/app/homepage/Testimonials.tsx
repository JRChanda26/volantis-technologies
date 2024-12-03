"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

function Testimonials() {
  const [posts, setPosts] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Add state for the current testimonial index

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("testimonials" as any);
      setPosts(response); // Update with all the testimonials
    };
    fetchPosts();
  }, []);

  // Function to handle the left icon click
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return posts.length - 1; // Loop to the last testimonial
      }
      return prevIndex - 1; // Go to the previous testimonial
    });
  };

  // Function to handle the right icon click (optional, if you want to add this functionality)
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === posts.length - 1) {
        return 0; // Loop back to the first testimonial
      }
      return prevIndex + 1; // Go to the next testimonial
    });
  };

  return (
    <div
      style={{
        padding: "0px 50px 20px 78px",
        display: "flex",
        flexDirection: "column",
        background: "#F6F6F6",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: "56px",
            fontWeight: 700,
            textAlign: "center",
            color: "#000000",
          }}
        >
          {posts[currentIndex]?.data.heading}
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
          {posts[currentIndex]?.data.description}
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

        <PrismicNextImage
          field={posts[currentIndex]?.data.right_icon}
          alt={posts[currentIndex]?.data.right_icon?.alt || "Right Icon"}
          onClick={handleRightClick} // Optional: Add onClick handler to right icon
          style={{
            width: "30px",
            height: "20px",
            cursor: "pointer ",
          }}
        />
       

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
            field={posts[currentIndex]?.data.profileimage}
            alt={posts[currentIndex]?.data.profileimage?.alt || "Profile Image"}
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
            }}
          >
            {posts[currentIndex]?.data.image_description}
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
            {posts[currentIndex]?.data.image_name}
          </Typography>
        </div>

        {/* Right Icon (optional) */}
        <PrismicNextImage
          field={posts[currentIndex]?.data.left_icon}
          alt={posts[currentIndex]?.data.left_icon?.alt || "Left Icon"}
          onClick={handleLeftClick} // Add onClick handler to left icon
          style={{
            width: "30px",
            height: "20px",
            cursor: "pointer ",
          }}
        />
      </div>
    </div>
  );
}

export default Testimonials;
