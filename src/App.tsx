import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import CasesPage from "./components/pages/CasesPage";
import BlogPage from "./components/pages/BlogPage";
import ContactsPage from "./components/pages/ContactsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("/");
  const [language, setLanguage] = useState("ru");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return (
          <HomePage
            onNavigate={setCurrentPage}
            language={language}
          />
        );
      case "/services":
        return <ServicesPage language={language} />;
      case "/cases":
        return <CasesPage language={language} />;
      case "/blog":
        return <BlogPage language={language} />;
      case "/contacts":
        return <ContactsPage language={language} />;
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            language={language}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main className="pt-20">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} language={language} />
    </div>
  );
}