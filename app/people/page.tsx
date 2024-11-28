import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const team = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
    bio: "15+ years of experience in digital transformation",
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
    bio: "Expert in cloud computing and architecture and AI solutions",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300",
    bio: "Passionate about creating intuitive user experiences",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300",
    bio: "Full-stack developer with 10+ years experience",
  },
  {
    name: "Lisa Patel",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&h=300",
    bio: "Specializes in agile methodologies and product strategy",
  },
  {
    name: "James Wilson",
    role: "Security Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
    bio: "Cybersecurity specialist with multiple certifications",
  },
]

export default function PeoplePage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <Link href={`/people/${member.id}`} key={member.id}>
              <Card className="hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">
                    {member.bio}
                  </p>
                  <Button className="w-full">View Profile</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}