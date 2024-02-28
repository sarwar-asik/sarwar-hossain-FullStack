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
          {/* <Navbar /> */}
          <main
            style={{
              display: "flex",
              // justifyContent: "space-between",
              overflow: "hidden",
              // background: "red",
              // position: "relative",

            }}
            className="bg-blue-30"
          >
            <Sidebar />
            <main
              // className="flex-1 lg:ml-[23%]"
              className="bg-red-40 w-full p-"
              style={{
                // flex: 1, // Take up remaining width
                // marginLeft: "21%", // Set the width of the sidebar
                // position: "sticky",
                // right: 0,
                // width: "100%",
                overflowY: "auto",
                overflowX: "hidden",
                // background: "yellow",
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
