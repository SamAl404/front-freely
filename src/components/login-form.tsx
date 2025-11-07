"use client";

import { useState } from "react";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPaswword, setShowPassword] = useState(false);

  const handleLoginSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginEmail, loginPassword);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-foreground">
          Welcome back!
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleLoginSumbit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="login-email"
              className="text-sm font-medium text-foreground"
            >
              Email Address
            </Label>
            <Input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label>Password</Label>
            <div className="relative">
              <Input
                id="login-password"
                type={showPaswword ? "text" : "password"}
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPaswword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foregound hover:text-foreground transition-colors"
              >
                {showPaswword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            Log In
          </Button>
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              {"Don't"} have an account?{" "}
              <button
                type="button"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <Link href="/signup">
                  <span className="text-green-600">Sign up</span>
                </Link>
              </button>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
