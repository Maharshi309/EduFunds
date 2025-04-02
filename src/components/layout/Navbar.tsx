import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { GraduationCap, Menu, X, Globe, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t, currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  const handleSignOut = async () => {
    await signOut();
    // The AuthContext will handle the redirect after sign out
    setIsProfileMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">EduFunds</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
              {t('home')}
            </Link>
            <Link to="/search" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
              {t('search')}
            </Link>
            <Link to="/faq" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
              {t('faq')}
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
              {t('contact')}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
              >
                <Globe className="h-4 w-4 mr-1" />
                {availableLanguages[currentLanguage as keyof typeof availableLanguages].name}
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {Object.entries(availableLanguages).map(([code, { name }]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code);
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentLanguage === code ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Authenticated User Menu or Auth Buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600"
                >
                  <User className="h-4 w-4 mr-1" />
                  {user.email?.split('@')[0]}
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/profile"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-500"
                >
                  {t('login')}
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-white text-indigo-700 hover:bg-gray-100"
                >
                  {t('register')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={toggleMenu}
            >
              {t('home')}
            </Link>
            <Link
              to="/search"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={toggleMenu}
            >
              {t('search')}
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={toggleMenu}
            >
              {t('faq')}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
              onClick={toggleMenu}
            >
              {t('contact')}
            </Link>

            {/* Language Selector */}
            <div className="px-3 py-2 rounded-md text-base font-medium">
              <div className="flex items-center mb-2">
                <Globe className="h-4 w-4 mr-2" />
                <span>{t('selectLanguage')}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(availableLanguages).map(([code, { name }]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLanguage(code);
                    }}
                    className={`text-left px-2 py-1 text-sm rounded ${
                      currentLanguage === code ? 'bg-indigo-600 text-white' : 'text-white hover:bg-indigo-600'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Auth Buttons or User Menu */}
            {user ? (
              <div className="space-y-2">
                <div className="flex items-center px-3 py-2">
                  <User className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">{user.email}</span>
                </div>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex space-x-2 px-3 py-2">
                <Link
                  to="/login"
                  className="flex-1 px-3 py-2 text-center rounded-md text-sm font-medium bg-indigo-600 hover:bg-indigo-500"
                  onClick={toggleMenu}
                >
                  {t('login')}
                </Link>
                <Link
                  to="/register"
                  className="flex-1 px-3 py-2 text-center rounded-md text-sm font-medium bg-white text-indigo-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {t('register')}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;