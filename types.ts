export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  originalPrice: number;
  price: number;
  image: string;
  category: string;
  description?: string; // New field for detailed info
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'student';
  joinedDate: string;
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface CartItem extends Course {
  quantity: number;
}