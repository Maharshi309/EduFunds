import React from 'react';
import { Award, Users, School, BookOpen } from 'lucide-react';

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-12 bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Empowering Education Across India</h2>
          <p className="mt-4 text-lg text-indigo-200">
            Connecting students with scholarship opportunities nationwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-800 mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold">5,000+</h3>
            <p className="mt-2 text-indigo-200">Scholarships Available</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-800 mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold">1M+</h3>
            <p className="mt-2 text-indigo-200">Students Helped</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-800 mb-4">
              <School className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold">₹500Cr+</h3>
            <p className="mt-2 text-indigo-200">Scholarship Funding</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-800 mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2 text-indigo-200">Educational Institutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;