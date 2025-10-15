import { Search } from "lucide-react";
import Input from "@/components/input";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section*/}
      <section className="py-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Find the perfect <span>freelancer</span> for your project
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Connect with talented professionals from around the world. Get your
            project done right, on time, and within budget.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input/>
                <Button></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
