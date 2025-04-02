import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ data
const faqs = [
  {
    question: 'What is EduFunds?',
    answer: 'EduFunds is a comprehensive scholarship platform that aggregates all Indian government and private scholarships in one place. We help students find, filter, and apply for scholarships that match their eligibility criteria.',
  },
  {
    question: 'Is EduF unds free to use?',
    answer: 'Yes, EduFunds is completely free for students. We do not charge any fees for searching, applying, or tracking scholarships on our platform.',
  },
  {
    question: 'How do I find scholarships that match my profile?',
    answer: 'You can use our advanced search and filter system to find scholarships that match your profile. Filter by education level, category (SC/ST/OBC/General), state, field of study, scholarship amount, and more to find the most relevant opportunities.',
  },
  {
    question: 'Do I need to create an account to search for scholarships?',
    answer: 'No, you can search and view scholarship details without creating an account. However, creating an account allows you to save scholarships, track applications, receive personalized recommendations, and get deadline notifications.',
  },
  {
    question: 'How often is the scholarship database updated?',
    answer: 'Our scholarship database is updated daily to ensure you have access to the most current information. We continuously monitor government portals, educational institutions, and private organizations for new scholarship announcements.',
  },
  {
    question: 'Can I apply for scholarships directly through EduFunds?',
    answer: 'For most scholarships, we provide direct links to the official application portals. For select scholarships, we offer an integrated application system that allows you to apply directly through our platform.',
  },
  {
    question: 'What documents do I need to apply for scholarships?',
    answer: 'Common documents include identity proof (Aadhaar card), income certificate, caste certificate, previous academic marksheets, bank account details, and passport-sized photographs. Specific requirements vary by scholarship, which we clearly list on each scholarship\'s detail page.',
  },
  {
    question: 'How can I track my scholarship applications?',
    answer: 'After creating an account and applying for scholarships, you can track the status of your applications in your personal dashboard. We provide updates on application status, upcoming deadlines, and required actions.',
  },
  {
    question: 'I\'m having trouble with my application. How can I get help?',
    answer: 'You can contact our support team through the Contact Us page. We offer assistance via email, phone, and live chat during business hours. We also provide detailed guides and tutorials in our Help Center.',
  },
  {
    question: 'Are international scholarships available on EduFunds?',
    answer: 'Currently, we focus on scholarships available for Indian students within India. However, we do include some international scholarships that are specifically available for Indian students to study abroad.',
  },
];

const FAQPage: React.FC = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about EduFunds and scholarships
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="mt-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-indigo-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">Still have questions?</h2>
          <p className="text-indigo-600 mb-6">
            Our support team is here to help you with any questions or issues you may have.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;