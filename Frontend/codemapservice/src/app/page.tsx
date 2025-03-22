import About from "@/Components/About";
import Banner from "@/Components/Banner";
import FastHeader from "@/Components/FastHeader";
import Header from "@/Components/Header";
import Services from "@/Components/Services";
import WorkProcess from "@/Components/WorkProcess";
import ServicesBar from "@/Components/ServicesBar";
import WhyUs from "@/Components/WhyUs";
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
    </>
  );
}
