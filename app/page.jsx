/**
 * The function `page` renders a React component that displays various sections of a landing page,
 * including hero section, stats data, features data, how it works section, testimonials section, and a
 * banner with a call-to-action button.
 * @returns The `page` component is being returned, which contains sections for HeroSection, Stats
 * Data, Features Data, How it works, Testimonial Section, and a Banner section. Each section is
 * populated with data from the imported files and components.
 */
"use client";
import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-40">
      <HeroSection />

      {/* Stats Data */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statData, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-slate-700 mb-2">
                  {statData.value}
                </div>
                <div className="text-gray-600">{statData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Data */}
      <section className="py-20">
        <div className="mx-auto container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            All-in-One Solution for Mastering Your Finances{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4 space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50 mb-1">
        <div className="mx-auto container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center rounded-full bg-slate-100 justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="font-semibold mb-4 text-xl">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}

      <section className="py-20">
        <div className="mx-auto container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Voices of Our Valued Users{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((test, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4 ">
                  <div className="flex items-center mb-4">
                    <Image
                      src={test.image}
                      alt={test.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{test.name}</div>
                      <div className="text-sm text-gray-600">{test.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{test.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-20 bg-slate-600">
        <div className="mx-auto container px-4 text-center ">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empowered to Shape Your Financial Future
          </h2>
          <p className="text-slate-100 mb-8 max-w-2xl mx-auto">
            Become Part of a Thriving Community of Thousands Mastering Finances
            with AI Vault
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-slate-600 hover:bg-slate-50 animate-bounce"
            >
              Begin Free Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;
