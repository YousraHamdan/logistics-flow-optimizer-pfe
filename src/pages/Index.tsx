
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Truck, 
  Package, 
  BarChart3, 
  Search, 
  RefreshCw, 
  Lightbulb, 
  Trophy, 
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Users,
  TrendingUp,
  Warehouse,
  Globe,
  Zap
} from 'lucide-react';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['overview', 'features', 'methodology', 'results', 'conclusion'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Process Analysis",
      description: "Comprehensive analysis of warehouse operations including receiving, storage, picking, and shipping processes at SJL's EPP warehouse.",
      delay: "0.1s"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Problem Identification", 
      description: "Used Ishikawa diagrams to identify root causes of delays and inefficiencies in warehouse operations.",
      delay: "0.2s"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "PDCA Methodology",
      description: "Applied the Plan-Do-Check-Act cycle for continuous improvement of warehouse processes.",
      delay: "0.3s"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Metrics",
      description: "Developed key performance indicators (KPIs) to measure warehouse efficiency before and after improvements.",
      delay: "0.4s"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Practical Solutions",
      description: "Proposed concrete solutions including layout reorganization, process standardization, and equipment optimization.",
      delay: "0.5s"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Measurable Results",
      description: "Achieved significant time savings in order picking (from 285 to 95 minutes) and eliminated customs penalties.",
      delay: "0.6s"
    }
  ];

  const methodologySteps = [
    {
      number: "1",
      title: "Plan",
      description: "Identified warehouse processes needing optimization through observation and QQQQCCP analysis. Defined problems clearly and gathered baseline performance metrics.",
      icon: <Target className="w-6 h-6" />
    },
    {
      number: "2", 
      title: "Do",
      description: "Implemented solutions including: reorganizing storage layout, standardizing processes, improving equipment utilization, and enhancing documentation procedures.",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "3",
      title: "Check", 
      description: "Measured results against baseline metrics. Compared time savings in order picking (reduced by 67%) and tracked elimination of customs penalties.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "4",
      title: "Act",
      description: "Standardized successful improvements and identified areas for further optimization. Documented best practices for warehouse operations.",
      icon: <RefreshCw className="w-6 h-6" />
    }
  ];

  const results = [
    {
      metric: "67%",
      label: "Reduction in order picking time",
      description: "(from 285 to 95 minutes per operation)",
      icon: <Clock className="w-8 h-8" />
    },
    {
      metric: "100%",
      label: "Elimination of customs penalties", 
      description: "(from 680,000 MAD in April to 0 MAD in May/June)",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      metric: "Enhanced",
      label: "Warehouse space utilization",
      description: "through better storage organization",
      icon: <Package className="w-8 h-8" />
    },
    {
      metric: "Improved",
      label: "Documentation processes",
      description: "and customs account management",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-slate-800 to-blue-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white animate-fade-in">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-6 py-3 text-lg bg-yellow-400 text-blue-900 font-semibold shadow-lg">
              <Warehouse className="w-5 h-5 mr-2" />
              Logistics Excellence Project
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-scale-in">
            Warehouse Process Optimization
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Transforming logistics operations at <span className="text-yellow-400 font-semibold">SJL Maghreb Tanger</span> through data-driven optimization and innovative process improvement methodologies
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => scrollToSection('overview')}
            >
              <Globe className="mr-2 w-5 h-5" />
              Explore Project 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Zap className="mr-2 w-5 h-5" /> 
              View Methodology
            </Button>
          </div>
          <div className="mt-16 text-sm opacity-80">
            <p>Final Year Project by <span className="text-yellow-400 font-semibold">Cherief Douae</span> | Supervised by <span className="text-yellow-400 font-semibold">Mr. Tadi Soufian</span></p>
          </div>
        </div>

        {/* Enhanced floating logistics icons */}
        <div className="absolute top-20 left-10 text-yellow-400/30 animate-bounce" style={{ animationDelay: '1s' }}>
          <Truck className="w-20 h-20 animate-float" />
        </div>
        <div className="absolute bottom-20 right-10 text-yellow-400/30 animate-bounce" style={{ animationDelay: '2s' }}>
          <Package className="w-16 h-16 animate-float" />
        </div>
        <div className="absolute top-1/2 left-5 text-yellow-400/20 animate-bounce" style={{ animationDelay: '3s' }}>
          <Warehouse className="w-14 h-14 animate-float" />
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-center py-4">
            <div className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'features', label: 'Features' },
                { id: 'methodology', label: 'Methodology' },
                { id: 'results', label: 'Results' },
                { id: 'conclusion', label: 'Conclusion' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-blue-900 text-white shadow-lg scale-105' 
                      : 'text-blue-900 hover:bg-blue-100 hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 animate-fade-in">Project Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-600 mx-auto rounded animate-scale-in"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-700 leading-relaxed">
                This project focuses on optimizing warehouse processes at <strong className="text-blue-900">SJL Maghreb Tanger</strong>, 
                specifically within the <strong className="text-blue-900">EPP (Private and Particular Warehouse)</strong> department. 
                The goal was to improve efficiency in receiving, storage, order picking, and shipping operations.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The study identified bottlenecks in warehouse operations and proposed actionable solutions using the 
                <strong className="text-blue-900"> PDCA (Plan-Do-Check-Act)</strong> methodology, complemented by tools like 
                <strong className="text-blue-900"> Ishikawa diagrams</strong> and <strong className="text-blue-900">QQQQCCP analysis</strong>.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Key Challenges Addressed:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Delays in truck reception due to limited docks and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Inefficient storage location management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Time-consuming order picking processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Shipping delays and customs documentation issues</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional Warehouse Operations" 
                  className="rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Key Features</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur animate-fade-in overflow-hidden"
                style={{ animationDelay: feature.delay }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-blue-900 group-hover:text-blue-700 transition-colors text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">PDCA Methodology</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-600 mx-auto rounded"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {methodologySteps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-8 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-900 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-blue-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Logistics Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Outstanding Results</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur border-white/20 text-center hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-yellow-400 mb-4 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {result.icon}
                  </div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">{result.metric}</div>
                  <h3 className="text-lg font-semibold mb-2">{result.label}</h3>
                  <p className="text-white/80 text-sm">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Project Impact & Conclusion</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-600 mx-auto rounded"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-gray-700 leading-relaxed">
                  This project successfully identified and addressed key inefficiencies in SJL Maghreb's warehouse operations. 
                  By applying structured problem-solving methodologies and implementing practical solutions, significant improvements 
                  were achieved in process efficiency and cost reduction.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  The project demonstrates how careful analysis and systematic improvement can enhance logistics operations, 
                  with potential applications across similar warehouse environments. The results highlight the importance of 
                  continuous process optimization in modern supply chain management.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-blue-900 hover:bg-blue-800 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                    onClick={() => scrollToSection('overview')}
                  >
                    <RefreshCw className="mr-2 w-5 h-5" /> 
                    Review Project
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-full transition-all duration-300"
                    onClick={() => scrollToSection('methodology')}
                  >
                    <Target className="mr-2 w-5 h-5" />
                    View Methodology
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Logistics Team" 
                    className="rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-12 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Truck className="w-8 h-8 text-yellow-400 animate-bounce" />
              <h3 className="text-2xl font-bold">Warehouse Optimization Project</h3>
              <Package className="w-8 h-8 text-yellow-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <Separator className="bg-white/20 mb-6" />
            
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-lg mb-2">
                  <span className="text-yellow-400 font-semibold">Student:</span> Cherief Douae
                </p>
                <p className="text-sm text-white/80">TSGTL Program | Academic Year 2024/2025</p>
              </div>
              <div>
                <p className="text-lg mb-2">
                  <span className="text-yellow-400 font-semibold">Supervisor:</span> Mr. Tadi Soufian
                </p>
                <p className="text-sm text-white/80">SJL Maghreb Tanger | EPP Department</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-white/70">
                © 2024 Warehouse Process Optimization Project. Transforming logistics through innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
