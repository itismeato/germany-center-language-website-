import { CheckCircle2, ArrowLeft } from "lucide-react";

export function Steps() {
  const steps = [
    {
      number: "01",
      title: "استشارة مجانية",
      description: "نقيم وضعك الأكاديمي أو المهني ونحدد الخيارات المتاحة لك",
      details: ["تحليل ملفك الشخصي", "تحديد الأهداف", "وضع خطة عمل"]
    },
    {
      number: "02",
      title: "تعلم اللغة الألمانية",
      description: "دورات من A1 إلى C1 حسب متطلبات الجامعة أو العمل",
      details: ["فصول صغيرة", "أساتذة مؤهلون", "امتحانات معتمدة"]
    },
    {
      number: "03",
      title: "تحضير الملفات",
      description: "نجهز ملف القبول الجامعي أو عقد العمل مع جميع الوثائق",
      details: ["ترجمة معتمدة", "توثيق رسمي", "مراجعة شاملة"]
    },
    {
      number: "04",
      title: "الحصول على القبول",
      description: "نتابع طلبك حتى الحصول على القبول الجامعي أو عقد العمل",
      details: ["متابعة يومية", "تواصل مع الجهات", "تأكيد القبول"]
    },
    {
      number: "05",
      title: "تجهيز ملف التأشيرة",
      description: "نعد كل الوثائق المطلوبة للسفارة الألمانية",
      details: ["تحضير المستندات", "حجز الموعد", "التحضير للمقابلة"]
    },
    {
      number: "06",
      title: "السفر إلى ألمانيا",
      description: "نساعدك في الحصول على التأشيرة والسفر بنجاح",
      details: ["متابعة الطلب", "الحصول على التأشيرة", "التجهيز للسفر"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="steps">
      <div className="container mx-auto px-4" dir="rtl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-50 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span>خطوات النجاح</span>
          </div>
          <h2 className="mb-6 text-blue-900 text-center">
            رحلتك إلى ألمانيا في 6 خطوات بسيطة
          </h2>
          <p className="text-gray-700 text-center">
            نرافقك من أول يوم حتى تصل إلى ألمانيا وتبدأ دراستك أو عملك بنجاح
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-24 right-12 w-0.5 h-full bg-gradient-to-b from-blue-300 to-transparent md:block hidden" />
                )}

                {/* Step Card */}
                <div className="flex gap-6 items-start group">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white">{step.number}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 text-right">
                    <h3 className="text-blue-900 mb-3 text-right">{step.title}</h3>
                    <p className="text-gray-700 mb-4 text-right">{step.description}</p>
                    
                    {/* Details */}
                    <div className="flex flex-wrap gap-2 justify-start">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          <span>{detail}</span>
                          <ArrowLeft className="h-3 w-3" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-white mb-4 text-center">جاهز لبدء رحلتك؟</h3>
            <p className="text-blue-100 mb-6 text-center">
              تواصل معنا الآن للحصول على استشارة مجانية وابدأ رحلتك نحو ألمانيا اليوم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-colors shadow-lg"
              >
                <span>تواصل عبر واتساب</span>
              </a>
              <a 
                href="tel:+212600000000"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-colors border border-white/30"
              >
                <span>اتصل بنا مباشرة</span>
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-blue-900 mb-2">3-6 أشهر</div>
            <div className="text-sm text-gray-600">متوسط المدة للقبول</div>
          </div>
          <div className="text-center">
            <div className="text-blue-900 mb-2">98%</div>
            <div className="text-sm text-gray-600">نسبة القبول</div>
          </div>
          <div className="text-center">
            <div className="text-blue-900 mb-2">24/7</div>
            <div className="text-sm text-gray-600">دعم مستمر</div>
          </div>
          <div className="text-center">
            <div className="text-blue-900 mb-2">100%</div>
            <div className="text-sm text-gray-600">مرافقة شاملة</div>
          </div>
        </div>
      </div>
    </section>
  );
}
