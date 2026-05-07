import profile from './assets/profile.jpeg';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-8 md:px-20 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-400 uppercase tracking-[4px] mb-4">Backend Developer</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Prakhar <span className="text-gray-500">Pandey</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Java-focused developer passionate about building backend systems, admin panels, and
              logic-driven applications using Data Structures &amp; Algorithms.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/mysticalprakhar"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="mailto:coderprakhar03@gmail.com"
                className="border border-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-900 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex justify-center">
              <img
                src={profile}
                alt="Prakhar Pandey"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-[30px] border border-gray-700 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 transition duration-300"
              />
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Quick Info</h2>
              <div className="mt-6 space-y-3 text-gray-300 text-lg">
                <p>📍 Indore, Madhya Pradesh</p>

                <a href="tel:+917806058997" className="block hover:text-white transition">
                  📞 +91 7806058997
                </a>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500">Education</p>
                <p>BCA — Prestige Institute of Management and Research</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">Experience</p>
                <p>Admission Cell Intern</p>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">Focus</p>
                <p>Backend Development • DSA • Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 md:px-20 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Java',
              'C',
              'C++',
              'JavaScript',
              'HTML',
              'CSS',
              'DSA',
              'Git',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-white transition"
              >
                <p className="text-lg font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 md:px-20 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-500 transition">
              <h3 className="text-2xl font-bold mb-4">NeoNav India Navigator</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Smart city navigation system using graph data structures for optimized route
                calculation and real-world path-finding logic.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">DSA</span>
              </div>

              <a
                href="https://github.com/mysticalprakhar/NeoNav-India-Navigator"
                target="_blank"
                rel="noreferrer"
                className="text-white underline"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-500 transition">
              <h3 className="text-2xl font-bold mb-4">Research Paper Website</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Worked as Backend Developer in a 3-member team project. Developed form handling
                systems and admin panel functionality.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
              </div>

              <a
                href="https://github.com/team-pimr/Research_paper_website"
                target="_blank"
                rel="noreferrer"
                className="text-white underline"
              >
                View Project
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-500 transition">
              <h3 className="text-2xl font-bold mb-4">Student Information System</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                CRUD-based system to manage and organize student records using structured logic and
                efficient data handling.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
              </div>

              <a
                href="https://github.com/mysticalprakhar/Student-Information-System-"
                target="_blank"
                rel="noreferrer"
                className="text-white underline"
              >
                View Project
              </a>
            </div>

            {/* Project 4 */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-500 transition">
              <h3 className="text-2xl font-bold mb-4">Career Predictor AI</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                AI-based recommendation system designed to suggest career paths using user input
                analysis and recommendation logic.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-black border border-gray-700 px-3 py-1 rounded-full text-sm">ML Concepts</span>
              </div>

              <a
                href="https://github.com/mysticalprakhar/Career-predictor-ai"
                target="_blank"
                rel="noreferrer"
                className="text-white underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 md:px-20 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>

          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold">Admission Cell Intern</h3>
              <p className="text-gray-400">March 2026 – June 2026</p>
            </div>

            <p className="text-gray-400 mb-6">Prestige Institute of Management and Research, Indore</p>

            <ul className="space-y-3 text-gray-300 list-disc pl-5">
              <li>Managed student admission data and records</li>
              <li>Handled form processing and verification workflows</li>
              <li>Worked with structured data handling systems</li>
              <li>Collaborated with teams to improve workflow efficiency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let’s Work Together</h2>

          <p className="text-gray-400 text-lg mb-10">
            Open to internships, freelance opportunities, and backend development projects.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:coderprakhar03@gmail.com"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/mysticalprakhar"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-700 px-8 py-4 rounded-2xl hover:bg-gray-900 transition"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

