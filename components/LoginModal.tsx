import React, { useState } from 'react';
import { X, Lock, User } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface LoginModalProps {
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const { login } = useStore();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, pass)) {
      onClose();
    } else {
      setError('Credenciales incorrectas (Prueba: admin / admin123)');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        <div className="bg-slate-900 p-6 flex justify-between items-center">
          <h2 className="text-white font-bold text-xl">Acceso Usuarios</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm font-medium">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-slate-700 text-sm font-bold mb-2">Usuario / Email</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="text" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="Ej: admin"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-slate-700 text-sm font-bold mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="password" 
                value={pass}
                onChange={e => setPass(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="••••••"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-cyan-500/30">
            Ingresar
          </button>
          
          <p className="text-center text-xs text-slate-400 mt-4">
            Nota: Para administrar usa <strong>admin</strong> / <strong>admin123</strong>
          </p>
        </form>
      </div>
    </div>
  );
};