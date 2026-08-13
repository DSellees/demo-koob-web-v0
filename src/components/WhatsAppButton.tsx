import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20sobre%20KOOB."
      target="_blank"
      rel="noopener noreferrer"
      data-whatsapp="true"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white text-black rounded-full mix-blend-difference cursor-pointer"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </a>
  );
};

export default WhatsAppButton;
