import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    id: "ahmed-ehab",
    name: "Ahmed Ehab",
    role: "Chief Executive Officer (CEO)",
    image: "/images/ahmed-ehab.png",
    bio: "Software engineer with deep expertise in machine learning and AI",
    education: [
      "MS in Computer Science – Austria",
      "BS in Software Engineering",
    ],
    expertise: ["AI/ML", "Software Architecture", "Business Strategy"],
    achievements: [
      "Led national e-government fintech integration",
      "Built scalable POS software for 35,000+ daily transactions",
      "Expanded operations to 3 MENA markets",
    ],
  },
  {
    id: "osama-bahaa",
    name: "Osama Bahaa",
    role: "Chief Technology Officer (CTO)",
    image: "/images/osama-bahaa.png",
    bio: "Tech visionary specializing in system architecture and cybersecurity",
    education: [
      "MS in Information Security – Germany",
      "BS in Computer Engineering",
    ],
    expertise: ["System Design", "Cybersecurity", "Cloud Infrastructure"],
    achievements: [
      "Architected core systems for national subsidy platform",
      "Integrated cross-platform fintech solutions",
      "Deployed secure cloud environments",
    ],
  },
  {
    id: "ayman-helal",
    name: "Ayman Helal",
    role: "Product Manager",
    image: "/images/ayman-helal.png",
    bio: "Dubai-based product strategist with a user-first mindset",
    education: ["MBA in Technology Management", "BS in Engineering"],
    expertise: [
      "Agile Product Development",
      "UX Strategy",
      "Client Communication",
    ],
    achievements: [
      "Led SWVL’s data-driven expansion project",
      "Managed product delivery across 3 countries",
      "Streamlined agile practices for global clients",
    ],
  },
  {
    id: "abdelrahman-younis",
    name: "Abdelrahman Younis",
    role: "Chief Financial Officer (CFO)",
    image: "/images/abdo.png",
    bio: "Finance lead with a sharp eye on growth and risk optimization",
    education: ["MSc. Finance – England", "BS in Economics & Finance"],
    expertise: ["Corporate Finance", "SaaS Pricing", "Strategic Planning"],
    achievements: [
      "Improved project margins via budget optimization",
      "Built sustainable financial models for R&D",
      "Structured multi-currency payment systems",
    ],
  },
  {
    id: "omar-fawzy",
    name: "Omar Fawzy",
    role: "Head of Design",
    image: "/images/omar-fawzy.png",
    bio: "Creative lead transforming ideas into seamless digital interfaces",
    education: ["BA in Graphic Design", "Certified UX/UI Specialist"],
    expertise: ["UX/UI Design", "Brand Identity", "Design Systems"],
    achievements: [
      "Revamped booking systems for travel tech clients",
      "Launched design system reducing dev handoff time",
      "Elevated brand identity for international clients",
    ],
  },
  {
    id: "sameh-farouk",
    name: "Sameh Farouk",
    role: "Lead Developer",
    image: "/images/sameh-farouk.png",
    bio: "Full-stack developer focused on scalable, high-performance systems",
    education: [
      "BS in Computer Science – Italy",
      "Certified Full-Stack Developer",
    ],
    expertise: [
      "Web Development",
      "API Integration",
      "Performance Engineering",
    ],
    achievements: [
      "Built ERP/CRM for leading travel agency",
      "Maintained 99.9% uptime across client platforms",
      "Mentored dev team and standardized codebase",
    ],
  },
];

// Only needed if using `output: export`
export function generateStaticParams() {
  return team.map((person) => ({
    id: person.id,
  }));
}

export default function PersonPage({ params }: { params: { id: string } }) {
  const person = team.find((p) => p.id === params.id);

  if (!person) {
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
                src={person.image}
                alt={person.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
            <Badge variant="secondary" className="mb-4">
              {person.role}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Biography</h2>
              <p className="text-muted-foreground">{person.bio}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Education</h2>
              <ul className="list-disc list-inside text-muted-foreground">
                {person.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Areas of Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {person.expertise.map((exp, index) => (
                  <Badge key={index} variant="outline">
                    {exp}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Key Achievements</h2>
              <ul className="list-disc list-inside text-muted-foreground">
                {person.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
