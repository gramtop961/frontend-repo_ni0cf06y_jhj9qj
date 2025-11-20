import React from 'react'

const StatCard = ({ number, label, description }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white/90 shadow-lg">
    <div className="text-4xl font-extrabold tracking-tight text-white">{number}</div>
    <div className="mt-1 text-sm uppercase tracking-wide text-white/70">{label}</div>
    <p className="mt-3 text-sm text-white/70">{description}</p>
  </div>
)

const Stats = () => {
  return (
    <section id="learn" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        The Hidden Revenue Drain You Can't Afford to Ignore
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <StatCard number="70%" label="Visitors Vanish" description="Of potential customers leave your site in under 8 seconds if they don't get immediate answers—pure lost revenue walking out your digital door." />
        <StatCard number="$287" label="Per Missed Chat" description="That's the average value of each conversation that doesn't happen. For busy shops, that adds up to tens of thousands in monthly lost revenue." />
        <StatCard number="18.7" label="Hours/Wk" description="What’s the cost of chasing leads manually? That’s a full sales cycle’s worth of time wasted." />
      </div>
    </section>
  )
}

export default Stats
