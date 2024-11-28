"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";
import Header from "../homepage/Header";
import ContactUs from "../homepage/ContactUs";
import Footer from "../homepage/Footer";
function Career() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>("");

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("carrier" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div>
        <div>
          {/* Image and Text Section */}
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "70px",
              // padding: "2rem",
              // marginBottom: "2rem",
            }}
          >
            {/* Text Content */}
            <div style={{ flex: "1", paddingLeft: "13.5rem" }}>
              <h1
                style={{
                  // marginBottom: "1rem",
                  fontFamily: "Poppins",
                  fontSize: "56px",
                  fontWeight: 700,
                  color: "#1874DA",
                  textAlign: "center",
                  maxWidth: "80%",
                }}
              >
                {posts[0]?.data.heading1}
              </h1>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "justify",

                  color: "#6D6D6D",
                  padding: "20px ",
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
                maxWidth: "600px",
                objectFit: "cover",
                marginLeft: "1rem",
              }}
            />
          </section>

          {/* Career Opportunities Section */}
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              backgroundColor: "#f9f9f9",
              paddingLeft: "15rem",
            }}
          >
            {/* Career Details */}
            <div style={{ flex: "1", paddingRight: "2rem" }}>
              <h2
                style={{
                  // marginBottom: "1rem",
                  fontFamily: "Poppins",
                  fontSize: "56px",
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
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    cursor: "pointer",
                    color: "#1874DA",
                  }}
                >
                  {posts[0]?.data.oppertunity1}
                </summary>
                <p style={{ marginTop: "0.5rem" }}> {posts[0]?.data.role1}</p>
              </details>
              <details style={{ margin: "1rem 0" }}>
                <summary
                  style={{
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    color: "#1874DA",   fontFamily: "Poppins",
                  }}
                >
                  {posts[0]?.data.oppertunity2}
                </summary>
                <p style={{ marginTop: "0.5rem",   fontFamily: "Poppins", }}>{posts[0]?.data.role2}</p>
              </details>
              <details style={{ margin: "1rem 0" }}>
                <summary
                  style={{
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    color: "#1874DA",   fontFamily: "Poppins",
                  }}
                >
                  {posts[0]?.data.oppertunity3}
                </summary>
                <p style={{ marginTop: "0.5rem",   fontFamily: "Poppins", }}>{posts[0]?.data.role3}</p>
              </details>
            </div>

            {/* Image */}

            <PrismicNextImage
              field={posts[0]?.data.img2}
              alt={""}
              style={{
                flex: "1",
                borderRadius: "10px",
                maxWidth: "600px",
                objectFit: "cover",
                marginLeft: "2rem",
              }}
            />
          </section>

          {/* Footer Section */}
          <section
            style={{
              textAlign: "center",
              padding: "12rem",
              color: "#fff",
              backgroundImage: posts[0]?.data.img3?.url
                ? `url(${posts[0]?.data.img3?.url})`
                : "url('default-image.png')",
              backgroundSize: "cover", // Ensures the image covers the entire section
              backgroundPosition: "center", // Centers the image
              backgroundRepeat: "no-repeat", // Prevents the image from repeating
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",   fontFamily: "Poppins",
              }}
            >
              {posts[0]?.data.heading3}{" "}
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
