import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import CasesPage from "./components/pages/CasesPage";
import BlogPage from "./components/pages/BlogPage";
import ContactsPage from "./components/pages/ContactsPage";
import CaseDetailPage from "./components/pages/CaseDetailPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("/");
  const [language, setLanguage] = useState("ru");
  const [selectedCaseId, setSelectedCaseId] = useState<number>(0);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleCaseClick = (caseId: number) => {
    setSelectedCaseId(caseId);
    setCurrentPage("/case-detail");
  };

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
        return <CasesPage language={language} onCaseClick={handleCaseClick} />;
      case "/case-detail":
        return (
          <CaseDetailPage
            caseId={selectedCaseId}
            onNavigate={setCurrentPage}
            language={language}
          />
        );
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

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.3,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={setCurrentPage} language={language} />
    </div>
  );
}