/* This code snippet is a React component named `HeroSection` that represents a hero section of a
webpage. Here's a breakdown of what the code is doing: */
"use client"
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const ref = useRef();

  //   Scrolling the image when height threshold is 100
  useEffect(() => {
    const currRef = ref.current;

    const handleScroll = () => {
      const currPos = window.scrollY;
      if (currPos > 100) {
        currRef.classList.add("scrolled");
      } else {
        currRef.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pb-40 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          {" "}
          Master Your Money <br /> with AIVault
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          An AI-driven financial tool that empowers you to monitor, plan, and
          grow your savings with instant updates{" "}
        </p>
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="px-8">
              Explore Now
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div ref={ref} className="hero-image">
            <Image
              src={"/Hero.jpg"}
              width={1080}
              height={620}
              alt="Hero Image"
              className="rounded-lg  shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
