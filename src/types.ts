export type Route = 'home' | 'services' | 'tires' | 'about' | 'reviews' | 'location' | 'contact';

export interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'confirmed' | 'pending' | 'completed';
  createdAt: string;
}

export interface Inquiry {
  fullName: string;
  email: string;
  vehicleInfo: string;
  serviceRequired: string;
  message: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  vehicle: string;
  text: string;
  service: string;
}

export interface TireItem {
  id: string;
  brand: string;
  model: string;
  type: 'Performance' | 'All-Season' | 'Winter' | 'Track/Competition';
  size: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  features: string[];
}
