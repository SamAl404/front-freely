import { Search } from "lucide-react";
import SearchForm from "@/components/search-form";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
{
  /*Provisional data for freelancer, this data is suposed to be retrieved from the database*/
}

const freelancers = [
  {
    id: 1,
    name: "Sara Chen",
    title: "Full-Stack Developer",
    description:
      "Experienced developer specializing in modern web applications with 5+ years in the industry.",
    skills: ["React", "Node.js", "TypeScript"],
    avatar: "",
  },
  {
    id: 2,
    name: "David Lee",
    title: "UI/UX Designer",
    description:
      "Creative designer focused on user-centered design with a passion for creating intuitive interfaces.",
    skills: ["Figma", "Adobe XD", "Photoshop"],
    avatar: "",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Mobile App Developer",
    description:
      "Expert in building cross-platform mobile applications with a focus on performance and user experience.",
    skills: ["React Native", "Flutter", "Swift"],
    avatar: "",
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Digital Marketing Specialist",
    description:
      "Results-driven marketer with expertise in SEO, content strategy, and social media campaigns.",
    skills: ["SEO", "Google Ads", "Content Marketing"],
    avatar: "",
  },
  {
    id: 5,
    name: "Emily Taylor",
    title: "Graphic Designer",
    description:
      "Creative professional specializing in brand identity, illustration, and visual storytelling.",
    skills: ["Illustrator", "Photoshop", "Branding"],
    avatar: "",
  },
  {
    id: 6,
    name: "Alex Kumar",
    title: "Data Scientist",
    description:
      "Analytical expert turning complex data into actionable insights using machine learning and AI.",
    skills: ["Python", "TensorFlow", "SQL"],
    avatar: "",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section*/}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-snug">
            Find the perfect <br />
            <span className="text-green-700">freelancer</span> for your project
          </h2>
          <p className="text-xl text-muted-foreground m-10 max-w-2xl mx-auto text-pretty">
            Connect with talented professionals from around the world. Get your
            project done right, on time, and within budget.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1 ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured freelancers */}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Featured Freelancers
            </h3>
            <p className="text-muted-foreground text-lg">
              Discover top-rated proffesionals ready to bring your vision to
              life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelancers.map((freelancer) => (
              <Card
                key={freelancer.id}
                className="hover:shadow-lg transition-shadow duration-300 border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={freelancer.avatar || "/placeholder.svg"}
                        alt={freelancer.name}
                      />
                      <AvatarFallback>
                        {freelancer.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-lg">
                        {freelancer.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {freelancer.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foregroud text-sm mb-4">
                    {freelancer.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {freelancer.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-green-700 text-white text-sm font-medium hover:bg-green-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Freelancers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
