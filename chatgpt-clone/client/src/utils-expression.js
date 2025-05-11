export const detectExpression = (text) => {
  if (text.includes("?")) return "thinking";
  if (text.includes("!")) return "surprised";
  if (text.length > 150) return "neutral";
  return "happy";
};
