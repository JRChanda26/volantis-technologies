import AboutUs from "./homepage/AboutUs";
import ContactUs from "./homepage/ContactUs";
import Footer from "./homepage/Footer";
import GlobalPartnership from "./homepage/GlobalPartnerships";
import Header from "./homepage/Header";
// import LatestNews from "./homepage/LatestNews";
import ServicesOfferedbyUs from "./homepage/ServicesOfferedbyUs";
import StaffSmarter from "./homepage/StaffSmarter";
import Subscribe from "./homepage/Subscribe";
// import Testimonials from "./homepage/Testimonials";

export default function Home() {
  return (
    <div>
       <Header />
      <StaffSmarter />
      <GlobalPartnership />
      <ServicesOfferedbyUs />
      <AboutUs />
      {/* <Testimonials /> */}
      {/* <LatestNews /> */}
      <ContactUs />
      <Subscribe />
      <Footer />
    </div>
  );
}
