import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-lighter-bg">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isScrolled={isScrolled} />
      <Hero />
      <RateSection />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

const Navbar = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => (
  <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg py-3 shadow-lg' : 'bg-white/90 backdrop-blur-md py-5'}`}>
    <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
      <div className="flex items-center cursor-pointer">
        <Link to="/">
          <img src="/img/logo2.png" alt="Logo" className="h-16" />
        </Link>
      </div>
      <ul className="hidden lg:flex items-center gap-10">
        <li><a href="#features" className="text-text-dark font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Features</a></li>
        <li><a href="#pricing" className="text-text-dark font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Pricing</a></li>
        <li><a href="#testimonials" className="text-text-dark font-medium relative hover:text-primary after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Testimonials</a></li>
        <li><Link to="/dashboard" className="text-text-dark font-medium">Sign In</Link></li>
        <li><Link to="/register" className="bg-primary/10 py-2 px-6 rounded-full border border-primary/20 text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:-translate-y-1 hover:shadow-lg">Get Started</Link></li>
      </ul>
      <div className="lg:hidden flex flex-col cursor-pointer gap-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`w-6 h-0.5 bg-text-dark rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-text-dark rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-text-dark rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </div>
    </div>
    {isMenuOpen && (
      <ul className="lg:hidden flex flex-col items-center gap-4 bg-white/95 backdrop-blur-lg py-4 border-t border-gray-200">
        <li><a href="#features" className="text-text-dark font-medium">Features</a></li>
        <li><a href="#pricing" className="text-text-dark font-medium">Pricing</a></li>
        <li><a href="#testimonials" className="text-text-dark font-medium">Testimonials</a></li>
        <li><Link to="/dashboard" className="text-text-dark font-medium">Sign In</Link></li>
        <li><Link to="/register" className="bg-primary/10 py-2 px-6 rounded-full border border-primary/20 text-primary">Get Started</Link></li>
      </ul>
    )}
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center relative overflow-hidden px-8 bg-light-bg">
    <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-[500px] h-[500px] bg-primary-light rounded-full -top-64 -left-64 filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute w-[600px] h-[600px] bg-secondary-light rounded-full -bottom-72 -right-72 filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute w-[400px] h-[400px] bg-secondary/30 rounded-full top-1/2 left-3/4 filter blur-3xl opacity-30 animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:30px_30px] opacity-30"></div>
    </div>
    <div className="max-w-7xl mx-auto text-center py-24 relative z-10">
        <div className="inline-flex items-center bg-primary/10 text-primary py-2 px-4 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary-light animate-fade-in">
            <span>AI-Powered Interview Platform</span>
        </div>
        <h1 className="text-5xl font-bold leading-tight mb-6 text-text-dark animate-fade-up">
            <span className="block">Master Your Next Interview</span>
        </h1>
        <p className="text-lg text-text-gray max-w-xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-200">
            Practice with AI-generated questions, get real-time feedback, and track your progress.<br/>ConfidenSee helps you build confidence for your dream job interview.
        </p>
        <div className="flex gap-4 justify-center items-center opacity-0 animate-fade-up animation-delay-400">
            <Link to="/register" className="relative inline-flex items-center justify-center py-4 px-10 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl z-10">
                <span>Start Practicing Free</span>
            </Link>
        </div>
    </div>
    <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-44 h-44 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/90 flex items-center justify-center shadow-lg animate-float">
            <div className="text-center">
                <i className="fas fa-microphone text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i>
                <h4 className="text-sm font-semibold text-text-dark">Voice Analysis</h4>
            </div>
        </div>
        <div className="absolute top-3/5 left-[15%] w-44 h-44 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/90 flex items-center justify-center shadow-lg animate-float animation-delay-500">
            <div className="text-center">
                <i className="fas fa-chart-line text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i>
                <h4 className="text-sm font-semibold text-text-dark">Performance Metrics</h4>
            </div>
        </div>
        <div className="absolute top-2/5 right-[10%] w-44 h-44 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/90 flex items-center justify-center shadow-lg animate-float animation-delay-1000">
            <div className="text-center">
                <i className="fas fa-robot text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i>
                <h4 className="text-sm font-semibold text-text-dark">AI Feedback</h4>
            </div>
        </div>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-text-gray text-sm">
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto mb-2"></div>
        <p>Scroll to explore</p>
    </div>
  </section>
);

const RateSection = () => (
    <section className="py-16 px-8 bg-light-bg text-center">
        <div className="flex justify-center items-center gap-6 flex-wrap mt-6">
            <div className="bg-lighter-bg rounded-2xl p-6 w-56 text-center transition-transform duration-300 ease-in-out shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent my-3">10,000+</div>
                <div className="text-sm text-text-gray">Auto-crafted interview questions</div>
            </div>
            <div className="bg-lighter-bg rounded-2xl p-6 w-56 text-center transition-transform duration-300 ease-in-out shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent my-3">95%</div>
                <div className="text-sm text-text-gray">User-reported improvement</div>
            </div>
            <div className="bg-lighter-bg rounded-2xl p-6 w-56 text-center transition-transform duration-300 ease-in-out shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent my-3">5,000+</div>
                <div className="text-sm text-text-gray">and counting…</div>
            </div>
        </div>
    </section>
);

const Features = () => (
    <section id="features" className="py-24 px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Everything You Need to Succeed</h2>
            <p className="text-text-gray text-lg">Our comprehensive platform provides all the tools you need to excel in your next interview</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature Cards */}
        </div>
    </section>
);

const Testimonials = () => (
    <section id="testimonials" className="py-24 px-8 bg-light-bg">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">What Our Users Say</h2>
            <p className="text-text-gray text-lg">Hear from professionals who landed their dream jobs with ConfidenSee</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial Cards */}
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing" className="py-24 px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Choose Your Plan</h2>
            <p className="text-text-gray text-lg">Flexible options designed for every stage of your career journey</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Pricing Cards */}
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-light-bg pt-16 pb-8 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
                <div className="flex items-center gap-3 font-bold text-2xl text-text-dark"><span>ConfidenSee</span></div>
                <p className="text-text-gray my-4 max-w-xs">Master your interview skills with AI-powered practice and feedback.</p>
                <div className="flex gap-4">
                    <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:-translate-y-1"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:-translate-y-1"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:-translate-y-1"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:-translate-y-1"><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-lg font-semibold mb-6 relative pb-2 text-text-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary">Product</h4>
                    <a href="#" className="block text-text-gray mb-3 transition-all duration-300 hover:text-primary hover:translate-x-1">Features</a>
                    <a href="#" className="block text-text-gray mb-3 transition-all duration-300 hover:text-primary hover:translate-x-1">Pricing</a>
                    <a href="#" className="block text-text-gray mb-3 transition-all duration-300 hover:text-primary hover:translate-x-1">Testimonials</a>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-6 relative pb-2 text-text-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary">Resources</h4>
                    <a href="#" className="block text-text-gray mb-3 transition-all duration-300 hover:text-primary hover:translate-x-1">Blog</a>
                    <a href="#" className="block text-text-gray mb-3 transition-all duration-300 hover:text-primary hover:translate-x-1">Help Center</a>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-6 relative pb-2 text-text-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary">Company</h4>
                    <a href="#" className="block text-text-gray mb-3 transition-all duration-300 hover:text-primary hover:translate-x-1">About Us</a>
                    <a href="#" className="block text-text-gray mb-3 transition-all duration-300 hover:text-primary hover:translate-x-1">Privacy Policy</a>
                    <a href="#" className="block text-text-gray mb-3 transition-all duration-300 hover:text-primary hover:translate-x-1">Terms of Service</a>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-text-gray text-sm">
            <p>&copy; ConfidenSee. All rights reserved.</p>
        </div>
    </footer>
);

export default IndexPage;