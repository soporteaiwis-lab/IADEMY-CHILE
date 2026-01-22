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
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface CartItem extends Course {
  quantity: number;
}