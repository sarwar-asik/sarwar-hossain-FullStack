import HeaderPage from "@/components/HOME/Header";
import Navbar from "@/components/UI/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <Navbar />
      </section>
      <section className="container  mt-20 min-h-screen">
        <HeaderPage/>
        <h3>Home page1</h3>
        <h3>Home page2</h3>
      </section>
    </div>
  );
}
