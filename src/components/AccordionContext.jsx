import React, { createContext, useState } from "react";

const AccordionContext = createContext();

export const AccordionProvider = ({ children }) => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleAccordionClick = (cardId) => {
    setExpandedCardId(cardId === expandedCardId ? null : cardId);
  };

  return (
    <AccordionContext.Provider value={{ expandedCardId, handleAccordionClick }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionContext;
