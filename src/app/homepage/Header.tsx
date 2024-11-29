"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Check if the current path matches a given path
  const isActive = (path: string) => pathname === path;

  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("header" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  // Default active tab is /home (tab 1)
  const activeTab = isActive("/home") ? "/home" : pathname;

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
        justifyContent: "space-between",
        height: "100px",
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/home">
          <PrismicNextImage field={posts[0]?.data.volantisimage} alt={""} />
        </Link>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          href="/home"
          style={{
            textDecoration: "none",
            color: activeTab === "/home" ? "#1e88e5" : "#000",
            fontSize: "14px",
            fontWeight: activeTab === "/home" ? "bold" : "500",
            borderBottom: activeTab === "/home" ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab1}
        </Link>

        {/* Services Dropdown */}
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              textDecoration: "none",
              color: "#000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            {posts[0]?.data.tab2}
            <span style={{ fontSize: "12px" }}>▼</span>
          </span>
          {isDropdownVisible && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "4px",
                minWidth: "200px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
            >
              <Link
                href="/service1"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: isActive("/service1") ? "#1e88e5" : "#000",
                  fontWeight: isActive("/service1") ? "bold" : "normal",
                  backgroundColor: isActive("/service1")
                    ? "#f1f1f1"
                    : "transparent",
                }}
              >
                {posts[0]?.data.service1}
              </Link>
              <Link
                href="/service2"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: isActive("/service2") ? "#1e88e5" : "#000",
                  fontWeight: isActive("/service2") ? "bold" : "normal",
                  backgroundColor: isActive("/service2")
                    ? "#f1f1f1"
                    : "transparent",
                }}
              >
                {posts[0]?.data.service2}
              </Link>
              <Link
                href="/service3"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: isActive("/service3") ? "#1e88e5" : "#000",
                  fontWeight: isActive("/service3") ? "bold" : "normal",
                  backgroundColor: isActive("/service3")
                    ? "#f1f1f1"
                    : "transparent",
                }}
              >
                {posts[0]?.data.service3}
              </Link>
              <Link
                href="/service4"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: isActive("/service4") ? "#1e88e5" : "#000",
                  fontWeight: isActive("/service4") ? "bold" : "normal",
                  backgroundColor: isActive("/service4")
                    ? "#f1f1f1"
                    : "transparent",
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
            fontSize: "14px",
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
            fontSize: "14px",
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
            fontSize: "14px",
            fontWeight: activeTab === "/career" ? "bold" : "500",
            borderBottom:
              activeTab === "/career" ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab5}
        </Link>
        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            color: activeTab === "/contact" ? "#1e88e5" : "#000",
            fontSize: "14px",
            fontWeight: activeTab === "/contact" ? "bold" : "500",
            borderBottom:
              activeTab === "/contact" ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab6}
        </Link>
      </div>

      {/* Employee Login Button */}
      <button
        style={{
          backgroundColor: "#1e88e5",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: "500",
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
      </button>
    </div>
  );
}

export default Header;
