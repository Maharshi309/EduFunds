import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getScholarshipById } from '../data/scholarships';
import { Scholarship } from '../types';
import { Calendar, GraduationCap, Users, IndianRupee, FileText, Download, ExternalLink, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date-fns';

const ScholarshipDetailsPage: React.FC = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const [scholarship, setScholarship] = useState<Scholarship | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('eligibility');

  useEffect(() => {
    if (id) {
      const scholarshipData = getScholarshipById(id);
      setScholarship(scholarshipData || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!scholarship) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Not Found</h2>
          <p className="text-gray-600 mb-6">The scholarship you are looking for does not exist or has been removed.</p>
          <Link
            to="/search"
            className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Browse Scholarships
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/search" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Search
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-700 text-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{scholarship.name}</h1>
                <p className="text-indigo-200 mb-4">{scholarship.provider}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {scholarship.featured && (
                    <span className="bg-yellow-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                  <span className="bg-indigo-800 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    {scholarship.educationLevel.map((level) => t(level)).join(', ')}
                  </span>
                  <span className="bg-indigo-800 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    {scholarship.category.map((cat) => t(cat)).join(', ')}
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                <div className="bg-white text-indigo-700 rounded-lg px-4 py-2 font-bold text-lg mb-2">
                  {scholarship.amount.min === scholarship.amount.max
                    ? `${scholarship.amount.currency} ${scholarship.amount.max.toLocaleString()}`
                    : `${scholarship.amount.currency} ${scholarship.amount.min.toLocaleString()} - ${scholarship.amount.max.toLocaleString()}`}
                </div>
                <div className="text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Deadline: {format(new Date(scholarship.deadline), 'dd MMM yyyy')}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700">{scholarship.description}</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('eligibility')}
                  className={`${
                    activeTab === 'eligibility'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {t('eligibility')}
                </button>
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`${
                    activeTab === 'documents'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {t('documents')}
                </button>
                <button
                  onClick={() => setActiveTab('process')}
                  className={`${
                    activeTab === 'process'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {t('applicationProcess')}
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'eligibility' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{t('eligibility')}</h3>
                  <ul className="space-y-2">
                    {scholarship.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {scholarship.incomeRequired && scholarship.incomeCriteria && (
                    <div className="mt-6">
                      <h4 className="text-md font-medium text-gray-900 mb-2">{t('income')}</h4>
                      <p className="flex items-center">
                        <IndianRupee className="h-5 w-5 text-indigo-600 mr-2" />
                        Family income should be less than {scholarship.incomeCriteria.currency}{' '}
                        {scholarship.incomeCriteria.max.toLocaleString()} per annum
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'documents' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{t('documents')}</h3>
                  <ul className="space-y-2">
                    {scholarship.documents.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FileText className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'process' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{t('applicationProcess')}</h3>
                  <ol className="space-y-4">
                    {scholarship.applicationProcess.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 mt-0.5">
                          {index + 1}
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={scholarship.applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md text-center flex items-center justify-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                {t('applyNow')}
              </a>
              <button
                className="flex-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-3 px-6 rounded-md text-center flex items-center justify-center"
              >
                <Download className="h-5 w-5 mr-2" />
                {t('downloadDetails')}
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Important Dates</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Application Start</p>
                <p className="font-medium">1 Jun 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Application Deadline</p>
                <p className="font-medium">{format(new Date(scholarship.deadline), 'dd MMM yyyy')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Result Declaration</p>
                <p className="font-medium">15 Dec 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">support@{scholarship.provider.toLowerCase().replace(/\s+/g, '')}.in</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+91 1800-XXX-XXXX</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Website</p>
                <a href={scholarship.applicationLink} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-800">
                  Visit Official Website
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Similar Scholarships</h3>
            <div className="space-y-4">
              <div>
                <a href="/scholarship/3" className="font-medium text-indigo-600 hover:text-indigo-800">
                  Central Sector Scheme of Scholarships
                </a>
                <p className="text-sm text-gray-500">Ministry of Education</p>
              </div>
              <div>
                <a href="/scholarship/4" className="font-medium text-indigo-600 hover:text-indigo-800">
                  Post-Matric Scholarship for SC Students
                </a>
                <p className="text-sm text-gray-500">Ministry of Social Justice</p>
              </div>
              <div>
                <a href="/scholarship/6" className="font-medium text-indigo-600 hover:text-indigo-800">
                  Pragati Scholarship for Girls
                </a>
                <p className="text-sm text-gray-500">AICTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailsPage;