import HeaderPage from "@/components/HOME/Header";
import Stack from "@/components/HOME/Stack";
import Navbar from "@/components/UI/Navbar/Navbar";
import Projects from "./(public)/projects/page";
import ServicesPage from "@/components/HOME/Service";
import ContactMe from "./(public)/contact/page";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <Navbar />
      </section>
      <section className="container mx-auto  mt-20 min-h-screen">
        <HeaderPage />
        <Stack />
        <Projects />
        <ServicesPage/>
        <ContactMe></ContactMe>
      </section>
    </div>
  );
}
