// src\data\hospitalData.ts
import { Doctor, GalleryMedia, Specialty, Testimonial, VisitSchedule } from '../types';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import dr from '../assets/dr.png';

export const doctorData: Doctor = {
  name: 'Dr. Swapnil Sampatrao Jagtap',
  title: 'B.A.M.S.',
  specialization: 'Ayurvedic Physician & Wellness Expert',
  experience: '16+ Years of Clinical Experience',
  qualifications: [
    'Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.)',
    'Practicing Ayurvedic Physician since 2009',
    'Certified in Panchakarma Therapy',
    'Advanced Training in Pulse Diagnosis',
    'Experienced in Holistic and Lifestyle Disease Management'
  ],
  image: dr,
  about: 'Dr. Swapnil Sampatrao Jagtap, B.A.M.S., is an experienced Ayurvedic practitioner practicing since 2009. He specializes in the treatment of weight management disorders, fissure, haemorrhoids, asthma, rhinorrhea, joint pain, and spondylitis using authentic Ayurvedic principles.'
};

export const specialties: Specialty[] = [
  {
    id: 1,
    title: 'Weight Management',
    description: 'Achieve sustainable weight loss through personalized Ayurvedic diet plans, herbal supplements, and lifestyle modifications tailored to your body constitution.',
    icon: 'Scale'
  },
  {
    id: 2,
    title: 'Fissure Treatment',
    description: 'Ayurvedic treatment focuses on healing tears, reducing pain, improving digestion, and preventing recurrence through herbal medicines and diet correction.',
    icon: 'Activity'
  },
  {
    id: 3,
    title: 'Haemorrhoids (Piles)',
    // FIXED: Corrected description from "Cardiovascular" to "Digestive"
    description: 'Natural relief from piles through specialized Ayurvedic therapies, dietary fiber management, and herbal treatments to improve bowel health.',
    icon: 'Heart' 
  },
  {
    id: 4,
    title: 'Asthma Care',
    description: 'Manage respiratory health and improve lung capacity using specialized Ayurvedic herbs and breathing therapies to reduce inflammation.',
    icon: 'Wind'
  },
  {
    id: 5,
    title: 'Rhinorrhea Relief',
    description: 'Address chronic nasal discharge and sinus congestion through natural decongestants and Nasya therapies for clear nasal passages.',
    icon: 'Droplets'
  },
  {
    id: 6,
    title: 'Joint & Pain Relief',
    description: 'Alleviate chronic pain, arthritis, and joint problems with Panchakarma therapy, massage, and herbal treatments.',
    icon: 'Bone'
  }
];

export const visitSchedule: VisitSchedule[] = [
  {
    city: 'Dhankawadi, Pune',
    schedule: 'Every 1st Saturday Evening 6.30 to 8.30',
    address: 'Manas Hospital, 33 Behind Printing Point, PICT College to Icchapurti Ganesh Mandir Road, Chandrabhaga Nagar, Behind Bharati Vidyapeeth, Dhankawadi, Pune, Maharashtra 411046.'
  },
  {
    city: 'Aundh, Pune',
    schedule: 'Every 1st Saturday 3.00 to 5.00',
    address: 'Ayuriva Polyclinic and Panchakarma Centre, Shree Sneh Apartment Flat 101, Sr No 13/1/5, Spicer College Road, Near Kohinoor Planet Aundh.'
  },
  {
    city: 'Nagpur',
    schedule: 'Every 2nd Friday of the month',
    address: 'Healing Roots Clinic, Dharampeth, Nagpur - 440010'
  }
];

export const galleryMedia: GalleryMedia[] = [
  { id: 1, type: 'photo', url: img1, title: 'Initial Assessment', description: 'Customized Prakriti analysis to identify root causes of weight gain.' },
  { id: 2, type: 'photo', url: img2, title: 'Metabolic Balance', description: 'Integrating Ayurvedic herbs to naturally boost Agni.' },
  { id: 3, type: 'photo', url: img3, title: 'Panchakarma Results', description: 'Post-detoxification phase showing significant reduction in body fat.' },
  { id: 4, type: 'photo', url: img4, title: 'Sustainable Progress', description: '3-month milestone achieving healthy BMI through lifestyle correction.' },
  { id: 5, type: 'photo', url: img5, title: 'Tone & Vitality', description: 'Improvement in muscle tone and energy levels.' },
  { id: 6, type: 'photo', url: img6, title: 'Full Transformation', description: 'Successful weight recovery and long-term maintenance achievement.' },
  {
    id: 7,
    type: 'video',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Patient Success Story',
    description: 'Watch how Ayurveda transformed lives',
    thumbnail: img1 // Use local image for faster loading
  },
  {
    id: 8,
    type: 'video',
    url: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    title: 'Treatment Process',
    description: 'Learn about our Ayurvedic treatment methods',
    thumbnail: img2
  },
  {
    id: 9,
    type: 'video',
    url: 'https://www.youtube.com/embed/9bZkp7q19f0',
    title: 'Wellness Tips',
    description: 'Daily Ayurvedic practices for better health',
    thumbnail: img3
  }
];