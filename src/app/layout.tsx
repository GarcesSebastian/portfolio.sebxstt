import type { Metadata } from "next";
import "@/styles/globals.css";
import { ParticleBackground } from "@/components/client/ParticleBackground";
import Blob from "@/components/Blob";
import Navbar from "@/components/server/Navbar";
import { DataProvider } from "@/hooks/useData";
import { SocketProvider } from "@/hooks/useSocket";

export const metadata: Metadata = {
  title: "Sebxstt - Portfolio",
  description: "This is my portfolio - Sebxstt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-dark relative overflow-hidden">
          <Blob />
          <ParticleBackground />
          <Navbar />
          <SocketProvider>
            <DataProvider>
              {children}
            </DataProvider>
          </SocketProvider>
        </div>
      </body>
    </html>
  );
}
