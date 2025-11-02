import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { MessageCircle, Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `مرحبا، أنا ${formData.name}
    
الهاتف: ${formData.phone}
البريد: ${formData.email}

الرسالة: ${formData.message}`;

    const whatsappUrl = `https://wa.me/212600000000?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("جاري تحويلك إلى واتساب...");
    
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "+212 600 000 000",
      link: "tel:+212600000000",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "+212 600 000 000",
      link: "https://wa.me/212600000000",
      color: "green"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@germanycenter.ma",
      link: "mailto:info@germanycenter.ma",
      color: "red"
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الدار البيضاء، المغرب",
      link: "#",
      color: "purple"
    }
  ];

  const workingHours = [
    { day: "الإثنين - الجمعة", hours: "9:00 - 18:00" },
    { day: "السبت", hours: "10:00 - 14:00" },
    { day: "الأحد", hours: "مغلق" }
  ];

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4" dir="rtl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-50 text-green-900 px-4 py-2 rounded-full mb-4">
            <span>تواصل معنا</span>
          </div>
          <h2 className="mb-6 text-blue-900 text-center">
            ابدأ رحلتك إلى ألمانيا اليوم
          </h2>
          <p className="text-gray-700 text-center">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في تحقيق حلمك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-blue-900 mb-6 text-right">أرسل لنا رسالة</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm text-right">الاسم الكامل *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                      className="text-right"
                      dir="rtl"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm text-right">رقم الهاتف *</label>
                    <Input 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+212 600 000 000"
                      required
                      className="text-right"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm text-right">البريد الإلكتروني</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="text-right"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm text-right">رسالتك *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا... (أخبرنا عن أهدافك ومستواك التعليمي)"
                      rows={5}
                      required
                      className="text-right"
                      dir="rtl"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white gap-2 py-6"
                  >
                    <Send className="h-5 w-5" />
                    <span>إرسال عبر واتساب</span>
                  </Button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                  سيتم تحويلك إلى واتساب لإرسال الرسالة
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      info.color === 'blue' ? 'bg-blue-100' :
                      info.color === 'green' ? 'bg-green-100' :
                      info.color === 'red' ? 'bg-red-100' :
                      'bg-purple-100'
                    }`}>
                      <info.icon className={`h-6 w-6 ${
                        info.color === 'blue' ? 'text-blue-600' :
                        info.color === 'green' ? 'text-green-600' :
                        info.color === 'red' ? 'text-red-600' :
                        'text-purple-600'
                      }`} />
                    </div>
                    <div className="text-sm text-gray-600 mb-1 text-right">{info.title}</div>
                    <a 
                      href={info.link}
                      className="text-blue-900 hover:text-blue-700 transition-colors block break-words text-right"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-blue-900 text-right">أوقات العمل</h3>
                </div>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-blue-900 text-left" dir="ltr">{schedule.hours}</span>
                      <span className="text-gray-700 text-right">{schedule.day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Action */}
            <Card className="border-2 bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-blue-900 mb-3 text-center">هل تريد استشارة فورية؟</h3>
                <p className="text-gray-700 mb-4 text-sm text-center">
                  تحدث مع فريقنا الآن عبر واتساب واحصل على إجابات فورية
                </p>
                <a
                  href="https://wa.me/212600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors w-full"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>دردشة مباشرة على واتساب</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
