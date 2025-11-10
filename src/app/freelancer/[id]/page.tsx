import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function FreelancerProfile() {
    return (
        <div className="min-h-screen bg-background">
            <div className="border-b bg-card">
                <div className="max-w-6xl mx-auto -px-4 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-foreground hover:text-green-700 transition-colors">
                        <ChevronLeft className="h-4 w-4" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}