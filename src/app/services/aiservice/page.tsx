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
  const [showForm, setShowForm] = useState(false); // State to manage form visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    selectedServices: [] as string[], // For storing multiple selected services
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await client.getAllByType("generativeaiservices" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const handleKnowMoreClick = () => {
    setShowForm(true); // Show the form modal when the button is clicked
  };

  const handleClose = () => {
    setShowForm(false); // Close the modal
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to API)
    // alert("Form submitted!");
    handleClose(); // Close the modal after submission
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
              style={{ maxWidth: "80%", height: "auto" }} // Make the image responsive
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
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "15px",
                  textAlign: "left" as const,
                  color: "#7A7A7A",
                  maxWidth: "50%",
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
                onClick={handleKnowMoreClick} // Show form modal on click
              >
                {posts[0]?.data.button}
              </Button>

              {/* Modal Form (Dialog) */}
              <Dialog open={showForm} onClose={handleClose}>
                <DialogTitle>Fill out the form to know more</DialogTitle>
                <DialogContent>
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
                          style={{ marginBottom: "10px" }}
                        />
                        <TextField
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          style={{ marginBottom: "10px" }}
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
                          style={{ marginBottom: "20px" }}
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
                          style={{ marginBottom: "10px" }}
                        />
                        <FormControl fullWidth style={{ marginBottom: "20px" }}>
                          <Typography variant="body1" style={{ marginBottom: "10px" }}>
                            Select Services
                          </Typography>
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value="service1"
                                  checked={formData.selectedServices.includes("service1")}
                                  onChange={handleCheckboxChange}
                                />
                              }
                              label="Generative AI Services "
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value="service2"
                                  checked={formData.selectedServices.includes("service2")}
                                  onChange={handleCheckboxChange}
                                />
                              }
                              label="Generative AI Services"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  value="service3"
                                  checked={formData.selectedServices.includes("service3")}
                                  onChange={handleCheckboxChange}
                                />
                              }
                              label="Development Services"
                            /> <FormControlLabel
                              control={
                                <Checkbox
                                  value="service4"
                                  checked={formData.selectedServices.includes("service4")}
                                  onChange={handleCheckboxChange}
                                />
                              }
                              label="Engineering & Design Services"
                            />
                          </FormGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    onClick={handleFormSubmit}
                    color="primary"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default GenerativeAIServices;
