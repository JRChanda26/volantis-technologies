"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PrismicNextImage } from "@prismicio/next";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";

import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { client } from "../../../lib/prismic-configuration";

function Header() {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isActive = (path: string) => pathname === path;

  const [posts, setPosts] = useState<any>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("header" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const activeTab = isActive("/home") ? "/home" : pathname;

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };
  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownVisible]);
  const tabStyle: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "22px",
    textAlign: "left",
    color: "#000000",
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };
  const activeTabStyle: React.CSSProperties = {
    ...tabStyle,
    fontWeight: "bold",
    color: "#1e88e5",
    borderBottom: "2px solid #1e88e5",
  };
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
        padding: "20px 24px 24px 24px",
        justifyContent: "space-evenly",
      }}
    >
      {isSmallScreen ? (
        <>
          <Link href="/home">
            <PrismicNextImage field={posts[0]?.data?.volantisimage} alt="" />
          </Link>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              color: "#1e88e5",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                width: 250,
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
              role="presentation"
              // onClick={toggleDrawer(false)}
            >
              {posts.length > 0 && (
                <>
                  <Link
                    href="/home"
                    style={activeTab === "/home" ? activeTabStyle : tabStyle}
                  >
                    {posts[0]?.data.tab1}
                  </Link>
                  <Link
                    href="/about"
                    style={activeTab === "/about" ? activeTabStyle : tabStyle}
                  >
                    {posts[0]?.data.tab3}
                  </Link>
                  {/* <Link href="/blog" style={activeTab === "/blog" ? activeTabStyle : tabStyle}>
                    {posts[0]?.data.tab4}
                  </Link> */}
                  <Link
                    href="/career"
                    style={activeTab === "/career" ? activeTabStyle : tabStyle}
                  >
                    {posts[0]?.data.tab5}
                  </Link>
                  <Link
                    href="/contact"
                    style={activeTab === "/contact" ? activeTabStyle : tabStyle}
                  >
                    {posts[0]?.data.tab6}
                  </Link>
                  <Box>
                    <Typography
                      onClick={toggleDropdown}
                      style={{
                        ...(activeTab === "/service" ||
                        isActive("/services/aiservice") ||
                        isActive("/services/staffing") ||
                        isActive("/services/devlopment") ||
                        isActive("/services/engineering")
                          ? { ...activeTabStyle, color: "#1e88e5" }
                          : tabStyle),
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {posts[0]?.data.tab2}
                      {dropdownVisible ? (
                        <KeyboardArrowUpSharpIcon />
                      ) : (
                        <KeyboardArrowDownSharpIcon />
                      )}
                    </Typography>
                    {dropdownVisible && (
                      <Box
                        sx={{
                          marginTop: "10px",
                          background: "#fff",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                          padding: "5px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <Link href="/services/aiservice" style={tabStyle}>
                          {posts[0]?.data.service1}
                        </Link>
                        <Link href="/services/staffing" style={tabStyle}>
                          {posts[0]?.data.service2}
                        </Link>
                        <Link href="/services/devlopment" style={tabStyle}>
                          {posts[0]?.data.service3}
                        </Link>
                        <Link href="/services/engineering" style={tabStyle}>
                          {posts[0]?.data.service4}
                        </Link>
                      </Box>
                    )}
                  </Box>
                  <a
                    href="https://volantistechnologies.greythr.com/"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      style={{
                        backgroundColor: "#1e88e5",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "500",
                        textTransform: "none",
                        fontFamily: "Poppins",
                        padding: "10px",
                        borderRadius: "4px",
                        cursor: "pointer",
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
                  </a>
                </>
              )}
            </Box>
          </Drawer>
        </>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row", lg: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Grid
            item
            xs={3}
            sm={3}
            lg={3}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {posts.length > 0 && posts[0]?.data?.volantisimage && (
              <Link href="/home">
                <PrismicNextImage
                  field={posts[0]?.data?.volantisimage}
                  alt=""
                  style={{
                    width: "80%",
                    maxWidth: "240px",
                    height: "auto",
                  }}
                />
              </Link>
            )}
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            lg={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {" "}
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
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
                  style={activeTab === "/home" ? activeTabStyle : tabStyle}
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
                  style={{
                    ...(activeTab === "/service" ||
                    isActive("/services/aiservice") ||
                    isActive("/services/staffing") ||
                    isActive("/services/devlopment") ||
                    isActive("/services/engineering")
                      ? { ...activeTabStyle, color: "#1e88e5" }
                      : tabStyle),
                  }}
                >
                  {posts[0]?.data.tab2}
                  {/* <KeyboardArrowDownSharpIcon /> */}
                  {dropdownVisible ? (
                    <KeyboardArrowUpSharpIcon />
                  ) : (
                    <KeyboardArrowDownSharpIcon />
                  )}
                </Typography>

                {/* Dropdown Menu */}
                {dropdownVisible && (
                  <div
                    style={{
                      position: "absolute",
                      top: "25px",
                      right: "-70px",
                      marginTop: "5px",
                      background: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      width: "300px",
                      height: "auto",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      zIndex: 1000,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Link
                      href="/services/aiservice"
                      style={{
                        display: "block",
                        padding: "10px ",
                        fontFamily: "Poppins",
                        fontSize: "18px",

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
                        padding: "10px ",
                        fontFamily: "Poppins",
                        fontSize: "18px",

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
                        padding: "5px ",

                        fontFamily: "Poppins",
                        fontSize: "18px",
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
                        padding: "10px ",
                        fontFamily: "Poppins",
                        fontSize: "18px",
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
                  style={activeTab === "/about" ? activeTabStyle : tabStyle}
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
                  style={activeTab === "/blog" ? activeTabStyle : tabStyle}
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
                  style={activeTab === "/career" ? activeTabStyle : tabStyle}
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
                  style={activeTab === "/contact" ? activeTabStyle : tabStyle}
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
            <a
              href="https://volantistechnologies.greythr.com/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Header;
