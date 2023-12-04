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
     

        <Providers>
          <Navbar />
          <main
            style={{
              display: "flex",
              // justifyContent: "space-between",
             
              overflow: "hidden",
              // background:"red"
            }}
          >
            <Sidebar />
            <main
            // className="flex-1 lg:ml-[23%]"

              style={{
                // flex: 1, // Take up remaining width
                // marginLeft: "21%", // Set the width of the sidebar
                // position: "sticky",
                // right: 0,
                width:"100%",
                overflowY: "auto",             
                overflowX: "hidden",  
              }}
            >
              
              {children}
            </main>
          </main>
        </Providers>
      </body>
    </html>
  );
}
