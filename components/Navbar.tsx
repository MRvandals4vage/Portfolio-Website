"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Home,
  User,
  FolderGit2,
  Trophy,
  Mail,
  FileDown,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "Home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/50 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-textPrimary/80 hover:text-accent1",
                isActive && "bg-surface text-accent1",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-accent1/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent1 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-accent1/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-accent1/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-accent1/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const items: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#projects", icon: FolderGit2 },
    { name: "Achievements", url: "#achievements", icon: Trophy },
    { name: "Contact", url: "#contact", icon: Mail },
    { name: "Resume", url: "/resume.pdf", icon: FileDown },
  ];

  return <NavBar items={items} />;
}
