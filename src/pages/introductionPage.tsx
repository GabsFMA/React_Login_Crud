import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function IntroductionPage() {
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeaving(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (isLeaving) {
      navigate("/loginPage");
    }
  };

  return (
    <motion.div
      className="relative w-screen h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={isLeaving ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={handleAnimationComplete}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <img
          src="/logo.png"
          alt="logo"
          className="w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </motion.div>
  );
}

export default IntroductionPage;
