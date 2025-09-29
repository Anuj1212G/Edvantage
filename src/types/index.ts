export interface Program {
  id: string;
  title: string;
  category: 'diploma' | 'instructor-led' | 'e-learning' | 'corporate';
  duration: string;
  format: string;
  overview: string;
  outcomes: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  benefits: string[];
  targetAudience: string[];
  price?: string;
  image: string;
  featured?: boolean;
  level?: string;
  language?: string;
  certificate?: string;
  prerequisites?: string;
}

export interface Webinar {
  id: string;
  title: string;
  speaker: {
    name: string;
    bio: string;
    image: string;
    credentials: string[];
  };
  date: string;
  time: string;
  description: string;
  registrationUrl: string;
  isUpcoming: boolean;
  duration: string;
  topics: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  credentials: string[];
  image: string;
  bio: string;
  type: 'trainer' | 'advisor' | 'leadership';
  specializations: string[];
}

export interface SuccessStory {
  id: string;
  name: string;
  position: string;
  company: string;
  program: string;
  quote: string;
  image: string;
  beforeRole?: string;
  salaryIncrease?: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  tags: string[];
  image: string;
  readTime: string;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  replies?: Comment[];
}

export interface Partnership {
  id: string;
  name: string;
  type: 'university' | 'corporate';
  logo: string;
  description: string;
  collaborationDetails: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'instructor';
  enrolledPrograms: string[];
  completedPrograms: string[];
}