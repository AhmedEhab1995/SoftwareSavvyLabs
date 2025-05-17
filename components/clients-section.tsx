import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const clients = [
  {
    id: "keystone-financial",
    name: "KeyStone Financial Solutions",
    logo: "/images/keystone.png",
    description: "Financial services provider",
    link: "https://keystonediligence.com/",
  },
  {
    id: "swvl",
    name: "SWVL",
    logo: "/images/SWVL.png",
    description: "Smart Transportation Solutions",
    link: "https://www.swvl.com/",
  },
  {
    id: "zenith-travel-agency",
    name: "Zenith Travel Agency",
    logo: "/images/TravelGo-removebg-preview.png",
    description: "Leading Travel Agency",
    link: "https://zenithstravel.com/",
  },
  {
    id: "damen-e-payment",
    name: "Damen E-payment",
    logo: "/images/Damen.png",
    description: "Data analytics company",
    link: "https://damen.com.eg/",
  },
];

export function ClientsSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Trusted Clients</h2>
          <p className="text-muted-foreground">
            Partnering with industry leaders to deliver exceptional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <Link href={`/clients/${client.id}`}>
              <Card
                key={client.name}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  {/* <a href={client.link} target="_blank" rel="noopener noreferrer"> */}
                  <div className="relative h-[100px] mb-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* </a> */}
                  <h3 className="font-semibold text-center mb-2">
                    {client.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {client.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
