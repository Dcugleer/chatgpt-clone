import { useEffect, useState } from "react";

export const useChatHistory = () => {
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem("chat-history");
    return stored ? JSON.parse(stored) : [];
  });

  const saveChat = (chat) => {
    const updated = [...history, { id: Date.now(), chat }];
    setHistory(updated);
    localStorage.setItem("chat-history", JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("chat-history");
  };

  return { history, saveChat, clearHistory };
};
