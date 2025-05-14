import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
    bio: "15+ years of experience in digital transformation",
    education: ["MBA from Harvard Business School", "BS in Computer Science"],
    expertise: [
      "Digital Transformation",
      "Strategic Planning",
      "Team Leadership",
    ],
    achievements: [
      "Led 100+ successful digital transformation projects",
      "Featured in Forbes 30 Under 30",
      "Keynote speaker at major tech conferences",
    ],
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300",
    bio: "Expert in cloud architecture and AI solutions",
    education: ["PhD in Computer Science", "MS in Artificial Intelligence"],
    expertise: ["Cloud Architecture", "AI/ML", "System Design"],
    achievements: [
      "Developed proprietary AI algorithms",
      "Published research in top tech journals",
      "Led development of cloud-native platform",
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
