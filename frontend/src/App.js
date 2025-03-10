import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Search } from "lucide-react"
import { Button } from "./components/ui/button"
import ChatInterface from "./components/ChatInterface"

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="bg-[#0033A0] text-white">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src="/logo.svg" alt="Babcock University Logo" className="w-12 h-12" />
                <div className="font-semibold text-xl">BABCOCK UNIVERSITY</div>
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="hover:text-blue-200">
                  Home
                </Link>
                <Link to="/about" className="hover:text-blue-200">
                  About
                </Link>
                <Link to="/academics" className="hover:text-blue-200">
                  Academics
                </Link>
                <Link to="/admissions" className="hover:text-blue-200">
                  Admissions
                </Link>
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button variant="ghost" className="lg:hidden">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>123 University Drive</p>
                <p>Ilishan-Remo, Ogun State</p>
                <p>Nigeria</p>
                <p>Phone: +234 123 456 7890</p>
                <p>Email: info@babcock.edu.ng</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/about" className="hover:text-blue-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/academics" className="hover:text-blue-300">
                      Academics
                    </Link>
                  </li>
                  <li>
                    <Link to="/admissions" className="hover:text-blue-300">
                      Admissions
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-300">
                      Campus Life
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:text-blue-300">
                      Research
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-300">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-blue-300">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-blue-300">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-blue-300">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2023 Babcock University. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Chat Interface */}
        <ChatInterface />
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <div className="relative h-[calc(100vh-5rem)]">
        <img src="/campus.jpg" alt="University Campus" className="object-cover w-full h-full brightness-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">Welcome to</h1>
          <h2 className="text-5xl md:text-7xl font-bold">BABCOCK UNIVERSITY</h2>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Babcock University?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p>Our programs are designed to challenge and inspire, preparing you for success in your chosen field.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">State-of-the-Art Facilities</h3>
              <p>Experience learning in modern classrooms, labs, and libraries equipped with the latest technology.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Diverse Community</h3>
              <p>Join a vibrant community of students and faculty from various backgrounds and cultures.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Babcock University</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Babcock University is a private Christian co-educational Nigerian university owned and operated by the
              Seventh-day Adventist Church in Nigeria. The university is located equidistant between Ibadan and Lagos.
            </p>
            <p className="mb-4">
              Our mission is to provide a high-quality education that combines faith and learning, preparing students
              for leadership roles in their careers and communities.
            </p>
            <p>
              With a diverse range of programs and a commitment to academic excellence, Babcock University is dedicated
              to shaping the leaders of tomorrow.
            </p>
          </div>
          <div>
            <img
              src="/about-image.jpg"
              alt="Babcock University Campus"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Academics() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Academics at Babcock University</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Undergraduate Programs</h2>
            <ul className="list-disc list-inside">
              <li>Business Administration</li>
              <li>Computer Science</li>
              <li>Nursing</li>
              <li>Law</li>
              <li>Engineering</li>
              {/* Add more programs as needed */}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Graduate Programs</h2>
            <ul className="list-disc list-inside">
              <li>MBA</li>
              <li>M.Sc. in Information Technology</li>
              <li>M.A. in Education</li>
              <li>Ph.D. in various disciplines</li>
              {/* Add more programs as needed */}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Research Centers</h2>
            <ul className="list-disc list-inside">
              <li>Center for Entrepreneurship Studies</li>
              <li>Institute of Health Research</li>
              <li>Center for Leadership Development</li>
              {/* Add more research centers as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function Admissions() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Admissions Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Complete the online application form</li>
              <li>Submit required documents (transcripts, test scores, etc.)</li>
              <li>Pay the application fee</li>
              <li>Attend an interview (if required)</li>
              <li>Await admission decision</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Admission Requirements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Completed secondary education</li>
              <li>Minimum JAMB score (for undergraduate programs)</li>
              <li>English language proficiency</li>
              <li>Letters of recommendation</li>
              <li>Personal statement</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button>Apply Now</Button>
        </div>
      </div>
    </div>
  )
}

export default App

