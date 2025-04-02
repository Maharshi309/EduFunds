import { Scholarship } from '../types';

// Mock data for scholarships
export const scholarships: Scholarship[] = [
  {
    id: '1',
    name: 'National Scholarship Portal (NSP)',
    provider: 'Ministry of Electronics & Information Technology, Government of India',
    description: 'The National Scholarship Portal is a one-stop solution for all scholarship needs of students. It covers Central and State Government Scholarships.',
    amount: {
      min: 5000,
      max: 100000,
      currency: 'INR',
    },
    educationLevel: ['undergraduate', 'postgraduate'],
    category: ['sc', 'st', 'obc'],
    state: ['All India'],
    deadline: '2025-10-31',
    fieldOfStudy: ['All'],
    incomeRequired: true,
    incomeCriteria: {
      max: 250000,
      currency: 'INR',
    },
    eligibility: [
      'Must be a citizen of India',
      'Family income should be less than 2.5 lakhs per annum',
      'Must be enrolled in a recognized institution',
      'Must belong to SC/ST/OBC category',
    ],
    documents: [
      'Income Certificate',
      'Caste Certificate',
      'Previous Academic Marksheets',
      'Bank Account Details',
      'Aadhaar Card',
      'Passport Size Photograph',
    ],
    applicationProcess: [
      'Register on the National Scholarship Portal',
      'Fill in the application form with personal and academic details',
      'Upload required documents',
      'Submit the application before the deadline',
    ],
    applicationLink: 'https://scholarships.gov.in',
    featured: true,
    createdAt: '2025-01-01',
    updatedAt: '2025-01-15',
  },
  {
    id: '2',
    name: 'Prime Minister\'s Scholarship Scheme',
    provider: 'Ministry of Defence, Government of India',
    description: 'Scholarship for the wards of Ex-Servicemen/Ex-Coast Guard personnel and their widows.',
    amount: {
      min: 24000,
      max: 36000,
      currency: 'INR',
    },
    educationLevel: ['undergraduate', 'postgraduate'],
    category: ['general'],
    state: ['All India'],
    deadline: '2025-09-15',
    fieldOfStudy: ['Engineering', 'Medical', 'Dental', 'MBA', 'MCA'],
    incomeRequired: false,
    eligibility: [
      'Must be a dependent of Ex-Servicemen/Ex-Coast Guard personnel',
      'Must be studying in professional degree courses',
    ],
    documents: [
      'Ex-Servicemen/Ex-Coast Guard Certificate',
      'Relationship Certificate',
      'Previous Academic Marksheets',
      'Bank Account Details',
      'Aadhaar Card',
      'Passport Size Photograph',
    ],
    applicationProcess: [
      'Register on the official website',
      'Fill in the application form with personal and academic details',
      'Upload required documents',
      'Submit the application before the deadline',
    ],
    applicationLink: 'https://www.ksb.gov.in/pmss.html',
    featured: true,
    createdAt: '2025-01-05',
    updatedAt: '2025-01-20',
  },
  {
    id: '3',
    name: 'Central Sector Scheme of Scholarships',
    provider: 'Ministry of Education, Government of India',
    description: 'Scholarships for meritorious students from low income families to pursue higher studies.',
    amount: {
      min: 10000,
      max: 20000,
      currency: 'INR',
    },
    educationLevel: ['undergraduate', 'postgraduate'],
    category: ['general', 'sc', 'st', 'obc'],
    state: ['All India'],
    deadline: '2025-11-30',
    fieldOfStudy: ['All'],
    incomeRequired: true,
    incomeCriteria: {
      max: 450000,
      currency: 'INR',
    },
    eligibility: [
      'Must have scored at least 80% in Class 12',
      'Family income should be less than 4.5 lakhs per annum',
      'Must be enrolled in a recognized institution',
    ],
    documents: [
      'Income Certificate',
      'Previous Academic Marksheets',
      'Bank Account Details',
      'Aadhaar Card',
      'Passport Size Photograph',
    ],
    applicationProcess: [
      'Register on the National Scholarship Portal',
      'Fill in the application form with personal and academic details',
      'Upload required documents',
      'Submit the application before the deadline',
    ],
    applicationLink: 'https://scholarships.gov.in',
    featured: false,
    createdAt: '2025-01-10',
    updatedAt: '2025-01-25',
  },
  {
    id: '4',
    name: 'Post-Matric Scholarship for SC Students',
    provider: 'Ministry of Social Justice and Empowerment, Government of India',
    description: 'Financial assistance to Scheduled Caste students studying at post-matriculation or post-secondary stage.',
    amount: {
      min: 5000,
      max: 45000,
      currency: 'INR',
    },
    educationLevel: ['highSchool', 'undergraduate', 'postgraduate'],
    category: ['sc'],
    state: ['All India'],
    deadline: '2025-10-31',
    fieldOfStudy: ['All'],
    incomeRequired: true,
    incomeCriteria: {
      max: 250000,
      currency: 'INR',
    },
    eligibility: [
      'Must belong to Scheduled Caste',
      'Family income should be less than 2.5 lakhs per annum',
      'Must be enrolled in a recognized institution',
    ],
    documents: [
      'Caste Certificate',
      'Income Certificate',
      'Previous Academic Marksheets',
      'Bank Account Details',
      'Aadhaar Card',
      'Passport Size Photograph',
    ],
    applicationProcess: [
      'Register on the National Scholarship Portal',
      'Fill in the application form with personal and academic details',
      'Upload required documents',
      'Submit the application before the deadline',
    ],
    applicationLink: 'https://scholarships.gov.in',
    featured: true,
    createdAt: '2025-01-15',
    updatedAt: '2025-01-30',
  },
  {
    id: '5',
    name: 'INSPIRE Scholarship',
    provider: 'Department of Science & Technology, Government of India',
    description: 'Scholarship for students to pursue Bachelor and Masters level education in natural and basic sciences.',
    amount: {
      min: 80000,
      max: 80000,
      currency: 'INR',
    },
    educationLevel: ['undergraduate'],
    category: ['general', 'sc', 'st', 'obc'],
    state: ['All India'],
    deadline: '2025-12-31',
    fieldOfStudy: ['Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
    incomeRequired: false,
    eligibility: [
      'Must be among the top 1% in Class 12 board examinations',
      'Must be pursuing courses in basic and natural sciences',
    ],
    documents: [
      'Class 12 Marksheet',
      'Rank Certificate',
      'Bank Account Details',
      'Aadhaar Card',
      'Passport Size Photograph',
    ],
    applicationProcess: [
      'Register on the INSPIRE website',
      'Fill in the application form with personal and academic details',
      'Upload required documents',
      'Submit the application before the deadline',
    ],
    applicationLink: 'https://online-inspire.gov.in',
    featured: true,
    createdAt: '2025-01-20',
    updatedAt: '2025-02-05',
  },
  {
    id: '6',
    name: 'Pragati Scholarship for Girls',
    provider: 'All India Council for Technical Education (AICTE)',
    description: 'Scholarship scheme to provide assistance for advancement of girls participating in technical education.',
    amount: {
      min: 50000,
      max: 50000,
      currency: 'INR',
    },
    educationLevel: ['undergraduate'],
    category: ['general', 'sc', 'st', 'obc'],
    state: ['All India'],
    deadline: '2025-11-15',
    fieldOfStudy: ['Engineering', 'Technology', 'Architecture', 'Pharmacy'],
    incomeRequired: true,
    incomeCriteria: {
      max: 800000,
      currency: 'INR',
    },
    eligibility: [
      'Only female candidates are eligible',
      'Must be admitted to first year of Degree or Diploma programme in AICTE approved institutions',
      'Family income should be less than 8 lakhs per annum',
    ],
    documents: [
      'Income Certificate',
      'Previous Academic Marksheets',
      'Bank Account Details',
      'Aadhaar Card',
      'Passport Size Photograph',
    ],
    applicationProcess: [
      'Register on the National Scholarship Portal',
      'Fill in the application form with personal and academic details',
      'Upload required documents',
      'Submit the application before the deadline',
    ],
    applicationLink: 'https://www.aicte-pragati-saksham-gov.in',
    featured: false,
    createdAt: '2025-01-25',
    updatedAt: '2025-02-10',
  },
  {
    id: '7',
    name: 'Tata Scholarship for Cornell University',
    provider: 'Tata Education and Development Trust',
    description: 'Scholarship for Indian students demonstrating financial need to pursue undergraduate studies at Cornell University.',
    amount: {
      min: 1500000,
      max: 3500000,
      currency: 'INR',
    },
    educationLevel: ['undergraduate'],
    category: ['general', 'sc', 'st', 'obc'],
    state: ['All India'],
    deadline: '2025-01-02',
    fieldOfStudy: ['All'],
    incomeRequired: true,
    incomeCriteria: {
      max: 1000000,
      currency: 'INR',
    },
    eligibility: [
      'Must be a citizen of India',
      'Must be admitted to Cornell University',
      'Must demonstrate financial need',
    ],
    documents: [
      'Admission Letter from Cornell University',
      'Income Certificate',
      'Previous Academic Marksheets',
      'Bank Account Details',
      'Passport',
      'Passport Size Photograph',
    ],
    applicationProcess: [
      'Apply for admission to Cornell University',
      'Apply for financial aid during the admission process',
      'If admitted, submit additional documents for Tata Scholarship consideration',
    ],
    applicationLink: 'https://www.cornell.edu',
    featured: false,
    createdAt: '2025-01-30',
    updatedAt: '2025-02-15',
  },
  {
    id: '8',
    name: 'Kishore Vaigyanik Protsahan Yojana (KVPY)',
    provider: 'Department of Science and Technology, Government of India',
    description: 'Fellowship program to encourage students to take up research careers in Science.',
    amount: {
      min: 48000,
      max: 84000,
      currency: 'INR',
    },
    educationLevel: ['highSchool', 'undergraduate'],
    category: ['general', 'sc', 'st', 'obc'],
    state: ['All India'],
    deadline: '2025-08-25',
    fieldOfStudy: ['Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
    incomeRequired: false,
    eligibility: [
      'Students enrolled in Class 11, 12, or first year of undergraduate program in Basic Sciences',
      'Must qualify the KVPY aptitude test and interview',
    ],
    documents: [
      'Previous Academic Marksheets',
      'Bank Account Details',
      'Aadhaar Card',
      'Passport Size Photograph',
    ],
    applicationProcess: [
      'Register on the KVPY website',
      'Fill in the application form with personal and academic details',
      'Pay the application fee',
      'Appear for the aptitude test and interview',
    ],
    applicationLink: 'https://kvpy.iisc.ac.in',
    featured: false,
    createdAt: '2025-02-05',
    updatedAt: '2025-02-20',
  },
];

// Function to get featured scholarships
export const getFeaturedScholarships = (): Scholarship[] => {
  return scholarships.filter(scholarship => scholarship.featured);
};

// Function to get all scholarships
export const getAllScholarships = (): Scholarship[] => {
  return scholarships;
};

// Function to get a scholarship by ID
export const getScholarshipById = (id: string): Scholarship | undefined => {
  return scholarships.find(scholarship => scholarship.id === id);
};

// Function to filter scholarships based on criteria
export const filterScholarships = (filters: any): Scholarship[] => {
  return scholarships.filter(scholarship => {
    // Filter by amount
    if (filters.amount && (
      scholarship.amount.max < filters.amount.min ||
      scholarship.amount.min > filters.amount.max
    )) {
      return false;
    }

    // Filter by education level
    if (filters.educationLevel && filters.educationLevel.length > 0 &&
      !filters.educationLevel.some((level: string) => scholarship.educationLevel.includes(level))) {
      return false;
    }

    // Filter by category
    if (filters.category && filters.category.length > 0 &&
      !filters.category.some((cat: string) => scholarship.category.includes(cat))) {
      return false;
    }

    // Filter by state
    if (filters.state && filters.state.length > 0 &&
      !filters.state.some((st: string) => scholarship.state.includes(st) || scholarship.state.includes('All India'))) {
      return false;
    }

    // Filter by deadline
    if (filters.deadline && new Date(scholarship.deadline) < new Date(filters.deadline)) {
      return false;
    }

    // Filter by field of study
    if (filters.fieldOfStudy && filters.fieldOfStudy.length > 0 &&
      !filters.fieldOfStudy.some((field: string) => 
        scholarship.fieldOfStudy.includes(field) || scholarship.fieldOfStudy.includes('All'))) {
      return false;
    }

    // Filter by income criteria
    if (filters.income && scholarship.incomeRequired) {
      if (!scholarship.incomeCriteria || scholarship.incomeCriteria.max < filters.income) {
        return false;
      }
    }

    return true;
  });
};

// Function to search scholarships by keyword
export const searchScholarships = (keyword: string): Scholarship[] => {
  const lowercaseKeyword = keyword.toLowerCase();
  return scholarships.filter(scholarship => 
    scholarship.name.toLowerCase().includes(lowercaseKeyword) ||
    scholarship.provider.toLowerCase().includes(lowercaseKeyword) ||
    scholarship.description.toLowerCase().includes(lowercaseKeyword)
  );
};