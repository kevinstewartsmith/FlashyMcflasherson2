import { createContext, useState, useEffect } from 'react';

const CollectionContext = createContext();

const ContextProvider = ({ children }) => {
    const [trigger, setTrigger] = useState(false);

    const toggleTrigger = () => {
        setTrigger(prevTrigger => !prevTrigger);
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScrollPosition = (position) => {
      setScrollPosition(position);
    };


  return (
    <CollectionContext.Provider value={{ trigger, toggleTrigger, scrollPosition, updateScrollPosition }}>
      {children}
    </CollectionContext.Provider>
  );
};

export { CollectionContext, ContextProvider };
