"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";
import Header from "../homepage/Header";
import ContactUs from "../homepage/ContactUs";
import Footer from "../homepage/Footer";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

function Career() {
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("carrier" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div style={{ paddingTop: "60px", background: "#F6F6F6" }}>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "50px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{
              display: "flex",
              // alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "56px",
                fontWeight: 700,
                lineHeight: "60px",
                textAlign: "center",
                color: "#1874DA",
              }}
            >
              {posts[0]?.data.heading1}
            </Typography>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "22px",
                textAlign: "justify",
                color: "#6D6D6D",
                padding: "15px",
              }}
            >
              {posts[0]?.data.description1}
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PrismicNextImage
              field={posts[0]?.data.img1}
              alt={""}
              style={{
                flex: "1",
                borderRadius: "10px",
                maxWidth: "100%",
                objectFit: "cover",
                marginLeft: "1rem",
                maxHeight: "500px",
              }}
            />
          </Grid>{" "}
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "130px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={5.5}
            sx={{
              display: "flex",
              // justifyContent:'center',
              flexDirection: "column",
            }}
          >
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "60px",
                textAlign: "left",
                color: "#1874DA",
              }}
            >
              {posts[0]?.data.heading2}
            </Typography>
            <details style={{ margin: "1rem 0" }}>
              <summary
                style={{
                  fontFamily: "Poppins",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  cursor: "pointer",
                  color: "#1874DA",
                }}
              >
                {posts[0]?.data.oppertunity1}
              </summary>
              <p
                style={{
                  marginTop: "0.5rem",
                  color: "#6D6D6D",
                  fontFamily: "Poppins",
                }}
              >
                {posts[0]?.data.role1}
              </p>
            </details>
            <details style={{ margin: "1rem 0" }}>
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: "1.25rem",
                  color: "#1874DA",
                  fontFamily: "Poppins",
                }}
              >
                {posts[0]?.data.oppertunity2}
              </summary>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontFamily: "Poppins",
                  color: "#6D6D6D",
                }}
              >
                {posts[0]?.data.role2}
              </p>
            </details>
            <details style={{ margin: "1rem 0" }}>
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: "1.25rem",
                  color: "#1874DA",
                  fontFamily: "Poppins",
                }}
              >
                {posts[0]?.data.oppertunity3}
              </summary>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontFamily: "Poppins",
                  color: "#6D6D6D",
                }}
              >
                {posts[0]?.data.role3}
              </p>
            </details>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PrismicNextImage
              field={posts[0]?.data.img2}
              alt={""}
              style={{
                flex: "1",
                borderRadius: "10px",
                maxWidth: "100%",
                objectFit: "cover",
                marginLeft: "2rem",
                maxHeight: "500px",
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          textAlign: "center",
         
          color: "#fff",
          backgroundImage: posts[0]?.data.img3?.url
            ? `url(${posts[0]?.data.img3?.url})`
            : "url('default-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", minHeight:'500PX',
         display:'flex',justifyContent:'center',
         flexDirection:'column',
          alignItems:'center'
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            fontFamily: "Poppins",
          }}
        >
          {posts[0]?.data.heading3}
        </h2>
        <Button
          style={{
            fontFamily: "Poppins",
            marginTop: "1rem",
            padding: "12px 50px",
            backgroundColor: "transparent",
            color: "#FFFFFF",
            border: "1px solid #FFFFFF",
           textTransform:'none',
            borderRadius: "12px",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          {posts[0]?.data.button}
        </Button>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default Career;

//   <section

//   >

//   </section>
// </div>
