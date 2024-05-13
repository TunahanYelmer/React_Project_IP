// DataContext.tsx
"use client"
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import reducer, { initialState, State, Action } from "./reducer";

interface DataProviderProps {
  children: ReactNode;
}

interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const DataContext = createContext<ContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataLayerValue = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataLayerValue must be used within a DataProvider");
  }
  return context;
};

// Exporting the reducer is not needed here
