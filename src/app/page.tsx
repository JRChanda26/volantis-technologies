import AboutUs from "./homepage/AboutUs";
import Career from "./homepage/Career";
import ContactUs from "./homepage/ContactUs";
import GlobalPartnership from "./homepage/GlobalPartnerships";
import Header from "./homepage/Header";
import LatestNews from "./homepage/LatestNews";
import ServicesOfferedbyUs from "./homepage/ServicesOfferedbyUs";
import StaffSmarter from "./homepage/StaffSmarter";
import Subscribe from "./homepage/Subscribe";
import Testimonials from "./homepage/Testimonials";


export default function Home() {
  return (
    <div>
      <Header/>
      <StaffSmarter/>
      <GlobalPartnership />
      <ServicesOfferedbyUs/>
      <AboutUs/>
      <Testimonials/>
      <LatestNews/>
      <ContactUs/>
      <Subscribe/>
      <Career/>
    </div>
  );
}
