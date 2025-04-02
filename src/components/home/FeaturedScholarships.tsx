import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Scholarship } from '../../types';
import { Calendar, GraduationCap, Users, IndianRupee } from 'lucide-react';
import { format } from 'date-fns';

interface FeaturedScholarshipsProps {
  scholarships: Scholarship[];
}

const FeaturedScholarships: React.FC<FeaturedScholarshipsProps> = ({ scholarships }) => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('featuredScholarships')}</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover top scholarship opportunities available for Indian students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship) => (
            <div
              key={scholarship.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{scholarship.name}</h3>
                  {scholarship.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{scholarship.provider}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{scholarship.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <IndianRupee className="h-4 w-4 mr-2 text-indigo-600" />
                    <span>
                      {scholarship.amount.min === scholarship.amount.max
                        ? `${scholarship.amount.currency} ${scholarship.amount.max.toLocaleString()}`
                        : `${scholarship.amount.currency} ${scholarship.amount.min.toLocaleString()} - ${scholarship.amount.max.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <GraduationCap className="h-4 w-4 mr-2 text-indigo-600" />
                    <span>
                      {scholarship.educationLevel.map((level) => t(level)).join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-indigo-600" />
                    <span>
                      {scholarship.category.map((cat) => t(cat)).join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-indigo-600" />
                    <span>
                      Deadline: {format(new Date(scholarship.deadline), 'dd MMM yyyy')}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    to={`/scholarship/${scholarship.id}`}
                    className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                  >
                    View Details
                  </Link>
                  <a
                    href={scholarship.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-300"
                  >
                    {t('applyNow')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/search"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedScholarships;