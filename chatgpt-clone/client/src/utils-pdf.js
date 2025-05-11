import jsPDF from "jspdf";

export const exportChatAsPDF = (chat) => {
  const doc = new jsPDF();
  let y = 10;

  chat.forEach((msg, i) => {
    const text = `${msg.role.toUpperCase()}: ${msg.content}`;
    doc.text(text, 10, y);
    y += 10;
    if (y > 280) {
      doc.addPage();
      y = 10;
    }
  });

  doc.save("chat-conversa.pdf");
};
