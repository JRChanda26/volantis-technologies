"use client";

import { useState, useEffect } from "react";
import { client } from "../../../../prismic-configuration";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { PrismicNextImage } from "@prismicio/next";
import Header from "@/app/homepage/Header";

function GenerativeAIServices() {
  const [posts, setPosts] = useState<any>("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    selectedServices: [] as string[],
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    services: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("generativeaiservices" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const handleKnowMoreClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const validateForm = () => {
    const errors = {
      name: "",
      email: "",
      message: "",
      phone: "",
      services: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      errors.name = "Name should only contain alphabetic characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      errors.message = "Message should be at least 10 characters long";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (formData.selectedServices.length === 0) {
      errors.services = "Please select at least one service";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close form if the user clicks on the overlay
    if (e.target === e.currentTarget) {
      setShowForm(false);
    }
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here (e.g., send data to API)
      // alert("Form submitted!");
      handleClose();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        selectedServices: [...prevState.selectedServices, value],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        selectedServices: prevState.selectedServices.filter(
          (service) => service !== value
        ),
      }));
    }
  };

  const textStyle: React.CSSProperties = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "left" as const,
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
    color: "#1874DA",
    padding: "10px",
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "200px ",
          flexDirection: "column",
          paddingBottom: "2%",
          // height: "100vh",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            padding: { xs: "20px", sm: "30px", md: "40px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "36px", sm: "48px", md: "56px" },
              fontWeight: 700,
              color: "#1874DA",
            }}
          >
            {posts[0]?.data.heading}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
              fontWeight: 400,
              color: "#6D6D6D",
              padding: "18px 0px 50px 0px",
            }}
          >
            {posts[0]?.data.description}
          </Typography>
        </Grid>
        <Grid
          container
          spacing={0}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PrismicNextImage
              field={posts[0]?.data.generativeaiservicesimg}
              alt={""}
              style={{ width: "669px", height: "470px" }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 20px",
            }}
          >
            <div>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "25px",
                  textAlign: "left" as const,
                  color: "#7A7A7A",
                  maxWidth: "70%",
                  padding: "24px 0 24px 0px",
                }}
              >
                {posts[0]?.data.imagedesc}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  textAlign: "left" as const,
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {posts[0]?.data.heading2}
              </Typography>
              <Typography style={textStyle}>{posts[0]?.data.title1}</Typography>
              <Typography style={textStyle}>{posts[0]?.data.title2}</Typography>
              <Typography style={textStyle}>{posts[0]?.data.title3}</Typography>
              <Typography style={textStyle}>{posts[0]?.data.title4}</Typography>

              <Button
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  textTransform: "none",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  background: "#1874DA",
                  cursor: "pointer",
                  borderRadius: "6px",
                  padding: "10px 50px",
                  display: "flex",
                  marginTop: "20px",
                }}
                onClick={handleKnowMoreClick}
              >
                {posts[0]?.data.button}
              </Button>

              {/* Modal Form (Dialog) */}
              {showForm && (
 
    <Grid
      container
      spacing={0}
      style={{
        
          padding: '40px',
          position: "fixed",
          top: '100px',
          left: '200px',
          width: "60%",
          height: "80vh",
          backgroundColor: "none",
          zIndex: 1,
          // justifyContent: "center", 
          // alignItems: "center",
        }}
        onClick={handleOverlayClick}
    
    >
      {/* Left Side */}
      <Grid
        item
        xs={12} sm={6} md={6}
        style={{
          background: "#1874DA",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: '8px',
          height:'100%'
        }}
      >
        <Typography style={{ fontFamily: 'Poppins', color: '#FFFFFF' }}>
          Fill out the form to know more
        </Typography>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12} sm={6} md={6}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: '8px',
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "auto",
          height: "100%",
        }}
      >
        <form
          onSubmit={handleFormSubmit}
          style={{
            width: "100%", 
            height: "auto", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center"
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            style={{ marginBottom: "15px", width: "100%" }}
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            style={{ marginBottom: "15px", width: "100%" }}
          />

          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
            style={{ marginBottom: "15px", width: "100%" }}
          />

          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            error={!!formErrors.message}
            helperText={formErrors.message}
            multiline
            rows={4}
            style={{ marginBottom: "15px", width: "100%" }}
          />

          <FormControl
            component="fieldset"
            error={!!formErrors.services}
            style={{ width: "100%", marginBottom: "15px" }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    value="Engineering & Design Services"
                    checked={formData.selectedServices.includes(
                      "Engineering & Design Services"
                    )}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Engineering & Design Services"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Generative AI Services"
                    checked={formData.selectedServices.includes(
                      "Generative AI Services"
                    )}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Generative AI Services"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="Development Services"
                    checked={formData.selectedServices.includes(
                      "Development Services"
                    )}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Development Services"
              />
            </FormGroup>
            <div style={{ color: "red" }}>{formErrors.services}</div>
          </FormControl>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
              gap: "20px",
              paddingTop: "20px",
            }}
          >
            <Button
              type="submit"
              style={{
                backgroundColor: "#1874DA",
                color: "white",
                padding: "10px 40px",
                borderRadius: "6px",
              }}
            >
              Submit
            </Button>

            <Button
              onClick={handleClose}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                padding: "10px 40px",
                borderRadius: "6px",
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  
)}



            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default GenerativeAIServices;
