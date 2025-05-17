"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Smartphone,
  Globe,
  ShieldCheck,
  Brain,
  BarChart,
  Cloud,
} from "lucide-react";

const products = [
  {
    icon: Globe,
    title: "Enterprise Suite",
    description: "Complete business management solution",
    features: ["CRM", "ERP", "Analytics", "HR Management"],
    category: "Business",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Secure mobile banking platform",
    features: ["Payments", "Transfers", "Bills", "Investment"],
    category: "Fintech",
  },
  {
    icon: ShieldCheck,
    title: "SecureGuard",
    description: "Advanced security management system",
    features: ["Access Control", "Monitoring", "Alerts", "Compliance"],
    category: "Security",
  },
  {
    icon: Brain,
    title: "AI Analytics",
    description: "Intelligent business analytics platform",
    features: ["Predictions", "Insights", "Reports", "Optimization"],
    category: "Analytics",
  },
  {
    icon: BarChart,
    title: "Market Insight",
    description: "Real-time market analysis tool",
    features: ["Trends", "Forecasting", "Competition", "Strategy"],
    category: "Business",
  },
  {
    icon: Cloud,
    title: "CloudFlow",
    description: "Cloud infrastructure management",
    features: ["Deployment", "Scaling", "Monitoring", "Security"],
    category: "Infrastructure",
  },
];

export default function ProductsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProduct, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentIndex];

  return (
    <div className="flex flex-col gap-16 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions designed to transform your business operations
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProduct}
            className="flex-shrink-0"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Card className="flex-grow transition-all duration-500 hover:shadow-lg">
            <CardHeader>
              <div className="mb-4">
                <currentProduct.icon className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="flex items-center justify-between">
                {currentProduct.title}
                <Badge variant="secondary">{currentProduct.category}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {currentProduct.description}
              </p>
              <ul className="space-y-2">
                {currentProduct.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextProduct}
            className="flex-shrink-0"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
