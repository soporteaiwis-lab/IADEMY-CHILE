import React from 'react';
import { Course } from '../types';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  // Format CLP currency
  const formatCLP = (amount: number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full relative">
      {/* Badge Overlay */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {discount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
            -{discount}%
          </span>
        )}
        {course.isNew && (
          <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
            NUEVO
          </span>
        )}
      </div>

      <div className="relative overflow-hidden aspect-video">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="bg-white p-2 rounded-full hover:bg-cyan-50 text-slate-800 transition-colors" title="Vista Rápida">
            <Eye size={20} />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-red-50 text-slate-800 transition-colors" title="Añadir a Deseos">
            <Heart size={20} />
          </button>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xs text-cyan-600 font-semibold mb-2 uppercase tracking-wide">
          {course.category}
        </div>
        <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2 line-clamp-2 flex-1">
          {course.title}
        </h3>
        
        <div className="flex items-center gap-1 mb-3 text-amber-400 text-sm">
          <Star size={14} fill="currentColor" />
          <span className="font-bold text-slate-700 ml-1">{course.rating}</span>
          <span className="text-slate-400 text-xs">({course.students.toLocaleString()} alumnos)</span>
        </div>

        <div className="border-t border-slate-100 pt-3 mt-auto">
          <div className="flex items-end gap-2 mb-3">
            <span className="text-2xl font-bold text-slate-900">
              {formatCLP(course.price)}
            </span>
            {course.originalPrice > course.price && (
              <span className="text-sm text-slate-400 line-through mb-1">
                {formatCLP(course.originalPrice)}
              </span>
            )}
          </div>
          
          <button className="w-full bg-slate-100 hover:bg-cyan-600 hover:text-white text-slate-700 font-semibold py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-cyan-600 group-hover:text-white">
            <ShoppingCart size={18} />
            <span>Añadir al carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
};