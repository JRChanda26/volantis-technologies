"use client";

import { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Button, Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

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
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      > */}
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
              image: posts[0]?.data[`news_image${index + 1}`],
              title: posts[0]?.data[`news_heading${index + 1}`],
              description: posts[0]?.data[`news_description${index + 1}`],
              date: posts[0]?.data[`date${index + 1}`],
              button: posts[0]?.data[`read_button`],
              alt: posts[0]?.data[`news_image${index + 1}_alt`] || "",
            };

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  flex: "1",
                  maxWidth: "290px",
                  boxShadow: "0px 15px 19px 0px #0000003D",
                  borderRadius: "4px",
                  position: "relative",
                  height: "370px",
                }}
              >
                {/* Card Image */}
                {card.image && (
                  <PrismicNextImage
                    field={card.image}
                    alt={card.alt}
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      height: "auto",
                    }}
                  />
                )}
                <div
                  style={{
                    padding: "29px 10px 10px 10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                  }}
                >
                  {/* Card Title */}
                  <Typography style={title}>{card.title}</Typography>

                  {/* Card Description */}
                  <Typography style={description}>
                    {card.description}
                  </Typography>

                  {/* Card Footer: Date and Button */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "auto",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Satoshi",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#1874DA",
                      }}
                    >
                      {card.date}
                    </Typography>

                    <Button
                      style={{
                        fontFamily: "Satoshi",
                        fontSize: "12px",
                        textTransform: "none",
                        fontWeight: 400,
                        color: "#1874DA",
                        background: "#BDE9FF",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "14px",
                      }}
                      onClick={() => {
                        console.log(`Clicked button for: ${card.title}`);
                      }}
                    >
                      {card.button}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
       <Button
  style={{
    fontFamily: "Satoshi",
    fontSize: "14px",
    textTransform: "none",
    fontWeight: 400,
    color: "#1874DA",
    background: "none",
    border: "1px solid #1874DA",
    cursor: "pointer",
    borderRadius: "14px",
    padding: "10px 50px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  
    
  
  {posts[0]?.data.button2}
  <PrismicNextImage
      field={posts[0]?.data.arrowicon}
      alt=""
    //   style={{
    //     width: "20px",
    //     height: "20px",
    //   }}
    />
</Button>

      </div>
      </div>
    // </div>
  );
}

export default LatestNews;
