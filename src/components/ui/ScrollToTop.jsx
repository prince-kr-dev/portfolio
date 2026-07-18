import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 550);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          whileHover={{
            y: -3,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--border) bg-(--surface)/90 backdrop-blur-md text-(--text) shadow-lg hover:border-(--text)/50 transition-colors"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;