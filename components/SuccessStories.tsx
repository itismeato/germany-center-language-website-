import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SuccessStories() {
  const stories = [
    {
      name: "أحمد البقالي",
      destination: "برلين، ألمانيا",
      program: "ماستر في الهندسة الميكانيكية",
      image: "https://images.unsplash.com/photo-1733403934281-2921f6103148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYyMTE5MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      testimonial: "بفضل Germany Center Morocco حصلت على قبول في Technical University of Berlin. الفريق ساعدني في كل شيء من تعلم الألمانية إلى تجهيز ملف التأشيرة. الآن أدرس في واحدة من أفضل الجامعات في أوروبا!",
      rating: 5
    },
    {
      name: "فاطمة الزهراء",
      destination: "ميونخ، ألمانيا",
      program: "عقد عمل في التمريض",
      image: "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW4lMjBsYW5ndWFnZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2MjExOTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      testimonial: "كنت أحلم بالعمل في ألمانيا لكن لم أكن أعرف من أين أبدأ. المركز وفر لي عقد عمل في مستشفى في ميونخ، وساعدني في تعلم الألمانية حتى المستوى B2. شكراً لكم على تحقيق حلمي!",
      rating: 5
    },
    {
      name: "يوسف المرابط",
      destination: "فرانكفورت، ألمانيا",
      program: "بكالوريوس في علوم الحاسوب",
      image: "https://images.unsplash.com/photo-1760348082205-8bda5fbdd7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwY2VsZWJyYXRpb24lMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2MjExOTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      testimonial: "الخدمة المحترفة والمتابعة المستمرة هي ما يميز هذا المركز. في أقل من 6 أشهر كنت جاهزاً للسفر مع تأشيرتي وقبولي الجامعي. أنصح أي شخص يفكر في الدراسة في ألمانيا بالتواصل معهم.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4" dir="rtl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-50 text-green-900 px-4 py-2 rounded-full mb-4">
            <span>قصص النجاح</span>
          </div>
          <h2 className="mb-6 text-blue-900 text-center">
            طلابنا في ألمانيا يتحدثون
          </h2>
          <p className="text-gray-700 text-center">
            انضم إلى المئات من الطلاب والعاملين الذين حققوا أحلامهم في ألمانيا بمساعدتنا
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Quote className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-blue-900 mb-1 text-right">{story.name}</h3>
                    <p className="text-sm text-gray-600 text-right">{story.destination}</p>
                    <p className="text-xs text-green-600 mt-1 text-right">{story.program}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed text-right">
                  "{story.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-blue-900 mb-4 text-center">شاهد قصص نجاح أخرى</h3>
            <p className="text-gray-700 mb-6 text-center">
              استمع إلى تجارب طلابنا مباشرة وكيف غيّر Germany Center Morocco مسار حياتهم
            </p>
            <a 
              href="https://wa.me/212600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              <span>احجز استشارتك المجانية</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="text-blue-900 mb-2">+500</div>
            <div className="text-sm text-gray-700">قصة نجاح</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-green-900 mb-2">98%</div>
            <div className="text-sm text-gray-700">رضا العملاء</div>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <div className="text-red-900 mb-2">+50</div>
            <div className="text-sm text-gray-700">مدينة ألمانية</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="text-purple-900 mb-2">100%</div>
            <div className="text-sm text-gray-700">دعم مستمر</div>
          </div>
        </div>
      </div>
    </section>
  );
}
