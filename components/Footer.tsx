import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface text-textPrimary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ishaan Upponi</h3>
            <p className="text-textPrimary/80 mb-4">
              CSE (AI & ML) student at SRM KTR — building strong foundations in AI/ML via mathematics, 
              learning backend step-by-step, and sharpening frontend with React + TypeScript.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MRvandals4vage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary/70 hover:text-accent2 transition-colors"
                aria-label="github"
              >
                <span className="sr-only">github</span>
                <div className="h-5 w-5 bg-textPrimary/40 rounded-full"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/ishaan-upponi-864318327"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary/70 hover:text-accent2 transition-colors"
                aria-label="linkedin"
              >
                <span className="sr-only">linkedin</span>
                <div className="h-5 w-5 bg-textPrimary/40 rounded-full"></div>
              </a>
              <a
                href="https://www.instagram.com/ishaan_i.u?utm_source=qr&igsh=MXh0eGltcGI3OGZsbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-textPrimary/70 hover:text-accent2 transition-colors"
                aria-label="instagram"
              >
                <span className="sr-only">instagram</span>
                <div className="h-5 w-5 bg-textPrimary/40 rounded-full"></div>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#" 
                  className="text-textPrimary/70 hover:text-accent2 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className="text-textPrimary/70 hover:text-accent2 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="text-textPrimary/70 hover:text-accent2 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#achievements" 
                  className="text-textPrimary/70 hover:text-accent2 transition-colors"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-textPrimary/70 hover:text-accent2 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-textPrimary/80">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-accent1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ishaan8660@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-accent1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91-7700986555</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-accent1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textPrimary/70 text-sm">
            &copy; {currentYear} Ishaan Upponi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-textPrimary/70 hover:text-accent2 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-textPrimary/70 hover:text-accent2 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
