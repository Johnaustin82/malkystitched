import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Scissors, Heart, Star, Mail, Phone, MapPin, Instagram, Facebook, ChevronDown } from 'lucide-react';

const Landingpage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Custom Embroidery",
      description: "Personalized designs crafted with precision and attention to detail"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Alterations",
      description: "Professional garment alterations and tailoring services"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Special Occasions",
      description: "Wedding, prom, and special event garment customization"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Monogramming",
      description: "Elegant monogramming for personal and corporate items"
    }
  ];

  const galleryItems = [
    { id: 1, category: "Embroidery", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop" },
    { id: 2, category: "Alterations", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop" },
    { id: 3, category: "Wedding", image: "https://images.unsplash.com/photo-1594736797933-d0b22d5e8b2c?w=400&h=300&fit=crop" },
    { id: 4, category: "Custom", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=300&fit=crop" },
    { id: 5, category: "Embroidery", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" },
    { id: 6, category: "Special", image: "https://images.unsplash.com/photo-1564121054508-4b7f7c2d3263?w=400&h=300&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center border-2 border-white/30">
                <div className="relative">
                  <div className="w-6 h-6 rounded-full border-2 border-white/80"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-0.5 bg-white/80 rotate-45"></div>
                    <div className="w-4 h-0.5 bg-white/80 -rotate-45 -mt-0.5"></div>
                  </div>
                </div>
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold tracking-wide">MALKY STITCHED</h1>
                <p className="text-xs text-white/80 tracking-widest">ONE STITCH AT A TIME</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-white/90 hover:text-white capitalize transition-colors duration-300 ${
                    activeSection === item ? 'text-white font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 mb-4 p-4">
              {['home', 'about', 'services', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-white/90 hover:text-white capitalize py-2 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-white/30 mb-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-white/80"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-1 bg-white/80 rotate-45"></div>
                  <div className="w-10 h-1 bg-white/80 -rotate-45 -mt-1"></div>
                </div>
                <Crown className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-white/80" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
            MALKY STITCHED
          </h1>
          <p className="text-xl md:text-2xl mb-2 tracking-widest text-white/90">
            ONE STITCH AT A TIME
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Premium stitching and embroidery services crafted with passion, precision, and attention to every detail
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              View Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-cyan-500 transition-all duration-300"
            >
              Get Quote
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Malky Stitched</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white/90">
              <h3 className="text-2xl font-semibold mb-6 text-white">Crafting Excellence, One Stitch at a Time</h3>
              <p className="text-lg mb-6 leading-relaxed">
                At Malky Stitched, we believe that every thread tells a story. With years of experience in the art of embroidery and tailoring, we transform ordinary fabrics into extraordinary pieces that reflect your unique style and personality.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Our passion for precision and commitment to quality ensures that every project receives the attention it deserves. From custom embroidery to professional alterations, we bring your vision to life with meticulous care.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Premium Quality</h4>
                  <p className="text-white/80">Every stitch reflects our commitment to excellence</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
                <img 
                  src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Embroidery work" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                {/* <div className="grid grid-cols-2 gap-2 text-center"> */}
                  {/* <div>
                    <h4 className="text-2xl font-bold text-white">500+</h4> 
                    <p className="text-white/80 text-sm">Projects Completed</p> 
                  </div> */}
                  {/* <div>
                    <h4 className="text-2xl font-bold text-white">5+</h4>
                    <p className="text-white/80 text-sm">Years Experience</p>
                  </div> */}
                  {/* <div>
                    <h4 className="text-2xl font-bold text-white">100%</h4>
                    <p className="text-white/80 text-sm">Satisfaction</p>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From custom embroidery to professional alterations, we offer comprehensive stitching services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Explore our portfolio of beautiful embroidery and stitching projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <img 
                  src={item.image} 
                  alt={item.category}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to bring your vision to life? Contact us for a consultation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full p-3">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-white/80">+254101886160</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full p-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-white/80">malkystitched@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full p-3">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-white/80">Donholm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors cursor-pointer">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
              
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white py-3 rounded-lg hover:from-purple-600 hover:to-cyan-500 transition-all duration-300 font-semibold"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md py-8 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center border border-white/30">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide">MALKY STITCHED</span>
          </div>
          <p className="text-white/60 text-sm">
            © 2025 Malky Stitched. All rights reserved. One stitch at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;