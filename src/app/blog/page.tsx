// "use client";
// import React, { useEffect, useState } from "react";
// import Header from "../homepage/Header";
// import Subscribe from "../homepage/Subscribe";
// import Footer from "../homepage/Footer";
// import { client } from "../../../prismic-configuration";
// import { PrismicNextImage } from "@prismicio/next";
// import { Box, Grid, Typography } from "@mui/material";

// const OurBlogs: React.FC = () => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [posts, setPosts] = useState<any>("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const response = await client.getAllByType("blog" as any);
//       setPosts(response);
//     };
//     fetchPosts();
//   }, []);
//   // Pagination state
//   // const [, setCurrentPage] = useState(1);
//   // Change page
//   const description: React.CSSProperties = {
//     fontFamily: "Satoshi",
//     fontSize: "14px",
//     fontWeight: 400,
//     textAlign: "left",
//     color: "#7A7A7A",
//   };

//   const title: React.CSSProperties = {
//     fontFamily: "Satoshi",
//     fontSize: "16px",
//     fontWeight: 700,
//     textAlign: "left",
//     color: "#000000",
//   };

//   return (
//     <>
//       
      
//       <Subscribe />
//       <Footer />
//     </>
//   );
// };

// export default OurBlogs;
"use client";
import React, { useState } from "react";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import Subscribe from "../homepage/Subscribe";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"; // Importing Material UI Arrow icon

const OurBlogs: React.FC = () => {
  // Mock data for blogs
  const blogs = [
    {
      id: 1,
      title: "Our Top 10 JavaScript Frameworks to Consider",
      description: "JavaScript frameworks make development easy...",
      date: "12 Jun, 2024",
      image: "Image 10.png",
    },
    {
      id: 2,
      title: "Bill Walsh Leadership Lessons",
      description:
        "Want to uncover the secrets behind transforming a 2-14 team...",
      date: "28 Jun, 2024",
      image: "image 131.png",
    },
    {
      id: 3,
      title: "Creating a Better CX Community",
      description: "Fostering a vibrant customer experience community...",
      date: "19 Jul, 2024",
      image: "image 111.png",
    },
    {
      id: 4,
      title: "What is Wireframing?",
      description:
        "Discover the essentials of wireframing and learn from industry...",
      date: "10 Jan, 2024",
      image: "image 132.png",
    },
    {
      id: 5,
      title: "Importance of Proper Human Capital Management",
      description: "Human Capital Management is the strategic approach...",
      date: "05 Jan, 2024",
      image: "Image 211.png",
    },
    {
      id: 6,
      title: "Know About Financial Consulting & Succession Plan",
      description: "A financial consultant offers specialized advice...",
      date: "16 Mar, 2024",
      image: "image 136.png",
    },
    {
      id: 7,
      title: "Our Top 10 JavaScript Frameworks to Consider.",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      date: "18 Aug, 2024",
      image: "image 135.png",
    },
    {
      id: 8,
      title: "Bill Walsh Leadership Lessons",
      description:
        "Want to uncover the secrets behind transforming a 2-14 team into a three-time Super Bowl dynasty?",
      date: "22 Sep, 2024",
      image: "image 133.png",
    },
    {
      id: 9,
      title: "Creating a Better CX Community",
      description:
        "Fostering a vibrant customer experience community enhances engagement and drives meaningful connections.",
      date: "05 Oct, 2024",
      image: "image 136.png",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // Adjust number of blogs per page

  // Calculate the current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    
    <><Header /><div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Blogs Content Section */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Main Blog Section with Overlay Text */}
        <div style={{ flex: 2, position: "relative" }}>
          {/* Main Image */}
          <img
            src="image 125.png"
            alt="Team Discussion"
            style={{
              width: "100%",
              borderRadius: "8px",
              height: "710px",
              objectFit: "cover",
            }} />
          {/* Overlay Text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h1 style={{ fontSize: "36px", margin: "0" }}>Our Blogs</h1>
            <p style={{ fontSize: "16px", margin: "0" }}>
              Explore Our Latest Posts for News and Updates
            </p>
          </div>
        </div>

        {/* Side Blogs Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div style={{ flex: 1 }}>
            <img
              src="image 122.png"
              alt="HR Process"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "8px",
              }} />
          </div>

          <div style={{ flex: 1 }}>
            <img
              src="image 126.png"
              alt="Working on Desk"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "8px",
              }} />
          </div>
        </div>
      </div>

      {/* New Section for Blog Cards */}
      <div style={{ marginTop: "40px" }}>
        {/* Title */}
        <h2 style={{ textAlign: "center", fontSize: "32px", color: "#333" }}>
          All <span style={{ color: "#007BFF" }}>Blogs</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#666",
            marginTop: "40px",
          }}
        >
          Stay Updated with the Latest in IT Staffing, Outsourcing, and Project
          Services
        </p>

        {/* Blog Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                flex: "1 0 30%",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }} />
              <div style={{ padding: "15px" }}>
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  {blog.title}
                  {/* <ArrowOutwardIcon
              style={{ color: "#007BFF", fontSize: "20px" }}
            /> */}
                </h3>
                <p style={{ fontWeight: "normal" }}>{blog.description}</p>{" "}
                {/* Normal font for description */}
                <p style={{ fontSize: "14px", color: "#007BFF" }}>
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: currentPage === 1 ? "#ccc" : "#007BFF",
              color: "#fff",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          {Array.from(
            { length: Math.ceil(blogs.length / blogsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                style={{
                  margin: "0 5px",
                  padding: "10px 20px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: currentPage === i + 1 ? "#007BFF" : "#fff",
                  color: currentPage === i + 1 ? "#fff" : "#007BFF",
                }}
              >
                {i + 1}
              </button>
            )
          )}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              backgroundColor: currentPage === Math.ceil(blogs.length / blogsPerPage)
                ? "#ccc"
                : "#007BFF",
              color: "#fff",
              cursor: currentPage === Math.ceil(blogs.length / blogsPerPage)
                ? "not-allowed"
                : "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <Subscribe />
          <Footer /> 
    </>
  );
};

export default OurBlogs;
