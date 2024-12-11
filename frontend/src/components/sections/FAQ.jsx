import React from 'react';

const faqs = [
  {
    question: 'What is the purpose of the platform?',
    answer: 'Our platform is designed to help students and professionals develop their skills through personalized learning paths and expert guidance.'
  },
  {
    question: 'How does the skill assessment work?',
    answer: 'Our AI-driven assessment evaluates your current skills through interactive quizzes and practical tasks to understand your strengths and areas for improvement.'
  },
  {
    question: 'Can I track my progress on the platform?',
    answer: 'Yes, the platform provides periodic assessments and personalized feedback to help you monitor your progress and make informed adjustments to your learning path.'
  },
  {
    question: 'Are the learning paths customizable?',
    answer: 'Absolutely! Each learning path is tailored based on your specific career goals and interests, ensuring that you receive relevant and targeted content.'
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}