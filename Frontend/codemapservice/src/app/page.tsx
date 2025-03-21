import About from "@/Components/About";
import Banner from "@/Components/Banner";
import FastHeader from "@/Components/FastHeader";
import Header from "@/Components/Header";
import ServicesBar from "@/Components/ServicesBar";
export default function Home() {
  return (
    <>
      <FastHeader />
      <Header />
      <Banner />
      <ServicesBar />
      <About />
    </>
  );
}
