import Spline from '@splinetool/react-spline';
import { Rocket, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[92vh] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient + vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_40px_rgba(0,0,0,0.6)]" />

      {/* Foreground content */}
      <div className="relative">
        {/* Navbar */}
        <nav className="container mx-auto flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">CodeCraft Academy</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#courses" className="text-sm text-neutral-300 hover:text-white">Courses</a>
            <a href="#features" className="text-sm text-neutral-300 hover:text-white">Why Us</a>
            <a href="#contact" className="text-sm text-neutral-300 hover:text-white">Contact</a>
            <button className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15">Sign In</button>
            <button className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 hover:bg-emerald-400">Enroll Now</button>
          </div>
          <button className="md:hidden rounded-md bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/20">Menu</button>
        </nav>

        {/* Hero Copy */}
        <section className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-8 md:grid-cols-2 md:pt-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">
              <Star size={16} className="text-emerald-300" />
              <span className="text-xs">Job-ready coding programs</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Master Full‑Stack Development
              <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">from Zero to Pro</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-neutral-300 sm:text-lg">
              Learn by building real-world projects with mentors from top tech companies. Flexible schedules, live doubt support, and an industry‑ready curriculum.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400">
                Explore Courses
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
                <Play size={16} />
                Watch Overview
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center sm:max-w-md">
              <div>
                <div className="text-2xl font-bold text-white">30k+</div>
                <div className="text-xs text-neutral-400">Learners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">250+</div>
                <div className="text-xs text-neutral-400">Hiring Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-xs text-neutral-400">Avg Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-black/50">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-neutral-300">
                  <span>Intro to Full‑Stack</span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-300">Live</span>
                </div>
                <div className="space-y-0 divide-y divide-white/5">
                  <LessonRow title="JavaScript Fundamentals" time="45m" />
                  <LessonRow title="React Essentials" time="1h 10m" />
                  <LessonRow title="Node & Express APIs" time="55m" />
                  <LessonRow title="Databases with MongoDB" time="50m" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-neutral-300">Placement Support</p>
                  <p className="mt-1 text-2xl font-semibold text-white">Portfolio + Mock Interviews</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-neutral-300">Career Track</p>
                  <p className="mt-1 text-2xl font-semibold text-white">Full‑Stack, Frontend, DSA</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

function LessonRow({ title, time }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <p className="text-sm text-neutral-200">{title}</p>
      </div>
      <span className="text-xs text-neutral-400">{time}</span>
    </div>
  );
}
