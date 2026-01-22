import React from 'react';
import { Layout } from './components/Layout';
import { HeroSlider } from './components/HeroSlider';
import { CourseCard } from './components/CourseCard';
import { COURSES } from './constants';
import { Rocket, Trophy, Clock, CheckCircle, TrendingUp } from 'lucide-react';

const SectionHeader: React.FC<{ title: string; subtitle?: string; icon?: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="flex flex-col items-center justify-center mb-10 text-center">
    <div className="flex items-center gap-3 mb-2">
      {icon && <span className="text-cyan-600">{icon}</span>}
      <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
    </div>
    {subtitle && <div className="w-16 h-1 bg-cyan-500 rounded-full mb-4"></div>}
    {subtitle && <p className="text-slate-500 max-w-2xl">{subtitle}</p>}
  </div>
);

function App() {
  // Filter courses for different sections
  const featuredCourses = COURSES.filter(c => c.isBestseller);
  const newCourses = COURSES.filter(c => c.isNew || c.category === 'Diseño');
  
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSlider />

      {/* Trust Indicators */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             <div className="flex flex-col items-center gap-2 p-4">
               <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-2">
                 <Rocket size={24} />
               </div>
               <h4 className="font-bold text-slate-800">Aprendizaje Acelerado</h4>
               <p className="text-xs text-slate-500">Metodología práctica</p>
             </div>
             <div className="flex flex-col items-center gap-2 p-4">
               <div className="bg-cyan-50 p-3 rounded-full text-cyan-600 mb-2">
                 <Trophy size={24} />
               </div>
               <h4 className="font-bold text-slate-800">Certificación Global</h4>
               <p className="text-xs text-slate-500">Válida en LinkedIn</p>
             </div>
             <div className="flex flex-col items-center gap-2 p-4">
               <div className="bg-purple-50 p-3 rounded-full text-purple-600 mb-2">
                 <Clock size={24} />
               </div>
               <h4 className="font-bold text-slate-800">Acceso Vitalicio</h4>
               <p className="text-xs text-slate-500">Estudia a tu ritmo</p>
             </div>
             <div className="flex flex-col items-center gap-2 p-4">
               <div className="bg-green-50 p-3 rounded-full text-green-600 mb-2">
                 <CheckCircle size={24} />
               </div>
               <h4 className="font-bold text-slate-800">Soporte 24/7</h4>
               <p className="text-xs text-slate-500">Tutores expertos</p>
             </div>
          </div>
        </div>
      </div>

      {/* Promos / Deals Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="¡Oportunidades de la Semana!" 
            subtitle="Cursos con descuentos especiales por tiempo limitado."
            icon={<TrendingUp size={32} />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCourses.concat(featuredCourses).slice(0, 4).map((course, index) => (
              <CourseCard key={`promo-${index}`} course={course} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="bg-transparent border-2 border-slate-800 text-slate-800 font-bold py-3 px-8 rounded-lg hover:bg-slate-800 hover:text-white transition-all">
              Ver Todas las Promociones
            </button>
          </div>
        </div>
      </section>

      {/* New Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Recién Lanzados</h2>
              <p className="text-slate-500">Mantente actualizado con las últimas tecnologías.</p>
            </div>
            <a href="#" className="text-cyan-600 font-bold hover:text-cyan-700 flex items-center gap-1 mt-4 md:mt-0">
              Ver Catálogo Completo &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {newCourses.concat(newCourses).slice(0, 4).map((course, index) => (
              <CourseCard key={`new-${index}`} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900">
           <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/800?blur=5')] opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿No sabes por dónde empezar?</h2>
           <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
             Explora nuestras rutas de aprendizaje diseñadas para llevarte de principiante a experto en tiempo récord.
           </p>
           <div className="flex flex-wrap justify-center gap-4">
             {['Data Science', 'Desarrollo Web', 'Marketing IA', 'Gestión de Proyectos'].map((tag) => (
               <button key={tag} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition-all font-semibold">
                 {tag}
               </button>
             ))}
           </div>
        </div>
      </section>

      {/* Most Visited / Popular Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
           <SectionHeader 
            title="Los Favoritos de la Comunidad" 
            subtitle="Únete a miles de estudiantes que ya están transformando su futuro."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Suscríbete a nuestro Boletín</h3>
            <p className="text-slate-500 mb-6">Recibe descuentos exclusivos y noticias sobre IA directamente en tu correo.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1 px-5 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500/50 outline-none"
              />
              <button className="bg-slate-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-800 transition-colors">
                Suscribirme
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Al suscribirte aceptas nuestros Términos y Condiciones.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;