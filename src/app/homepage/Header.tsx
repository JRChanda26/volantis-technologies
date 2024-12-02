"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@mui/material/Button";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

function Header() {
  const pathname = usePathname(); // Get the current path

  // Check if the current path matches a given path
  const isActive = (path: string) => pathname === path;

  const [posts, setPosts] = useState<any>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to track the visibility of the dropdown

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("header" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);



  const activeTab = isActive("/home") ? "/home" : pathname;

  // Toggle dropdown visibility when clicking on "tab2"
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  return (
    <div
      style={{
        fontFamily: "Poppins",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        width: "100%",
        borderBottom: "1px solid #ddd",
        boxSizing: "border-box",
        padding: "10px 20px",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: "15%",
        flexWrap: "wrap", 
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <Link href="/home">
          <PrismicNextImage
            field={posts[0]?.data.volantisimage}
            alt={""}
            style={{
              width: '100%',
              maxWidth: '200px',
              height: 'auto',
            }}
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flex: 2,
          // justifyContent: "flex-end", // Ensures the menu is on the right
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/home"
          style={{
            textDecoration: "none",
            color: activeTab === "/home" ? "#1e88e5" : "#000",
            fontSize: "16px",
            fontWeight: activeTab === "/home" ? "bold" : "500",
            borderBottom: activeTab === "/home" ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab1}
        </Link>

        {/* Services Dropdown (Visible on click) */}
        <div style={{ position: "relative", cursor: "pointer", fontFamily: "Poppins" }}>
          <span
            onClick={toggleDropdown}
            style={{
              gap: "5px",
              textDecoration: "none",
              color: "#000",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            {posts[0]?.data.tab2}
            <KeyboardArrowDownSharpIcon />
          </span>

          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: '-70px',
                marginTop: '5px',
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "4px",
                minWidth: "200px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
            >
              <Link
                href="/services/aiservice"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: isActive("/services/aiservice") ? "#1e88e5" : "#000",
                  fontWeight: isActive("/services/aiservice") ? "bold" : "normal",
                  backgroundColor: isActive("/services/aiservice") ? "#f1f1f1" : "transparent",
                }}
              >
                {posts[0]?.data.service1}
              </Link>
              <Link
                href="/services/staffing"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: isActive("/services/staffing") ? "#1e88e5" : "#000",
                  fontWeight: isActive("/services/staffing") ? "bold" : "normal",
                  backgroundColor: isActive("/services/staffing") ? "#f1f1f1" : "transparent",
                }}
              >
                {posts[0]?.data.service2}
              </Link>
              <Link
                href="/services/devlopment"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: isActive("/services/devlopment") ? "#1e88e5" : "#000",
                  fontWeight: isActive("/services/devlopment") ? "bold" : "normal",
                  backgroundColor: isActive("/services/devlopment") ? "#f1f1f1" : "transparent",
                }}
              >
                {posts[0]?.data.service3}
              </Link>
              <Link
                href="/services/engineering"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: isActive("/services/engineering") ? "#1e88e5" : "#000",
                  fontWeight: isActive("/services/engineering") ? "bold" : "normal",
                  backgroundColor: isActive("/services/engineering") ? "#f1f1f1" : "transparent",
                }}
              >
                {posts[0]?.data.service4}
              </Link>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          href="/about"
          style={{
            textDecoration: "none",
            color: activeTab === "/about" ? "#1e88e5" : "#000",
            fontSize: "16px",
            fontWeight: activeTab === "/about" ? "bold" : "500",
            borderBottom: activeTab === "/about" ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab3}
        </Link>
        <Link
          href="/blog"
          style={{
            textDecoration: "none",
            color: activeTab === "/blog" ? "#1e88e5" : "#000",
            fontSize: "16px",
            fontWeight: activeTab === "/blog" ? "bold" : "500",
            borderBottom: activeTab === "/blog" ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab4}
        </Link>
        <Link
          href="/career"
          style={{
            textDecoration: "none",
            color: activeTab === "/career" ? "#1e88e5" : "#000",
            fontSize: "16px",
            fontWeight: activeTab === "/career" ? "bold" : "500",
            borderBottom: activeTab === "/career" ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab5}
        </Link>
        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            color: activeTab === "/contact" ? "#1e88e5" : "#000",
            fontSize: "16px",
            fontWeight: activeTab === "/contact" ? "bold" : "500",
            borderBottom: activeTab === "/contact" ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab6}
        </Link>
      </div>

      {/* Employee Login Button */}
      <Button
        style={{
          backgroundColor: "#1e88e5",
          color: "#fff",
          border: "none",
          height: '60px',
          width: '150px',
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "4px",
          cursor: "pointer",
          textTransform: 'none',
          fontFamily: 'Poppins',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#1565c0")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#1e88e5")
        }
      >
        {posts[0]?.data.button}
      </Button>
    </div>
  );
}

export default Header;
