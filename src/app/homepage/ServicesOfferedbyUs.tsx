"use client";

import { Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";

function ServicesOfferedbyUs() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("services_offered" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);
  const description: React.CSSProperties = {
    fontFamily: "Satoshi",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "justify",
    color: "#7A7A7A",
  };

  const title: React.CSSProperties = {
    fontFamily: "Satoshi",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#000000",
    paddingBottom:'5px'
  };
  console.log("hii", posts[0]?.data.card_icon);

  return (
    <div
      style={{
        padding: "40px 50px 20px 78px",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Typography
          style={{
            fontFamily: "Satoshi",
            fontSize: "56px",
            fontWeight: 700,
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {posts[0]?.data.heading}
        </Typography>

        {/* Section Description */}
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
          {posts[0]?.data.description}
        </Typography>
      </div>
      {/* Dynamic Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px", 
        }}
      >
        {/* First Row */}
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {[0, 1, 2].map((index) => {
            const card = {
              image: posts[0]?.data[`card_image${index + 1}`],
              title: posts[0]?.data[`card_title${index + 1}`],
              description: posts[0]?.data[`card_description${index + 1}`],
              icon: posts[0]?.data[`card_icon${index + 1}`],
              alt: posts[0]?.data[`card_image${index + 1}_alt`] || "",
            };

            return (
              <div
                key={index}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    flex: "1",
                    minWidth: "290px", boxShadow: "0px 15px 19px 0px #0000003D",
                    borderRadius:'4px',position: "relative", height: "auto",
                }}
              >
                {/* Card Image */}
                {card.image && (
                  <PrismicNextImage
                    field={card.image}
                    alt={card.alt}
                    style={{
                      width: "100%",
                      // minWidth: "300px",
                      height: "auto",
                    //   borderRadius: "8px",
                    }}
                  />
                )}
<div style={{padding:'29px 23px 10px 20px'}}>
                {/* Card Title */}
                <Typography style={title}>{card.title}</Typography>

                {/* Card Description */}
                <Typography style={description}>{card.description}</Typography>

                {posts[0]?.data.card_icon && (
                  <PrismicNextImage
                    field={posts[0]?.data.card_icon}
                    alt=""
                    style={{
                     position: "absolute",
                            bottom: "10px", 
                            left: "10px",  cursor: 'pointer '
                    }}
                  />
                )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px", // Reduced gap between the cards
          }}
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
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  flex: "1",
                  minWidth: "390px", boxShadow: "0px 15px 19px 0px #0000003D",
                  borderRadius:'4px',position:'relative',
                  height: "auto",
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
                    //   borderRadius: "8px",
                    }}
                  />
                )}
<div style={{padding:'29px 23px 10px 20px'}}>

                {/* Card Title */}
                <Typography style={title}>{card.title}</Typography>

                {/* Card Description */}
                <Typography style={description}>{card.description}</Typography>
                {posts[0]?.data.card_icon && (
                  <PrismicNextImage
                    field={posts[0]?.data.card_icon}
                    alt=""
                   
                        style={{
                            position: "absolute",
                            bottom: "10px", 
                            left: "10px",  
                            cursor: 'pointer'
                            // width: "30px",  
                            // height: "30px", 
                          }}
                   
                  />
                )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesOfferedbyUs;
