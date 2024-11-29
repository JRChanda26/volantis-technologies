"use client";
import React, { useEffect, useState } from "react";
import Header from "../homepage/Header";
import Subscribe from "../homepage/Subscribe";
import Footer from "../homepage/Footer";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";
import { Box, Grid, Typography } from "@mui/material";

const OurBlogs: React.FC = () => {
  const [posts, setPosts] = useState<any>([]); // Initialize posts state as an empty array

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("blog" as any);
      setPosts(response);
      // setTotalPosts(response.length); // Set total number of posts
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
        {/* Blogs Content Section */}
        <div style={{ display: "flex", gap: "20px" }}>
          {/* Main Blog Section with Overlay Text */}
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
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ fontSize: "36px", margin: "0" }}>
                {posts[0]?.data.heading1}
              </h1>
              <p style={{ fontSize: "16px", margin: "0" }}>
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
            style={{ textAlign: "center", fontSize: "32px", color: "#007BFF" }}
          >
            {posts[0]?.data.heading2}
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "16px",
              color: "#666",
              paddingBottom: "10px",
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
            <Grid
              item
              // key={index}
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
                  minWidth: "100%",
                  boxShadow: "0px 10px 12px 0px #0000001A",
                  borderRadius: "4px",
                  position: "relative",
                  height: "auto",
                  padding: "0px 0px 10px 0px",
                }}
              >
                {/* Card Image */}
                <PrismicNextImage
                  field={posts[0]?.data.blogimg1}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px 4px 0 0",
                  }}
                />

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
                  <Typography style={title}>
                    {posts[0]?.data.blogtitle1}
                  </Typography>
                  <Typography style={description}>
                    {posts[0]?.data.blogdesc1}
                  </Typography>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#1874DA",
                      }}
                    >
                      {posts[0]?.data.blogdate1}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid
              item
              // key={index}
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
                  minWidth: "100%",
                  boxShadow: "0px 10px 12px 0px #0000001A",
                  borderRadius: "4px",
                  position: "relative",
                  height: "auto",
                  padding: "0px 0px 10px 0px",
                }}
              >
                {/* Card Image */}
                <PrismicNextImage
                  field={posts[0]?.data.blogimg2}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px 4px 0 0",
                  }}
                />

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
                  <Typography style={title}>
                    {posts[0]?.data.blogtitle2}
                  </Typography>
                  <Typography style={description}>
                    {posts[0]?.data.blogdesc2}
                  </Typography>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#1874DA",
                      }}
                    >
                      {posts[0]?.data.blogdate2}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid
              item
              // key={index}
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
                  minWidth: "100%",
                  boxShadow: "0px 10px 12px 0px #0000001A",
                  borderRadius: "4px",
                  position: "relative",
                  height: "auto",
                  padding: "0px 0px 10px 0px",
                }}
              >
                {/* Card Image */}
                <PrismicNextImage
                  field={posts[0]?.data.blogimg3}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px 4px 0 0",
                  }}
                />

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
                  <Typography style={title}>
                    {posts[0]?.data.blogtitle3}
                  </Typography>
                  <Typography style={description}>
                    {posts[0]?.data.blogdesc3}
                  </Typography>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#1874DA",
                      }}
                    >
                      {posts[0]?.data.blogdate3}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>{" "}
            <Grid
              item
              // key={index}
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
                  minWidth: "100%",
                  boxShadow: "0px 10px 12px 0px #0000001A",
                  borderRadius: "4px",
                  position: "relative",
                  height: "auto",
                  padding: "0px 0px 10px 0px",
                }}
              >
                {/* Card Image */}
                <PrismicNextImage
                  field={posts[0]?.data.blogimg4}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px 4px 0 0",
                  }}
                />

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
                  <Typography style={title}>
                    {posts[0]?.data.blogtitle4}
                  </Typography>
                  <Typography style={description}>
                    {posts[0]?.data.blogdesc4}
                  </Typography>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#1874DA",
                      }}
                    >
                      {posts[0]?.data.blogdate4}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid><Grid
              item
              // key={index}
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
                  minWidth: "100%",
                  boxShadow: "0px 10px 12px 0px #0000001A",
                  borderRadius: "4px",
                  position: "relative",
                  height: "auto",
                  padding: "0px 0px 10px 0px",
                }}
              >
                {/* Card Image */}
                <PrismicNextImage
                  field={posts[0]?.data.blogimg5}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px 4px 0 0",
                  }}
                />

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
                  <Typography style={title}>
                    {posts[0]?.data.blogtitle5}
                  </Typography>
                  <Typography style={description}>
                    {posts[0]?.data.blogdesc5}
                  </Typography>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#1874DA",
                      }}
                    >
                      {posts[0]?.data.blogdate5}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid><Grid
              item
              // key={index}
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
                  minWidth: "100%",
                  boxShadow: "0px 10px 12px 0px #0000001A",
                  borderRadius: "4px",
                  position: "relative",
                  height: "auto",
                  padding: "0px 0px 10px 0px",
                }}
              >
                {/* Card Image */}
                <PrismicNextImage
                  field={posts[0]?.data.blogimg6}
                  alt={""}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "4px 4px 0 0",
                  }}
                />

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
                  <Typography style={title}>
                    {posts[0]?.data.blogtitle6}
                  </Typography>
                  <Typography style={description}>
                    {posts[0]?.data.blogdesc6}
                  </Typography>

                  {/* Footer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#1874DA",
                      }}
                    >
                      {posts[0]?.data.blogdate6}
                    </Typography>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default OurBlogs;
