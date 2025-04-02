export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  description: string;
  amount: {
    min: number;
    max: number;
    currency: string;
  };
  educationLevel: EducationLevel[];
  category: Category[];
  state: string[];
  deadline: string;
  fieldOfStudy: string[];
  incomeRequired: boolean;
  incomeCriteria?: {
    max: number;
    currency: string;
  };
  eligibility: string[];
  documents: string[];
  applicationProcess: string[];
  applicationLink: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export type EducationLevel = 'highSchool' | 'undergraduate' | 'postgraduate' | 'doctoral';
export type Category = 'general' | 'sc' | 'st' | 'obc' | 'minority';

export interface User {
  id: string;
  name: string;
  email: string;
  educationLevel: EducationLevel;
  category: Category;
  state: string;
  fieldOfStudy: string;
  income: number;
  savedScholarships: string[];
  appliedScholarships: {
    scholarshipId: string;
    status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
    appliedAt: string;
    updatedAt: string;
  }[];
}

export interface FilterOptions {
  amount: {
    min: number;
    max: number;
  };
  educationLevel: EducationLevel[];
  category: Category[];
  state: string[];
  deadline: string | null;
  fieldOfStudy: string[];
  income: number | null;
}