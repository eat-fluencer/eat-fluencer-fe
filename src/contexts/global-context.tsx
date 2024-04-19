import React, {useState, createContext, Dispatch, SetStateAction} from 'react';

type GlobalContextType = {
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  focusIndex: number;
  setFocusIndex: Dispatch<SetStateAction<number>>;
};

const Context: GlobalContextType = {
  userEmail: '',
  setUserEmail: () => {
    throw new Error();
  },
  focusIndex: 0,
  setFocusIndex: () => {
    throw new Error();
  },
};

export const GlobalContext = createContext(Context);

export function ContextProvider({children}: {children: React.ReactNode}) {
  const [userEmail, setUserEmail] = useState('');
  const [focusIndex, setFocusIndex] = useState(-2);

  const contextValue = {
    userEmail,
    setUserEmail,
    focusIndex,
    setFocusIndex,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
