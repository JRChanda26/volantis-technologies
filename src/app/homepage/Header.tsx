"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { client } from "../../../prismic-configuration";
import { PrismicNextImage } from "@prismicio/next";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const pathname = usePathname(); // Get the current path

  const isActive = (path: string) => pathname === path; // Check if the current path matches
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("header" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Logo Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <PrismicNextImage field={posts[0]?.data.volantisimage} alt={""} />
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          href="/home"
          style={{
            textDecoration: "none",
            color: isActive("/home") ? "#1e88e5" : "#000",
            fontSize: "14px",
            fontWeight: isActive("/home") ? "bold" : "500",
            borderBottom: isActive("/home") ? "2px solid #1e88e5" : "none",
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
            color: isActive("/About") ? "#1e88e5" : "#000",
            fontSize: "14px",
            fontWeight: isActive("/About") ? "bold" : "500",
            borderBottom: isActive("/About") ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab3}
        </Link>
        <Link
          href="/blog"
          style={{
            textDecoration: "none",
            color: isActive("/blog") ? "#1e88e5" : "#000",
            fontSize: "14px",
            fontWeight: isActive("/blog") ? "bold" : "500",
            borderBottom: isActive("/blog") ? "2px solid #1e88e5" : "none",
          }}
        >
          {posts[0]?.data.tab4}
        </Link>
        <Link
          href="/career"
          style={{
            textDecoration: "none",
            color: isActive("/career") ? "#1e88e5" : "#000",
            fontSize: "14px",
            fontWeight: isActive("/career") ? "bold" : "500",
            borderBottom: isActive("/career") ? "2px solid #1e88e5" : "none",
          }}
        >
          {" "}
          {posts[0]?.data.tab5}
        </Link>
        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            color: isActive("/contact") ? "#1e88e5" : "#000",
            fontSize: "14px",
            fontWeight: isActive("/contact") ? "bold" : "500",
            borderBottom: isActive("/contact") ? "2px solid #1e88e5" : "none",
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
