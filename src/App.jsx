import  { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { LanguageProvider, useLanguage } from './store/LanguageContext';


function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    
    if (storedLanguage && storedLanguage !== language) {
      changeLanguage(storedLanguage);
    }
  }, [changeLanguage, language]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
