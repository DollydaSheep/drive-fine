// RefreshContext.tsx
import React, { createContext, useState, useContext } from "react";

type RefreshContextType = {
  refreshFlag: number;
  triggerRefresh: () => void;
  isRefreshing: boolean;
  setIsRefreshing: (value: boolean) => void;
};

type RefreshProviderProps = {
  children: React.ReactNode;
};

const RefreshContext = createContext<RefreshContextType | null>(null);

export function RefreshProvider({ children }: RefreshProviderProps) {
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const triggerRefresh = () => setRefreshFlag((prev) => prev + 1);

  return (
    <RefreshContext.Provider value={{ refreshFlag, triggerRefresh, isRefreshing, setIsRefreshing }}>
      {children}
    </RefreshContext.Provider>
  );
}

export function useAppRefresh() {
  const ctx = useContext(RefreshContext);
  if (!ctx) {
    throw new Error("useAppRefresh must be used inside <RefreshProvider>");
  }
  return ctx;
}
