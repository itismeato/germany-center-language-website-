import { CheckCircle2, Award, Users, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    {
      icon: Award,
      title: "خبرة متخصصة",
      description: "أكثر من 7 سنوات في مجال التعليم والإرشاد للدراسة في ألمانيا"
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "معلمون مؤهلون وخبراء في الإجراءات القانونية والإدارية"
    },
    {
      icon: Globe,
      title: "شبكة عالمية",
      description: "شراكات مع جامعات وشركات ألمانية معتمدة"
    },
    {
      icon: CheckCircle2,
      title: "نتائج مثبتة",
      description: "نسبة قبول عالية ومتابعة مستمرة حتى الوصول"
    }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4" dir="rtl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-right">
            <div className="inline-block bg-blue-50 text-blue-900 px-4 py-2 rounded-full mb-4">
              <span>من نحن</span>
            </div>
            
            <h2 className="mb-6 text-blue-900 text-right">
              Germany Center Morocco
              <br />
              <span className="text-red-600">رفيقك الموثوق نحو ألمانيا</span>
            </h2>
            
            <p className="mb-6 text-gray-700 text-right">
              <strong className="text-blue-900">Germany Center Morocco</strong> هو مركز متخصص في تقديم خدمات متكاملة للطلاب والعاملين المغاربة الراغبين في السفر إلى ألمانيا للدراسة أو العمل.
            </p>
            
            <p className="mb-8 text-gray-700 text-right">
              نحن نوفر تكوينًا عالي الجودة في اللغة الألمانية من المستوى A1 إلى C1، مع مرافقة كاملة في تحضير الملفات، الترجمة، التسجيل في الجامعات، والحصول على عقود العمل. فريقنا يتابع كل مرحلة من مراحل رحلتك حتى تصل بنجاح إلى هدفك.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-right">
                    <h3 className="text-blue-900 mb-1 text-right">{feature.title}</h3>
                    <p className="text-sm text-gray-600 text-right">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-right border-2 border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="text-blue-900 mb-1">+500</div>
                <div className="text-xs text-blue-700">طالب وعامل</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 text-right border-2 border-red-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="text-red-900 mb-1">+50</div>
                <div className="text-xs text-red-700">جامعة شريكة</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-right border-2 border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="text-green-900 mb-1">98%</div>
                <div className="text-xs text-green-700">نسبة النجاح</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0aW5nJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIwOTU0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="مركز ألمانيا المغرب" 
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 right-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-blue-900 mb-1">مركز معتمد</div>
                    <div className="text-sm text-gray-600">رخصة رسمية</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
