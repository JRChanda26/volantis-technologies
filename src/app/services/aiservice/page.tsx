"use client";

import { useState, useEffect } from "react";
import { client } from "../../../../prismic-configuration";
import {
  Button,
  Grid,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
          paddingTop: "50px",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "56px",
              fontWeight: 700,
              color: "#1874DA",
            }}
          >
            {posts[0]?.data.heading}
          </Typography>

          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              color: "#6D6D6D",
              padding: "18px 0px 50px 0px",
            }}
          >
            {posts[0]?.data.description}
          </Typography>
        </div>

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
              justifyContent: "center", // Centers the image horizontally
            }}
          >
            <PrismicNextImage
              field={posts[0]?.data.generativeaiservicesimg}
              alt={""}
              style={{ maxWidth: "100%", height: "auto" }} // Make the image responsive
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
              padding: "0 20px", // Adds spacing around text
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
              <div style={{ position: "relative" }}>
                <Dialog
                  open={showForm}
                  onClose={handleClose}
                  style={{
                    // background: "none",
                    minHeight: "70%",
                    width: "50%",
                    position: "absolute",
                    // top: "50%",
                    left: "25%",
                    // transform: "translate(-50%, -50%)", // Center the Dialog
                  }}
                >
                  <DialogTitle
                    style={{
                      color: "white",
                      background: "#1874DA",
                      fontFamily: "Poppins",
                    }}
                  >
                    Fill out the form to know more
                  </DialogTitle>
                  <DialogContent
                    style={{
                      background: "#1874DA",
                    }}
                  >
                    <form
                      onSubmit={handleFormSubmit}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          {/* Left Side Fields */}
                          <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            style={{
                              marginBottom: "10px",
                              backgroundColor: "white",
                              fontFamily: "Poppins",
                            }}
                            error={!!formErrors.name}
                            helperText={formErrors.name}
                          />
                          <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{
                              marginBottom: "10px",
                              backgroundColor: "white",
                              fontFamily: "Poppins",
                            }}
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                          />
                          <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            multiline
                            rows={4}
                            style={{
                              marginBottom: "20px",
                              backgroundColor: "white",
                              fontFamily: "Poppins",
                            }}
                            error={!!formErrors.message}
                            helperText={formErrors.message}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          {/* Right Side Fields */}
                          <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={{
                              marginBottom: "10px",
                              backgroundColor: "white",
                              fontFamily: "Poppins",
                            }}
                            error={!!formErrors.phone}
                            helperText={formErrors.phone}
                          />
                          <FormControl
                            fullWidth
                            style={{ marginBottom: "20px" }}
                          >
                            <Typography
                              variant="body1"
                              style={{
                                marginBottom: "10px",
                                color: "white",
                                fontFamily: "Poppins",
                              }}
                            >
                              Select Services
                            </Typography>
                            <FormGroup style={{ color: "white" }}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value="service1"
                                    checked={formData.selectedServices.includes(
                                      "service1"
                                    )}
                                    onChange={handleCheckboxChange}
                                    style={{ color: "white" }}
                                  />
                                }
                                label="Generative AI Services"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value="service2"
                                    checked={formData.selectedServices.includes(
                                      "service2"
                                    )}
                                    onChange={handleCheckboxChange}
                                    style={{ color: "white" }}
                                  />
                                }
                                label="Generative AI Services"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value="service3"
                                    checked={formData.selectedServices.includes(
                                      "service3"
                                    )}
                                    onChange={handleCheckboxChange}
                                    style={{ color: "white" }}
                                  />
                                }
                                label="Development Services"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value="service4"
                                    checked={formData.selectedServices.includes(
                                      "service4"
                                    )}
                                    onChange={handleCheckboxChange}
                                    style={{ color: "white" }}
                                  />
                                }
                                label="Engineering & Design Services"
                              />
                            </FormGroup>
                            {formErrors.services && (
                              <Typography
                                style={{
                                  color: "red",
                                  fontSize: "12px",
                                }}
                              >
                                {formErrors.services}
                              </Typography>
                            )}
                          </FormControl>
                        </Grid>
                      </Grid>
                    </form>
                  </DialogContent>
                  <DialogActions style={{ background: "#1874DA" }}>
                    <Button
                      onClick={handleClose}
                      color="primary"
                      style={{
                        color: "#1874DA",
                        background: "#FFFFFF",
                        textTransform: "none",
                        fontFamily: "Poppins",
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      onClick={handleFormSubmit}
                      color="primary"
                      variant="contained"
                      style={{
                        color: "#1874DA",
                        background: "#FFFFFF",
                        textTransform: "none",
                        fontFamily: "Poppins",
                      }}
                    >
                      Submit
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default GenerativeAIServices;
