import React, { createContext, useState } from "react";
// Create Context
export const PortfolioContext = createContext();

// Create Provider Component
export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dsa_stats, setdsa_stats] = useState(null);
  return (
    <PortfolioContext.Provider value={{ portfolioData,setPortfolioData,setLoading, loading, error,setError,dsa_stats,setdsa_stats }}>
      {children}
    </PortfolioContext.Provider>
  );
};

