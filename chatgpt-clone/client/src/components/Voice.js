export const speakText = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

export const useSpeechToText = (onResult) => {
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech Recognition não suportado.");

    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onResult(text);
    };
    recognition.start();
  };

  return startListening;
};
