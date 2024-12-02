"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";
import Header from "../homepage/Header";
import ContactUs from "../homepage/ContactUs";
import Footer from "../homepage/Footer";

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
        <div>
          {/* Image and Text Section */}
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "70px",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {/* Text Content */}
            <div
              style={{
                flex: "1",
                paddingLeft: "13.5rem",
                maxWidth: "60%", 
              }}
            >
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "#1874DA",
                  textAlign: "center",
                  maxWidth: "75%",
                }}
              >
                {posts[0]?.data.heading1}
              </h1>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  textAlign: "justify",
                  color: "#6D6D6D",
                  padding: "1.25rem",
                  maxWidth: "80%",
                }}
              >
                {posts[0]?.data.description1}
              </p>
            </div>

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
          </section>

          <section
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#f9f9f9",
              paddingLeft: "15rem",
              flexWrap: "wrap", // Allow wrapping on smaller screens
              gap: "1rem",
            }}
          >
            {/* Career Details */}
            <div
              style={{
                flex: "1",
                paddingRight: "2rem",
                maxWidth: "60%",
              }}
            >
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontSize: "3.5rem",
                  fontWeight: 700,
                  color: "#1874DA",
                }}
              >
                {posts[0]?.data.heading2}
              </h2>
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
                <p style={{ marginTop: "0.5rem" }}>{posts[0]?.data.role1}</p>
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
                <p style={{ marginTop: "0.5rem", fontFamily: "Poppins" }}>
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
                <p style={{ marginTop: "0.5rem", fontFamily: "Poppins" }}>
                  {posts[0]?.data.role3}
                </p>
              </details>
            </div>

            {/* Image */}
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
          </section>

          {/* Footer Section */}
          <section
            style={{
              textAlign: "center",
              padding: "5rem 2rem", 
              color: "#fff",
              backgroundImage: posts[0]?.data.img3?.url
                ? `url(${posts[0]?.data.img3?.url})`
                : "url('default-image.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
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
            <button
              style={{
                fontFamily: "Poppins",
                marginTop: "1rem",
                padding: "0.8rem 1.5rem",
                backgroundColor: "#fff",
                color: "#0056D2",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              {posts[0]?.data.button}
            </button>
          </section>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default Career;
