import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: ['Access to Basic Courses', 'Skill Assessment Tools', 'Community Support'],
    buttonText: 'Sign Up Free',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$29',
    features: ['Personalized Learning Paths', 'Advanced Skill Assessments', 'One-on-One Mentorship', 'Monthly Progress Reports'],
    buttonText: 'Start Your Journey',
    highlighted: true
  },
  {
    name: 'Team',
    price: '$99',
    features: ['Team Performance Tracking', 'Collaborative Learning Activities', 'Customizable Learning Modules', 'Group Discounts Available'],
    buttonText: 'Get Started Together',
    highlighted: false
  }
];

export function Pricing() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white shadow-xl scale-105'
                  : 'bg-gray-50'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.price !== 'Free' && <span className="text-sm">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}