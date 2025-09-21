import Link from 'next/link';
import { AuthorCard } from '@/components/ui/AuthorCard';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-textPrimary mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-accent1 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <Link
          href="https://github.com/MRvandals4vage/WanderFare"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <AuthorCard
            backgroundImage="/wanderfare.png"
            author={{ name: 'Ishaan Upponi', avatar: '/hero-ai.jpeg', readTime: 'Next.js · TypeScript · Tailwind' }}
            content={{
              title: 'WanderFare',
              description: 'Travel planning app with modern UI and strong TypeScript foundations. Repository includes features overview and setup.',
            }}
          />
        </Link>
        <Link
          href="https://github.com/MRvandals4vage/event-attendance-system"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <AuthorCard
            backgroundImage="/event-placeholder.png.png"
            author={{ name: 'Ishaan Upponi', avatar: '/hero-ai.jpeg', readTime: 'Express · MongoDB · JWT' }}
            content={{
              title: 'Event Attendance System',
              description: 'Attendance tracking system. Placeholder image for now — will replace with a proper screenshot later.',
            }}
          />
        </Link>
        <Link
          href="#"
          className="block w-full"
        >
          <AuthorCard
            backgroundImage="/portfolio-placeholder.png.png"
            author={{ name: 'Ishaan Upponi', avatar: '/hero-ai.jpeg', readTime: 'Next.js · Tailwind · Framer Motion' }}
            content={{
              title: 'Portfolio Site',
              description: 'This website — Cyberpunk-to-Azure theme, animated gradients, custom navbar, and responsive UI components.',
            }}
          />
        </Link>
      </div>

      <div className="text-center mt-12">
        <Link
          href="#"
          className="btn-gradient glow-hover text-base font-medium"
        >
          View All Projects
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
