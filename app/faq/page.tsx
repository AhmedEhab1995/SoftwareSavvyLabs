import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Software SAVVY Labs offer?",
    answer: "We offer a comprehensive range of services including digital transformation, fintech solutions, outsourcing services, and smart digital factory implementations. Our expertise spans across web and mobile development, cloud services, and digital strategy consulting.",
  },
  {
    question: "How do you ensure project security and confidentiality?",
    answer: "We implement industry-leading security protocols and sign comprehensive NDAs. Our team follows strict security guidelines and uses encrypted communication channels for all client interactions.",
  },
  {
    question: "What is your project development methodology?",
    answer: "We follow an agile development methodology with regular sprints and client checkpoints. This ensures flexibility, transparency, and continuous delivery throughout the project lifecycle.",
  },
  {
    question: "Do you provide post-deployment support?",
    answer: "Yes, we offer comprehensive post-deployment support including maintenance, updates, and technical assistance. We also provide training for your team to ensure smooth operation.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. We provide detailed project plans during the initial consultation, with most projects ranging from 3-6 months for completion.",
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer flexible pricing models including fixed-price, time and materials, and dedicated team arrangements. Each project is evaluated individually to determine the most suitable pricing structure.",
  },
]

export default function FAQPage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}