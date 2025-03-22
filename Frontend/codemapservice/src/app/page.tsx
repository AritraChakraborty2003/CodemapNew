import About from "@/Components/About";
import Banner from "@/Components/Banner";
import FastHeader from "@/Components/FastHeader";
import Header from "@/Components/Header";
import Services from "@/Components/Services";
import WorkProcess from "@/Components/WorkProcess";
import ServicesBar from "@/Components/ServicesBar";
import WhyUs from "@/Components/WhyUs";
import OurProjects from "@/Components/OurProjects";
import ContactUs from "@/Components/ContactUs";
import FAQComponent from "@/Components/FAQComponent";
import NewsLetter from "@/Components/NewsLetter";
import Footer from "@/Components/Footer";
// Minified to reduce conflicts

export default function Home() {
  return (
    <>
      <FastHeader />
      <Header />
      <Banner />
      <ServicesBar />
      <About />
      <Services />
      <div className="hidden lg:block">
        <WorkProcess />
      </div>
      <div style={{ marginTop: "5vmin" }}>
        <ServicesBar />
      </div>
      <WhyUs />
      <OurProjects />
      <ContactUs />
      <FAQComponent />
      <NewsLetter />
      <Footer />
    </>
  );
}
