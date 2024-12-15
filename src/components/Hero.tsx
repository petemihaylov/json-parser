import React from 'react';
import { FileJson, Zap, Check, Code2 } from 'lucide-react';
import { Feature } from '../types';

/**
 * Feature list configuration
 */
const features: Feature[] = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: 'Syntax Validation',
    description: 'Instantly validate your JSON syntax'
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Auto-Format',
    description: 'Beautify and properly indent your JSON'
  },
  {
    icon: <Check className="w-5 h-5" />,
    title: 'Copy Support',
    description: 'Easy clipboard integration'
  }
];

/**
 * Hero component displays the main landing section with features
 * 
 * @component
 * @example
 * ```tsx
 * <Hero />
 * ```
 */
export function Hero() {
  return (
    <div className="text-center py-12 px-4 animate-fadeIn">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <FileJson className="w-12 h-12 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-800">JSON Parser</h1>
      </div>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Transform your raw JSON into beautifully formatted, validated code with just one click.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 bg-blue-100 rounded-full text-blue-500">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}