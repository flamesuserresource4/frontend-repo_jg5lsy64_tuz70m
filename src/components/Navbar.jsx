import { Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-gray-900 text-lg">
          <span className="text-blue-600">&lt;/&gt;</span> MyPortfolio
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          <div className="h-5 w-px bg-gray-300" />
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-700 hover:text-gray-900">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-900">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Email" className="text-gray-700 hover:text-gray-900">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  )
}
