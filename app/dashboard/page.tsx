"use client";

import { Button } from "@/components/ui/button";
import { signOutAction } from "../../actions/auth-actions";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <p className="text-slate-400 mt-2">Welcome to your dashboard!</p>
      <Button onClick={()=>signOutAction()} className="mt-4">
        sign out
      </Button>
    </div>
  )
}

