import React from "react";
function Career() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
{/* Image and Text Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem",
          marginBottom: "2rem",
        }}
      >
        {/* Text Content */}
        <div style={{ flex: "1", paddingLeft: "13.5rem" }}>
        <h1 style={{ marginBottom: "1rem",fontSize: "2.5rem", fontWeight: "bold" }}>
        Make Your  <span style={{ color: "#0056D2" }}>Career <br></br>With Us</span>
        </h1>
          <p>
          Elevate your career with our staffing and recruitment<br></br> 
          expertise—find the perfect match for your skills and <br></br>
          ambitions!
          </p>
        </div>

        {/* Image */}
        <img
          src="Group 1171276708.png"
          alt="Professional people in meeting"
          style={{
            flex: "1",
            borderRadius: "10px",
            maxWidth: "600px",
            objectFit: "cover",
            marginLeft: "1rem",
          }}
        />
      </section>

      {/* Career Opportunities Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#f9f9f9",
          paddingLeft: "15rem",
        }}
      >
        {/* Career Details */}
        <div style={{ flex: "1", paddingRight: "2rem" }}>
          <h2 style={{ marginBottom: "1rem",fontSize: "2.5rem", fontWeight: "bold" }}>
            Career <span style={{ color: "#0056D2" }}>Opportunities</span>
          </h2>
          <details style={{ margin: "1rem 0" }}>
            <summary style={{ cursor: "pointer", fontSize: "1.2rem" }}>Customer Success Agent</summary>
            <p style={{ marginTop: "0.5rem" }}>On-Site</p>
          </details>
          <details style={{ margin: "1rem 0" }}>
            <summary style={{ cursor: "pointer", fontSize: "1.2rem" }}>UI/UX Designer</summary>
            <p style={{ marginTop: "0.5rem" }}>Hybrid</p>
          </details>
          <details style={{ margin: "1rem 0" }}>
            <summary style={{ cursor: "pointer", fontSize: "1.2rem" }}>Full-Stack Developer</summary>
            <p style={{ marginTop: "0.5rem" }}>On-Site</p>
          </details>
        </div>

        {/* Image */}
        <img
          src="Group 1171276720.png"
          alt="Professional people in meeting"
          style={{
            flex: "1",
            borderRadius: "10px",
            maxWidth: "600px",
            objectFit: "cover",
            marginLeft: "2rem",
          }}
        />
      </section>

      {/* Footer Section */}
      <section
  style={{
    textAlign: "center",
    padding: "12rem",
    color: "#fff",
    backgroundImage: "url('Rectangle 20.png')", // Replace with your car image URL
    backgroundSize: "cover", // Ensures the image covers the entire section
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
  }}
>
  <h2 style={{ fontSize: "1.8rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
    Ready To Hire Your Next Team Player?
  </h2>
  <button
    style={{
      marginTop: "1rem",
      padding: "0.8rem 1.5rem",
      backgroundColor: "#fff",
      color: "#0056D2",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Adds subtle shadow for better visibility
    }}
  >
    Know More
  </button>
</section>



    </div>
  );
}

export default Career;
