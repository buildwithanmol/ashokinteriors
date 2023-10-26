import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import "@/Styles/globals.css";
import { Source_Serif_4 } from "next/font/google";
import { RiWhatsappLine } from "react-icons/ri";
const serif = Source_Serif_4({ subsets: ["latin"] });
import Link from "next/link";

export const metadata = {
  title: "Ashok Interiors",
  description:
    "Ashok interiors create thoughtful, beautiful interiors that meet our client’s aesthetical, functional and economical goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${serif.className}`}>
          <Header />
          {children}
          <Footer />
         
        </body>
    </html>
  );
}
