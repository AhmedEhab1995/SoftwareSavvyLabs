import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, Building, Factory, Laptop } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Digital Services Operator",
    description:
      "Comprehensive digital transformation solutions including web and mobile development, cloud services, and digital strategy consulting.",
    features: [
      "Custom Software Development",
      "Cloud Solutions",
      "Digital Strategy Consulting",
      "UI/UX Design",
    ],
  },
  {
    icon: BadgeDollarSign,
    title: "Fintech and Payment Services",
    description:
      "Innovative financial technology solutions for modern payment processing and financial management systems.",
    features: [
      "Payment Gateway Integration",
      "E-wallet Solutions",
      "Blockchain Implementation",
      "Financial Software Development",
    ],
  },
  {
    icon: Building,
    title: "Outsourcing Services Provider",
    description:
      "Professional IT staffing and project outsourcing services to help businesses scale efficiently.",
    features: [
      "Dedicated Development Teams",
      "IT Staff Augmentation",
      "Project Management",
      "Quality Assurance",
    ],
  },
  {
    icon: Factory,
    title: "Smart Digital Factory",
    description:
      "Advanced manufacturing solutions leveraging IoT, AI, and automation technologies.",
    features: [
      "IoT Implementation",
      "Industrial Automation",
      "Data Analytics",
      "Predictive Maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to transform your business
            and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
