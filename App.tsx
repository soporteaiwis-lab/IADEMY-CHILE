import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { HeroSlider } from './components/HeroSlider';
import { CourseCard } from './components/CourseCard';
import { StoreProvider, useStore } from './context/StoreContext';
import { AdminDashboard } from './components/AdminDashboard';
import { Rocket, Trophy, Clock, CheckCircle, TrendingUp, HeartPulse, GraduationCap } from 'lucide-react';

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

const HomeView: React.FC = () => {
  const { courses } = useStore();
  const featuredCourses = courses.filter(c => c.isBestseller);
  const healthCourses = courses.filter(c => c.category === 'Salud');
  const eduCourses = courses.filter(c => c.category === 'Educación');
  
  return (
    <>
      <HeroSlider />

      {/* Trust Indicators */}
      <div className="bg-white border-b border-slate-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             <div className="flex flex-col items-center gap-2 p-4">
               <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-2">
                 <Rocket size={24} />
               </div>
               <h4 className="font-bold text-slate-800">Cursos SENCE</h4>
               <p className="text-xs text-slate-500">Franquicia tributaria</p>
             </div>
             <div className="flex flex-col items-center gap-2 p-4">
               <div className="bg-cyan-50 p-3 rounded-full text-cyan-600 mb-2">
                 <Trophy size={24} />
               </div>
               <h4 className="font-bold text-slate-800">Certificación OTEC</h4>
               <p className="text-xs text-slate-500">Norma NCh2728</p>
             </div>
             <div className="flex flex-col items-center gap-2 p-4">
               <div className="bg-purple-50 p-3 rounded-full text-purple-600 mb-2">
                 <Clock size={24} />
               </div>
               <h4 className="font-bold text-slate-800">100% Online</h4>
               <p className="text-xs text-slate-500">Plataforma 24/7</p>
             </div>
             <div className="flex flex-col items-center gap-2 p-4">
               <div className="bg-green-50 p-3 rounded-full text-green-600 mb-2">
                 <CheckCircle size={24} />
               </div>
               <h4 className="font-bold text-slate-800">Tutores Clínicos</h4>
               <p className="text-xs text-slate-500">Expertos en salud y educación</p>
             </div>
          </div>
        </div>
      </div>

      {/* Promos / Deals Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Diplomados Destacados" 
            subtitle="Impulsa tu carrera profesional con nuestros programas de excelencia."
            icon={<TrendingUp size={32} />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCourses.slice(0, 4).map((course, index) => (
              <CourseCard key={`featured-${index}`} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Health Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-red-50 p-2 rounded-lg text-red-600"><HeartPulse size={28} /></div>
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-1">Área Salud</h2>
                <p className="text-slate-500">Clínica, Gestión y Telemedicina</p>
              </div>
            </div>
            <a href="#" className="text-cyan-600 font-bold hover:text-cyan-700 mt-4 md:mt-0">
              Ver Todo Salud &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {healthCourses.slice(0, 4).map((course, index) => (
              <CourseCard key={`health-${index}`} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-50 p-2 rounded-lg text-amber-600"><GraduationCap size={28} /></div>
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-1">Área Educación</h2>
                <p className="text-slate-500">Innovación, Inclusión y Gestión</p>
              </div>
            </div>
            <a href="#" className="text-cyan-600 font-bold hover:text-cyan-700 mt-4 md:mt-0">
              Ver Todo Educación &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {eduCourses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const MainContent = () => {
  const [currentView, setCurrentView] = useState('home');
  const { isAdmin } = useStore();

  const handleNavigate = (view: string) => {
    if (view === 'admin' && !isAdmin) {
      alert('Acceso denegado. Debes ser Master User.');
      return;
    }
    setCurrentView(view);
  };

  return (
    <Layout onNavigate={handleNavigate}>
      {currentView === 'home' && <HomeView />}
      {currentView === 'admin' && <AdminDashboard />}
    </Layout>
  );
};

function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}

export default App;