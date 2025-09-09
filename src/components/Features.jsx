import { Laptop, Shield, Users, Trophy } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Laptop className="h-5 w-5 text-emerald-300" />,
      title: 'Project‑based Learning',
      desc: 'Build real apps from day one. Ship projects that recruiters love.',
    },
    {
      icon: <Shield className="h-5 w-5 text-emerald-300" />,
      title: 'Mentor Support',
      desc: 'Live doubt resolution and weekly code reviews with industry mentors.',
    },
    {
      icon: <Users className="h-5 w-5 text-emerald-300" />,
      title: 'Community',
      desc: 'Pair programming, hackathons, and peer learning in a supportive cohort.',
    },
    {
      icon: <Trophy className="h-5 w-5 text-emerald-300" />,
      title: 'Placement Prep',
      desc: 'DSA practice, mock interviews, and referrals to 250+ hiring partners.',
    },
  ];

  return (
    <section id="features" className="relative z-10 border-t border-white/10 bg-neutral-950/70 py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Why Choose Us</h2>
          <p className="mt-3 text-neutral-300">A modern, outcome‑oriented platform designed to get you hired faster.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.08]">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
