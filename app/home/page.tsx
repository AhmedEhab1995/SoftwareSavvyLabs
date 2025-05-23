"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  Building2,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { ClientsSection } from "@/components/clients-section";
import { useLanguage } from "@/lib/i18n";
import { translations } from "@/lib/translations";

export default function Home() {
  const { direction, language } = useLanguage();
  const homeItems = translations[language]?.home;

  const stats = [
    { label: homeItems.stats.transactions, value: "10+", icon: Building2 },
    { label: homeItems.stats.clients, value: "17+", icon: Users },
    { label: homeItems.stats.partners, value: "10+", icon: Target },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Ensuring data protection and privacy",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering quality in every project",
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-20 relative bg-cover bg-center bg-no-repeat">
        {/* Background image layer */}
        {/* <div
          className="absolute inset-0 bg-[url('/images/SSL2.png')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        ></div> */}

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/SLLVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"
          aria-hidden="true"
        ></div>

        {/* Content layer */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            {homeItems.hero.title}
          </h1>

          <p className="text-xl text-white dark:text-gray-100 mb-8 max-w-2xl mx-auto">
            {homeItems.hero.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">{homeItems.buttons.getStarted}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">{homeItems.buttons.ourServices}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-muted/50 to-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-6">
                  <stat.icon
                    className={`h-12 w-12 ${
                      index % 3 === 0
                        ? "text-primary"
                        : index % 3 === 1
                        ? "text-secondary"
                        : "text-accent"
                    }`}
                  />
                  <div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Clients Section */}

      <ClientsSection />

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <value.icon
                  className={`h-12 w-12 mx-auto mb-4 ${
                    index % 3 === 0
                      ? "text-primary"
                      : index % 3 === 1
                      ? "text-secondary"
                      : "text-accent"
                  }`}
                />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="bg-gradient-to-b from-muted/60 to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses through innovative digital solutions,
                driving growth and transformation in an ever-evolving
                technological landscape.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the global leader in digital innovation, setting new
                standards in software development and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
