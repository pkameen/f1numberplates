// src/components/home/WhyChooseUs.tsx

import React from 'react';

// Placeholder icons - In a real app, these would typically be imported from a separate icon library or component.
const IconQuality = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-amber-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9.048 18.91c.853.11 1.732.16 2.62.16 2.766 0 5.26-.97 7.15-2.529m-7.15-1.428V11.23c0-1.579-.117-3.14-.351-4.664M20.317 15.684A9.976 9.976 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.256.753 4.347 2.031 6.009M17.484 15.696L19.231 22h-5.642l-1.583-4.991m9.972-2.316a.81.81 0 10-.002-1.62.81.81 0 00.002 1.62z"
    />
  </svg>
);

const IconDesign = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-amber-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9.048 18.91c.853.11 1.732.16 2.62.16 2.766 0 5.26-.97 7.15-2.529m-7.15-1.428V11.23c0-1.579-.117-3.14-.351-4.664M20.317 15.684A9.976 9.976 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.256.753 4.347 2.031 6.009M17.484 15.696L19.231 22h-5.642l-1.583-4.991m9.972-2.316a.81.81 0 10-.002-1.62.81.81 0 00.002 1.62z"
    />
  </svg>
);

const IconDelivery = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-amber-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9.048 18.91c.853.11 1.732.16 2.62.16 2.766 0 5.26-.97 7.15-2.529m-7.15-1.428V11.23c0-1.579-.117-3.14-.351-4.664M20.317 15.684A9.976 9.976 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.256.753 4.347 2.031 6.009M17.484 15.696L19.231 22h-5.642l-1.583-4.991m9.972-2.316a.81.81 0 10-.002-1.62.81.81 0 00.002 1.62z"
    />
  </svg>
);

const IconLasting = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-amber-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9.048 18.91c.853.11 1.732.16 2.62.16 2.766 0 5.26-.97 7.15-2.529m-7.15-1.428V11.23c0-1.579-.117-3.14-.351-4.664M20.317 15.684A9.976 9.976 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.256.753 4.347 2.031 6.009M17.484 15.696L19.231 22h-5.642l-1.583-4.991m9.972-2.316a.81.81 0 10-.002-1.62.81.81 0 00.002 1.62z"
    />
  </svg>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div
    className="relative p-6 rounded-2xl border border-transparent
               bg-white/5 shadow-lg backdrop-blur-md overflow-hidden
               hover:border-amber-400/50 transition-all duration-300 ease-in-out
               group flex flex-col items-center text-center space-y-4
               before:absolute before:inset-0 before:rounded-2xl
               before:bg-gradient-to-br before:from-transparent before:via-transparent before:to-amber-400/20
               before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
  >
    <div className="z-10">{icon}</div>
    <h3 className="text-xl font-semibold text-white z-10">{title}</h3>
    <p className="text-gray-300 z-10">{description}</p>
    {/* Subtle border glow effect with a pseudo-element or ring on hover */}
    <span className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-amber-400/70 transition-all duration-300 pointer-events-none"></span>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <IconQuality />,
      title: 'Premium Quality',
      description: 'Our number plates are crafted with the highest standards, ensuring durability and a flawless finish.',
    },
    {
      icon: <IconDesign />,
      title: 'Custom Designs',
      description: 'Express your individuality with our bespoke design services, tailored to your unique style.',
    },
    {
      icon: <IconDelivery />,
      title: 'Fast Delivery',
      description: 'Experience prompt and reliable delivery, bringing your custom plates to your doorstep without delay.',
    },
    {
      icon: <IconLasting />,
      title: 'Long Lasting',
      description: 'Built to endure, our plates maintain their pristine look and readability for years to come.',
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black text-white min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-7xl mx-auto text-center z-10">
        {/* Premium Badge */}
        <span className="inline-block bg-amber-400/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
          Premium Features
        </span>

        {/* Centered Section Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-12 leading-tight">
          Why <span className="text-amber-400">Choose Us</span>
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      {/* Background gradient effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-950 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-800 via-black to-gray-700 animate-gradient-shift-alt opacity-50"></div>
      </div>


    </section>
  );
};

export default WhyChooseUs;
