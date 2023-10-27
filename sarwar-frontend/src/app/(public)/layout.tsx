import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary text-white w-full  min-h-screen overflow-y-auto overflow-x-hidden 

    "
    >
      {/* <section className="min-h-screen w-full bg-secondary">
        </section> */}
        {children}
    </div>
  );
};

export default PublicLayout;
