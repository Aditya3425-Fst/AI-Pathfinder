import React from 'react';
import { Brain, Globe, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Empower Your Future',
    description: 'Our platform offers personalized assessments, tailored learning paths, and actionable feedback to connect your skills with career aspirations.'
  },
  {
    icon: Globe,
    title: 'Available Anywhere, Anytime',
    description: 'Access our platform from anywhere. Engage with interactive content that fits your schedule and learning style.'
  },
  {
    icon: Users,
    title: 'Join Our Community',
    description: 'Connect with a vibrant community of learners worldwide. Collaborate and share insights with peers who share your ambitions.'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}