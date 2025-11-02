import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "تعليم اللغة الألمانية", href: "#services" },
      { name: "القبول الجامعي", href: "#services" },
      { name: "عقود العمل", href: "#services" },
      { name: "تجهيز التأشيرة", href: "#services" },
    ],
    quick: [
      { name: "من نحن", href: "#about" },
      { name: "خدماتنا", href: "#services" },
      { name: "قصص النجاح", href: "#testimonials" },
      { name: "تواصل معنا", href: "#contact" },
    ],
  };

  const socialMedia = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    {
      name: "Youtube",
      icon: Youtube,
      href: "#",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-blue-900 text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <h3 className="text-white mb-2">
                Germany Center Morocco
              </h3>
              <div className="flex items-center gap-2 text-red-400">
                <span>🇲🇦</span>
                <span>←</span>
                <span>🇩🇪</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4 text-right">
              مركزك الموثوق للدراسة والعمل في ألمانيا. نرافقك من تعلم اللغة إلى الوصول بنجاح.
            </p>
            <div className="flex gap-3 justify-start">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 text-right">خدماتنا</h4>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2 justify-start"
                  >
                    <span>{link.name}</span>
                    <span className="text-red-400">←</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 text-right">روابط سريعة</h4>
            <ul className="space-y-2">
              {links.quick.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2 justify-start"
                  >
                    <span>{link.name}</span>
                    <span className="text-red-400">←</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4 text-right">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+212600000000"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm justify-start"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span dir="ltr">+212 600 000 000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@germanycenter.ma"
                  className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm justify-start"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span dir="ltr">info@germanycenter.ma</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-blue-200 text-sm justify-start">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="text-right">الدار البيضاء، المغرب</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-right">
              © {currentYear} Germany Center Morocco. جميع
              الحقوق محفوظة.
            </p>
            <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-start">
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                سياسة الخصوصية
              </a>
              <span className="text-blue-400">|</span>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                الشروط والأحكام
              </a>
              <span className="text-blue-400">|</span>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                الأسئلة الشائعة
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-200">
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
            <span className="text-green-400">✓</span>
            <span>مرخص رسميًا</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
            <span className="text-green-400">✓</span>
            <span>شراكات معتمدة</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
            <span className="text-green-400">✓</span>
            <span>+500 طالب ناجح</span>
          </div>
        </div>
      </div>
    </footer>
  );
}