import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Bell, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

// Mock data for latest updates
const updates = [
  {
    id: '1',
    title: 'National Scholarship Portal Applications Open',
    date: '2025-06-15',
    description: 'Applications for various Central Government Scholarships are now open on the National Scholarship Portal.',
    link: '/search?provider=National%20Scholarship%20Portal',
  },
  {
    id: '2',
    title: 'INSPIRE Scholarship Deadline Extended',
    date: '2025-06-10',
    description: 'The Department of Science & Technology has extended the deadline for INSPIRE Scholarship applications.',
    link: '/scholarship/5',
  },
  {
    id: '3',
    title: 'New Scholarship for Engineering Students',
    date: '2025-06-05',
    description: 'A new scholarship program has been launched for undergraduate engineering students.',
    link: '/search?field=Engineering',
  },
  {
    id: '4',
    title: 'Scholarship Workshop for SC/ST Students',
    date: '2025-06-01',
    description: 'A virtual workshop to guide SC/ST students through the scholarship application process.',
    link: '/events',
  },
];

const LatestUpdates: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('latestUpdates')}</h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay informed about the latest scholarship opportunities and deadlines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {updates.map((update) => (
            <div
              key={update.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Bell className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">
                    {format(new Date(update.date), 'dd MMM yyyy')}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-gray-900">{update.title}</h3>
                  <p className="mt-2 text-gray-600">{update.description}</p>
                  <div className="mt-4">
                    <a
                      href={update.link}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/updates"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            View all updates
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;