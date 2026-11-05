import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";

const montserratHeading = Montserrat({subsets:['latin'],variable:'--font-heading'});

const spaceGrotesk = Space_Grotesk({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaySo - WebClient",
  description: "A smarter way to report and resolve campus issues.",
  authors: [{ name: "SaySo" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", spaceGrotesk.variable, montserratHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
         <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
       >
        <Toaster/>
       <main className="w-full min-h-screen">
        <div className="">
           
             <SmoothScroll>{children}</SmoothScroll>
          
        </div>
       </main>
       </ThemeProvider>
      </body>
    </html>
  );
}
