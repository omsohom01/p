import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800">JD</div>
            <div className="hidden space-x-6 md:flex">
              {["Home", "Projects", "Skills", "Contact"].map((item) => (
                <a key={item} href={#${item.toLowerCase()}} className="text-gray-600 hover:text-gray-800">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="John Doe"
            className="mx-auto mb-8 h-40 w-40 rounded-full border-4 border-white object-cover shadow-lg"
            width={150}
            height={150}
          />
          <h1 className="mb-4 text-5xl font-bold">John Doe</h1>
          <p className="mb-8 text-xl">Full-Stack Developer & UI/UX Enthusiast</p>
          <Button size="lg" variant="secondary">
            View My Work
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">My Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "E-commerce Platform", description: "A full-stack online shopping solution" },
              { title: "Task Management App", description: "A React-based productivity tool" },
              { title: "Portfolio Website", description: "A customizable portfolio template" },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <img
                  src={/placeholder.svg?height=200&width=400&text=Project+${index + 1}}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                  width={400}
                  height={200}
                />
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">My Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "JavaScript", "React", "Node.js", "Python", "SQL", "GraphQL",
              "HTML/CSS", "TypeScript", "Docker", "AWS", "Git", "Figma"
            ].map((skill) => (
              <Card key={skill} className="transition-all hover:shadow-md">
                <CardContent className="flex items-center justify-between p-4">
                  <span className="text-lg font-medium">{skill}</span>
                  <div className="h-2 w-2/3 rounded-full bg-gray-300">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                      style={{ width: ${Math.floor(Math.random() * 40) + 60}% }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">Get In Touch</h2>
          <div className="mx-auto max-w-2xl">
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
