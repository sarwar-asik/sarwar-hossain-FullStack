import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary text-white">
      <section className="min-h-screen w-full bg-secondary">{children}</section>
    </div>
  );
};

export default PublicLayout;
