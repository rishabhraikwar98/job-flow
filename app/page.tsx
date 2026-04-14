'use client';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  BarChart3,
  Clock,
  Users,
  ArrowRight,
  Zap,
  CheckCircle2,
  Bell,
  Lightbulb,
  Shield,
  TrendingUp,
  Mail,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-sora)' }}>
              Job Flow
            </span>
          </div>
          <Link href="/sign-in">
          <Button size="default" className="text-base font-semibold border-2 border-white/20 bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 transition">
            Sign In
          </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8">
            <h1 
              className="text-7xl sm:text-8xl font-bold text-white leading-tight tracking-tighter"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Track Jobs,{' '}
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Land Faster
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Your all-in-one platform for job search success. Monitor applications, get timely reminders, and gain insights to accelerate your path to employment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href={"/sign-up"}>
              <Button
                size="lg"
                className="bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 font-semibold text-base px-8 py-6 rounded-lg"
              >
                Get Started For Free <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              </Link>
              <Link href="/sign-in">
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-semibold text-base px-8 py-6 border-white/20 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                Sign In
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 
              className="text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-sora)' }}
            >
              Core Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Everything you need to stay organized and land your next role
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Application Tracking */}
            <div className="group bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
                Application Tracking
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Centralize all your job applications. Track company details, job titles, application dates, and current status in one organized dashboard.
              </p>
            </div>

            {/* Feature 2: Follow-up Reminders */}
            <div className="group bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
                Follow-up Reminders
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Never miss a follow-up. Get intelligent reminders for each application based on your preferred timing to maximize interview chances.
              </p>
            </div>

            {/* Feature 3: Analytics & Insights */}
            <div className="group bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
                Advanced Analytics
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Visualize your job search performance with real-time insights. Track response rates, application timing patterns, and success metrics.
              </p>
            </div>

            {/* Feature 4: Status Updates */}
            <div className="group bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
                Real-time Status Updates
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Update application statuses in real-time. From applied to interview to rejected, keep your pulse on every opportunity.
              </p>
            </div>

            {/* Feature 5: Interview Prep */}
            <div className="group bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-8 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
                Interview Insights
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Store interview details, feedback, and next steps. Prepare better by keeping all company and conversation notes in one place.
              </p>
            </div>

            {/* Feature 6: Collaboration */}
            <div className="group bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
                Share & Collaborate
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Share your progress with mentors and coaches. Get feedback and support through every stage of your job search journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Job Flow Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-5xl font-bold text-white mb-16 text-center"
            style={{ fontFamily: 'var(--font-sora)' }}
          >
            Why Choose Job Flow?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: Zap, title: "Lightning Fast", desc: "Designed for speed - add and track applications in seconds" },
                { icon: Shield, title: "Secure & Private", desc: "Your data is encrypted with enterprise-grade security" },
                { icon: TrendingUp, title: "Data-Driven Insights", desc: "Optimize your strategy with actionable analytics" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Smart Notifications", desc: "Get alerts exactly when you need them most" },
                { icon: Clock, title: "Time-Saving", desc: "Spend less time organizing, more time applying" },
                { icon: CheckCircle2, title: "100% Free to Start", desc: "No credit card required to begin tracking" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-white/5 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white">Job Flow</span>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Job Flow. Built for job seekers, by job seekers.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
