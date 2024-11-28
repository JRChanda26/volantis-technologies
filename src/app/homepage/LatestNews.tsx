"use client";

import { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Button, Typography, Grid, Box } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
function LatestNews() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("latest_news" as any);
      setPosts(response);
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
    <div
      style={{
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography
          style={{
             fontFamily: "Poppins",
            fontSize: "56px",
            fontWeight: 700,
          }}
        >
          {posts[0]?.data.heading}
        </Typography>

        <Typography
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400,
            color: "#6D6D6D",
            margin: "18px 0 50px",
          }}
        >
          {posts[0]?.data.description}
        </Typography>
      </div>

      {/* Responsive Grid for Cards */}
      <Grid container spacing={4} style={{display:'flex',justifyContent:'center'}}>

        {[0, 1, 2].map((index) => {
          const card = {
            image: posts[0]?.data[`news_image${index + 1}`],
            title: posts[0]?.data[`news_heading${index + 1}`],
            description: posts[0]?.data[`news_description${index + 1}`],
            date: posts[0]?.data[`date${index + 1}`],
            button: posts[0]?.data[`read_button`],
            alt: posts[0]?.data[`news_image${index + 1}_alt`] || "",
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
                  minWidth: "100%",
                  boxShadow: "0px 15px 19px 0px #0000003D",
                  borderRadius: "4px",
                  position: "relative",
                  height: "auto",
                  padding: "0px 0px 10px 0px",
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
                  <Typography style={description}>{card.description}</Typography>

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
                        textAlign:'center'
                      }}
                    >
                      {card.date}
                    </Typography>
                    <Link href="/blog" >
                    <Button
                      style={{
                         fontFamily: "Poppins",
                        fontSize: "12px",
                        textTransform: "none",
                        fontWeight: 400,
                        color: "#1874DA",
                        background: "#BDE9FF",
                        borderRadius: "14px",
                      }}
                      onClick={() => console.log(`Clicked button for: ${card.title}`)}
                    >
                      {card.button}
                    </Button></Link>
                  </div>
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/* View More Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
         <Link href="/blog" >
        <Button
          style={{
             fontFamily: "Poppins",
            fontSize: "14px",
            textTransform: "none",
            fontWeight: 400,
            color: "#1874DA",
            border: "1px solid #1874DA",
            borderRadius: "14px",
            padding: "10px 50px",
          }}
        >
          {posts[0]?.data.button2}
          {posts[0]?.data.arrowicon && (
            <PrismicNextImage field={posts[0]?.data.arrowicon} alt="" />
          )}
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default LatestNews;
