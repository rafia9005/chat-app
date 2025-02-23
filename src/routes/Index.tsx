import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function Index() {
  return (
    <>
      <SignedOut>
        <Navbar />
        <Hero />
      </SignedOut>
      <SignedIn>
        <Navbar />
        <h1 className="mt-[500px]">ALREADY TO USE</h1>
      </SignedIn>
    </>
  )
}

