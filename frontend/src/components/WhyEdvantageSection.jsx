import React from 'react';
import { BookOpen, Award, TrendingUp, Users, Building, CheckCircle } from 'lucide-react';

const WhyEdvantageSection = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Industry-Aligned Curriculum',
      description:
        'Courses designed by industry experts with real-world applications and cutting-edge content that matches current industry needs.',
      features: ['Updated quarterly', 'Expert-reviewed', 'Practical focus', 'Case studies'],
    },
    {
      icon: Award,
      title: 'Global Certifications',
      description:
        'Internationally recognized certifications that add credibility to your professional profile and open doors worldwide.',
      features: ['Industry recognized', 'Global validity', 'Career boost', 'Skill validation'],
    },
    {
      icon: TrendingUp,
      title: 'Placement Support',
      description:
        'Our comprehensive placement support and industry connections ensure successful career transitions for our graduates.',
      features: ['Job assistance', 'Resume building', 'Interview prep', 'Network access'],
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description:
        'Learn from seasoned professionals with decades of international industry experience in oil & gas operations and management.',
      features: ['20+ years experience', 'Industry veterans', 'Practical insights', 'Mentorship'],
    },
    {
      icon: Building,
      title: 'Corporate Upskilling Solutions',
      description:
        'Customized training solutions for organizations looking to enhance their team capabilities and operational efficiency.',
      features: ['Custom programs', 'On-site training', 'Team building', 'ROI focused'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Edvantage Learning?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond traditional education to provide comprehensive career development solutions
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {highlights.slice(0, 3).map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{highlight.description}</p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-2">
                {highlight.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.slice(3).map((highlight, index) => (
            <div
              key={index + 3}
              className="flex space-x-6 bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-r from-teal-500 to-green-500 p-4 rounded-xl">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 mb-4">{highlight.description}</p>
                <div className="flex flex-wrap gap-2">
                  {highlight.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Your Success is Our Priority
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We don't just provide training – we partner with you for long-term career success in the dynamic oil & gas industry.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-300 mb-2">Before</div>
                <p className="text-blue-100">Skills Assessment & Gap Analysis</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-300 mb-2">During</div>
                <p className="text-blue-100">Personalized Learning & Support</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-300 mb-2">After</div>
                <p className="text-blue-100">Career Guidance & Alumni Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEdvantageSection;
