export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/logo.svg" alt="Falcon Labs Logo" className="h-10 w-auto mr-3" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Falcon Labs
                </h1>
              </a>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-slate-200 hover:text-amber-400 transition-colors">Home</a>
              <a href="/work" className="text-slate-200 hover:text-amber-400 transition-colors">Work</a>
              <a href="/about" className="text-slate-200 hover:text-amber-400 transition-colors">About</a>
              <a href="/contact" className="text-slate-200 hover:text-amber-400 transition-colors">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-400">About Me</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Passionate software engineer with over a decade of experience in full-stack development,
              DevOps, and system architecture. Founder of Falcon Labs, dedicated to delivering
              cutting-edge web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-lg overflow-hidden border-2 border-amber-400">
                <img
                  src="/founder-photo.jpg"
                  alt="Kevin Rasmussen - Founder of Falcon Labs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-amber-400">Kevin Rasmussen</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                With over 10 years of experience in software development, I've built a career
                founded on continuous learning and technological innovation. My journey spans
                network DevOps, Linux programming, and comprehensive coding expertise that
                has evolved into creating sophisticated web applications.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                As a Software Engineering major and the founder of Falcon Labs, I specialize
                in transforming complex business requirements into elegant, scalable solutions.
                My passion lies in leveraging cutting-edge technologies to solve real-world
                problems and help businesses thrive in the digital landscape.
              </p>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-amber-400">Core Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4 text-amber-400">🌐</div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">Full-Stack Development</h4>
                <p className="text-slate-300">
                  End-to-end web application development using modern frameworks like Next.js,
                  React, and TypeScript. Experience building complete e-commerce platforms
                  with payment processing and shipping integration.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4 text-amber-400">🔧</div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">DevOps & Infrastructure</h4>
                <p className="text-slate-300">
                  Over a decade of network DevOps experience with automated deployment pipelines,
                  Git integration, and webhook-based CI/CD solutions for seamless updates.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4 text-amber-400">🐧</div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">Linux & System Programming</h4>
                <p className="text-slate-300">
                  Deep expertise in Linux environments, system administration, and low-level
                  programming. Proficient in building robust, scalable server architectures.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4 text-amber-400">💳</div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">E-commerce Solutions</h4>
                <p className="text-slate-300">
                  Complete e-commerce platform development including Stripe payment integration,
                  Shipengine shipping automation, and MailerSend email services.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4 text-amber-400">🏠</div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">Self-Hosting & Infrastructure</h4>
                <p className="text-slate-300">
                  Experience self-hosting websites on personal home-lab servers for cost-effective
                  solutions. Proficient in setting up and maintaining production-ready infrastructure
                  with proper security, monitoring, and backup strategies.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4 text-amber-400">☁️</div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">Cloud & Database</h4>
                <p className="text-slate-300">
                  Experience with Firebase/Firestore databases, cloud infrastructure, and
                  scalable data solutions for modern web applications.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-4xl mb-4 text-amber-400">⚡</div>
                <h4 className="text-xl font-semibold mb-3 text-amber-400">Scalable Cloud Solutions</h4>
                <p className="text-slate-300">
                  Deploying and managing scalable database solutions using cloud VPS providers
                  like DigitalOcean. Expertise in Kubernetes orchestration for containerized
                  applications requiring high availability and SQL database optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Master of Software Engineering</h4>
                  <p className="text-slate-400">Currently Pursuing</p>
                  <p className="text-slate-500 text-sm">Advanced studies in software architecture, system design, and emerging technologies</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Bachelor of Software Engineering</h4>
                  <p className="text-slate-400">Completed</p>
                  <p className="text-slate-500 text-sm">Specialized focus on Python and JavaScript programming languages, with emphasis on full-stack development, algorithms, and software engineering principles</p>
                </div>
                <div className="mt-6 p-4 bg-slate-700 rounded-lg">
                  <p className="text-slate-300 text-sm italic">
                    <strong>Why we share education:</strong> At Falcon Labs, we believe transparency builds trust.
                    Our educational background demonstrates our commitment to continuous learning and
                    staying current with industry best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Experience & Infrastructure</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">10+ Years in Software Development</h4>
                  <p className="text-slate-400">Full-Stack Developer & DevOps Engineer</p>
                  <p className="text-slate-500 text-sm">Building scalable web applications, implementing DevOps pipelines, and delivering end-to-end business solutions</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Self-Hosting & Cloud Infrastructure</h4>
                  <p className="text-slate-400">Home-Lab Server Management & Cloud VPS Deployment</p>
                  <p className="text-slate-500 text-sm">Experience hosting websites on personal infrastructure and deploying scalable solutions using DigitalOcean VPS with Kubernetes orchestration</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Database Architecture</h4>
                  <p className="text-slate-400">SQL & NoSQL Solutions</p>
                  <p className="text-slate-500 text-sm">Designing and implementing both NoSQL (Firestore) and SQL database solutions for optimal performance and scalability</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-200">Founder, Falcon Labs</h4>
                  <p className="text-slate-400">Web Development & Consulting</p>
                  <p className="text-slate-500 text-sm">Specializing in custom web applications, e-commerce platforms, and digital transformation with full infrastructure support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center bg-slate-800 p-8 rounded-lg border border-slate-700">
            <h3 className="text-3xl font-bold mb-6 text-amber-400">My Mission</h3>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              To leverage my decade-plus experience in software engineering to create innovative,
              reliable, and scalable web solutions that empower businesses to succeed in the digital age.
              I believe in the power of technology to transform ideas into reality, and I'm passionate
              about helping others bring their visions to life through exceptional software craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Ready to Bring Your Ideas to Life?</h3>
          <p className="text-xl mb-8 text-slate-800">
            Let's discuss how we can collaborate on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/work" className="bg-slate-900 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              View My Work
            </a>
            <a href="/contact" className="bg-slate-900 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}