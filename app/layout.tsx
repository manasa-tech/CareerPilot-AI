import { title } from "framer-motion/client";
import "./globals.css";

export const metadata = {
  title:"CareerPilot AI",
  description:"Your AI Career Operating Sysytem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}