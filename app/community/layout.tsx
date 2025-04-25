import type { ReactNode } from "react"
import { CommunitySidebar } from "@/components/community/community-sidebar"

interface CommunityLayoutProps {
  children: ReactNode
}

export default function CommunityLayout({ children }: CommunityLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <CommunitySidebar />
      <div className="flex-1 ml-16 md:ml-64 pt-20 px-4">{children}</div>
    </div>
  )
}
