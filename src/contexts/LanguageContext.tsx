import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define available languages with RTL support
export const languages = {
  en: {
    name: 'English',
    code: 'en',
    direction: 'ltr',
  },
  hi: {
    name: 'हिंदी',
    code: 'hi',
    direction: 'ltr',
  },
  ta: {
    name: 'தமிழ்',
    code: 'ta',
    direction: 'ltr',
  },
  te: {
    name: 'తెలుగు',
    code: 'te',
    direction: 'ltr',
  },
  bn: {
    name: 'বাংলা',
    code: 'bn',
    direction: 'ltr',
  },
  mr: {
    name: 'मराठी',
    code: 'mr',
    direction: 'ltr',
  },
  gu: {
    name: 'ગુજરાતી',
    code: 'gu',
    direction: 'ltr',
  },
  kn: {
    name: 'ಕನ್ನಡ',
    code: 'kn',
    direction: 'ltr',
  },
  ml: {
    name: 'മലയാളം',
    code: 'ml',
    direction: 'ltr',
  },
} as const;

type LanguageCode = keyof typeof languages;

// Define the structure of translations
type TranslationType = {
  [K in LanguageCode]: {
    [key: string]: string | {
      [key: string]: string | {
        [key: string]: string;
      };
    };
  };
};

// Base English translations
const baseTranslations = {
  home: 'Home',
  search: 'Search',
  dashboard: 'Dashboard',
  login: 'Login',
  register: 'Register',
  faq: 'FAQ',
  contact: 'Contact',
  scholarships: 'Scholarships',
  featuredScholarships: 'Featured Scholarships',
  latestUpdates: 'Latest Updates',
  quickSearch: 'Quick Search',
  searchPlaceholder: 'Search scholarships...',
  viewAll: 'View All',
  applyNow: 'Apply Now',
  eligibility: 'Eligibility',
  documents: 'Required Documents',
  applicationProcess: 'Application Process',
  importantDates: 'Important Dates',
  downloadDetails: 'Download Details',
  filterBy: 'Filter By',
  amount: 'Amount',
  educationLevel: 'Education Level',
  category: 'Category',
  state: 'State',
  deadline: 'Deadline',
  fieldOfStudy: 'Field of Study',
  income: 'Income Criteria',
  apply: 'Apply Filters',
  reset: 'Reset',
  highSchool: 'High School',
  undergraduate: 'Undergraduate',
  postgraduate: 'Postgraduate',
  doctoral: 'Doctoral',
  general: 'General',
  sc: 'SC',
  st: 'ST',
  obc: 'OBC',
  minority: 'Minority',
  selectLanguage: 'Select Language',
  profile: 'Profile',
  signOut: 'Sign Out',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  forgotPassword: 'Forgot Password?',
  rememberMe: 'Remember me',
  submit: 'Submit',
  cancel: 'Cancel',
  save: 'Save',
  delete: 'Delete',
  edit: 'Edit',
  update: 'Update',
  loading: 'Loading...',
  error: 'Error',
  success: 'Success',
  warning: 'Warning',
  info: 'Information',
  close: 'Close',
  back: 'Back',
  next: 'Next',
  previous: 'Previous',
  first: 'First',
  last: 'Last',
  filter: 'Filter',
  sort: 'Sort',
  clear: 'Clear',
  noResults: 'No results found',
  loadingError: 'Error loading data',
  tryAgain: 'Try Again',
  confirmDelete: 'Are you sure you want to delete?',
  yes: 'Yes',
  no: 'No',
  ok: 'OK',
  saveChanges: 'Save Changes',
  discardChanges: 'Discard Changes',
  unsavedChanges: 'You have unsaved changes',
  footer: {
    about: 'About EduFunds',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact Us',
    copyright: '© 2025 EduFunds. All rights reserved.',
  },
  form: {
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    passwordMismatch: 'Passwords do not match',
    minLength: 'Minimum length is {length} characters',
    maxLength: 'Maximum length is {length} characters',
  },
  auth: {
    loginSuccess: 'Successfully logged in',
    loginError: 'Login failed',
    logoutSuccess: 'Successfully logged out',
    logoutError: 'Logout failed',
    registerSuccess: 'Registration successful',
    registerError: 'Registration failed',
    resetPasswordSuccess: 'Password reset successful',
    resetPasswordError: 'Password reset failed',
    emailVerificationSent: 'Email verification sent',
    emailVerificationError: 'Email verification failed',
  },
  profile: {
    updateSuccess: 'Profile updated successfully',
    updateError: 'Profile update failed',
    avatarUpdateSuccess: 'Avatar updated successfully',
    avatarUpdateError: 'Avatar update failed',
    deleteAccount: 'Delete Account',
    deleteAccountConfirm: 'Are you sure you want to delete your account?',
    deleteAccountSuccess: 'Account deleted successfully',
    deleteAccountError: 'Account deletion failed',
  },
};

// Hindi translations
const hindiTranslations = {
  ...baseTranslations,
  home: 'होम',
  search: 'खोज',
  dashboard: 'डैशबोर्ड',
  login: 'लॉगिन',
  register: 'रजिस्टर',
  faq: 'सामान्य प्रश्न',
  contact: 'संपर्क',
  scholarships: 'छात्रवृत्ति',
  featuredScholarships: 'विशेष छात्रवृत्ति',
  latestUpdates: 'नवीनतम अपडेट',
  quickSearch: 'त्वरित खोज',
  searchPlaceholder: 'छात्रवृत्ति खोजें...',
  viewAll: 'सभी देखें',
  applyNow: 'अभी आवेदन करें',
  eligibility: 'पात्रता',
  documents: 'आवश्यक दस्तावेज',
  applicationProcess: 'आवेदन प्रक्रिया',
  importantDates: 'महत्वपूर्ण तिथियां',
  downloadDetails: 'विवरण डाउनलोड करें',
  filterBy: 'फ़िल्टर करें',
  amount: 'राशि',
  educationLevel: 'शिक्षा स्तर',
  category: 'श्रेणी',
  state: 'राज्य',
  deadline: 'अंतिम तिथि',
  fieldOfStudy: 'अध्ययन क्षेत्र',
  income: 'आय मानदंड',
  apply: 'फ़िल्टर लागू करें',
  reset: 'रीसेट',
  highSchool: 'हाई स्कूल',
  undergraduate: 'स्नातक',
  postgraduate: 'स्नातकोत्तर',
  doctoral: 'डॉक्टरेट',
  general: 'सामान्य',
  sc: 'अनुसूचित जाति',
  st: 'अनुसूचित जनजाति',
  obc: 'अन्य पिछड़ा वर्ग',
  minority: 'अल्पसंख्यक',
  selectLanguage: 'भाषा चुनें',
  profile: 'प्रोफ़ाइल',
  signOut: 'साइन आउट',
  email: 'ईमेल',
  password: 'पासवर्ड',
  confirmPassword: 'पासवर्ड की पुष्टि करें',
  forgotPassword: 'पासवर्ड भूल गए?',
  rememberMe: 'मुझे याद रखें',
  submit: 'जमा करें',
  cancel: 'रद्द करें',
  save: 'सहेजें',
  delete: 'हटाएं',
  edit: 'संपादित करें',
  update: 'अपडेट करें',
  loading: 'लोड हो रहा है...',
  error: 'त्रुटि',
  success: 'सफल',
  warning: 'चेतावनी',
  info: 'जानकारी',
  close: 'बंद करें',
  back: 'वापस',
  next: 'अगला',
  previous: 'पिछला',
  first: 'पहला',
  last: 'अंतिम',
  filter: 'फ़िल्टर',
  sort: 'क्रमबद्ध करें',
  clear: 'साफ़ करें',
  noResults: 'कोई परिणाम नहीं मिला',
  loadingError: 'डेटा लोड करने में त्रुटि',
  tryAgain: 'पुनः प्रयास करें',
  confirmDelete: 'क्या आप वाकई हटाना चाहते हैं?',
  yes: 'हाँ',
  no: 'नहीं',
  ok: 'ठीक है',
  saveChanges: 'परिवर्तन सहेजें',
  discardChanges: 'परिवर्तन छोड़ें',
  unsavedChanges: 'आपके पास असहेजित परिवर्तन हैं',
  footer: {
    about: 'EduFunds के बारे में',
    privacy: 'गोपनीयता नीति',
    terms: 'सेवा की शर्तें',
    contact: 'संपर्क करें',
    copyright: '© 2025 EduFunds. सर्वाधिकार सुरक्षित।',
  },
  form: {
    required: 'यह फ़ील्ड आवश्यक है',
    invalidEmail: 'कृपया एक मान्य ईमेल पता दर्ज करें',
    passwordMismatch: 'पासवर्ड मेल नहीं खाते',
    minLength: 'न्यूनतम लंबाई {length} अक्षर है',
    maxLength: 'अधिकतम लंबाई {length} अक्षर है',
  },
  auth: {
    loginSuccess: 'सफलतापूर्वक लॉग इन हुआ',
    loginError: 'लॉग इन विफल',
    logoutSuccess: 'सफलतापूर्वक लॉग आउट हुआ',
    logoutError: 'लॉग आउट विफल',
    registerSuccess: 'पंजीकरण सफल',
    registerError: 'पंजीकरण विफल',
    resetPasswordSuccess: 'पासवर्ड रीसेट सफल',
    resetPasswordError: 'पासवर्ड रीसेट विफल',
    emailVerificationSent: 'ईमेल सत्यापन भेजा गया',
    emailVerificationError: 'ईमेल सत्यापन विफल',
  },
  profile: {
    updateSuccess: 'प्रोफ़ाइल सफलतापूर्वक अपडेट की गई',
    updateError: 'प्रोफ़ाइल अपडेट विफल',
    avatarUpdateSuccess: 'अवतार सफलतापूर्वक अपडेट किया गया',
    avatarUpdateError: 'अवतार अपडेट विफल',
    deleteAccount: 'खाता हटाएं',
    deleteAccountConfirm: 'क्या आप वाकई अपना खाता हटाना चाहते हैं?',
    deleteAccountSuccess: 'खाता सफलतापूर्वक हटा दिया गया',
    deleteAccountError: 'खाता हटाना विफल',
  },
};

// Base translations for all languages except Hindi
const defaultTranslations = {
  en: baseTranslations,
  ta: baseTranslations,
  te: baseTranslations,
  bn: baseTranslations,
  mr: baseTranslations,
  gu: baseTranslations,
  kn: baseTranslations,
  ml: baseTranslations,
};

// Translation data
const translations = {
  ...defaultTranslations,
  hi: hindiTranslations,
} as TranslationType;

type LanguageContextType = {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, section?: string, params?: Record<string, string | number>) => string;
  availableLanguages: typeof languages;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  t: () => '',
  availableLanguages: languages,
});

export const useLanguage = () => useContext(LanguageContext);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => {
    // Try to get language from localStorage, fallback to browser language or 'en'
    const savedLang = localStorage.getItem('language') as LanguageCode;
    if (savedLang && languages[savedLang]) {
      return savedLang;
    }
    const browserLang = navigator.language.split('-')[0] as LanguageCode;
    return languages[browserLang] ? browserLang : 'en';
  });

  useEffect(() => {
    // Update document language and direction when language changes
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = languages[currentLanguage].direction;
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (lang: LanguageCode) => {
    if (languages[lang]) {
      setCurrentLanguage(lang);
    }
  };

  const t = (key: string, section?: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let translation: any = translations[currentLanguage];
    
    if (section) {
      translation = translation[section];
      if (!translation) return key;
    }
    
    for (const k of keys) {
      if (!translation[k]) return key;
      translation = translation[k];
    }
    
    // Replace parameters in the translation string
    if (params) {
      return Object.entries(params).reduce(
        (str, [key, value]) => str.replace(`{${key}}`, String(value)),
        translation
      );
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      setLanguage, 
      t, 
      availableLanguages: languages 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};