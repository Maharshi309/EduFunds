import React from 'react';
import { Link } from 'react-router-dom';
import { Scholarship } from '../../types';
import { Calendar, GraduationCap, Users, IndianRupee, BookOpen, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
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
        <p className="text-gray-700 mb-4 line-clamp-2">{scholarship.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <IndianRupee className="h-4 w-4 mr-2 text-indigo-600" />
            <span>
              {scholarship.amount.min === scholarship.amount.max
                ? `${scholarship.amount.currency} ${scholarship.amount.max.toLocaleString()}`
                : `${scholarship.amount.currency} ${scholarship.amount.min.toLocaleString()} - ${scholarship.amount.max.toLocaleString()}`}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w 4 w-4 mr-2 text-indigo-600" />
            <span>
              Deadline: {format(new Date(scholarship.deadline), 'dd MMM yyyy')}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2 text-indigo-600" />
            <span className="truncate">
              {scholarship.educationLevel.join(', ')}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-indigo-600" />
            <span className="truncate">
              {scholarship.category.join(', ')}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <BookOpen className="h-4 w-4 mr-2 text-indigo-600" />
            <span className="truncate">
              {scholarship.fieldOfStudy.includes('All') 
                ? 'All Fields' 
                : scholarship.fieldOfStudy.length > 2 
                  ? `${scholarship.fieldOfStudy.slice(0, 2).join(', ')}...` 
                  : scholarship.fieldOfStudy.join(', ')}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-indigo-600" />
            <span className="truncate">
              {scholarship.state.includes('All India') ? 'All India' : scholarship.state.join(', ')}
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
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;