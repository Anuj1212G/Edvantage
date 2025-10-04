// Program object example
const program = {
  id: '', // string
  title: '', // string
  category: 'diploma', // 'diploma' | 'instructor-led' | 'e-learning' | 'corporate'
  duration: '', // string
  format: '', // string
  overview: '', // string
  outcomes: [], // string[]
  curriculum: [ // array of modules
    {
      module: '', // string
      topics: [] // string[]
    }
  ],
  benefits: [], // string[]
  targetAudience: [], // string[]
  price: '', // string (optional)
  image: '', // string
  featured: false, // boolean (optional)
  level: '', // string (optional)
  language: '', // string (optional)
  certificate: '', // string (optional)
  prerequisites: '' // string (optional)
};

// Webinar object example
const webinar = {
  id: '', // string
  title: '', // string
  speaker: {
    name: '', // string
    bio: '', // string
    image: '', // string
    credentials: [] // string[]
  },
  date: '', // string
  time: '', // string
  description: '', // string
  registrationUrl: '', // string
  isUpcoming: true, // boolean
  duration: '', // string
  topics: [] // string[]
};

// TeamMember object example
const teamMember = {
  id: '', // string
  name: '', // string
  position: '', // string
  experience: '', // string
  credentials: [], // string[]
  image: '', // string
  bio: '', // string
  type: 'trainer', // 'trainer' | 'advisor' | 'leadership'
  specializations: [] // string[]
};

// SuccessStory object example
const successStory = {
  id: '', // string
  name: '', // string
  position: '', // string
  company: '', // string
  program: '', // string
  quote: '', // string
  image: '', // string
  beforeRole: '', // string (optional)
  salaryIncrease: '', // string (optional)
  location: '' // string
};

// BlogPost object example
const blogPost = {
  id: '', // string
  title: '', // string
  excerpt: '', // string
  content: '', // string
  author: '', // string
  publishedDate: '', // string
  tags: [], // string[]
  image: '', // string
  readTime: '', // string
  comments: [] // array of Comment objects
};

// Comment object example
const comment = {
  id: '', // string
  author: '', // string
  content: '', // string
  date: '', // string
  replies: [] // optional array of Comment objects
};

// Partnership object example
const partnership = {
  id: '', // string
  name: '', // string
  type: 'university', // 'university' | 'corporate'
  logo: '', // string
  description: '', // string
  collaborationDetails: [] // string[]
};

// User object example
const user = {
  id: '', // string
  name: '', // string
  email: '', // string
  role: 'student', // 'student' | 'admin' | 'instructor'
  enrolledPrograms: [], // string[]
  completedPrograms: [] // string[]
};
