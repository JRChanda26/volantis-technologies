"use client";
import React, { useEffect, useState } from "react";
import Header from "../homepage/Header";
import Subscribe from "../homepage/Subscribe";
import Footer from "../homepage/Footer";

import { PrismicNextImage } from "@prismicio/next";
import { Box, Grid, Typography } from "@mui/material";
import { client } from "../../../lib/prismic-configuration";

const OurBlogs: React.FC = () => {
  const [posts, setPosts] = useState<any>([]); // Initialize posts state as an empty array

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("blog" as any);
      setPosts(response);
      // setTotalPosts(response.length); 
    };
    fetchPosts();
  }, []);

  const description: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "left",
    color: "#7A7A7A",
  };

  const title: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 700,
    textAlign: "left",
    color: "#000000",
  };

  return (
    <>
      <Header />
      <div style={{ padding: "20px", fontFamily: "Poppins" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 2, position: "relative" }}>
            <PrismicNextImage
              field={posts[0]?.data.blogbgimg}
              alt={""}
              style={{
                width: "100%",
                borderRadius: "8px",
                height: "710px",
                objectFit: "cover",
              }}
            />
            {/* Overlay Text */}
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "25%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ fontSize: "36px", margin: "0" ,fontFamily: "Poppins"}}>
                {posts[0]?.data.heading1}
              </h1>
              <p style={{ fontSize: "16px", margin: "0",fontFamily: "Poppins" }}>
                {posts[0]?.data.description1}
              </p>
            </div>
          </div>

          {/* Side Blogs Section */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <div style={{ flex: 1 }}>
              <PrismicNextImage
                field={posts[0]?.data.blogbgimg2}
                alt={""}
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <PrismicNextImage
                field={posts[0]?.data.blogbgimg3}
                alt={""}
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>

        {/* New Section for Blog Cards */}
        <div style={{ marginTop: "40px" }}>
          {/* Title */}
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: "78px",
              textAlign: "center",
              color: "#007BFF",
              fontFamily: "Poppins",
            }}
          >
            {posts[0]?.data.heading2}
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "16px",
              paddingBottom: "10px",
              fontWeight: 400,
              lineHeight: "21.6px",
              color: "#6D6D6D",
            }}
          >
            {posts[0]?.data.description2}
          </p>

          {/* Blog Cards */}
          <Grid
            container
            spacing={4}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
              const card = {
                image: posts[0]?.data[`blogimg${index + 1}`],
                title: posts[0]?.data[`blogtitle${index + 1}`],
                description: posts[0]?.data[`blogdesc${index + 1}`],
                date: posts[0]?.data[`blogdate${index + 1}`],
                alt: posts[0]?.data[`blogimg${index + 1}_alt`] || "",
              };

              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={3.5}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      maxWidth: "100%",
                      boxShadow: "0px 10px 12px 0px #0000001A",
                      borderRadius: "4px",
                      position: "relative",
                      height: "auto",
                      padding: "0px 0px 10px 0px",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      cursor: "pointer",
                    }}
                  >
                    {/* Card Image */}
                    {card.image && (
                      <PrismicNextImage
                        field={card.image}
                        alt={card.alt}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "4px 4px 0 0",
                        }}
                      />
                    )}

                    {/* Card Content */}
                    <div
                      style={{
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <Typography style={title}>{card.title}</Typography>
                      <Typography style={description}>
                        {card.description}
                      </Typography>

                      {/* Footer */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "auto",
                        }}
                      >
                        <Typography
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#1874DA",
                            paddingTop: "5px",
                          }}
                        >
                          {card.date}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default OurBlogs;
