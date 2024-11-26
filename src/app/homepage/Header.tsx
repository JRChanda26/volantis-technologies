"use client"
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  return (
    <Router>
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
          <img
            src="public/image vol.png" // Replace with your logo URL
            alt="Volantis Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1e88e5",
            }}
          >
            VOLANTIS
          </span>
        </div>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "#1e88e5",
              fontSize: "14px",
              fontWeight: "500",
              borderBottom: "2px solid #1e88e5",
            }}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div style={{ position: "relative" }}>
            <span
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Services
            </span>
            <div
              style={{
                display: "none",
                position: "absolute",
                top: "100%",
                left: "0",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "4px",
                minWidth: "150px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
              className="dropdown-menu"
            >
              <Link
                to="/service1"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Service 1
              </Link>
              <Link
                to="/service2"
                style={{
                  display: "block",
                  padding: "10px 15px",
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Service 2
              </Link>
            </div>
          </div>

          {/* Other Links */}
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            About Us
          </Link>
          <Link
            to="/blog"
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Blog
          </Link>
          <Link
            to="/career"
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Career
          </Link>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#000",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Contact Us
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
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1565c0")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e88e5")}
        >
          Employee Login
        </button>
      </div>
    </Router>
  );
}

export default Header;
