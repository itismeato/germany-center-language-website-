import { Button } from "./ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/212600000000', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1745878136928-d1b3c10afc35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW55JTIwQnJhbmRlbmJ1cmclMjBHYXRlfGVufDF8fHx8MTc2MjExNzY5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Germany" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10" dir="rtl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-red-400">🇩🇪</span>
            <span className="mx-3">Germany Center Morocco</span>
            <span className="text-red-400">🇲🇦</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-white">
            <span className="block mb-2">بوابتك إلى مستقبل أفضل في ألمانيا</span>
            <span className="block text-red-400">نساعدك من التعلم حتى السفر</span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            مركز متخصص في تعليم اللغة الألمانية وتجهيز ملفات الدراسة والعمل في ألمانيا
            <br />
            <strong>من المستوى A1 إلى C1</strong> - نرافقك في كل خطوة حتى تحقق حلمك
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-red-400 mb-1">+500</div>
              <div className="text-sm text-blue-100">طالب ناجح</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-red-400 mb-1">98%</div>
              <div className="text-sm text-blue-100">نسبة القبول</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-red-400 mb-1">+7</div>
              <div className="text-sm text-blue-100">سنوات خبرة</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white gap-2 px-8 py-6 shadow-lg shadow-green-500/50"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-5 w-5" />
              <span>تواصل معنا عبر واتساب</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 gap-2 px-8 py-6"
              onClick={handleWhatsAppClick}
            >
              <Phone className="h-5 w-5" />
              <span>اتصل بنا الآن</span>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 text-sm text-blue-200">
            ✓ مرخص ومعتمد | ✓ فريق محترف | ✓ نتائج مضمونة
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
