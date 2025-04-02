import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar, FileText, Bell, BookOpen, Clock } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('applications');

  // Mock data for applications
  const applications = [
    {
      id: '1',
      scholarshipName: 'National Scholarship Portal (NSP)',
      provider: 'Ministry of Electronics & Information Technology',
      appliedDate: '2025-05-15',
      status: 'submitted',
      deadline: '2025-10-31',
    },
    {
      id: '2',
      scholarshipName: 'Prime Minister\'s Scholarship Scheme',
      provider: 'Ministry of Defence',
      appliedDate: '2025-05-10',
      status: 'under_review',
      deadline: '2025-09-15',
    },
    {
      id: '3',
      scholarshipName: 'INSPIRE Scholarship',
      provider: 'Department of Science & Technology',
      appliedDate: '2025-05-05',
      status: 'approved',
      deadline: '2025-12-31',
    },
  ];

  // Mock data for saved scholarships
  const savedScholarships = [
    {
      id: '4',
      name: 'Post-Matric Scholarship for SC Students',
      provider: 'Ministry of Social Justice and Empowerment',
      deadline: '2025-10-31',
      amount: {
        min: 5000,
        max: 45000,
        currency: 'INR',
      },
    },
    {
      id: '5',
      name: 'Pragati Scholarship for Girls',
      provider: 'All India Council for Technical Education (AICTE)',
      deadline: '2025-11-15',
      amount: {
        min: 50000,
        max: 50000,
        currency: 'INR',
      },
    },
  ];

  // Mock data for notifications
  const notifications = [
    {
      id: '1',
      title: 'Application Status Update',
      message: 'Your application for Prime Minister\'s Scholarship Scheme has been received and is under review.',
      date: '2025-05-12',
      read: false,
    },
    {
      id: '2',
      title: 'Deadline Reminder',
      message: 'The application deadline for INSPIRE Scholarship is approaching. Please complete your application by December 31, 2025.',
      date: '2025-05-10',
      read: true,
    },
    {
      id: '3',
      title: 'Document Verification',
      message: 'Your documents for the National Scholarship Portal (NSP) application have been verified successfully.',
      date: '2025-05-08',
      read: true,
    },
  ];

  // Mock data for recommended scholarships
  const recommendedScholarships = [
    {
      id: '6',
      name: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
      provider: 'Department of Science and Technology',
      deadline: '2025-08-25',
      match: '95%',
    },
    {
      id: '7',
      name: 'Central Sector Scheme of Scholarships',
      provider: 'Ministry of Education',
      deadline: '2025-11-30',
      match: '90%',
    },
    {
      id: '8',
      name: 'Tata Scholarship for Cornell University',
      provider: 'Tata Education and Development Trust',
      deadline: '2025-01-02',
      match: '85%',
    },
  ];

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'under_review':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'Submitted';
      case 'under_review':
        return 'Under Review';
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Track your scholarship applications, saved scholarships, and get personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('applications')}
                className={`${
                  activeTab === 'applications'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm flex items-center`}
              >
                <FileText className="h-5 w-5 mr-2" />
                My Applications
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`${
                  activeTab === 'saved'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm flex items-center`}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Saved Scholarships
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`${
                  activeTab === 'notifications'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm flex items-center`}
              >
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </button>
              <button
                onClick={() => setActiveTab('recommended')}
                className={`${
                  activeTab === 'recommended'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm flex items-center`}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Recommended
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'applications' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">My Applications</h2>
                {applications.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Scholarship
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Applied Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Deadline
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {applications.map((application) => (
                          <tr key={application.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{application.scholarshipName}</div>
                              <div className="text-sm text-gray-500">{application.provider}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(application.appliedDate)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(application.deadline)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(application.status)}`}>
                                {getStatusText(application.status)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <a href={`/application/${application.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                                View
                              </a>
                              {application.status === 'submitted' && (
                                <a href={`/application/${application.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                                  Edit
                                </a>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No applications</h3>
                    <p className="mt-1 text-sm text-gray-500">You haven't applied to any scholarships yet.</p>
                    <div className="mt-6">
                      <a
                        href="/search"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Browse Scholarships
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'saved' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Saved Scholarships</h2>
                {savedScholarships.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {savedScholarships.map((scholarship) => (
                      <div key={scholarship.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{scholarship.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">{scholarship.provider}</p>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1 text-indigo-600" />
                            Deadline: {formatDate(scholarship.deadline)}
                          </div>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <span className="font-medium text-gray-900">
                              {scholarship.amount.min === scholarship.amount.max
                                ? `${scholarship.amount.currency} ${scholarship.amount.max.toLocaleString()}`
                                : `${scholarship.amount.currency} ${scholarship.amount.min.toLocaleString()} - ${scholarship.amount.max.toLocaleString()}`}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                          <a
                            href={`/scholarship/${scholarship.id}`}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
                          >
                            View Details
                          </a>
                          <button
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No saved scholarships</h3>
                    <p className="mt-1 text-sm text-gray-500">You haven't saved any scholarships yet.</p>
                    <div className="mt-6">
                      <a
                        href="/search"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Browse Scholarships
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Notifications</h2>
                {notifications.length > 0 ? (
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className={`p-4 rounded-lg border ${notification.read ? 'bg-white border-gray-200' : 'bg-blue-50 border-blue-200'}`}>
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 h-6 w-6 rounded-full ${notification.read ? 'bg-gray-100' : 'bg-blue-100'} flex items-center justify-center`}>
                            <Bell className={`h-4 w-4 ${notification.read ? 'text-gray-500' : 'text-blue-500'}`} />
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <p className={`text-sm font-medium ${notification.read ? 'text-gray-900' : 'text-blue-800'}`}>
                                {notification.title}
                              </p>
                              <p className="text-xs text-gray-500">{formatDate(notification.date)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Bell className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
                    <p className="mt-1 text-sm text-gray-500">You don't have any notifications at the moment.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'recommended' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Scholarships</h2>
                {recommendedScholarships.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedScholarships.map((scholarship) => (
                      <div key={scholarship.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <div className="p-5">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-medium text-gray-900">{scholarship.name}</h3>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {scholarship.match} Match
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{scholarship.provider}</p>
                          <div className="flex items-center mt-3 text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1 text-indigo-600" />
                            Deadline: {formatDate(scholarship.deadline)}
                          </div>
                          <div className="mt-4">
                            <a
                              href={`/scholarship/${scholarship.id}`}
                              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No recommendations</h3>
                    <p className="mt-1 text-sm text-gray-500">Complete your profile to get personalized scholarship recommendations.</p>
                    <div className="mt-6">
                      <a
                        href="/profile"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Complete Profile
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;