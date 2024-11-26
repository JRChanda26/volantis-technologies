"use client";
import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";

function Footer() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("footer" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const title: React.CSSProperties = {
    fontFamily: "Satoshi",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "21.6px",
    textAlign: "left" as const,
    color: "#000000",
  };

  const desc: React.CSSProperties = {
    fontFamily: "Satoshi",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "21.6px",
    textAlign: "left" as const,
    padding: "5px",
    color: "#000000",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          justifyContent: "center",
          alignItems: "stretch", 
        }}
      >
        {/* Logo and Social Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            display="flex"
            flexDirection="column"
            height="100%" 
          >
            <Box mb={2}>
              <PrismicNextImage field={posts[0]?.data.volantis} alt={""} />
            </Box>
            <Box display="flex" gap={2}>
              <PrismicNextImage field={posts[0]?.data.linkedin} alt={""} />
              <PrismicNextImage field={posts[0]?.data.instagram} alt={""} />
              <PrismicNextImage field={posts[0]?.data.twitter} alt={""} />
              <PrismicNextImage field={posts[0]?.data.facebook} alt={""} />
            </Box>
          </Box>
        </Grid>

        {/* Titles and Descriptions */}
        {["title2", "title3", "title4", "title5"].map((titleKey, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={index === 3 ? 3 : 2} // Adjust grid size for the last item
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Typography style={title}>{posts[0]?.data[titleKey]}</Typography>
            {[...Array(5)].map((_, idx) => {
              const descKey = `${titleKey}desc${idx + 1}`;
              return posts[0]?.data[descKey] ? (
                <Typography key={descKey} style={desc}>
                  {posts[0]?.data[descKey]}
                </Typography>
              ) : null;
            })}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Footer;