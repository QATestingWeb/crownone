
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Homepage from "./Home/homepage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      
      <Homepage />
      
    </div>
  );
}