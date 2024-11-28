"use client";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";

function ContactUs() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("contact" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const label: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#1874DA",
  };
  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      valid = false;
    } else {
      newErrors.firstName = "";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      valid = false;
    } else {
      newErrors.lastName = "";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required";
      valid = false;
    } else {
      newErrors.contactNumber = "";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      valid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      // Add form submission logic here
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <div
        style={{
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "center",
          gap: isSmallScreen ? "16px" : "24px",
        }}
      >
        {posts.length > 0 && (
          <>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: isSmallScreen ? "32px" : "56px",
                fontWeight: 700,
                color: "#000000",
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
                padding: "10px",
                color: "#6D6D6D",
                // padding: isSmallScreen ? "0px 10px" : "0px 50px 0px 70px",
              }}
            >
              {posts[0]?.data.description}
            </Typography>
          </>
        )}

<form
  onSubmit={handleSubmit}
  style={{
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",  // Centers the form content
    justifyContent: 'center',  // Centers the form vertically
    width: "100%",  // Ensure the form takes up full width on smaller screens
    // maxWidth: "600px",  // Limit the width on larger screens to make it more centered
    margin: "0 auto",  // Center the form horizontally
  }}
>
  <Grid container spacing={isSmallScreen ? 2 : 3} justifyContent="center">
    {/* First Row: First Name and Last Name */}
    <Grid item xs={12} sm={5}>
      <Typography style={label}>{posts[0]?.data.label1}</Typography>
      <TextField
        fullWidth
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder={posts[0]?.data.placeholder1 || "Enter your first name"}
        variant="outlined"
        error={!!errors.firstName}
        helperText={errors.firstName}
      />
    </Grid>
    <Grid item xs={12} sm={5}>
      <Typography style={label}>{posts[0]?.data.label2}</Typography>
      <TextField
        fullWidth
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder={posts[0]?.data.placeholder2 || "Enter your last name"}
        variant="outlined"
        error={!!errors.lastName}
        helperText={errors.lastName}
      />
    </Grid>

    {/* Second Row: Email and Contact Number */}
    <Grid item xs={12} sm={5}>
      <Typography style={label}>{posts[0]?.data.label3}</Typography>
      <TextField
        fullWidth
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={posts[0]?.data.placeholder3 || "Enter your email"}
        type="email"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email}
      />
    </Grid>
    <Grid item xs={12} sm={5}>
      <Typography style={label}>{posts[0]?.data.label4}</Typography>
      <TextField
        fullWidth
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
        placeholder={posts[0]?.data.placeholder4 || "Enter your contact number"}
        type="tel"
        variant="outlined"
        error={!!errors.contactNumber}
        helperText={errors.contactNumber}
      />
    </Grid>

    {/* Third Row: Message */}
    <Grid item xs={10}>
      <Typography style={label}>{posts[0]?.data.label5}</Typography>
      <TextField
        fullWidth
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={posts[0]?.data.placeholder5 || "Enter your message"}
        multiline
        rows={4}
        variant="outlined"
        error={!!errors.message}
        helperText={errors.message}
      />
    </Grid>
  </Grid>

  <Box display="flex" justifyContent="center" marginTop="20px">
    <Button
      type="submit"
      variant="contained"
      style={{
        fontFamily: "Poppins",
        fontSize: "14px",
        textTransform: "none",
        fontWeight: 700,
        color: "#FFFFFF",
        background: "#1874DA",
        cursor: "pointer",
        borderRadius: "8px",
        padding: "10px 100px",
        display: "flex",
        // alignItems: "center",
        gap: "8px",
      }}
    >
      {posts[0]?.data.button}
    </Button>
  </Box>
</form>

      </div>
    </div>
  );
}

export default ContactUs;
