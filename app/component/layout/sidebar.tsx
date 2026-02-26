"use client"

import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white hidden md:block">
      <div className="p-6 font-bold text-xl">My Dashboard</div>
      <nav className="flex flex-col gap-4 px-6">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  )
}