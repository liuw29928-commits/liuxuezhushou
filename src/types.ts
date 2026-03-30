export interface Apartment {
  id: string;
  name: string;
  city: string;
  location: string;
  distance: string;
  images: string[];
  rating: number;
  reviewCount: number;
  tags: string[];
  latestReview: string;
  roomTypes?: ('Studio' | 'En-suite' | 'Non-En-suite' | 'One Bed' | 'Two Bed')[];
  schoolDistances?: {
    [schoolName: string]: number; // distance in minutes
  };
  scores: {
    value: number;
    noise: number;
    network: number;
    hygiene: number;
    heating: number;
    management: number;
  };
}

export interface Review {
  id: string;
  apartmentId: string;
  user: string;
  date: string;
  rating: number;
  content: string;
  images?: string[];
  verified: boolean;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  likes: number;
  comments: number;
}

export type ViewType = 'home' | 'ai-chat' | 'detail';
