import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const team = [
  {
    id: "ahmed-ehab",
    name: "Ahmed Ehab",
    role: "Chief Executive Officer (CEO)",
    image: "/images/ahmed-ehab.png",
    bio: "Software engineer with deep expertise in machine learning and AI",
  },
  {
    id: "osama-bahaa",
    name: "Osama Bahaa",
    role: "Chief Technology Officer (CTO)",
    image: "/images/osama-bahaa.png",
    bio: "Tech visionary specializing in system architecture and cybersecurity",
  },
  {
    id: "ayman-helal",
    name: "Ayman Helal",
    role: "Product Manager",
    image: "/images/Ayman-helal.png",
    bio: "Dubai-based product strategist with a user-first mindset",
  },
  {
    id: "abdelrahman-younis",
    name: "Abdelrahman Younis",
    role: "Chief Financial Officer (CFO)",
    image: "/images/abdo.png",
    bio: "Finance lead with a sharp eye on growth and risk optimization",
  },
  {
    id: "omar-fawzy",
    name: "Omar Fawzy",
    role: "Head of Design",
    image: "/images/omar-fawzy.png",
    bio: "Creative lead transforming ideas into seamless digital interfaces",
  },
  {
    id: "sameh-farouk",
    name: "Sameh Farouk",
    role: "Lead Developer",
    image: "/images/sameh-farouk.png",
    bio: "Full-stack developer focused on scalable, high-performance systems",
  },
];

export default function PeoplePage() {
  return (
    <div className="flex flex-col gap-16 pt-24">
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
  );
}
