import React from 'react';
import { Search, Filter, FileText, Bell } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How EduFunds Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Find and apply for scholarships in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Search</h3>
            <p className="mt-2 text-gray-600">
              Browse through thousands of scholarships from government and private institutions
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <Filter className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Filter</h3>
            <p className="mt-2 text-gray-600">
              Narrow down options based on eligibility criteria, amount, and deadlines
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Apply</h3>
            <p className="mt-2 text-gray-600">
              Complete applications with guidance on required documents and submission process
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <Bell className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Track</h3>
            <p className="mt-2 text-gray-600">
              Monitor application status and receive notifications about deadlines and updates
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/register"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;