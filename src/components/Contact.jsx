import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Let’s connect</h2>
          <p className="mt-2 text-gray-600">I’m open to new opportunities, collaborations, and interesting problems to solve.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="mailto:hello@example.com" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm">
            <Mail className="h-5 w-5 text-gray-900" />
            <span className="font-medium text-gray-900">hello@example.com</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm">
            <Github className="h-5 w-5 text-gray-900" />
            <span className="font-medium text-gray-900">github.com/username</span>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm">
            <Linkedin className="h-5 w-5 text-gray-900" />
            <span className="font-medium text-gray-900">linkedin.com/in/username</span>
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  )
}
