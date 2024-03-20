import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Intro section with dropdown navigation",
  description: "A challenge by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} bg-[#FAFAFA]`}>
        <Navbar />
        <main className="flex justify-center">{children}</main>
      </body>
    </html>
  );
}
