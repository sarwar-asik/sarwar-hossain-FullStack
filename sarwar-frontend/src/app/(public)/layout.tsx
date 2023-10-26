import Navbar from "@/components/UI/Navbar/Navbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary text-white">
      {/* <Navbar></Navbar> */}
     <section className="min-h-screen ">
     {children}
     </section>
    </div>
  );
};

export default PublicLayout;
