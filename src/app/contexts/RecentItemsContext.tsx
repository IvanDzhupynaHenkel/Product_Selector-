import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export interface RecentItem {
  id: string;
  name: string;
  code: string;
  imageUrl: string;
  timestamp: number;
  type: "product" | "category";
}

interface RecentItemsContextType {
  recentItems: RecentItem[];
  addRecentItem: (item: Omit<RecentItem, "timestamp">) => void;
  clearRecentItems: () => void;
}

const RecentItemsContext = createContext<RecentItemsContextType | undefined>(undefined);

const STORAGE_KEY = "henkel_recent_items";
const MAX_RECENT_ITEMS = 10;

export function RecentItemsProvider({ children }: { children: ReactNode }) {
  const [recentItems, setRecentItems] = useState<RecentItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentItems));
  }, [recentItems]);

  const addRecentItem = useCallback((item: Omit<RecentItem, "timestamp">) => {
    setRecentItems((prev) => {
      // Remove duplicate if exists
      const filtered = prev.filter((i) => i.id !== item.id);
      // Add new item at the beginning
      const updated = [{ ...item, timestamp: Date.now() }, ...filtered];
      // Keep only the most recent items
      return updated.slice(0, MAX_RECENT_ITEMS);
    });
  }, []);

  const clearRecentItems = useCallback(() => {
    setRecentItems([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <RecentItemsContext.Provider value={{ recentItems, addRecentItem, clearRecentItems }}>
      {children}
    </RecentItemsContext.Provider>
  );
}

export function useRecentItems() {
  const context = useContext(RecentItemsContext);
  if (!context) {
    throw new Error("useRecentItems must be used within RecentItemsProvider");
  }
  return context;
}