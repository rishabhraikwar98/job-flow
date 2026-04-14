"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiMail, FiLock, FiArrowRight, FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

export default function SignIn() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Basic validation
    if (!email || !password) {
      return;
    }
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
      redirect("/dashboard");
    }
    setIsLoading(false);
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Welcome Back
          </h1>
          <p className="text-slate-400 text-lg">
            Sign in to continue tracking your job search
          </p>
        </div>

        {/* Sign In Form */}
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl shadow-2xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-white text-center">
              Sign In to Job Flow
            </CardTitle>
            <CardDescription className="text-slate-400 text-center">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    <p className="text-red-400 text-sm font-medium">{error}</p>
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-slate-300 font-medium"
                >
                  Password
                </Label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 pr-10 bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                    required
                  />
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 font-semibold h-12 text-base shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center gap-2">
                  {isLoading ? "Signing In..." : "Sign In"}{" "}
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600/50" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-slate-500">or</span>
              </div>
            </div>

            {/* Social Sign In */}
            <Button
              onClick={() => signIn("google")}
              variant="outline"
              className="w-full border-slate-600/50 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white h-12"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>
            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-slate-400">
                Don't have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            By signing in, you agree to our{" "}
            <button className="text-slate-400 hover:text-slate-300 underline">
              Terms of Service
            </button>{" "}
            and{" "}
            <button className="text-slate-400 hover:text-slate-300 underline">
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
