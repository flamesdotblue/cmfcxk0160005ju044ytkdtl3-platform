import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950 py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white">CodeCraft Academy</p>
            <p className="mt-2 max-w-xs text-sm text-neutral-400">
              Learn to code with an industry‑ready curriculum, world‑class mentors, and a vibrant community.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Programs</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li><a href="#courses" className="hover:text-white">Full‑Stack</a></li>
              <li><a href="#courses" className="hover:text-white">Frontend</a></li>
              <li><a href="#courses" className="hover:text-white">Backend</a></li>
              <li><a href="#courses" className="hover:text-white">Web Fundamentals</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Resources</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li><a href="#features" className="hover:text-white">Why Us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li className="flex items-center gap-2"><Mail size={16} /> hello@codecraft.ac</li>
              <li className="flex items-center gap-2"><Linkedin size={16} />/company/codecraft</li>
              <li className="flex items-center gap-2"><Github size={16} />/codecraft</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Github" className="rounded-md bg-white/10 p-2 text-white ring-1 ring-white/15 hover:bg-white/15"><Github size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-md bg-white/10 p-2 text-white ring-1 ring-white/15 hover:bg-white/15"><Linkedin size={16} /></a>
              <a href="#" aria-label="Email" className="rounded-md bg-white/10 p-2 text-white ring-1 ring-white/15 hover:bg-white/15"><Mail size={16} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-neutral-400 sm:flex-row">
          <p>© {new Date().getFullYear()} CodeCraft Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Refund</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
