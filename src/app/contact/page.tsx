"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import React, { useEffect, useState } from "react";

import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import { client } from "../../../lib/prismic-configuration";
import ContactUs from "../homepage/ContactUs";

function Contact() {
  
  const [posts, setPosts] = useState<any>([]);


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchPosts = async () => {
      
      const response = await client.getAllByType("contact" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);


  // Define breakpoints using Material-UI's theme breakpoints
  // const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // Desktop and above
  // const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg")); // Laptop
  // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Tablet

  // const fontSize = isDesktop
  //   ? "56px"
  //   : isLaptop
  //   ? "48px"
  //   : isTablet
  //   ? "40px"
  //   : "32px"; 
  return (
    <>
      <Header />
      <div style={{paddingTop:'150px'}}>
        <PrismicNextImage
          field={posts[0]?.data.bgimg}
          alt={""}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div
          style={{
            padding: isSmallScreen ? "20px 10px" : "40px 20px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            gap: isSmallScreen ? "16px" : "24px",background: '#F6F6F6'
          }}
        >
          {/* {posts.length > 0 && (
            <>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize:fontSize,
                  fontWeight: 700,
                  color: "#1874DA",
                  textAlign: "center",
                }}
              >
                {posts[0]?.data.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "center",
                  marginTop: "15px",
                  color: "#6D6D6D",
                  padding: isSmallScreen ? "0px 10px" : "0px 50px 0px 70px",
                }}
              >
                {posts[0]?.data.description}
              </Typography>
            </>
          )} */}
          <ContactUs/>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Contact;
