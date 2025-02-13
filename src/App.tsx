import React, { useEffect, useState, FormEvent } from 'react';
import { Github, Linkedin, Mail, Code2, Smartphone, Globe2, ChevronDown, ExternalLink, Layers, MapPin, Phone, Calendar, Send, Award, Users, Briefcase, Quote, CheckCircle2, XCircle } from 'lucide-react';
import localImage from './assets/myImage.jpg';
function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/viratribadiya12@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio Contact: ${formData.subject}`,
        })
      });

      if (response.ok) {
        setPopupMessage({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setPopupMessage({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    }
    setShowPopup(true);
  };

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      quote: "Virat delivered an exceptional mobile app that exceeded our expectations. His attention to detail and technical expertise are outstanding."
    },
    {
      name: "Michael Chen",
      role: "Founder, EduTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      quote: "Working with Virat was a pleasure. He transformed our vision into reality with his innovative solutions and professional approach."
    },
    {
      name: "Emma Williams",
      role: "Product Manager, HealthTech",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      quote: "Virat's expertise in both mobile and web development helped us create a seamless cross-platform experience for our users."
    }
  ];

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px) scale(${isHovering ? 1.5 : 1})`
        }}
      />

      {showPopup && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg popup-slide ${popupMessage.type === 'success' ? 'bg-green-900' : 'bg-red-900'
          }`}>
          <div className="flex items-center gap-3">
            {popupMessage.type === 'success' ? (
              <CheckCircle2 className="w-6 h-6 text-green-300" />
            ) : (
              <XCircle className="w-6 h-6 text-red-300" />
            )}
            <p className="text-white">{popupMessage.message}</p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-black">
        <div className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 wave-bg overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img
                  // src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=800"
                  src={localImage}
                  alt="Virat"
                  className="rounded-2xl shadow-2xl w-64 h-64 object-cover mx-auto md:w-96 md:h-96 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  Virat
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-400">
                  Full-Stack Developer | Flutter & Web
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Hi, I'm Virat, a passionate and versatile full-stack developer with 2+ years of experience in mobile and web technologies.
                  I thrive on crafting engaging and user-friendly digital experiences, from pixel-perfect front-end interfaces
                  to robust and scalable back-end systems.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="https://github.com/ViratRibadiya0108" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/virat-ribadiya-371740272/" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="mailto:virat.work@outlook.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="metric-animate bg-white/5 p-8 rounded-2xl backdrop-blur-lg text-center hover:bg-white/10 transition-all">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">2</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="metric-animate bg-white/5 p-8 rounded-2xl backdrop-blur-lg text-center hover:bg-white/10 transition-all">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">2+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="metric-animate bg-white/5 p-8 rounded-2xl backdrop-blur-lg text-center hover:bg-white/10 transition-all">
                <Briefcase className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-white mb-2">5+</h3>
                <p className="text-gray-400">Projects Delivered</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-12">
              <Layers className="w-8 h-8 text-black" />
              <h2 className="text-3xl font-bold text-black">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="project-card group relative overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&q=80&w=800"
                  alt="E-commerce App"
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">E-commerce Mobile App</h3>
                    <p className="text-gray-300 mb-4">A full-featured e-commerce app built with Flutter and Node.js backend.</p>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Flutter</span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Firebase</span>
                    </div>
                    <a href="https://github.com/ViratRibadiya0108" className="absolute top-6 right-6 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card group relative overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800"
                  alt="Health & Fitness App"
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Health & Fitness Tracker</h3>
                    <p className="text-gray-300 mb-4">A modern fitness tracking application with real-time analytics.</p>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Supabase</span>
                    </div>
                    <a href="https://github.com/ViratRibadiya0108" className="absolute top-6 right-6 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card group relative overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=800"
                  alt="Social Platform"
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Social Learning Platform</h3>
                    <p className="text-gray-300 mb-4">An educational platform connecting students and mentors.</p>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">tRPC</span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Prisma</span>
                    </div>
                    <a href="https://github.com/ViratRibadiya0108" className="absolute top-6 right-6 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card group relative overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Analytics Dashboard"
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Analytics Dashboard</h3>
                    <p className="text-gray-300 mb-4">Real-time analytics dashboard with interactive visualizations.</p>
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">Vue.js</span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">D3.js</span>
                      <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">GraphQL</span>
                    </div>
                    <a href="https://github.com/ViratRibadiya0108" className="absolute top-6 right-6 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="skill-card p-6 bg-white/5 backdrop-blur-lg rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold text-white">Mobile Development</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li>Flutter</li>
                  <li>FlutterFlow</li>
                  <li>Dart</li>
                  <li>Native Android (Java)</li>
                </ul>
              </div>
              <div className="skill-card p-6 bg-white/5 backdrop-blur-lg rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Globe2 className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold text-white">Web Development</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>Node.js</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div className="skill-card p-6 bg-white/5 backdrop-blur-lg rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Code2 className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-semibold text-white">Programming</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li>Dart</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-black/5 backdrop-blur-lg p-8 rounded-3xl border-2 border-black/50 pulse-border">
              <h2 className="text-3xl font-bold mb-8 text-center text-black">Career Goals</h2>
              <p className="text-gray-700 text-lg mb-12 leading-relaxed">
                With 6+ years of experience and 50+ successful projects, I'm seeking opportunities to contribute to challenging
                and impactful projects where I can leverage my full-stack skills to build innovative solutions. I'm particularly
                interested in mobile app development and web applications, with a focus on creating seamless user experiences.
              </p>
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block px-8 py-3 bg-black text-white rounded-full 
                           font-semibold hover:bg-gray-800 transition-all transform 
                           hover:scale-105 float-animation"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="review-card bg-white/5 p-6 rounded-2xl backdrop-blur-lg transform hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white/10 p-1 rounded-full">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                      <p className="text-gray-400">{review.role}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="w-8 h-8 text-white/20 absolute -top-4 -left-4" />
                    <p className="text-gray-300 italic quote-animation pl-6">{review.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Get in Touch</h2>
            <p className="text-center text-gray-400 mb-12 text-lg">Let's create something amazing together!</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div
                className="float-animation bg-white/5 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                </div>
                <p className="text-gray-400">Ahmedabad, Gujarat</p>
                <p className="text-gray-400">India</p>
              </div>

              <div
                className="float-animation bg-white/5 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                </div>
                <a href="tel:+919409971218" className="text-gray-400">+91 94099 71218</a>
                <p className="text-gray-400">Mon-Fri, 9AM-6PM IST</p>
              </div>

              <div
                className="float-animation bg-white/5 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                </div>
                <p className="text-gray-400">virat.work@outlook.com</p>
                <p className="text-gray-400">Always open for messages</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all text-white"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
              <div className="mt-8 text-center text-gray-400">
                <p>Messages will be sent directly to: virat.work@outlook.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;