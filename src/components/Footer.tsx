import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 text-center space-y-3">
        <h2 className="text-2xl font-semibold text-foreground/90 transition-all duration-300 hover:text-foreground">
          Let’s Connect
        </h2>
        <p className="text-foreground/60 max-w-md mx-auto transition-all duration-300 hover:text-foreground/80">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <p className="text-foreground/60 flex items-center justify-center gap-2 mt-4">
          Build with React & Tailwind CSS
        </p>
        <p className="text-foreground/40 text-sm">
          © {currentYear} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
