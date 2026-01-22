import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle, ChevronDown, MapPin, LogOut, Settings } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { useStore } from '../context/StoreContext';
import { LoginModal } from './LoginModal';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (view: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { currentUser, logout, isAdmin } = useStore();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      
      {/* 1. TOP BAR */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
              <Phone size={12} /> +56 2 2345 6789
            </span>
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors hidden sm:flex">
              <Mail size={12} /> contacto@iademy.cl
            </span>
            <span className="hidden md:flex text-cyan-500 font-semibold">
              ¡Diplomados en Salud y Educación con matrícula gratis!
            </span>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Instagram size={14} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="bg-white py-4 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 flex justify-between items-center gap-4">
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-gradient-to-tr from-teal-600 to-cyan-500 text-white p-2 rounded-lg">
              <div className="w-6 h-6 flex items-center justify-center font-bold text-xl">I</div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-800 tracking-tight leading-none">IADEMY</span>
              <span className="text-[10px] font-bold text-cyan-600 tracking-widest uppercase">Salud & Educación</span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile, prominent on desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative">
            <div className="flex w-full border border-slate-200 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-cyan-500/50 transition-all bg-slate-50">
              <button className="px-4 py-2.5 bg-slate-100 border-r border-slate-200 text-slate-600 text-sm font-medium flex items-center gap-2 hover:bg-slate-200 transition-colors">
                Categorías <ChevronDown size={14} />
              </button>
              <input 
                type="text" 
                placeholder="Busca diplomados, cursos clínicos, docencia..." 
                className="flex-1 px-4 py-2.5 bg-transparent outline-none text-slate-700 placeholder-slate-400"
              />
              <button className="px-6 bg-cyan-600 hover:bg-cyan-700 text-white transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Actions Right */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#" className="hidden md:flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold hover:bg-green-100 transition-colors border border-green-200">
              <MessageCircle size={18} />
              <span className="text-sm">WhatsApp</span>
            </a>
            
            <div className="flex items-center gap-4 text-slate-600">
              <button className="relative hover:text-cyan-600 transition-colors group">
                <ShoppingCart size={24} />
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white group-hover:scale-110 transition-transform">0</span>
              </button>
              
              {currentUser ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-800 hidden sm:block">Hola, {currentUser.name.split(' ')[0]}</span>
                  {isAdmin && (
                    <button 
                      onClick={() => onNavigate('admin')}
                      className="bg-slate-800 text-white p-2 rounded-full hover:bg-cyan-600 transition-colors" title="Panel Master"
                    >
                      <Settings size={18} />
                    </button>
                  )}
                  <button onClick={logout} className="text-red-500 hover:text-red-700 p-1" title="Salir">
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setShowLogin(true)}
                  className="hidden sm:flex items-center gap-2 hover:text-cyan-600 transition-colors"
                >
                  <User size={24} />
                  <span className="text-sm font-medium hidden lg:inline">Ingresar</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* 3. NAVIGATION BAR (Desktop) */}
      <nav className="bg-slate-800 text-white hidden lg:block border-t border-slate-700">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <ul className="flex">
            <li className="relative group">
              <button 
                className="flex items-center gap-2 px-6 py-4 bg-cyan-600 hover:bg-cyan-500 font-bold uppercase text-sm tracking-wide transition-colors"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)}
              >
                <Menu size={18} /> Áreas de Estudio
              </button>
              {/* Dropdown Menu */}
              {isCategoryOpen && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-xl rounded-b-lg border-t-2 border-cyan-500 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={() => setIsCategoryOpen(true)}
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <ul className="py-2">
                    {CATEGORIES.map((cat, idx) => (
                      <li key={idx}>
                        <a href="#" className="block px-5 py-3 hover:bg-slate-50 hover:text-cyan-600 transition-colors text-sm font-medium border-b border-slate-50 last:border-none">
                          {cat}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li><button onClick={() => onNavigate('home')} className="block px-6 py-4 hover:bg-slate-700 text-sm font-medium transition-colors">Inicio</button></li>
            <li><a href="#" className="block px-6 py-4 hover:bg-slate-700 text-sm font-medium transition-colors">Salud</a></li>
            <li><a href="#" className="block px-6 py-4 hover:bg-slate-700 text-sm font-medium transition-colors">Educación</a></li>
            <li><a href="#" className="block px-6 py-4 hover:bg-slate-700 text-sm font-medium transition-colors text-cyan-400">Convenios Empresas</a></li>
          </ul>
          <div>
             <a href="#" className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-full text-sm font-semibold transition-colors border border-slate-600">
               Aula Virtual
             </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-[80%] max-w-sm h-full shadow-2xl p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
               <span className="text-xl font-bold text-slate-900">Menú</span>
               <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            
            <div className="mb-6 relative">
               <input 
                type="text" 
                placeholder="Buscar cursos..." 
                className="w-full px-4 py-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
              <Search className="absolute right-3 top-3 text-slate-400" size={20} />
            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">Navegación</h3>
            <ul className="space-y-2 mb-8">
              <li><button onClick={() => {onNavigate('home'); setIsMobileMenuOpen(false)}} className="block py-2 text-slate-700 font-medium hover:text-cyan-600">Inicio</button></li>
              <li><a href="#" className="block py-2 text-slate-700 font-medium hover:text-cyan-600">Salud</a></li>
              <li><a href="#" className="block py-2 text-slate-700 font-medium hover:text-cyan-600">Educación</a></li>
              {isAdmin && (
                <li><button onClick={() => {onNavigate('admin'); setIsMobileMenuOpen(false)}} className="block py-2 text-purple-700 font-bold hover:text-purple-900">Panel Master</button></li>
              )}
            </ul>

            <div className="pt-6 border-t border-slate-100">
              {!currentUser ? (
                <button onClick={() => {setShowLogin(true); setIsMobileMenuOpen(false)}} className="flex items-center justify-center gap-2 w-full bg-cyan-600 text-white py-3 rounded-lg font-bold mb-3">
                  <User size={18} /> Iniciar Sesión
                </button>
              ) : (
                <button onClick={logout} className="flex items-center justify-center gap-2 w-full bg-slate-200 text-slate-800 py-3 rounded-lg font-bold mb-3">
                  <LogOut size={18} /> Cerrar Sesión
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <div className="bg-cyan-600 text-white p-1.5 rounded-md">
                   <span className="font-bold text-lg">I</span>
                 </div>
                 <span className="text-2xl font-bold text-white">IADEMY</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Líderes en formación continua para profesionales de la salud y educación en Chile. Cursos certificados y OTEC.
              </p>
            </div>

            {/* Column 2: Links */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Institucional</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Quienes Somos</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Cuerpo Docente</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Certificaciones</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Trabaja con Nosotros</a></li>
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Áreas Destacadas</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Diplomados en Salud</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Gestión Educativa</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Inclusión</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Telemedicina</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Contacto</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-cyan-500 mt-1" size={18} />
                  <span>Av. Providencia 1234, Of. 605<br/>Santiago, Chile</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-cyan-500" size={18} />
                  <span>+56 2 2345 6789</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-cyan-500" size={18} />
                  <span>contacto@iademy.cl</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-slate-500">
               © 2024 IADEMY CHILE. Todos los derechos reservados.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};