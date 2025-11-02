import { Shield, Target, HeartHandshake, Clock, TrendingUp, Award } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "مصداقية وشفافية",
      description: "نعمل بشفافية كاملة، بدون وعود كاذبة. كل خطوة واضحة ومضمونة"
    },
    {
      icon: Target,
      title: "نسبة نجاح 98%",
      description: "أكثر من 500 طالب وعامل وصلوا إلى ألمانيا بنجاح بفضل خدماتنا"
    },
    {
      icon: HeartHandshake,
      title: "مرافقة شخصية",
      description: "فريقنا يرافقك خطوة بخطوة، من أول استشارة حتى وصولك إلى ألمانيا"
    },
    {
      icon: Clock,
      title: "سرعة في الإنجاز",
      description: "نلتزم بالمواعيد ونعمل على تسريع إجراءاتك بطريقة قانونية ومنظمة"
    },
    {
      icon: TrendingUp,
      title: "شراكات قوية",
      description: "علاقات مباشرة مع جامعات وشركات ألمانية معتمدة تضمن قبولك"
    },
    {
      icon: Award,
      title: "خبرة متخصصة",
      description: "فريق من الخبراء والمستشارين المتخصصين في النظام التعليمي والمهني الألماني"
    }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" dir="rtl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4 border border-white/20">
            <span>لماذا نحن</span>
          </div>
          <h2 className="mb-6 text-white text-center">
            لماذا Germany Center Morocco؟
          </h2>
          <p className="text-blue-100 text-center">
            نحن لسنا مجرد مركز تكوين، بل شريك حقيقي في رحلتك نحو مستقبل أفضل في ألمانيا
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 text-right"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-white mb-3 text-right">{reason.title}</h3>
              <p className="text-blue-100 text-sm text-right">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-red-400 mb-2">+500</div>
              <div className="text-sm text-blue-100">طالب وعامل ناجح</div>
            </div>
            <div>
              <div className="text-red-400 mb-2">7+</div>
              <div className="text-sm text-blue-100">سنوات من الخبرة</div>
            </div>
            <div>
              <div className="text-red-400 mb-2">98%</div>
              <div className="text-sm text-blue-100">نسبة القبول</div>
            </div>
            <div>
              <div className="text-red-400 mb-2">50+</div>
              <div className="text-sm text-blue-100">جامعة وشركة شريكة</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="text-green-400">✓</span>
              <span>مركز مرخص</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="text-green-400">✓</span>
              <span>شراكات رسمية</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="text-green-400">✓</span>
              <span>نتائج مثبتة</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="text-green-400">✓</span>
              <span>دعم مستمر</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
