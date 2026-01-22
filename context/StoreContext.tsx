import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Course, User } from '../types';
import { INITIAL_COURSES, INITIAL_USERS } from '../constants';

interface StoreContextType {
  courses: Course[];
  users: User[];
  currentUser: User | null;
  isAdmin: boolean;
  addCourse: (course: Course) => void;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  registerUser: (name: string, email: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize with LocalStorage or Constants
  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('advance_courses');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('advance_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Persistence
  useEffect(() => {
    localStorage.setItem('advance_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('advance_users', JSON.stringify(users));
  }, [users]);

  const addCourse = (course: Course) => {
    setCourses(prev => [course, ...prev]);
  };

  const login = (email: string, pass: string) => {
    // Hardcoded Master User check
    if (email === 'admin' && pass === 'admin123') {
      const adminUser = users.find(u => u.role === 'admin') || INITIAL_USERS[1];
      setCurrentUser(adminUser);
      return true;
    }
    
    // Simple user check
    const user = users.find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const registerUser = (name: string, email: string) => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: 'student',
      joinedDate: new Date().toISOString().split('T')[0]
    };
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <StoreContext.Provider value={{
      courses,
      users,
      currentUser,
      isAdmin: currentUser?.role === 'admin',
      addCourse,
      login,
      logout,
      registerUser
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('useStore must be used within a StoreProvider');
  return context;
};