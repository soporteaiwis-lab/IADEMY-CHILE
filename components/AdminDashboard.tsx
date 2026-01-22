import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Plus, Users, BookOpen, Trash2, DollarSign, Image as ImageIcon, FileText, Tag, LayoutDashboard } from 'lucide-react';
import { CATEGORIES } from '../constants';

export const AdminDashboard: React.FC = () => {
  const { courses, users, addCourse } = useStore();
  const [activeTab, setActiveTab] = useState<'courses' | 'users' | 'create'>('create');

  // Form State
  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: '',
    price: '',
    category: CATEGORIES[0],
    image: '',
    description: ''
  });

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const priceNum = parseInt(newCourse.price) || 0;
    
    addCourse({
      id: Date.now().toString(),
      title: newCourse.title,
      instructor: newCourse.instructor,
      rating: 5.0,
      students: 0,
      originalPrice: Math.round(priceNum * 1.3), // Fake markup
      price: priceNum,
      image: newCourse.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400',
      category: newCourse.category,
      description: newCourse.description,
      isNew: true
    });
    
    alert('Curso Creado Exitosamente');
    setNewCourse({ title: '', instructor: '', price: '', category: CATEGORIES[0], image: '', description: '' });
    setActiveTab('courses');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-slate-900 p-3 rounded-lg text-white">
          <LayoutDashboard size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Panel Master</h1>
          <p className="text-slate-500">Gestión de Educación y Salud</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab('create')}
            className={`w-full text-left px-6 py-4 rounded-lg flex items-center gap-3 font-semibold transition-colors ${activeTab === 'create' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'}`}
          >
            <Plus size={20} /> Nuevo Curso
          </button>
          <button 
            onClick={() => setActiveTab('courses')}
            className={`w-full text-left px-6 py-4 rounded-lg flex items-center gap-3 font-semibold transition-colors ${activeTab === 'courses' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'}`}
          >
            <BookOpen size={20} /> Gestionar Cursos
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full text-left px-6 py-4 rounded-lg flex items-center gap-3 font-semibold transition-colors ${activeTab === 'users' ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'}`}
          >
            <Users size={20} /> Base de Datos Usuarios
          </button>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          
          {/* CREATE COURSE TAB */}
          {activeTab === 'create' && (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Plus className="text-cyan-600" /> Ingresar Nuevo Curso
              </h2>
              <form onSubmit={handleCreateCourse} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nombre del Curso</label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 text-slate-400" size={18} />
                      <input 
                        required
                        type="text" 
                        value={newCourse.title}
                        onChange={e => setNewCourse({...newCourse, title: e.target.value})}
                        className="w-full pl-10 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                        placeholder="Ej: Diplomado en Salud Mental"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Instructor / OTEC</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 text-slate-400" size={18} />
                      <input 
                        required
                        type="text" 
                        value={newCourse.instructor}
                        onChange={e => setNewCourse({...newCourse, instructor: e.target.value})}
                        className="w-full pl-10 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                        placeholder="Ej: Dr. Juan Pérez"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Precio (CLP)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 text-slate-400" size={18} />
                      <input 
                        required
                        type="number" 
                        value={newCourse.price}
                        onChange={e => setNewCourse({...newCourse, price: e.target.value})}
                        className="w-full pl-10 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                        placeholder="Ej: 50000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Categoría</label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-3 text-slate-400" size={18} />
                      <select 
                        className="w-full pl-10 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none bg-white"
                        value={newCourse.category}
                        onChange={e => setNewCourse({...newCourse, category: e.target.value})}
                      >
                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">URL Imagen (Opcional)</label>
                  <div className="relative">
                    <ImageIcon className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      value={newCourse.image}
                      onChange={e => setNewCourse({...newCourse, image: e.target.value})}
                      className="w-full pl-10 px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Descripción / Información del Curso</label>
                  <textarea 
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none h-32"
                    placeholder="Detalles del temario, objetivos y requisitos..."
                    value={newCourse.description}
                    onChange={e => setNewCourse({...newCourse, description: e.target.value})}
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                   <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2">
                     <Plus size={20} /> Publicar Curso
                   </button>
                </div>
              </form>
            </div>
          )}

          {/* LIST COURSES TAB */}
          {activeTab === 'courses' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">Cursos Activos</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                    <tr>
                      <th className="px-6 py-4">Curso</th>
                      <th className="px-6 py-4">Instructor</th>
                      <th className="px-6 py-4">Precio</th>
                      <th className="px-6 py-4">Estudiantes</th>
                      <th className="px-6 py-4 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {courses.map(course => (
                      <tr key={course.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={course.image} className="w-10 h-10 rounded object-cover" alt="" />
                            <span className="font-medium text-slate-800">{course.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{course.instructor}</td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-800">${course.price.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-slate-600">{course.students}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-red-500 hover:text-red-700 p-2"><Trash2 size={18} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* USERS DB TAB */}
          {activeTab === 'users' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
               <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-800">Base de Datos de Usuarios</h2>
                <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full">Total: {users.length}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                    <tr>
                      <th className="px-6 py-4">Nombre</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Rol</th>
                      <th className="px-6 py-4">Fecha Registro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {users.map(user => (
                      <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-800">
                           <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs font-bold">
                               {user.name.charAt(0)}
                             </div>
                             {user.name}
                           </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{user.email}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-bold px-2 py-1 rounded border ${user.role === 'admin' ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-green-50 text-green-700 border-green-200'}`}>
                            {user.role.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{user.joinedDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};