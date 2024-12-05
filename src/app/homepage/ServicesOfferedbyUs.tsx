"use client";

import { Typography, Grid, Box } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import Link from "next/link";
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
    textAlign: "left",
    color: "#7A7A7A",
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "left",
    color: "#000000",
    paddingBottom: "14px",
  };

  return (
    <Box
      sx={{
        padding: { xs: "20px", sm: "30px 40px", md: "40px 50px 20px 78px" },
        background: "#F6F6F6",
      }}
    >
      {/* Section Header */}
      <Box textAlign="center" mb={5}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "56px",
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

      <Grid
        container
        spacing={5}
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {[0, 1, 2, 3].map((index) => {
          const card = {
            image: posts[0]?.data[`card_image${index + 1}`],
            title: posts[0]?.data[`card_title${index + 1}`],
            description: posts[0]?.data[`card_description${index + 1}`],
            icon: posts[0]?.data[`card_icon${index + 1}`],
            alt: posts[0]?.data[`card_image${index + 1}_alt`] || "",
            link:
              index === 0
                ? "/services/aiservice"
                : index === 1
                  ? "/services/staffing"
                  : index === 2
                    ? "/services/devlopment"
                    : index === 3
                      ? "/services/engineering"
                      : "/defaultService", 
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
                  // width:'360px',
                  // height:'460px',
                  // textAlign: "center",
                  // minWidth: "100%",
                  boxShadow: "0px 5px 5px 0px #0000001A",
                  borderRadius: "4px",
                  position: "relative",
                  // height: "auto",
                  // padding: "0px 0px 5px 0px",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  cursor: "pointer",
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
                <div style={{ padding: "29px 24px 39px 25px" }}>
                  <Typography style={titleStyle}>{card.title}</Typography>
                  <Typography style={descriptionStyle}>
                    {card.description}
                  </Typography>
                 
                  <Link href={card.link} >
                  <PrismicNextImage
                    field={posts[0]?.data.card_icon}
                    alt=""
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "25px",
                      cursor: "pointer",
                      //  padding: "10px 10px 5px 10px",
                    }}
                  /></Link>
               
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ServicesOfferedbyUs;
