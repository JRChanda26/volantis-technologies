"use client";

import { Typography, Grid, Box } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";

function ServicesOfferedbyUs() {
    const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("services_offered");
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const descriptionStyle: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "justify",
    color: "#7A7A7A",
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#000000",
    paddingBottom: "5px",
  };

  return (
    <Box
      sx={{
        padding: { xs: "20px", sm: "30px 40px", md: "40px 50px 20px 78px" },background: '#F6F6F6'
      }}
    >
      {/* Section Header */}
      <Box textAlign="center" mb={5}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize:  "56px",
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
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
            padding: "18px 0px 10px 0px",
          }}
        >
          {posts[0]?.data.description}
        </Typography>
      </Box>

      {/* Responsive Grid */}
      <Grid container spacing={4} style={{display:'flex',justifyContent:'center'}}>
        {/* Map through the first 3 items */}
        {[0, 1, 2,3].map((index) => {
          const card = {
            image: posts[0]?.data[`card_image${index + 1}`],
            title: posts[0]?.data[`card_title${index + 1}`],
            description: posts[0]?.data[`card_description${index + 1}`],
            icon: posts[0]?.data[`card_icon${index + 1}`],
            alt: posts[0]?.data[`card_image${index + 1}_alt`] || "",
          };

          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={3}
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
                {card.image && (
                  <PrismicNextImage
                    field={card.image}
                    alt={card.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                )}
                <div style={{padding:'20px'}}>
                <Typography style={titleStyle}>{card.title}</Typography>
                <Typography style={descriptionStyle}>{card.description}</Typography>
                {card.icon && (
                  <PrismicNextImage
                    field={card.icon}
                    alt=""
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      cursor: "pointer",
                      padding: "10px 10px 5px 10px",
                    }}
                  />
                )}
                </div>
              </Box>
            </Grid>
          );
        })}

        {/* Center the last 2 items */}
        {/* <Grid
          container
          item
          xs={12}
          justifyContent="center"
          spacing={4}
        >
          {[3, 4].map((index) => {
            const card = {
              image: posts[0]?.data[`card_image${index + 1}`],
              title: posts[0]?.data[`card_title${index + 1}`],
              description: posts[0]?.data[`card_description${index + 1}`],
              icon: posts[0]?.data[`card_icon${index + 1}`],
              alt: posts[0]?.data[`card_image${index + 1}_alt`] || "",
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
                  {card.image && (
                    <PrismicNextImage
                      field={card.image}
                      alt={card.alt}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  )}
                  <div style={{padding:'20px'}}>
                  <Typography style={titleStyle}>{card.title}</Typography>
                  <Typography style={descriptionStyle}>{card.description}</Typography>
                  {card.icon && (
                    <PrismicNextImage
                      field={card.icon}
                      alt=""
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        cursor: "pointer",
                        padding: "10px 10px 5px 10px",
                      }}
                    />
                  )}</div>
                </Box>
              </Grid>
            );
          })}
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default ServicesOfferedbyUs;
