import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/212600000000', '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleClick}
        className={`fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 group hover:scale-110 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="h-6 w-6 animate-pulse" />
        
        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          تواصل معنا
        </span>

        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
      </button>

      {/* Pulsing Notification Badge */}
      {isVisible && (
        <div className="fixed bottom-24 left-6 z-50 bg-white rounded-lg shadow-xl p-3 animate-bounce" dir="rtl">
          <p className="text-sm text-gray-800 whitespace-nowrap">
            كيف يمكننا مساعدتك؟ 👋
          </p>
        </div>
      )}
    </>
  );
}
