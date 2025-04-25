import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { WalletProvider } from "@/context/wallet-context"
import { WalletConnectionModal } from "@/components/wallet-connection-modal"
import { DemoProvider } from "@/context/demo-context"
import { CommunityProvider } from "@/context/community-context"
import { Toaster } from "@/components/ui/toaster"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WAGA Protocol | Blockchain-Powered Coffee Traceability",
  description:
    "Transforming the coffee value chain with blockchain technology for transparency, traceability, and financial empowerment.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Ensure the layout doesn't add any extra padding or margin
  // Update the main container to have proper spacing
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <WalletProvider>
            <DemoProvider>
              <CommunityProvider>
                <div className="flex min-h-screen flex-col">
                  <Navbar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
                <WalletConnectionModal />
                <Toaster />
                <ScrollToTop />
              </CommunityProvider>
            </DemoProvider>
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"
