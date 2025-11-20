import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80 backdrop-blur">
          AI Voice + Chat Widget for Auto Shops
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          Stop Losing <span className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">$25,800+/Month</span> to Ghosting Website Visitors
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-200/90">
          Turn your auto shop website into a 24/7 booking powerhouse—not a lead graveyard. REVV is the AI chat widget that talks, texts, and books high-value jobs non-stop.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#demo" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-400/50">
            Book Your Free AI Demo Now
            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#learn" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Learn More
          </a>
        </div>

        <div className="mt-10 text-xs uppercase tracking-wider text-white/60">
          Voice • Text • Bookings • 24/7 • Multi-language
        </div>
      </div>
    </section>
  )
}

export default Hero
