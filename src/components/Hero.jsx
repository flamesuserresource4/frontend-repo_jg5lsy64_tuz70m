import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays that do not block interaction with the Spline scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[80vh] sm:min-h-[85vh] md:min-h-screen">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-black/80 text-white shadow-sm mb-4">
            tech • portfolio • interactive • playful • modern
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Building delightful products with code and curiosity
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            I’m a developer who blends thoughtful UX with robust engineering. Explore a selection of my recent work and feel free to reach out.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-4 py-2.5 text-sm font-medium border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
