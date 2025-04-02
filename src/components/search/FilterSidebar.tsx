import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FilterOptions, EducationLevel, Category } from '../../types';
import { indianStates, fieldsOfStudy } from '../../data/states';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  applyFilters: () => void;
  resetFilters: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  applyFilters,
  resetFilters,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const { t } = useLanguage();

  const handleEducationLevelChange = (level: EducationLevel) => {
    if (filters.educationLevel.includes(level)) {
      setFilters({
        ...filters,
        educationLevel: filters.educationLevel.filter((l) => l !== level),
      });
    } else {
      setFilters({
        ...filters,
        educationLevel: [...filters.educationLevel, level],
      });
    }
  };

  const handleCategoryChange = (category: Category) => {
    if (filters.category.includes(category)) {
      setFilters({
        ...filters,
        category: filters.category.filter((c) => c !== category),
      });
    } else {
      setFilters({
        ...filters,
        category: [...filters.category, category],
      });
    }
  };

  const handleStateChange = (state: string) => {
    if (filters.state.includes(state)) {
      setFilters({
        ...filters,
        state: filters.state.filter((s) => s !== state),
      });
    } else {
      setFilters({
        ...filters,
        state: [...filters.state, state],
      });
    }
  };

  const handleFieldOfStudyChange = (field: string) => {
    if (filters.fieldOfStudy.includes(field)) {
      setFilters({
        ...filters,
        fieldOfStudy: filters.fieldOfStudy.filter((f) => f !== field),
      });
    } else {
      setFilters({
        ...filters,
        fieldOfStudy: [...filters.fieldOfStudy, field],
      });
    }
  };

  return (
    <>
      {/* Mobile filter dialog */}
      <div
        className={`fixed inset-0 flex z-40 lg:hidden ${
          isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity ease-linear duration-300`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMobileOpen(false)} />
        <div
          className={`relative max-w-xs w-full h-full bg-white shadow-xl pb-12 flex flex-col transform ${
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          } transition ease-in-out duration-300`}
        >
          <div className="px-4 py-5 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">{t('filterBy')}</h2>
            <button
              type="button"
              className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 focus:outline-none"
              onClick={() => setIsMobileOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-4 border-t border-gray-200 overflow-y-auto h-full">
            <div className="px-4 py-6">
              {/* Mobile filters content - same as desktop but with different styling */}
              <FilterContent
                filters={filters}
                setFilters={setFilters}
                handleEducationLevelChange={handleEducationLevelChange}
                handleCategoryChange={handleCategoryChange}
                handleStateChange={handleStateChange}
                handleFieldOfStudyChange={handleFieldOfStudyChange}
                isMobile={true}
              />
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 space-y-3">
            <button
              onClick={() => {
                applyFilters();
                setIsMobileOpen(false);
              }}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              {t('apply')}
            </button>
            <button
              onClick={() => {
                resetFilters();
                setIsMobileOpen(false);
              }}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
            >
              {t('reset')}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop filter sidebar */}
      <div className="hidden lg:block w-64 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-gray-900 mb-4">{t('filterBy')}</h2>
        
        <FilterContent
          filters={filters}
          setFilters={setFilters}
          handleEducationLevelChange={handleEducationLevelChange}
          handleCategoryChange={handleCategoryChange}
          handleStateChange={handleStateChange}
          handleFieldOfStudyChange={handleFieldOfStudyChange}
          isMobile={false}
        />

        <div className="mt-6 space-y-3">
          <button
            onClick={applyFilters}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            {t('apply')}
          </button>
          <button
            onClick={resetFilters}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
          >
            {t('reset')}
          </button>
        </div>
      </div>
    </>
  );
};

interface FilterContentProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
  handleEducationLevelChange: (level: EducationLevel) => void;
  handleCategoryChange: (category: Category) => void;
  handleStateChange: (state: string) => void;
  handleFieldOfStudyChange: (field: string) => void;
  isMobile: boolean;
}

const FilterContent: React.FC<FilterContentProps> = ({
  filters,
  setFilters,
  handleEducationLevelChange,
  handleCategoryChange,
  handleStateChange,
  handleFieldOfStudyChange,
  isMobile,
}) => {
  const { t } = useLanguage();
  const [showAllStates, setShowAllStates] = useState(false);
  const [showAllFields, setShowAllFields] = useState(false);

  const displayedStates = showAllStates ? indianStates : indianStates.slice(0, 10);
  const displayedFields = showAllFields ? fieldsOfStudy : fieldsOfStudy.slice(0, 8);

  return (
    <div className="space-y-6">
      {/* Amount Range */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('amount')}</h3>
        <div className="space-y-2">
          <div>
            <label htmlFor="min-amount" className="block text-xs text-gray-500">
              Min (₹)
            </label>
            <input
              type="number"
              id="min-amount"
              value={filters.amount.min}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  amount: { ...filters.amount, min: parseInt(e.target.value) || 0 },
                })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
            />
          </div>
          <div>
            <label htmlFor="max-amount" className="block text-xs text-gray-500">
              Max (₹)
            </label>
            <input
              type="number"
              id="max-amount"
              value={filters.amount.max}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  amount: { ...filters.amount, max: parseInt(e.target.value) || 0 },
                })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Education Level */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('educationLevel')}</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="highSchool"
              type="checkbox"
              checked={filters.educationLevel.includes('highSchool')}
              onChange={() => handleEducationLevelChange('highSchool')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="highSchool" className="ml-2 text-sm text-gray-700">
              {t('highSchool')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="undergraduate"
              type="checkbox"
              checked={filters.educationLevel.includes('undergraduate')}
              onChange={() => handleEducationLevelChange('undergraduate')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="undergraduate" className="ml-2 text-sm text-gray-700">
              {t('undergraduate')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="postgraduate"
              type="checkbox"
              checked={filters.educationLevel.includes('postgraduate')}
              onChange={() => handleEducationLevelChange('postgraduate')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="postgraduate" className="ml-2 text-sm text-gray-700">
              {t('postgraduate')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="doctoral"
              type="checkbox"
              checked={filters.educationLevel.includes('doctoral')}
              onChange={() => handleEducationLevelChange('doctoral')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="doctoral" className="ml-2 text-sm text-gray-700">
              {t('doctoral')}
            </label>
          </div>
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('category')}</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="general"
              type="checkbox"
              checked={filters.category.includes('general')}
              onChange={() => handleCategoryChange('general')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="general" className="ml-2 text-sm text-gray-700">
              {t('general')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="sc"
              type="checkbox"
              checked={filters.category.includes('sc')}
              onChange={() => handleCategoryChange('sc')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="sc" className="ml-2 text-sm text-gray-700">
              {t('sc')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="st"
              type="checkbox"
              checked={filters.category.includes('st')}
              onChange={() => handleCategoryChange('st')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="st" className="ml-2 text-sm text-gray-700">
              {t('st')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="obc"
              type="checkbox"
              checked={filters.category.includes('obc')}
              onChange={() => handleCategoryChange('obc')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="obc" className="ml-2 text-sm text-gray-700">
              {t('obc')}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="minority"
              type="checkbox"
              checked={filters.category.includes('minority')}
              onChange={() => handleCategoryChange('minority')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="minority" className="ml-2 text-sm text-gray-700">
              {t('minority')}
            </label>
          </div>
        </div>
      </div>

      {/* State */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('state')}</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {displayedStates.map((state) => (
            <div key={state} className="flex items-center">
              <input
                id={`state-${state}`}
                type="checkbox"
                checked={filters.state.includes(state)}
                onChange={() => handleStateChange(state)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`state-${state}`} className="ml-2 text-sm text-gray-700">
                {state}
              </label>
            </div>
          ))}
        </div>
        {!showAllStates && (
          <button
            onClick={() => setShowAllStates(true)}
            className="mt-2 text-sm text-indigo-600 hover:text-indigo-800"
          >
            Show all states
          </button>
        )}
      </div>

      {/* Deadline */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('deadline')}</h3>
        <input
          type="date"
          value={filters.deadline || ''}
          onChange={(e) =>
            setFilters({
              ...filters,
              deadline: e.target.value || null,
            })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
        />
      </div>

      {/* Field of Study */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('fieldOfStudy')}</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {displayedFields.map((field) => (
            <div key={field} className="flex items-center">
              <input
                id={`field-${field}`}
                type="checkbox"
                checked={filters.fieldOfStudy.includes(field)}
                onChange={() => handleFieldOfStudyChange(field)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`field-${field}`} className="ml-2 text-sm text-gray-700">
                {field}
              </label>
            </div>
          ))}
        </div>
        {!showAllFields && (
          <button
            onClick={() => setShowAllFields(true)}
            className="mt-2 text-sm text-indigo-600 hover:text-indigo-800"
          >
            Show all fields
          </button>
        )}
      </div>

      {/* Income Criteria */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">{t('income')}</h3>
        <div>
          <label htmlFor="income" className="block text-xs text-gray-500">
            Annual Family Income (₹)
          </label>
          <input
            type="number"
            id="income"
            value={filters.income || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                income: e.target.value ? parseInt(e.target.value) : null,
              })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
            placeholder="Enter annual income"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;