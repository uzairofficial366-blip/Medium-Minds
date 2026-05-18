import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Careers from "./pages/Careers";
import Divisions from "./pages/Divisions";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function usePageBehaviors() {
  const location = useLocation();

  useEffect(() => {
    document.body.className =
      "bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-300 font-sans antialiased overflow-x-hidden";
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 0);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    const faqButtons = document.querySelectorAll(".faq-btn");
    const cleanups = [];
    faqButtons.forEach((button) => {
      const handler = () => {
        const item = button.closest(".faq-item");
        const content = item?.querySelector(".faq-content");
        const icon = item?.querySelector("i");
        const isOpen = content && !content.classList.contains("hidden");

        document.querySelectorAll(".faq-item").forEach((otherItem) => {
          otherItem.querySelector(".faq-content")?.classList.add("hidden");
          const otherIcon = otherItem.querySelector("i");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        });

        if (!isOpen && content) {
          content.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      };
      button.addEventListener("click", handler);
      cleanups.push(() => button.removeEventListener("click", handler));
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [location]);
}

export default function App() {
  usePageBehaviors();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Chatbot />
    </>
  );
}
