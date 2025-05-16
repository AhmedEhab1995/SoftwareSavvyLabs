import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock clients data (ideally move to a shared file)
// app/clients/clients-data.ts
const clients = [
  {
    id: "keystone-financial",
    name: "KeyStone Financial Solutions",
    logo: "/images/keystone.png",
    description: "Financial services provider",
    details: {
      overview:
        "Developing a full software solution for a top due diligence firm in Algeria.",
      contributions: [
        "Website Development: User-friendly, informative online presence.",
        "Internal System: Robust platform for operations, data, and reporting.",
      ],
    },
    link: "https://keystonediligence.com/",
  },
  {
    id: "swvl",
    name: "SWVL",
    logo: "/images/SWVL.png",
    description: "Smart Transportation Solutions",
    details: {
      overview: "Optimizing SWVL operations using data-driven insights.",
      contributions: [
        "Transit Data Analysis: Identified high-demand areas for stop placement.",
        "Peak Timing Optimization: Improved fleet usage and user experience.",
      ],
    },
    link: "https://www.swvl.com/",
  },
  {
    id: "zenith-travel-agency",
    name: "Zenith Travel Agency",
    logo: "/images/TravelGo-removebg-preview.png",
    description: "Leading Travel Agency",
    details: {
      overview: "In-house software partner maintaining all digital systems.",
      contributions: [
        "ERP & CRM: Improved efficiency and customer interactions.",
        "Booking System: Reliable, automated online experience.",
        "Payment Integration: Secure and seamless e-payments.",
        "Cybersecurity: Advanced protection for data and transactions.",
        "Ongoing Support: Upgrades and troubleshooting.",
      ],
    },
    link: "https://zenithstravel.com/",
  },
  {
    id: "damen-e-payment",
    name: "Damen E-payment",
    logo: "/images/Damen.png",
    description: "Electronic payment company",
    details: {
      overview:
        "Built platforms for SMART and Damen, enabling seamless service delivery to over 60M citizens.",
      contributions: [
        "Platform Development: Integrated SMART and Damen databases.",
        "POS Software: 1,230+ machines, 35,000+ daily transactions.",
        "System Integration: Connected e-government with e-payment flows.",
      ],
    },
    link: "https://damen.com.eg/",
  },
];

export function generateStaticParams() {
  return clients.map((client) => ({
    id: client.id,
  }));
}
export default function ClientPage({ params }: { params: { id?: string } }) {
  const clientId = params.id;

  const client = clients.find((c) => c.id === clientId);

  if (!client) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginRight: "1rem",
            }}
          >
            404
          </h1>
          <div
            style={{
              height: "2rem",
              width: "1px",
              backgroundColor: "#ccc",
              marginRight: "1rem",
            }}
          />
          <p style={{ fontSize: "1rem" }}>This page could not be found.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">{client.name}</h1>
            <Badge variant="secondary" className="mb-4">
              {client.description}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
              <p className="text-muted-foreground">{client.details.overview}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Contribution</h2>
              <ul className="list-disc list-inside text-muted-foreground">
                {client.details.contributions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <CardContent className="space-y-6">
              {/* ... existing content ... */}

              <div className="pt-4 text-center">
                <a
                  href={
                    client.link.startsWith("http")
                      ? client.link
                      : `https://${client.link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Visit Website
                </a>
              </div>
            </CardContent>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
