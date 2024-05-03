import React, {useState, createContext, Dispatch, SetStateAction} from 'react';

type GlobalContextType = {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  focusIndex: number;
  setFocusIndex: Dispatch<SetStateAction<number>>;
};

const Context: GlobalContextType = {
  user: {},
  setUser: () => {
    throw new Error();
  },
  focusIndex: 0,
  setFocusIndex: () => {
    throw new Error();
  },
};

export const GlobalContext = createContext(Context);

export function ContextProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState({});
  const [focusIndex, setFocusIndex] = useState(-2);

  const contextValue = {
    user,
    setUser,
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
