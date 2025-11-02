import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "الرئيسية", href: "#" },
    { name: "من نحن", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "قصص النجاح", href: "#testimonials" },
    { name: "خطوات السفر", href: "#steps" },
    { name: "تواصل معنا", href: "#contact" }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/212600000000', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-white/10 backdrop-blur-md py-4"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`transition-colors ${isScrolled ? "text-blue-900" : "text-white"}`}>
              <span className="text-red-500">🇩🇪</span>
              <span className="mx-2">Germany Center</span>
              <span className="text-red-500">🇲🇦</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`transition-colors hover:text-red-500 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={handleWhatsAppClick}
              className={`gap-2 ${
                isScrolled
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-white text-green-600 hover:bg-white/90"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              <span>تواصل معنا</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${isScrolled ? "text-blue-900" : "text-white"}`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]" dir="rtl">
              <div className="flex flex-col gap-6 mt-8">
                {/* Logo */}
                <div className="text-blue-900 pb-4 border-b">
                  <span className="text-red-500">🇩🇪</span>
                  <span className="mx-2">Germany Center</span>
                  <span className="text-red-500">🇲🇦</span>
                </div>

                {/* Menu Items */}
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-900 transition-colors py-2"
                  >
                    {item.name}
                  </a>
                ))}

                {/* CTA Button */}
                <Button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsOpen(false);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white gap-2 w-full mt-4"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>تواصل معنا عبر واتساب</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
