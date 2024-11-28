import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function Subscribe() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any>([]);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchPosts = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await client.getAllByType("subscribe" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
      setEmailHelperText("Please enter a valid email address.");
    } else {
      setEmailError(false);
      setEmailHelperText('');
      // handle your submit logic, like sending email or making an API call.
      console.log("Form submitted with email:", email);
    }
  };

  return (
    <div
      style={{
        padding: "30px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
            {posts[0]?.data.heading}
          </Typography>
          <Typography
            sx={{
               fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "justify",
              marginTop: "15px",
              color: "#6D6D6D",
              padding: isSmallScreen ? "0px 10px" : "0px 50px 0px 70px",
            }}
          >
            {posts[0]?.data.title}
          </Typography>
          <Grid
            container
            spacing={isSmallScreen ? 2 : 3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={posts[0]?.data.placeholder || "Enter your Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderRadius: "12px",
                  border: "1px solid #000000",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleSubmit}
                        sx={{
                          fontSize: "14px",
                          textTransform: "none",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          background: "#1874DA",
                          cursor: "pointer",
                          borderRadius: "8px",
                          padding: "10px 50px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        {posts[0]?.data.button}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={emailError}
                helperText={emailHelperText}
              />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default Subscribe;
