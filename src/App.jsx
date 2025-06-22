import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Globe, Award, User, Briefcase, Star, Heart, Coffee, Zap, FileText, Download } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

const projects = [
  { name: "منصه خبرة", desc: "منصة إعلامية متطورة", color: "from-gray-700 to-gray-900" },
  { name: "خدمات توكلنا", desc: "تطوير واجهات حكومية", color: "from-gray-700 to-gray-900" },
  { name: "بحري ونقل ولوجستي", desc: "نظام إدارة الشحن", color: "from-gray-700 to-gray-900" },
  { name: "بيان", desc: "نظام إدارة البيانات", color: "from-gray-600 to-gray-900" },
  { name: "منذر", desc: "منصة الاتذارات", color: "from-gray-700 to-gray-900" },
  { name: "هيئة المياه", desc: "تطوير بوابة إلكترونية حديثة", color: "from-gray-700 to-gray-900" },
  { name: "البوابة الذكية", desc: "نظام وصول موحد ومتكامل", color: "from-gray-700 to-gray-900" },
  { name: "سلامة الدفاع المدني", desc: "واجهة خاصة بإدارة تصاريح السلامة", color: "from-gray-700 to-gray-900" },
    { name: "مشاريع حكومية أخرى", desc: "تطبيقات ومواقع متنوعة", color: "from-gray-700 to-gray-900" },

];
 const skills = [
  // Core Frontend
  "HTML5 & CSS3", "JavaScript ES6+", "TypeScript", "Responsive Design", "UI/UX Design",

  // Frameworks & Libraries
  "React.js", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Svelte",

  // Styling
  "Tailwind CSS", "Bootstrap", "Sass/SCSS", "Styled Components", "Material UI", "Chakra UI",

  // State Management
  "Redux", "Vuex", "NgRx",

  // Backend for Frontend (BFF)
  "Node.js", "Express.js",

  // Tools & Version Control
  "Git", "GitHub", "GitLab", "Bitbucket", "Vite", "Webpack",

  // Testing
   "Cypress",
 
  // Design & Prototyping
  "Figma", "Adobe XD", "Framer",

  // DevOps & Deployment
  "Vercel", "Netlify", "Docker", "CI/CD",

  // Others
"RESTful APIs", "i18n/L10n", "Accessibility (a11y)"
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative" style={{ fontFamily: 'Almarai, system-ui, sans-serif' }}>
      {/* Background Animation */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,192,203,0.2), transparent 40%)`
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Code className="w-4 h-4 text-pink-200" />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-gray-800 to-pink-200 rounded-full flex items-center justify-center text-4xl font-bold animate-pulse-slow shadow-2xl border-2 border-pink-100">
              BA
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-300 rounded-full animate-ping" />
          </div>
          
          <h1 className="pb-5 text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-gray-300 animate-gradient">
            بنان الأسمري
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-pink-300 animate-bounce" />
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              Frontend Consultent 
            </p>
            <Heart className="w-6 h-6 text-pink-300 animate-pulse" />
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            مبدعة في تطوير المواقع والتطبيقات الحكومية والخاصة 🚀 
            <br />
            أحول الأفكار إلى واقع رقمي مذهل بخبرة تقنية عالية ولمسة إبداعية فريدة ✨
          </p>
        </header>

        {/* About Section */}
        <section className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
         <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-pink-200/20 hover:border-pink-200/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-200/10">
  <div className="flex items-center gap-3 mb-6">
    <User className="w-8 h-8 text-pink-200" />
    <h2 className="text-3xl font-bold">عنّي شوي 👩🏻‍💻</h2>
  </div>
  <p className="text-lg text-gray-200 leading-relaxed">
    أنا مطوّرة فرونت اند أحب التفاصيل وأؤمن إن التصميم الحلو يبدأ من كود مرتب 💫  
    عندي خبرة في تطوير مواقع حكومية وتطبيقات خاصة، وأشتغل مع فرق وأحيان كفريلانسر بكل شغف 🛠️  
    هدفي دايم يكون إن التجربة تكون سهلة، سريعة، وتخلي المستخدم مبسوط من أول ما يدخل الموقع 
  </p>
</div>
        </section>

        {/* Projects Section */}
       <section className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-pink-200" />
            <h2 className="text-4xl font-bold">مشاريعي الرهيبة</h2>
            <Star className="w-6 h-6 text-pink-300 animate-spin-slow" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target={project.link !== "#" ? "_blank" : "_self"}
                rel={project.link !== "#" ? "noopener noreferrer" : ""}
                className={`group bg-gradient-to-br ${project.color} p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 cursor-pointer shadow-lg hover:shadow-2xl block text-white no-underline`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 group-hover:bg-white/20 transition-colors border border-pink-200/20">
                  <div className="flex items-center justify-between mb-2">
                    <Globe className="w-8 h-8 group-hover:animate-bounce text-pink-200" />
                    {project.link !== "#" && (
                      <svg className="w-5 h-5 text-pink-200 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm opacity-90">{project.desc}</p>
                </div>
                <div className="flex justify-end">
                  <div className="w-3 h-3 bg-pink-200/60 rounded-full animate-ping" />
                </div>
              </a>
            ))}
          </div>
        </section>
        {/* Skills Section */}
        <section className={`mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-pink-200" />
            <h2 className="text-4xl font-bold">مهاراتي التقنية</h2>
            <Coffee className="w-6 h-6 text-pink-300 animate-pulse" />
          </div>
          
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200/30 hover:border-pink-200/60 transition-all duration-300 hover:scale-110 cursor-pointer text-sm font-medium shadow-lg hover:shadow-pink-200/25"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={`mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-3xl p-8 border border-pink-200/20">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-pink-200" />
              <h2 className="text-3xl font-bold">خبراتي المهنية</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors border border-pink-200/10">
                <h3 className="text-xl font-bold mb-3 text-pink-200">💼 العمل الحكومي</h3>
                <p className="text-gray-200">
                  تطوير المواقع والتطبيقات للجهات الحكومية بأعلى معايير الأمان والجودة، 
                  مع التركيز على تجربة المستخدم وسهولة الوصول.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors border border-pink-200/10">
                <h3 className="text-xl font-bold mb-3 text-pink-200">🚀 العمل الحر</h3>
                <p className="text-gray-200">
                  تقديم خدمات تطوير الفرونت اند للشركات والأفراد، 
                  مع التخصص في المشاريع التقنية المعقدة والحلول المبتكرة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
       <section className={`mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
  <div className="flex items-center gap-3 mb-8">
    <Award className="w-8 h-8 text-pink-200" />
    <h2 className="text-4xl font-bold">شهاداتي وإنجازاتي</h2>
  </div>
  
  <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg rounded-3xl p-8 border border-pink-200/20">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {/* React */}
      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-pink-200/20">
        <div className="w-12 h-12 bg-pink-200 rounded-full mx-auto mb-3 flex items-center justify-center">
          <Award className="w-6 h-6 text-black" />
        </div>
        <p className="font-semibold">شهادات React المتقدمة</p>
      </div>

        {/* JavaScript */}
      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-pink-200/20">
        <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
          <Code className="w-6 h-6 text-black" />
        </div>
        <p className="font-semibold">Software Engineering Immersive</p>
      </div>

      {/* JavaScript */}
      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-pink-200/20">
        <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
          <Code className="w-6 h-6 text-black" />
        </div>
        <p className="font-semibold">شهادات JavaScript ES6+</p>
      </div>

      {/* Web Development */}
      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-pink-200/20">
        <div className="w-12 h-12 bg-pink-100 rounded-full mx-auto mb-3 flex items-center justify-center">
          <Globe className="w-6 h-6 text-black" />
        </div>
        <p className="font-semibold">Product Design University of art London </p>
      </div>

      {/* Angular */}
      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-pink-200/20">
        <div className="w-12 h-12 bg-red-200 rounded-full mx-auto mb-3 flex items-center justify-center">
          <Code className="w-6 h-6 text-black" />
        </div>
        <p className="font-semibold"> Mastring Angular U2U </p>
      </div>

      {/* UX - Nielsen Norman */}
      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-pink-200/20">
        <div className="w-12 h-12 bg-yellow-200 rounded-full mx-auto mb-3 flex items-center justify-center">
          <User className="w-6 h-6 text-black" />
        </div>
        <p className="font-semibold">Certified User Experience Specialist CUSX</p>
      </div>

      {/* Web3 */}
      <div className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors border border-pink-200/20">
        <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center">
          <Globe className="w-6 h-6 text-black" />
        </div>
        <p className="font-semibold">
W3Cx's Front-End Web Developer Professional Certificate</p>
      </div>

    </div>
  </div>
</section>

{/* CV Download Section */}
<section className={`mb-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
  <div className="bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-lg rounded-3xl p-8 border border-pink-200/30 text-center">
    
    <div className="flex items-center justify-center gap-3 mb-6">
      <FileText className="w-8 h-8 text-pink-200" />
      <h2 className="text-3xl font-bold">حمّل سيرتي الذاتية 📄</h2>
    </div>
    
    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
      حاب تعرف أكثر عن خبرتي ومشاريعي؟ تقدر تحمّل السيرة الذاتية وتشوف كل التفاصيل 🔍
    </p>
    
    <div className="flex flex-wrap justify-center gap-6">
      {/* Arabic CV */}
      <a
        href="/Banan-Alasmari-Frontend-Engineer-CV.pdf"
        download="Banan-Alasmari-Frontend-Engineer-CV.pdf"
        className="group flex items-center gap-4 bg-gradient-to-r from-pink-200/20 to-gray-300/20 hover:from-pink-200/30 hover:to-gray-300/30 px-8 py-4 rounded-2xl border-2 border-pink-200/40 hover:border-pink-200/70 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-pink-200/25"
      >
        <Download className="w-6 h-6 text-pink-200 group-hover:animate-bounce" />
        <div className="text-right">
          <span className="block font-bold text-lg text-white">تحميل السيرة الذاتية</span>
          <span className="block text-sm text-gray-300">بالعربي - PDF</span>
        </div>
      </a>
    </div>

    <div className="mt-6 text-sm text-gray-400">
      <p>💡 السيرة دايم محدثة وتشمل كل جديد أشتغل عليه ✨</p>
    </div>
  </div>
</section>

        {/* Contact Section */}
        <section className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg rounded-3xl p-8 border border-pink-200/30 text-center">
           <h2 className="text-4xl font-bold mb-6">خل نشتغل سوا! 🤝</h2>
<p className="text-lg text-gray-200 mb-8">
عندك فكرة حلوة وتبغى تطلعها للنور؟ خلّنا نحولها لمشروع يلفت الأنظار! 🚀 تواصل معي وخلنا نبدأ 💬
</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:+966508520160"
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl border border-pink-200/30 hover:border-pink-200/60 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6 text-pink-200 group-hover:animate-bounce" />
                <span className="font-medium">الجوال</span>
              </a>
              
              <a
                href="mailto:bananmohammed5@gmail.com"
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl border border-pink-200/30 hover:border-pink-200/60 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-6 h-6 text-pink-200 group-hover:animate-bounce" />
                <span className="font-medium">الإيميل</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/banan-alasmari-884997183/"
                className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl border border-pink-200/30 hover:border-pink-200/60 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-6 h-6 text-pink-200 group-hover:animate-bounce" />
                <span className="font-medium">لينكد إن</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #ffc0cb #000000;
        }
        
        *::-webkit-scrollbar {
          width: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: #000000;
        }
        
        *::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #ffc0cb, #ffffff);
          border-radius: 4px;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap');
      `}</style>
    </div>
  );
};

export default Portfolio;