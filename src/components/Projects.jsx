export default function Projects() {
  const projects = [
    {
      title: 'Interactive Dashboard',
      desc: 'A data-rich admin dashboard with real-time charts and delightful micro-interactions.',
      tags: ['React', 'Tailwind', 'Recharts'],
      link: '#',
      color: 'from-indigo-500 to-cyan-500',
    },
    {
      title: 'E-commerce Experience',
      desc: 'A modern storefront with smooth browsing, fast checkout, and responsive design.',
      tags: ['Next.js', 'Stripe', 'SEO'],
      link: '#',
      color: 'from-fuchsia-500 to-rose-500',
    },
    {
      title: 'Portfolio Engine',
      desc: 'A fast, content-driven site with MDX, image optimization, and custom animations.',
      tags: ['Vite', 'Framer Motion', 'MDX'],
      link: '#',
      color: 'from-emerald-500 to-teal-500',
    },
  ]

  return (
    <section id="projects" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-2 text-gray-600">A mix of client projects and personal experiments that show how I think and build.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
