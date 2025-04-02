import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import FilterSidebar from '../components/search/FilterSidebar';
import ScholarshipCard from '../components/search/ScholarshipCard';
import { FilterOptions, Scholarship } from '../types';
import { filterScholarships, searchScholarships, getAllScholarships } from '../data/scholarships';
import { Filter, Search } from 'lucide-react';

const SearchPage: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';

  const [filters, setFilters] = useState<FilterOptions>({
    amount: { min: 0, max: 1000000 },
    educationLevel: [],
    category: [],
    state: [],
    deadline: null,
    fieldOfStudy: [],
    income: null,
  });

  const [filteredScholarships, setFilteredScholarships] = useState<Scholarship[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    let results: Scholarship[];
    
    if (searchTerm) {
      results = searchScholarships(searchTerm);
    } else {
      results = getAllScholarships();
    }
    
    setFilteredScholarships(results);
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      const results = searchScholarships(searchTerm);
      setFilteredScholarships(results);
    } else {
      setFilteredScholarships(getAllScholarships());
    }
  };

  const applyFilters = () => {
    let results: Scholarship[];
    
    if (searchTerm) {
      results = searchScholarships(searchTerm);
    } else {
      results = getAllScholarships();
    }
    
    const filtered = filterScholarships({
      ...filters,
    });
    
    setFilteredScholarships(filtered);
  };

  const resetFilters = () => {
    setFilters({
      amount: { min: 0, max: 1000000 },
      educationLevel: [],
      category: [],
      state: [],
      deadline: null,
      fieldOfStudy: [],
      income: null,
    });
    
    if (searchTerm) {
      setFilteredScholarships(searchScholarships(searchTerm));
    } else {
      setFilteredScholarships(getAllScholarships());
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('scholarships')}</h1>
          <p className="text-gray-600">
            Find scholarships that match your profile and eligibility criteria
          </p>
        </div>

        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex w-full max-w-3xl">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {t('search')}
            </button>
          </form>
        </div>

        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <button
            type="button"
            className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <Filter className="h-5 w-5 mr-2" />
            {t('filterBy')}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            applyFilters={applyFilters}
            resetFilters={resetFilters}
            isMobileOpen={isMobileFilterOpen}
            setIsMobileOpen={setIsMobileFilterOpen}
          />

          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                {filteredScholarships.length} {filteredScholarships.length === 1 ? 'scholarship' : 'scholarships'} found
              </p>
            </div>

            {filteredScholarships.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredScholarships.map((scholarship) => (
                  <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No scholarships found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or filters to find more scholarships.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;