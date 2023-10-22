import Navbar from "@/components/UI/Navbar/Navbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
     <section className="min-h-screen mt-[10rem]">
     {children}
     </section>
    </div>
  );
};

export default PublicLayout;
