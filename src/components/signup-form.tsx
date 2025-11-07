"use client";
import { useState } from "react";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function SignUpForm() {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupLastName, setSignupLastName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [userType, setUserType] = useState<"freelancer" | "client">(
    "freelancer"
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSignupSumbit(e: React.FormEvent) {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup attempt:", {
      email: signupEmail,
      name: signupName,
      lastName: signupLastName,
    });
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-foreground">
          Get Started
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Fill in your details to create an account
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSignupSumbit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="signup-email"
              className="text-sm font-medium text-foreground"
            >
              Email Address
            </Label>
            <Input
              id="signup-email"
              type="email"
              placeholder="Enter your email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="signup-name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </Label>
              <Input
                id="signup-name"
                type="text"
                placeholder="First name"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                required
                className="w-full"
              ></Input>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="signup-lastname"
                className="text-sm font-medium text-foreground"
              >
                Last name
              </Label>
              <Input
                id="signup-lastname"
                type="text"
                placeholder="Last name"
                value={signupLastName}
                onChange={(e) => setSignupLastName(e.target.value)}
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="signup-password"
              className="text-sm font-medium text-foreground"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="signup-confirm-password"
              className="text-sm font-medium text-foreground"
            >
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                id="signup-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                required
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">
              Account Type
            </Label>
            <RadioGroup
              value={userType}
              onValueChange={(value) =>
                setUserType(value as "freelancer" | "client")
              }
            >
              <div className="flex items-center space-x-2 p-3 border border-border rounded-md hover:bg-accent/50 transition-colors">
                <RadioGroupItem value="freelancer" id="freelancer" />
                <Label
                  htmlFor="freelancer"
                  className="flex-1 cursor-pointer text-foreground"
                >
                  Freelancer
                  <p className="text-xs text-muted-foreground">
                    I want to offer my services
                  </p>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-3 border border-border rounded-md hover:bg-accent/50 transition-colors">
                <RadioGroupItem value="client" id="client" />
                <Label
                  htmlFor="client"
                  className="flex-1 cursor-pointer text-foreground"
                >
                  Client
                  <p className="text-xs text-muted-foreground">
                    I want to hire freelancers
                  </p>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit"
          className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors">
            Register
          </Button>
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <Link href="/login">
                  <span className="text-green-600">Log in</span>
                </Link>
              </button>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
