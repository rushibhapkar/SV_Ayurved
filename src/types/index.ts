export interface Doctor {
  name: string;
  title: string;
  specialization: string;
  experience: string;
  qualifications: string[];
  image: string;
  about: string;
}

export interface Specialty {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  problem: string;
  solution: string;
  rating: number;
}

export interface VisitSchedule {
  city: string;
  schedule: string;
  address: string;
}

export interface AppointmentForm {
  name: string;
  phone: string;
  email: string;
  city: string;
  problem: string;
  preferredDate: string;
}


export interface GalleryMedia {
  id: number;
  type: 'photo' | 'video';
  url: string;
  title: string;
  description: string;
  thumbnail?: string;
}
