"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search for any service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>
        <Button
          size="lg"
          className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
