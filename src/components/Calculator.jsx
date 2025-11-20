import React, { useState } from 'react'

const Calculator = () => {
  const [visitors, setVisitors] = useState('')
  const [deal, setDeal] = useState('')
  const [loss, setLoss] = useState(null)

  const calculate = (e) => {
    e.preventDefault()
    const v = Number(visitors)
    const d = Number(deal)
    if (!v || !d) {
      setLoss(null)
      return
    }
    // Simple model: assume 5% would engage via chat; each missed chat worth $287 or based on deal value
    const missedChats = Math.round(v * 0.05)
    const avgValue = d > 0 ? d : 287
    const monthlyLoss = missedChats * avgValue
    setLoss(monthlyLoss)
  }

  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 py-16" id="demo">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 shadow-xl backdrop-blur">
        <h3 className="text-center text-2xl font-bold text-white">Stop Guessing. Discover Your Real Lost Revenue Now.</h3>
        <p className="mt-2 text-center text-white/70">See how much your auto shop is losing from unengaged website visitors. Enter your details to discover what REVV can recover.</p>

        <form onSubmit={calculate} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">Weekly Website Visitors</label>
            <input type="number" value={visitors} onChange={(e)=>setVisitors(e.target.value)} placeholder="e.g., 1200" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-purple-400/50" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">Average Service/Deal Value ($)</label>
            <input type="number" value={deal} onChange={(e)=>setDeal(e.target.value)} placeholder="e.g., 350" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-purple-400/50" />
          </div>
          <div className="flex items-end">
            <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:brightness-110">Calculate Your Loss</button>
          </div>
        </form>

        {loss !== null && (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white">
            <div className="text-sm uppercase tracking-wider text-white/70">Estimated Monthly Loss</div>
            <div className="mt-2 text-4xl font-extrabold">${loss.toLocaleString()}</div>
            <p className="mt-2 text-white/70">REVV can capture a significant portion of this instantly with 24/7 AI conversations.</p>
            <a href="#cta" className="mt-4 inline-flex rounded-xl bg-white/10 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/20">Book Your AI Demo</a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Calculator
