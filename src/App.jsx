import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Calculator from './components/Calculator'
import WhyGhost from './components/WhyGhost'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Stats section */}
      <Stats />

      {/* Calculator + CTA */}
      <Calculator />

      {/* Why + Flow */}
      <WhyGhost />

      {/* CTA Banner */}
      <section id="cta" className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-purple-600/20 to-cyan-600/20 p-8 text-center shadow-2xl backdrop-blur">
          <h3 className="text-2xl font-bold">Stop The Leak Now!</h3>
          <p className="mt-2 text-white/80">We are only accepting 10 elite clients for our launch phase. For them, we'll waive the full $2,999 setup fee.</p>
          <p className="mt-1 text-white/70">This isn't an open invitation. We only partner with two top-tier shops per specialty per city.</p>
          <p className="mt-1 text-white/70">There are only 3 spots remaining for action takers.</p>
          <a href="#demo" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:brightness-110">Claim Your Spot</a>
          <p className="mt-4 text-xs uppercase tracking-wider text-white/60">Don't just compete. CONQUER!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-sm text-white/70">
        Revv AI is a full-service digital marketing agency that helps great companies grow their revenue online. Get in touch: <a href="mailto:revv.aiteam@gmail.com" className="text-white hover:underline">revv.aiteam@gmail.com</a>
      </footer>
    </div>
  )
}

export default App
