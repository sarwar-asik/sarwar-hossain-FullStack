import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Provider";
import Navbar from "@/v2Components/UI/Navbar/Navbar";

import Sidebar from "@/v2Components/UI/Navbar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarwar Hossain",
  description: "Developed by Sarwar hossain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {/* <Navbar />

        <main
        //  style={{ display: "flex",justifyContent:"start",marginInline:"auto" }}
         >
          <Sidebar />
          <Providers>
            {children}
            
            </Providers>
        </main> */}

        <Providers>
          <Navbar />
          <main
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Sidebar />
            <section
              style={{
                width:"100%",
                // marginInline: "auto",
              }}
            >
              {children}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
