"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface AuthorCardProps {
  className?: string;
  backgroundImage?: string;
  author: {
    name: string;
    avatar: string;
    readTime?: string;
  };
  content: {
    title: string;
    description: string;
  };
}

export const AuthorCard = ({
  className,
  backgroundImage,
  author,
  content,
}: AuthorCardProps) => {
  return (
    <div className="w-full max-w-lg group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-[32rem] rounded-xl shadow-xl mx-auto flex flex-col justify-between p-6 border border-border/60",
          className
        )}
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#0A0F1A'
        }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/35 transition-colors duration-300" />
        <div className="absolute inset-0 pointer-events-none ring-0 group-hover/card:ring-1 ring-accent1/40 rounded-xl transition-all duration-300" />
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height={100}
            width={100}
            alt={`${author.name}'s avatar`}
            src={author.avatar}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {author.name}
            </p>
            {author.readTime && (
              <p className="text-sm text-gray-300">{author.readTime}</p>
            )}
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-2xl md:text-3xl text-gray-50 relative z-10">
            {content.title}
          </h1>
          <p className="font-normal text-sm md:text-base text-gray-100/90 relative z-10 my-4">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
};
