import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ivirtex.dev",
  description: "Developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-neutral-950 text-white"}>
        <Toaster containerStyle={{ top: "10px" }} />
        {children}
      </body>
    </html>
  );
}
