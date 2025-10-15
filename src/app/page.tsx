import { Search } from "lucide-react";
import SearchForm from "@/components/search-form";

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
    
  }
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </div>
      </section>
    </div>
  );
}
