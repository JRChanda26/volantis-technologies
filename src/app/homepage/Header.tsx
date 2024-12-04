"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@mui/material/Button";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { Box, Grid, Typography } from "@mui/material";

function Header() {
  const pathname = usePathname(); 
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const tabStyle: React.CSSProperties={fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "22px",
    textAlign: "left",
    color: "#000000",}
  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        width: "100%",
        borderBottom: "1px solid #ddd",
        boxSizing: "border-box",
        padding: "47px 24px 64px 24px",
        // justifyContent: "space-between",
      }}
    >
      <Grid container spacing={2} justifyContent="space-between" alignItems="stretch">
        <Grid item xs={3} sm={3} lg={3}  style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
          {posts.length > 0 && posts[0]?.data?.volantisimage && (
            <Link href="/home">
              <PrismicNextImage
                field={posts[0]?.data?.volantisimage}
                alt=""
                style={{
                  width: "160px",
                  height: "50px",  maxWidth: "100%",
                }}
              />
            </Link>
          )}
        </Grid>
        <Grid item xs={6} sm={6} lg={6}  style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
          {" "}
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection:'row',
              // flex: 2,
              //  // Ensures the menu is on the right
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
                borderBottom:
                  activeTab === "/home" ? "2px solid #1e88e5" : "none",
              }}
            >
              <Typography
                style={tabStyle}
              >
                {posts[0]?.data.tab1}
              </Typography>
            </Link>
            <Box
              ref={dropdownRef}
              style={{
                position: "relative",
                cursor: "pointer",
                fontFamily: "Poppins",
              }}
            >
             <Typography
                             onClick={toggleDropdown}

                style={tabStyle}
              >
                {posts[0]?.data.tab2}
                <KeyboardArrowDownSharpIcon />
              </Typography>

              {/* Dropdown Menu */}
              {dropdownVisible && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: "-70px",
                    marginTop: "5px",
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
                      color: isActive("/services/aiservice")
                        ? "#1e88e5"
                        : "#000",
                      fontWeight: isActive("/services/aiservice")
                        ? "bold"
                        : "normal",
                      backgroundColor: isActive("/services/aiservice")
                        ? "#f1f1f1"
                        : "transparent",
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
                      color: isActive("/services/staffing")
                        ? "#1e88e5"
                        : "#000",
                      fontWeight: isActive("/services/staffing")
                        ? "bold"
                        : "normal",
                      backgroundColor: isActive("/services/staffing")
                        ? "#f1f1f1"
                        : "transparent",
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
                      color: isActive("/services/devlopment")
                        ? "#1e88e5"
                        : "#000",
                      fontWeight: isActive("/services/devlopment")
                        ? "bold"
                        : "normal",
                      backgroundColor: isActive("/services/devlopment")
                        ? "#f1f1f1"
                        : "transparent",
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
                      color: isActive("/services/engineering")
                        ? "#1e88e5"
                        : "#000",
                      fontWeight: isActive("/services/engineering")
                        ? "bold"
                        : "normal",
                      backgroundColor: isActive("/services/engineering")
                        ? "#f1f1f1"
                        : "transparent",
                    }}
                  >
                    {posts[0]?.data.service4}
                  </Link>
                </div>
              )}
            </Box>
            <Link
              href="/about"
              style={{
                textDecoration: "none",
                color: activeTab === "/about" ? "#1e88e5" : "#000",
                fontSize: "16px",
                fontWeight: activeTab === "/about" ? "bold" : "500",
                borderBottom:
                  activeTab === "/about" ? "2px solid #1e88e5" : "none",
              }}
            >
              <Typography
                style={tabStyle}
              >
                {" "}
                {posts[0]?.data.tab3}
              </Typography>
            </Link>
            <Link
              href="/blog"
              style={{
                textDecoration: "none",
                color: activeTab === "/blog" ? "#1e88e5" : "#000",
                fontSize: "16px",
                fontWeight: activeTab === "/blog" ? "bold" : "500",
                borderBottom:
                  activeTab === "/blog" ? "2px solid #1e88e5" : "none",
              }}
            >
              <Typography
                style={tabStyle}
              >
                {posts[0]?.data.tab4}
              </Typography>
            </Link>
            <Link
              href="/career"
              style={{
                textDecoration: "none",
                color: activeTab === "/career" ? "#1e88e5" : "#000",
                fontSize: "16px",
                fontWeight: activeTab === "/career" ? "bold" : "500",
                borderBottom:
                  activeTab === "/career" ? "2px solid #1e88e5" : "none",
              }}
            >
              <Typography
                style={tabStyle}
              >
                {posts[0]?.data.tab5}
              </Typography>
            </Link>
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                color: activeTab === "/contact" ? "#1e88e5" : "#000",
                fontSize: "16px",
                fontWeight: activeTab === "/contact" ? "bold" : "500",
                borderBottom:
                  activeTab === "/contact" ? "2px solid #1e88e5" : "none",
              }}
            >
              <Typography
                style={tabStyle}
              >
                {posts[0]?.data.tab6}
              </Typography>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          lg={3}
         
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{
              backgroundColor: "#1e88e5",
              color: "#fff",
              border: "none",

              fontSize: "16px",
              fontWeight: "500",
              borderRadius: "4px",
              cursor: "pointer",
              textTransform: "none",
              fontFamily: "Poppins",
              padding: "9px 35px",
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
