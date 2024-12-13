"use client";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";

function ContactUs() {
  const [posts, setPosts] = useState<any>([]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchPosts = async () => {
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

  // Define breakpoints using Material-UI's theme breakpoints
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg")); // Desktop and above
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg")); // Laptop
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Tablet
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Adjust font size based on the breakpoints
  const fontSize = isDesktop
    ? "56px"
    : isLaptop
      ? "48px"
      : isTablet
        ? "40px"
        : "32px";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [status, setStatus] = useState<number | null>(null);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  type Errors = {
    first_name?: string;
    last_name?: string;
    email?: string;
    contact_number?: string;
    message?: string;
  };

  const [errors, setErrors] = useState<Errors>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFields = (): Errors => {
    const newErrors: Errors = {};
    if (!firstName) newErrors.first_name = "Enter First Name";
    if (!lastName) newErrors.last_name = "Enter Last Name";
    if (!email) newErrors.email = "Enter email";
    else if (!emailRegex.test(email))
      newErrors.email = "Enter a valid email";
    if (!contactNumber) newErrors.contact_number = "Enter contact number";
    else if (contactNumber.length !== 10)
      newErrors.contact_number =
        "Contact number should be 10 digits";
    if (!message) newErrors.message = "Enter message";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check for errors
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      contact_number: contactNumber,
      message: message,
    };

    try {
      const response = await fetch("/api/contact-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setSnackbarMessage(result.message);
      setOpenSnackbar(true);

      const statusCode = response.status;
      setStatus(statusCode);

      sendEmail(e);

      setFirstName("");
      setLastName("");
      setEmail("");
      setContactNumber("");
      setMessage("");
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  const [emailStatus, setEmailStatus] = useState("");
  console.log(emailStatus)

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setEmailStatus("Sending...");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    const result = await response.json();
    console.log("Result", result);

    if (response.ok) {
      setEmailStatus("Email sent successfully!");
    } else {
      setEmailStatus("Failed to send email");
    }
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
          background: "#F6F6F6",
        }}
      >
        {posts.length > 0 && (
          <>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: fontSize,
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
              }}
            >
              {posts[0]?.data.description}
            </Typography>
          </>
        )}

        <form
          // onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",  // Centers the form content
            justifyContent: "center", // Centers the form vertically
            width: "100%", // Ensure the form takes up full width on smaller screens
            // maxWidth: "600px",  // Limit the width on larger screens to make it more centered
            margin: "0 auto", // Center the form horizontally
          }}
        >
          <Grid
            container
            spacing={isSmallScreen ? 2 : 3}
            justifyContent="center"
          >
            {/* First Row: First Name and Last Name */}
            <Grid item xs={12} sm={5}>
              <Typography style={label}>{posts[0]?.data.label1}</Typography>
              <TextField
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="FirstName"
                variant="outlined"
                type="text"
                fullWidth
                autoComplete="off"
                error={!!errors.first_name}
                helperText={errors.first_name}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography style={label}>{posts[0]?.data.label2}</Typography>
              <TextField
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="LastName"
                variant="outlined"
                type="text"
                fullWidth
                autoComplete="off"
                error={!!errors.last_name}
                helperText={errors.last_name}
              />
            </Grid>

            {/* Second Row: Email and Contact Number */}
            <Grid item xs={12} sm={5}>
              <Typography style={label}>{posts[0]?.data.label3}</Typography>
              <TextField
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                variant="outlined"
                type="text"
                fullWidth
                autoComplete="off"
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography style={label}>{posts[0]?.data.label4}</Typography>
              <TextField
                name="contact_number"
                value={contactNumber}
                onChange={(e) =>
                  setContactNumber(e.target.value.replace(/\D/g, ""))
                }
                placeholder="ContactNumber"
                variant="outlined"
                type="tel"
                fullWidth
                autoComplete="off"
                error={!!errors.contact_number}
                helperText={errors.contact_number}
              />
            </Grid>

            {/* Third Row: Message */}
            <Grid item xs={10}>
              <Typography style={label}>{posts[0]?.data.label5}</Typography>
              <TextField
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                variant="outlined"
                type="text"
                fullWidth
                autoComplete="off"
                multiline
                rows={5}
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
              onClick={(e: any) => handleSubmit(e)}
            >
              {posts[0]?.data.button}
            </Button>
          </Box>
        </form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={status === 200 ? "success" : "error"}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default ContactUs;
