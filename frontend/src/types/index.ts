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
}

export interface Webinar {
  id: string;
  title: string;
  speaker: {
    name: string;
    bio: string;
    image: string;
  };
  date: string;
  time: string;
  description: string;
  registrationUrl: string;
  isUpcoming: boolean;
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
}

export interface SuccessStory {
  id: string;
  name: string;
  position: string;
  company: string;
  program: string;
  quote: string;
  image: string;
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
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  replies?: Comment[];
}