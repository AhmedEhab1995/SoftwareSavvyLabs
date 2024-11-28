import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  {
    name: "TechCorp Global",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
    description: "Leading technology corporation",
  },
  {
    name: "FinanceHub",
    logo: "https://images.unsplash.com/photo-1598815272841-d7fdbc5d59a7?w=200&h=100&fit=crop",
    description: "Financial services provider",
  },
  {
    name: "SmartSolutions",
    logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=100&fit=crop",
    description: "Smart city solutions",
  },
  {
    name: "DataDrive",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=200&h=100&fit=crop",
    description: "Data analytics company",
  },
]

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
            <Card key={client.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="relative h-[100px] mb-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-center mb-2">{client.name}</h3>
                <p className="text-sm text-muted-foreground text-center">
                  {client.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}