import React from 'react'

const WhyGhost = () => {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold text-white">Why Customers Ghost Your Website?</h3>
          <p className="mt-3 text-white/80">Picture this: A potential customer hits your site at 11PM with a burning question about a "ceramic coating issue". Your team's gone home. No quick answer? They bounce to a competitor in seconds.</p>

          <ul className="mt-6 space-y-4 text-white/80">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">•</span>
              <div>
                <div className="font-semibold text-white">Customers Crave Real Talk</div>
                <p className="text-sm text-white/70">Not robotic forms or endless FAQs. They want immediate, human-like conversation that resolves their problems fast.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">•</span>
              <div>
                <div className="font-semibold text-white">Phone Calls? Too Intrusive</div>
                <p className="text-sm text-white/70">Emails? Too slow. Today's customers want instant answers without commitment or awkward conversations.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
          <h4 className="text-xl font-semibold text-white">How REVV Transforms Your Website</h4>
          <div className="mt-4 space-y-5">
            <div>
              <div className="font-semibold text-white">Visitor Arrives</div>
              <p className="text-sm text-white/70">Customer lands on your site with questions about their vehicle issue or service needs.</p>
            </div>
            <div>
              <div className="font-semibold text-white">REVV Engages</div>
              <p className="text-sm text-white/70">AI widget proactively opens with a friendly voice or text greeting, offering immediate assistance.</p>
            </div>
            <div>
              <div className="font-semibold text-white">Questions Answered</div>
              <p className="text-sm text-white/70">REVV LINK provides expert responses about services, pricing, and availability—just like your best service advisor.</p>
            </div>
            <div>
              <div className="font-semibold text-white">Appointment Booked</div>
              <p className="text-sm text-white/70">Conversation converts to a booked appointment, complete with customer details and service needs.</p>
            </div>
          </div>
          <a href="#cta" className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white">Book your AI demo now</a>
        </div>
      </div>
    </section>
  )
}

export default WhyGhost
