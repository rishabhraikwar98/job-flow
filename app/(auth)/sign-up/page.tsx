"use client";

import { signUpAction } from "@/actions/auth-actions";
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
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { useActionState } from "react";
import { AlertCircle } from "lucide-react";
const initialState = {
  success: false,
  message: "",
};

export default function SignUp() {
  const [signUpState, formAction, isPending] = useActionState(
    signUpAction,
    initialState,
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Create your account
          </h1>
          <p className="text-slate-400 text-lg">
            Sign up to start organizing your job search and tracking
            applications.
          </p>
        </div>

        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl shadow-2xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-white text-center">
              Sign Up for Job Flow
            </CardTitle>
            <CardDescription className="text-slate-400 text-center">
              Create an account to save your application progress and reminders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {signUpState.message && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <p className="text-red-400 text-sm font-medium">
                    {signUpState.message}
                  </p>
                </div>
              </div>
            )}
            <form action={formAction} className="space-y-6">
              {/* Full Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300 font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    minLength={3}
                    maxLength={50}
                    placeholder="Enter your full name"
                    className="pl-10 bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                    required
                  />
                </div>
              </div>

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
                    minLength={6}
                    placeholder="Create a password"
                    className="pl-10 bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 font-semibold h-12 text-base shadow-lg shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <div className="flex items-center gap-2">
                  {isPending ? "Signing Up..." : "Sign Up"}{" "}
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </Button>
            </form>
            <div className="text-center mt-8">
              <p className="text-slate-400">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            By signing up, you agree to our{" "}
            <Button className="text-slate-400 hover:text-slate-300 underline">
              Terms of Service
            </Button>{" "}
            and{" "}
            <Button className="text-slate-400 hover:text-slate-300 underline">
              Privacy Policy
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
