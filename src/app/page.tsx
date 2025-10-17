import SearchForm from "@/components/search-form";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import {
  Search,
  Laptop,
  Smartphone,
  Palette,
  TrendingUp,
  Pen,
  Database,
  FileText,
  Video,
} from "lucide-react";
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

{
  /*Provisional data for services, this data is suposed to be retrieved from the database*/
}
const services = [
  {
    id: 1,
    service: "Web Development",
    description:
      "Professional web development services including responsive design, modern frameworks, and optimized performance.",
    category: "Software Development",
    icon: Laptop,
  },
  {
    id: 2,
    service: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    category: "Software Development",
    icon: Smartphone,
  },
  {
    id: 3,
    service: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality for optimal user engagement.",
    category: "Design & Creative",
    icon: Palette,
  },
  {
    id: 4,
    service: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies including SEO, social media, and content marketing campaigns.",
    category: "Marketing & Sales",
    icon: TrendingUp,
  },
  {
    id: 5,
    service: "Graphic Design",
    description:
      "Creative graphic design services for branding, logos, illustrations, and visual content creation.",
    category: "Design & Creative",
    icon: Pen,
  },
  {
    id: 6,
    service: "Data Analysis",
    description:
      "Advanced data analytics and visualization to transform raw data into actionable business insights.",
    category: "Data & Analytics",
    icon: Database,
  },
  {
    id: 7,
    service: "Content Writing",
    description:
      "Engaging and SEO-optimized content creation for blogs, websites, and marketing materials.",
    category: "Writing & Translation",
    icon: FileText,
  },
  {
    id: 8,
    service: "Video Editing",
    description:
      "Professional video editing and post-production services for promotional, educational, and creative content.",
    category: "Video & Animation",
    icon: Video,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero section*/}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-snug">
            Find the perfect <br />
            <span className="text-green-700">freelancer</span> for your project.
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
                className="hover:shadow-lg transition-shadow duration-300 border-border p-0"
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

                  <div className="flex">
                    <Button className="bg-primary w-full text-primary-foreground hover:bg-primary/90">
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

      {/* Service categories*/}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Browse by category
            </h3>
            <p className="text-muted-foreground text-lg">
              Find the right talent for your specifics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-border hover:border-primary/50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.service}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to get started?
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Freely to connect them
            with top freelance talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foregorund text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Find Freelancers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
