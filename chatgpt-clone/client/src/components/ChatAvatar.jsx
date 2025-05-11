import React from "react";

export const ChatAvatar = ({ expression }) => {
  const emoji = {
    happy: "😄",
    thinking: "🤔",
    surprised: "😲",
    neutral: "🙂"
  }[expression] || "🙂";

  return (
    <div className="text-4xl mb-2">
      <span role="img" aria-label="avatar">{emoji}</span>
    </div>
  );
};
