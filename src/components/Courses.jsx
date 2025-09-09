import { Code2, Database, Globe, Layout } from 'lucide-react';

const courses = [
  {
    id: 'fsd-pro',
    title: 'Full‑Stack Developer Pro',
    level: 'Beginner to Advanced',
    icon: <Code2 className="h-5 w-5" />,
    desc: 'Master JavaScript, React, Node, Express, MongoDB, Auth, and deployment by building 6+ full projects.',
    highlights: ['Live Mentor Sessions', 'Placement Assistance', 'Capstone Project'],
    duration: '6 months',
  },
  {
    id: 'frontend-react',
    title: 'Frontend with React',
    level: 'Beginner Friendly',
    icon: <Layout className="h-5 w-5" />,
    desc: 'Modern UI development with React, Vite, Tailwind, hooks, state management, and performance.',
    highlights: ['Design Systems', 'State Patterns', 'Testing'],
    duration: '3 months',
  },
  {
    id: 'backend-node',
    title: 'Backend APIs with Node',
    level: 'Intermediate',
    icon: <Database className="h-5 w-5" />,
    desc: 'RESTful APIs, authentication, databases, caching, and scalable patterns for production backends.',
    highlights: ['Auth & JWT', 'MongoDB + SQL', 'Docker Basics'],
    duration: '3 months',
  },
  {
    id: 'web-fundamentals',
    title: 'Web Fundamentals',
    level: 'Absolute Beginner',
    icon: <Globe className="h-5 w-5" />,
    desc: 'HTML, CSS, and JavaScript foundations with hands‑on mini‑projects and best practices.',
    highlights: ['Responsive Design', 'Accessibility', 'Git & GitHub'],
    duration: '8 weeks',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="relative z-10 border-t border-white/10 bg-neutral-950 py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Courses that get you hired</h2>
          <p className="mt-3 text-neutral-300">Structured paths, mentor feedback, and projects to showcase your skills.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((c) => (
            <div key={c.id} className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 px-2.5 py-1 text-emerald-300 ring-1 ring-emerald-400/30">
                  {c.icon}
                  <span className="text-xs">{c.level}</span>
                </div>
                <span className="text-xs text-neutral-400">{c.duration}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{c.desc}</p>
              <ul className="mt-4 space-y-2">
                {c.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <button className="flex-1 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-400">Enroll</button>
                <button className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15">Syllabus</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 p-6 text-center">
          <p className="text-sm text-neutral-200">
            Not sure where to start? <a href="#" className="font-medium text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-200">Take our quiz</a> to find the right track for you.
          </p>
        </div>
      </div>
    </section>
  );
}
