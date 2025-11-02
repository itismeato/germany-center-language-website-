import { BookOpen, GraduationCap, FileText, Briefcase, Plane, Languages } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: Languages,
      title: "تعليم اللغة الألمانية",
      description: "دورات شاملة من A1 إلى C1 مع أساتذة مؤهلين ومناهج معتمدة دوليًا",
      features: [
        "دورات مكثفة وعادية",
        "فصول صغيرة للتركيز الفردي",
        "امتحانات Goethe و TestDaF",
        "مواد تعليمية حديثة"
      ],
      color: "blue"
    },
    {
      icon: GraduationCap,
      title: "القبول الجامعي",
      description: "نساعدك في اختيار التخصص المناسب والحصول على قبول في أفضل الجامعات الألمانية",
      features: [
        "اختيار الجامعة والتخصص",
        "تحضير ملف القبول",
        "متابعة الطلبات",
        "الحصول على القبول"
      ],
      color: "red"
    },
    {
      icon: FileText,
      title: "تجهيز ملفات التأشيرة",
      description: "إعداد وترجمة جميع الوثائق المطلوبة للحصول على تأشيرة الدراسة أو العمل",
      features: [
        "ترجمة معتمدة",
        "توثيق المستندات",
        "مراجعة الملفات",
        "تحضير ملف متكامل"
      ],
      color: "green"
    },
    {
      icon: Briefcase,
      title: "عقود العمل في ألمانيا",
      description: "نوفر عقود عمل في مجالات مختلفة مع شركات ألمانية معتمدة",
      features: [
        "عقود في التمريض",
        "وظائف في المطاعم والفنادق",
        "قطاع البناء والصناعة",
        "وظائف تقنية ومهنية"
      ],
      color: "purple"
    },
    {
      icon: Plane,
      title: "إجراءات السفارة",
      description: "مرافقة كاملة في كل خطوات التعامل مع السفارة الألمانية",
      features: [
        "حجز موعد السفارة",
        "التحضير للمقابلة",
        "متابعة الطلب",
        "استلام التأشيرة"
      ],
      color: "orange"
    },
    {
      icon: BookOpen,
      title: "استشارات مجانية",
      description: "جلسات استشارية لتوجيهك نحو الخيار الأفضل لظروفك",
      features: [
        "تقييم ملفك الأكاديمي",
        "توجيه مهني",
        "خطة دراسية شخصية",
        "إجابة على جميع أسئلتك"
      ],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; border: string }> = {
      blue: { bg: "bg-blue-50", icon: "text-blue-600", border: "border-blue-200" },
      red: { bg: "bg-red-50", icon: "text-red-600", border: "border-red-200" },
      green: { bg: "bg-green-50", icon: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-50", icon: "text-purple-600", border: "border-purple-200" },
      orange: { bg: "bg-orange-50", icon: "text-orange-600", border: "border-orange-200" },
      teal: { bg: "bg-teal-50", icon: "text-teal-600", border: "border-teal-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4" dir="rtl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-50 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span>خدماتنا</span>
          </div>
          <h2 className="mb-6 text-blue-900 text-center">
            خدمات شاملة من البداية حتى النهاية
          </h2>
          <p className="text-gray-700 text-center">
            نقدم لك كل ما تحتاجه لتحقيق حلمك في الدراسة أو العمل في ألمانيا
            <br />
            من تعلم اللغة إلى الحصول على التأشيرة والسفر
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <Card 
                key={index}
                className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className={`h-7 w-7 ${colors.icon}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-blue-900 mb-3 text-right">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm text-right">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 text-right">
                        <span className={`mt-1 ${colors.icon}`}>✓</span>
                        <span className="text-right">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4 text-center">
            هل تحتاج إلى معلومات أكثر عن خدماتنا؟
          </p>
          <a 
            href="https://wa.me/212600000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <span>تواصل معنا الآن</span>
          </a>
        </div>
      </div>
    </section>
  );
}
