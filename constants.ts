import { Course, User } from './types';

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920",
    title: "Innovación en Salud Digital",
    subtitle: "Formación especializada para profesionales de la salud moderna",
    cta: "Ver Diplomados",
    color: "from-teal-900 to-slate-900"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920",
    title: "Gestión y Liderazgo Educativo",
    subtitle: "Herramientas para los desafíos de la educación actual",
    cta: "Inscribirse",
    color: "from-blue-900 to-indigo-900"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1920",
    title: "Capacitación Corporativa",
    subtitle: "Cursos Sence para clínicas, hospitales y colegios",
    cta: "Para Instituciones",
    color: "from-slate-900 to-cyan-900"
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: '1',
    title: 'Diplomado en Telemedicina y Salud Digital',
    instructor: 'Dr. Roberto Méndez',
    rating: 4.9,
    students: 1250,
    originalPrice: 350000,
    price: 159990,
    image: 'https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=400',
    category: 'Salud',
    description: 'Aprenda a gestionar plataformas de salud a distancia con normativas vigentes.',
    isBestseller: true
  },
  {
    id: '2',
    title: 'Estrategias de Inclusión Educativa',
    instructor: 'Mag. Ana Valdés',
    rating: 4.8,
    students: 3400,
    originalPrice: 120000,
    price: 45000,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400',
    category: 'Educación',
    description: 'Metodologías prácticas para el aula inclusiva moderna.',
    isBestseller: true
  },
  {
    id: '3',
    title: 'Gestión de Calidad en Centros Clínicos',
    instructor: 'Enf. Patricia Silva',
    rating: 4.7,
    students: 850,
    originalPrice: 180000,
    price: 65000,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
    category: 'Salud',
    isNew: true
  },
  {
    id: '4',
    title: 'Inteligencia Artificial para Docentes',
    instructor: 'Ing. Carlos Ruiz',
    rating: 4.9,
    students: 500,
    originalPrice: 90000,
    price: 25000,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400',
    category: 'Tecnología Educativa',
    isNew: true
  },
  {
    id: '5',
    title: 'Primeros Auxilios y RCP Avanzado',
    instructor: 'Paramédico Juan Torres',
    rating: 4.6,
    students: 1100,
    originalPrice: 45000,
    price: 15000,
    image: 'https://images.unsplash.com/photo-1516574187841-693083f69802?auto=format&fit=crop&q=80&w=400',
    category: 'Salud',
  },
  {
    id: '6',
    title: 'Evaluación por Competencias en Educación Superior',
    instructor: 'Dr. Elena Rojas',
    rating: 5.0,
    students: 300,
    originalPrice: 150000,
    price: 55000,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400',
    category: 'Educación',
  }
];

export const INITIAL_USERS: User[] = [
  { id: '1', name: 'Estudiante Demo', email: 'estudiante@demo.cl', role: 'student', joinedDate: '2023-10-15' },
  { id: '2', name: 'Admin Master', email: 'admin', role: 'admin', joinedDate: '2023-01-01' },
  { id: '3', name: 'Dra. Paula Vega', email: 'paula@clinica.cl', role: 'student', joinedDate: '2024-02-20' },
  { id: '4', name: 'Prof. Mario Lagos', email: 'mario@colegio.cl', role: 'student', joinedDate: '2024-03-05' },
];

export const CATEGORIES = [
  "Salud",
  "Educación",
  "Tecnología Educativa",
  "Gestión Clínica",
  "Salud Mental",
  "Pedagogía",
  "Enfermería"
];