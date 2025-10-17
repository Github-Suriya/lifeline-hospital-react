import React, { useEffect } from "react";
import sal from "sal.js";
import { useLocation } from "react-router-dom";

const ScrollAndSal = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Reinitialize SAL animations on route change
    sal({ threshold: 0.2, once: true });

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

export default ScrollAndSal;
