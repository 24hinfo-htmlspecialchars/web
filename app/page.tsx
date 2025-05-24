import { Hero } from "@/features/landing/components/hero";
import { Header } from "@/features/landing/components/header";
import { Features } from "@/features/landing/components/features";
import { Contact } from "@/features/landing/components/contact";
import { Footer } from "@/features/landing/components/footer";
import { About } from "@/features/landing/components/about-us";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Features/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}
