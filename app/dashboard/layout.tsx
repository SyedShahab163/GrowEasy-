import { ReactNode } from "react"
import Sidebar from "../component/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-muted/40">
        {children}
      </main>
    </div>
  )
}