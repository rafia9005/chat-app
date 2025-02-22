import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

