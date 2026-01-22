import { Course } from './types';

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://picsum.photos/1920/600?random=1",
    title: "Domina la Inteligencia Artificial",
    subtitle: "Cursos especializados para profesionales en Chile",
    cta: "Ver Cursos",
    color: "from-blue-900 to-slate-900"
  },
  {
    id: 2,
    image: "https://picsum.photos/1920/600?random=2",
    title: "Programación Full Stack con IA",
    subtitle: "Acelera tu desarrollo con herramientas de nueva generación",
    cta: "Inscribirse",
    color: "from-cyan-800 to-blue-900"
  },
  {
    id: 3,
    image: "https://picsum.photos/1920/600?random=3",
    title: "Diplomados Corporativos",
    subtitle: "Capacitación Sence y OTEC certificada",
    cta: "Para Empresas",
    color: "from-slate-900 to-purple-900"
  }
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Master en Prompt Engineering Avanzado',
    instructor: 'Dr. Alejandro Soto',
    rating: 4.9,
    students: 1250,
    originalPrice: 89990,
    price: 15990,
    image: 'https://picsum.photos/400/300?random=10',
    category: 'Inteligencia Artificial',
    isBestseller: true
  },
  {
    id: '2',
    title: 'Python para Data Science y Machine Learning',
    instructor: 'María José Ruiz',
    rating: 4.8,
    students: 3400,
    originalPrice: 75000,
    price: 12990,
    image: 'https://picsum.photos/400/300?random=11',
    category: 'Programación',
    isBestseller: true
  },
  {
    id: '3',
    title: 'Generación de Imágenes con Midjourney & Dall-E',
    instructor: 'Carlos Pinto',
    rating: 4.7,
    students: 850,
    originalPrice: 45000,
    price: 9990,
    image: 'https://picsum.photos/400/300?random=12',
    category: 'Diseño',
    isNew: true
  },
  {
    id: '4',
    title: 'Automatización de Procesos con IA (RPA)',
    instructor: 'Ana Torres',
    rating: 4.9,
    students: 500,
    originalPrice: 120000,
    price: 25000,
    image: 'https://picsum.photos/400/300?random=13',
    category: 'Negocios',
    isNew: true
  },
  {
    id: '5',
    title: 'Chatbots y Asistentes Virtuales con LLMs',
    instructor: 'Felipe Dev',
    rating: 4.6,
    students: 1100,
    originalPrice: 60000,
    price: 18000,
    image: 'https://picsum.photos/400/300?random=14',
    category: 'Desarrollo',
  },
  {
    id: '6',
    title: 'Ética y Regulación en Inteligencia Artificial',
    instructor: 'Claudia Abogada',
    rating: 5.0,
    students: 300,
    originalPrice: 90000,
    price: 22000,
    image: 'https://picsum.photos/400/300?random=15',
    category: 'Legal',
  }
];

export const CATEGORIES = [
  "Inteligencia Artificial",
  "Programación",
  "Data Science",
  "Marketing Digital",
  "Ciberseguridad",
  "Diseño UX/UI",
  "Gestión Ágil"
];