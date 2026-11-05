
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MenuIcon,
  XIcon,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import { PRODUCT_IMAGES } from "@/public/image/image";
import ThemeToggleButton from "../ui/theme-toggle-button";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface User {
  id: number;
  name: string;
  email: string;
  role: "student" | "staff" | "admin";
  rollNumber?: string;
  branch?: string;
}

interface MeResponse {
  success: boolean;
  data?: User;
  message?: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "Overview", href: "/" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Features", href: "/features" },
   
    { name: "Contact-us", href: "/contact-us" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  // Fetch authenticated user
  useEffect(() => {
    let cancelled = false;

    const fetchCurrentUser = async () => {
      if (!API_URL) {
        console.error("NEXT_PUBLIC_API_URL is not configured");
        setAuthLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/public/me`, {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (response.status === 401) {
          if (!cancelled) setUser(null);
          return;
        }

        if (!response.ok) {
          throw new Error("Unable to fetch authenticated user");
        }

        const result: MeResponse = await response.json();

        if (!cancelled && result.success && result.data) {
          setUser(result.data);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);

        if (!cancelled) {
          setUser(null);
        }
      } finally {
        if (!cancelled) {
          setAuthLoading(false);
        }
      }
    };

    fetchCurrentUser();

    return () => {
      cancelled = true;
    };
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Logout
  const handleLogout = async () => {
    if (!API_URL || loggingOut) return;

    setLoggingOut(true);

    try {
      const response = await fetch(`${API_URL}/public/logout`, {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Logout failed");
      }

      setUser(null);
      setIsOpen(false);

      toast.success("Logged out successfully");

      router.push("http://localhost:3001/student-client/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to log out"
      );
    } finally {
      setLoggingOut(false);
    }
  };

  const userInitial = user?.name?.charAt(0).toUpperCase() || "U";

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex h-16 w-full items-center justify-between transition-all duration-300 ${
          scrolled ? "backdrop-blur-sm" : "bg-transparent"
        } pl-4 pr-4 lg:pl-8 lg:pr-12`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={PRODUCT_IMAGES.LOGO}
            alt="SaySo"
            width={90}
            height={40}
            className="w-12 object-contain"
            priority
          />
          <h1 className="text-2xl font-bold">SaySo</h1>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center space-x-6 text-[13px] md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative font-semibold transition"
              >
                <span
                  className={`transition ${
                    isActive
                      ? ""
                      : "text-gray-600 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ThemeToggleButton variant="circle-blur" />
          </div>

         {/*  {authLoading ? (
            <div className="hidden h-9 w-9 animate-pulse rounded-full bg-muted md:block" />
          ) : user ? (
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger >
                  <Avatar className="h-9 w-9 cursor-pointer transition hover:ring-2 hover:ring-primary hover:ring-offset-2">
                    <AvatarFallback className="bg-blue-500 font-semibold text-white">
                      {userInitial}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-64">
               
                  <div className="px-3 py-3">
                    <p className="text-sm font-semibold">
                      {user.name}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {user.email}
                    </p>

                    <p className="mt-1 text-xs capitalize text-muted-foreground">
                      {user.role}
                    </p>
                  </div>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={() => router.push("https://student-webapp.subhrokolay2-0df.workers.dev/student-client/dashboard")}
                  >
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {loggingOut ? "Logging out..." : "Log out"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            !authLoading && (
              <Link
                href="https://student-webapp.subhrokolay2-0df.workers.dev"
                className="hidden rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-block"
              >
                Sign Up
              </Link>
            )
          )} */}

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="text-foreground transition active:scale-90 md:hidden"
          >
            <MenuIcon className="size-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-background text-lg font-medium transition duration-300 md:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full pointer-events-none"
        }`}
      >
        <ThemeToggleButton />

        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`transition ${
              pathname === link.href
                ? "font-semibold text-indigo-600"
                : "text-foreground"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {authLoading ? (
          <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
        ) : user ? (
          <>
            <div className="flex flex-col items-center gap-1 border-t px-8 pt-5">
              <Avatar className="mb-2 h-12 w-12">
                <AvatarFallback className="bg-blue-500 text-white">
                  {userInitial}
                </AvatarFallback>
              </Avatar>

              <p className="font-semibold">{user.name}</p>

              <p className="text-sm text-muted-foreground">
                {user.email}
              </p>

              <p className="text-xs capitalize text-muted-foreground">
                {user.role}
              </p>
            </div>

            <Link
              href="https://student-webapp.subhrokolay2-0df.workers.dev/student-client/dashboard"
              className="rounded-md bg-blue-600 px-8 py-3 font-medium text-white"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>

           {/*  <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex items-center gap-2 text-destructive"
            >
              <LogOut className="h-4 w-4" />
              {loggingOut ? "Logging out..." : "Log out"}
            </button> */}
          </>
        ) : (
          <Link
            href="https://student-webapp.subhrokolay2-0df.workers.dev/student-client/login"
            className="rounded-md bg-blue-600 px-8 py-3 font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
          className="absolute right-6 top-6 text-foreground"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
