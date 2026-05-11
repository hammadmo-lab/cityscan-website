import React from 'react';
import {
  Activity,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Clock3,
  Dna,
  Facebook,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Radio,
  Send,
  Stethoscope,
} from 'lucide-react';

type Service = {
  title: string;
  note?: string;
  category: string;
  description: string;
  preparation: string;
  duration: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: 'أحدث جهاز أشعة مقطعية متعددة الشرائح',
    note: 'TOSHIBA / CANON',
    category: 'الأشعة المقطعية',
    description: 'فحص دقيق يعطي صورًا تفصيلية لأعضاء الجسم والعظام، ويساعد الطبيب في تشخيص الإصابات والالتهابات ومتابعة الحالات المختلفة.',
    preparation: 'قد يحتاج الفحص إلى صيام أو تحليل وظائف كلى إذا كان بالصبغة، ويتم تحديد ذلك حسب طلب الطبيب.',
    duration: 'غالبًا من 10 إلى 20 دقيقة.',
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: 'أحدث جهاز أشعة رباعية وخماسية الأبعاد لفحوصات الحمل والمرأة',
    note: 'GE VOLUSON',
    category: 'فحوصات المرأة والحمل',
    description: 'سونار متقدم لمتابعة الحمل والاطمئنان على نمو الجنين، مع صور أوضح تساعد الطبيب في تقييم الحالة.',
    preparation: 'يفضل إحضار تقارير المتابعة السابقة، وقد يطلب الطبيب امتلاء المثانة في بعض فحوصات النساء.',
    duration: 'غالبًا من 15 إلى 30 دقيقة.',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'سونار الأوتار والمفاصل والعضلات بالمجس السطحي عالي التردد',
    note: '18MHZ',
    category: 'السونار والدوبلر',
    description: 'فحص بالموجات فوق الصوتية لتقييم الأوتار والعضلات والمفاصل السطحية، ويستخدم في آلام الكتف والركبة واليد والإصابات الرياضية.',
    preparation: 'لا يحتاج لتحضير خاص، فقط إحضار الأشعات أو التقارير السابقة إن وجدت.',
    duration: 'غالبًا من 10 إلى 20 دقيقة.',
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    title: 'الأشعة العادية بأعلى جودة للصور الرقمية',
    note: 'FULL DR SYSTEM',
    category: 'الأشعة العادية',
    description: 'أشعة رقمية واضحة على العظام والصدر ومناطق مختلفة من الجسم، وتساعد الطبيب في تقييم الكسور والالتهابات وبعض أمراض الصدر.',
    preparation: 'لا تحتاج لتحضير في أغلب الحالات، وقد يطلب إزالة المعادن أو الإكسسوارات من منطقة الفحص.',
    duration: 'غالبًا من 5 إلى 10 دقائق.',
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: 'أشعة بالصبغة على الرحم',
    note: 'HSG',
    category: 'فحوصات المرأة والحمل',
    description: 'فحص بالصبغة لتقييم تجويف الرحم وقنوات فالوب، ويطلب غالبًا ضمن تقييم تأخر الحمل أو حسب قرار الطبيب المعالج.',
    preparation: 'يتم تحديد الموعد المناسب حسب أيام الدورة، ويجب إحضار طلب الطبيب وأي تحاليل أو تقارير مطلوبة.',
    duration: 'غالبًا من 15 إلى 30 دقيقة.',
    icon: <Dna className="h-5 w-5" />,
  },
  {
    title: 'الدوبلر الملون على الشرايين والأوردة',
    category: 'السونار والدوبلر',
    description: 'فحص يقيس اتجاه وسرعة تدفق الدم داخل الشرايين والأوردة، ويفيد في تقييم الجلطات والدوالي وضيق الشرايين.',
    preparation: 'لا يحتاج لتحضير في أغلب الحالات، ويُفضل ارتداء ملابس مريحة حسب منطقة الفحص.',
    duration: 'غالبًا من 20 إلى 40 دقيقة.',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'الدوبلر الملون على القلب',
    note: 'الإيكو',
    category: 'القلب والأعصاب',
    description: 'فحص بالموجات فوق الصوتية لتقييم عضلة القلب والصمامات وكفاءة الضخ، ويستخدم لمتابعة أعراض مثل ضيق النفس أو آلام الصدر.',
    preparation: 'لا يحتاج لتحضير خاص، ويفضل إحضار رسم القلب أو تقارير القلب السابقة إن وجدت.',
    duration: 'غالبًا من 20 إلى 30 دقيقة.',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'سحب عينات من جميع أنسجة الجسم',
    note: 'BIOPSY',
    category: 'العينات والصبغة',
    description: 'إجراء طبي لسحب عينة من نسيج محدد تحت توجيه الأشعة عند الحاجة، لمساعدة الطبيب في الوصول لتشخيص أدق.',
    preparation: 'قد يحتاج إلى تحاليل سيولة أو إيقاف بعض الأدوية حسب الحالة، ويتم تأكيد التعليمات قبل الموعد.',
    duration: 'تختلف حسب نوع ومكان العينة.',
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    title: 'رسم العصب والعضلات',
    note: 'EMG / NCS',
    category: 'القلب والأعصاب',
    description: 'فحص لتقييم كفاءة الأعصاب والعضلات، ويستخدم في حالات التنميل وضعف العضلات وآلام الأعصاب والاشتباه في اختناق الأعصاب.',
    preparation: 'يفضل تجنب الكريمات والزيوت على منطقة الفحص في نفس اليوم، وإحضار التقارير السابقة إن وجدت.',
    duration: 'غالبًا من 30 إلى 60 دقيقة.',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'رسم المخ الكهربائي',
    note: 'لمدة نصف ساعة، ساعة، وساعتين',
    category: 'القلب والأعصاب',
    description: 'فحص يسجل النشاط الكهربائي للمخ، ويطلبه الطبيب لتقييم بعض حالات التشنجات أو نوبات فقدان الوعي أو اضطرابات كهرباء المخ.',
    preparation: 'يفضل غسل الشعر قبل الفحص دون زيوت أو كريمات، وقد يحدد الطبيب تعليمات خاصة للنوم حسب نوع الفحص.',
    duration: 'متاح لمدة نصف ساعة أو ساعة أو ساعتين حسب طلب الطبيب.',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'الأشعة العادية على العمود الفقري بالكامل',
    note: 'Scanogram Whole Spine مع تحديد القياسات والزوايا',
    category: 'الأشعة العادية',
    description: 'تصوير رقمي للعمود الفقري بالكامل مع قياسات وزوايا تساعد الطبيب في تقييم الاعوجاج ومتابعة الخطة العلاجية.',
    preparation: 'لا تحتاج لتحضير خاص، ويُفضل إحضار الأشعات السابقة للمقارنة.',
    duration: 'غالبًا من 10 إلى 20 دقيقة.',
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: 'الأشعة العادية على الطرفين السفليين',
    note: 'مع تحديد القياسات والزوايا',
    category: 'الأشعة العادية',
    description: 'تصوير للطرفين السفليين مع قياسات دقيقة للطول والزوايا، ويستخدم في تقييم اختلاف الطول أو التخطيط العظمي.',
    preparation: 'لا تحتاج لتحضير خاص، ويُفضل إحضار الأشعات السابقة أو طلب الطبيب.',
    duration: 'غالبًا من 10 إلى 20 دقيقة.',
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
];

const featuredServices = services.slice(0, 4);
const serviceCategories = [
  'الأشعة المقطعية',
  'السونار والدوبلر',
  'الأشعة العادية',
  'فحوصات المرأة والحمل',
  'القلب والأعصاب',
  'العينات والصبغة',
];

const prepItems = [
  {
    title: 'إحضار طلب الطبيب',
    text: 'يساعدنا طلب الطبيب أو الروشتة في اختيار الفحص المطلوب بدقة وتنفيذ التعليمات الطبية الصحيحة.',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: 'اسأل عن تحضير الفحص',
    text: 'بعض الفحوصات تحتاج صيامًا أو تحاليل قبل الصبغة، لذلك يفضل التواصل معنا قبل الموعد.',
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: 'احضر قبل الموعد بقليل',
    text: 'الوصول مبكرًا يساعد في إنهاء بيانات الحجز وتجهيز الفحص بدون استعجال.',
    icon: <Clock3 className="h-5 w-5" />,
  },
  {
    title: 'أخبرنا بأي حساسية أو أدوية',
    text: 'خصوصًا في فحوصات الصبغة أو العينات، لأن بعض الحالات تحتاج مراجعة تعليمات خاصة.',
    icon: <Stethoscope className="h-5 w-5" />,
  },
];

const ctExamTypes = [
  'الأشعة المقطعية على المخ',
  'الأشعة المقطعية على الجيوب الأنفية',
  'الأشعة المقطعية على عظام الوجه والفكين',
  'الأشعة المقطعية على الرقبة',
  'الأشعة المقطعية على الصدر',
  'الأشعة المقطعية على البطن والحوض',
  'الأشعة المقطعية على الكلى والمسالك البولية',
  'الأشعة المقطعية على العمود الفقري',
  'الأشعة المقطعية على العظام والمفاصل',
  'الأشعة المقطعية بالصبغة حسب طلب الطبيب',
];

const ultrasoundExamTypes = [
  'سونار على البطن',
  'سونار على الحوض',
  'سونار على البطن والحوض',
  'سونار على الكلى والمسالك البولية',
  'سونار على الكبد والمرارة والقنوات المرارية',
  'سونار على البروستاتا',
  'سونار على الخصيتين',
  'سونار على الغدة الدرقية',
  'سونار على الرقبة والغدد الليمفاوية',
  'سونار على الثدي',
  'سونار على الأنسجة الرخوة والتجمعات',
  'سونار على الأوتار والمفاصل والعضلات',
  'سونار الحمل ومتابعة الجنين',
  'سونار رباعي وخماسي الأبعاد للحمل',
  'سونار مهبلي حسب طلب الطبيب',
];

const contracts = [
  { name: 'نقابة المحامين', logoPosition: '-85px -185px' },
  { name: 'النقابة العامة لأطباء مصر', logoPosition: '-229px -185px' },
  { name: 'نقابة التجاريين المصرية', logoPosition: '-362px -185px' },
  { name: 'Shefae', logoPosition: '-85px -288px' },
  { name: 'GYMED', logoPosition: '-229px -288px' },
  { name: 'الشركة القابضة لمياه الشرب والصرف الصحي', logoPosition: '-362px -288px' },
  { name: 'H-Healthy', logoPosition: '-85px -392px' },
  { name: 'نقابة التجاريين', logoPosition: '-229px -392px' },
  { name: 'نقابة المعلمين', logoPosition: '-362px -392px' },
];

const facebookUrl = 'https://www.facebook.com/cityscan.center1';
const phoneNumber = '01006686000';
const landlineNumber = '0552381020';
const googleMapsUrl =
  'https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%B3%D9%8A%D8%AA%D9%8A+%D8%B3%D9%83%D8%A7%D9%86+%D9%84%D9%84%D8%A3%D8%A7%D8%B4%D8%B9%D8%A9%E2%80%AD/data=!4m7!3m6!1s0x14f7f15cdb1a6325:0x8ac6ac23ed55338f!8m2!3d30.5899043!4d31.4957565!16s%2Fg%2F11vs6h4myh!19sChIJJWMa21zx9xQRjzNV7SOsxoo?authuser=0&hl=en&rclk=1';
const googleMapsEmbedUrl =
  'https://maps.google.com/maps?q=30.5899043,31.4957565&t=&z=17&ie=UTF8&iwloc=&output=embed';

function getWhatsappUrl(serviceTitle?: string) {
  const serviceLine = serviceTitle ? `الفحص المطلوب: ${serviceTitle}` : 'الفحص المطلوب:';
  const message = [
    'السلام عليكم، أرغب في حجز موعد في مركز سيتي سكان للأشعة.',
    serviceLine,
    'الاسم:',
    'رقم الهاتف:',
    'اليوم والوقت المناسب:',
    'هل توجد روشتة أو طلب طبي؟',
  ].join('\n');

  return `https://wa.me/201006686000?text=${encodeURIComponent(message)}`;
}

const whatsappBookingUrl = getWhatsappUrl();

function CityScanLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`aspect-[2.35/1] overflow-hidden bg-black ${className}`}>
      <img
        src="/city-scan-logo.jpg"
        alt="City Scan Radiology Center logo"
        className="h-full w-full scale-110 object-cover object-center"
      />
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black tracking-[0.28em] text-primary" dir="ltr">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black text-white md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-24 bg-primary" />
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink pb-20 text-white md:pb-0">
      <section className="relative min-h-[720px] border-b border-primary/25 bg-ink">
        <img
          src="/ct-scanner.png"
          alt="جهاز أشعة مقطعية حديث"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,13,16,0.99)_0%,rgba(9,13,16,0.94)_45%,rgba(9,13,16,0.68)_100%)]" />
        <div className="absolute inset-y-0 left-0 hidden w-[47%] bg-ink/95 lg:block [clip-path:polygon(0_0,80%_0,100%_50%,80%_100%,0_100%)]" />
        <div className="absolute inset-y-0 left-[41%] hidden w-7 bg-primary/85 lg:block [clip-path:polygon(0_0,100%_0,45%_50%,100%_100%,0_100%,55%_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_83%_20%,rgba(255,133,21,0.3),transparent_28%),radial-gradient(circle_at_17%_78%,rgba(255,133,21,0.18),transparent_33%)]" />

        <div className="relative z-10 mx-auto grid min-h-[720px] max-w-7xl content-center gap-12 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="max-w-2xl self-center">
            <div className="mb-9 w-72 max-w-[82vw]">
              <CityScanLogo />
            </div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-primary" dir="ltr">
              Your Health ... Our Priority
            </p>
            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              مركز <span className="text-primary">سيتي سكان</span>
              <span className="mt-2 block text-4xl md:text-6xl">للأشعة</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-9 text-white/78 md:text-xl">
              نوفر كل فحوصات الأشعة التشخيصية، مثل الأشعة المقطعية، الأشعة العادية، السونار، الدوبلر، الإيكو، وفحوصات الصبغة والعينات.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 bg-primary px-6 py-3 text-base font-black text-ink shadow-[0_14px_36px_rgba(255,133,21,0.28)] transition hover:bg-white"
              >
                احجز عبر واتساب
                <ChevronLeft className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center border border-white/20 px-6 py-3 text-base font-black text-white transition hover:border-primary hover:text-primary"
              >
                خدمات المركز
              </a>
            </div>
          </div>

          <div className="self-center">
            <div className="relative mx-auto max-w-2xl border border-primary/45 bg-ink p-2 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <div className="absolute -right-4 -top-4 h-24 w-24 border-r-4 border-t-4 border-primary" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-4 border-l-4 border-primary" />
              <img
                src="/ct-scanner.png"
                alt="جهاز الأشعة المقطعية"
                className="relative aspect-[1.55/1] w-full object-cover object-[58%_center]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="modalities" className="relative bg-charcoal py-20 md:py-28">
        <div className="absolute right-0 top-0 h-full w-28 bg-primary/10 [clip-path:polygon(55%_0,100%_0,45%_100%,0_100%)]" />
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <SectionTitle eyebrow="CITY SCAN" title="رعاية تشخيصية متكاملة" />

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="order-2 lg:order-1">
              <div className="relative border border-primary/40 bg-ink p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <img
                  src="/modalities.png"
                  alt="فحوصات مركز سيتي سكان للأشعة"
                  className="aspect-[1.08/1] w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid gap-4 sm:grid-cols-2">
                {featuredServices.map((service) => (
                  <div key={service.title} className="border-r-4 border-primary bg-ink/70 p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center bg-primary text-ink">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-black leading-7 text-white">{service.title}</h3>
                    {service.note && <p className="mt-2 text-sm font-black leading-7 text-primary">{service.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative bg-ink py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.08] bg-lines" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <SectionTitle eyebrow="SERVICES" title="كل فحوصات الأشعة بالمركز" />

          <div className="space-y-8">
            {serviceCategories.map((category) => {
              const categoryServices = services.filter((service) => service.category === category);

              return (
                <div key={category} className="border-r-4 border-primary pr-4">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-black text-white">{category}</h3>
                    <span className="bg-primary px-3 py-1 text-sm font-black text-ink">
                      {categoryServices.length} فحوصات
                    </span>
                  </div>

                  {category === 'الأشعة المقطعية' && (
                    <div className="mb-5 border border-primary/25 bg-charcoal/80 p-5">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center bg-primary text-ink">
                          <Radio className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="text-xl font-black leading-8 text-white">
                            أنواع فحوصات الأشعة المقطعية المتاحة
                          </h4>
                          <p className="text-sm font-semibold leading-7 text-white/56">
                            يتم تأكيد التحضير والصبغة حسب طلب الطبيب وحالة المريض.
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {ctExamTypes.map((exam) => (
                          <div key={exam} className="flex items-start gap-3 bg-ink/70 p-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm font-black leading-7 text-white/82">{exam}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {category === 'السونار والدوبلر' && (
                    <div className="mb-5 border border-primary/25 bg-charcoal/80 p-5">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center bg-primary text-ink">
                          <Stethoscope className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="text-xl font-black leading-8 text-white">
                            فحوصات السونار المتاحة
                          </h4>
                          <p className="text-sm font-semibold leading-7 text-white/56">
                            تشمل فحوصات السونار التالية، ويتم تأكيد التحضير حسب منطقة الفحص وطلب الطبيب.
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {ultrasoundExamTypes.map((exam) => (
                          <div key={exam} className="flex items-start gap-3 bg-ink/70 p-3">
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                            <span className="text-sm font-black leading-7 text-white/82">{exam}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid gap-4 md:grid-cols-2">
                    {categoryServices.map((service) => (
                      <details key={service.title} className="service-card group">
                        <summary className="grid cursor-pointer grid-cols-[auto_1fr_auto] gap-4 p-5 [list-style:none]">
                          <span className="flex h-12 w-12 items-center justify-center bg-white text-ink transition group-open:bg-primary">
                            {service.icon}
                          </span>
                          <span>
                            <span className="block text-lg font-black leading-8 text-white md:text-xl">
                              {service.title}
                            </span>
                            {service.note && (
                              <span className="mt-2 block text-sm font-black leading-7 text-primary" dir="ltr">
                                {service.note}
                              </span>
                            )}
                          </span>
                          <ChevronDown className="mt-2 h-5 w-5 text-white/40 transition group-open:rotate-180 group-open:text-primary" />
                        </summary>

                        <div className="border-t border-white/10 px-5 pb-5 pt-4">
                          <p className="text-base font-semibold leading-8 text-white/76">{service.description}</p>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <div className="bg-ink/75 p-4">
                              <span className="mb-2 block text-sm font-black text-primary">التحضير</span>
                              <p className="text-sm font-semibold leading-7 text-white/68">{service.preparation}</p>
                            </div>
                            <div className="bg-ink/75 p-4">
                              <span className="mb-2 block text-sm font-black text-primary">المدة التقريبية</span>
                              <p className="text-sm font-semibold leading-7 text-white/68">{service.duration}</p>
                            </div>
                          </div>
                          <a
                            href={getWhatsappUrl(service.title)}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 bg-primary px-5 py-2 text-sm font-black text-ink transition hover:bg-white"
                          >
                            <Send className="h-4 w-4" />
                            احجز الفحص ده
                          </a>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="before-visit" className="relative bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <SectionTitle eyebrow="BEFORE VISIT" title="قبل ما تيجي" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {prepItems.map((item) => (
              <article key={item.title} className="border border-white/10 bg-ink/70 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center bg-primary text-ink">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black leading-7 text-white">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contracts" className="relative bg-ink py-20 md:py-24">
        <div className="absolute inset-0 opacity-[0.06] bg-lines" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <SectionTitle eyebrow="CONTRACTS" title="التعاقدات" />

          <div className="mb-8 grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden border border-primary/30 bg-black p-2">
              <img
                src="/contracts-logos.png"
                alt="تعاقدات مركز سيتي سكان للأشعة"
                className="aspect-[1.1/1] w-full object-cover object-top"
              />
            </div>
            <div className="border-r-4 border-primary bg-charcoal/75 p-6">
              <h3 className="text-2xl font-black leading-9 text-white">جهات تعاقد متعددة</h3>
              <p className="mt-3 max-w-2xl text-base font-semibold leading-8 text-white/68">
                يقبل مركز سيتي سكان للأشعة التعاقدات التالية، ويمكن التواصل معنا قبل الزيارة لتأكيد تفاصيل التغطية والفحص المطلوب.
              </p>
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 bg-primary px-5 py-2 text-sm font-black text-ink transition hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" />
                اسأل عن التعاقد
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contracts.map((contract) => (
              <div
                key={contract.name}
                className="flex min-h-32 items-center gap-4 border border-primary/25 bg-charcoal/75 p-5 transition hover:border-primary/70"
              >
                <span
                  className="contract-logo-sprite"
                  role="img"
                  aria-label={`شعار ${contract.name}`}
                  style={{ backgroundPosition: contract.logoPosition }}
                >
                  <span className="sr-only">{contract.name}</span>
                </span>
                <span className="text-lg font-black leading-8 text-white">{contract.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-charcoal py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="border border-primary/35 bg-ink p-8">
            <CityScanLogo className="mx-auto max-w-md" />
            <div className="mt-8 border-r-4 border-primary pr-5">
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-6 py-3 text-base font-black text-ink transition hover:bg-white"
              >
                <MessageCircle className="h-5 w-5" />
                للحجز و الاستعلام : <span dir="ltr">01006686000</span>
              </a>
            </div>
          </div>

          <div className="grid content-center gap-4">
            <a href={`tel:${phoneNumber}`} className="contact-row">
              <span className="contact-icon">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="contact-label">أرقام الهواتف</span>
                <span className="contact-value" dir="ltr">
                  {phoneNumber} - {landlineNumber}
                </span>
              </span>
            </a>

            <div className="contact-row">
              <span className="contact-icon">
                <CalendarDays className="h-5 w-5" />
              </span>
              <span>
                <span className="contact-label">مواعيد العمل</span>
                <span className="contact-value">يوميًا من ١١ ص إلى ١١ م، ما عدا الجمعة</span>
              </span>
            </div>

            <a href="mailto:cityscan991@gmail.com" className="contact-row">
              <span className="contact-icon">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="contact-label">البريد الإلكتروني</span>
                <span className="contact-value" dir="ltr">
                  cityscan991@gmail.com
                </span>
              </span>
            </a>

            <a href={facebookUrl} target="_blank" rel="noreferrer" className="contact-row">
              <span className="contact-icon">
                <Facebook className="h-5 w-5" />
              </span>
              <span>
                <span className="contact-label">فيسبوك</span>
                <span className="contact-value" dir="ltr">
                  @cityscan.center1
                </span>
              </span>
            </a>

            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="contact-row">
              <span className="contact-icon">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="contact-label">العنوان</span>
                <span className="contact-value">الزقازيق - أمام مطعم شهد - ميدان القومية</span>
                <span className="mt-1 block text-sm font-semibold text-white/48" dir="ltr">
                  46 EL QAWMIA ST - IN FRONT OF SHAHD RESTAURANT
                </span>
              </span>
            </a>

            <div className="overflow-hidden border border-primary/30 bg-ink">
              <iframe
                title="City Scan Radiology Center location on Google Maps"
                src={googleMapsEmbedUrl}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-6 text-center">
        <a
          href={whatsappBookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mb-4 inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-6 py-3 text-base font-black text-ink transition hover:bg-white"
        >
          <MessageCircle className="h-5 w-5" />
          للحجز و الاستعلام : <span dir="ltr">01006686000</span>
        </a>
        <p className="text-sm font-bold text-white/42">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مركز سيتي سكان للأشعة
        </p>
      </footer>

      <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-primary/25 bg-black/95 text-white shadow-[0_-16px_40px_rgba(0,0,0,0.45)] backdrop-blur md:hidden">
        <a href={`tel:${phoneNumber}`} className="mobile-action">
          <Phone className="h-5 w-5" />
          اتصال
        </a>
        <a href={whatsappBookingUrl} target="_blank" rel="noreferrer" className="mobile-action text-primary">
          <MessageCircle className="h-5 w-5" />
          واتساب
        </a>
        <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="mobile-action">
          <Navigation className="h-5 w-5" />
          الموقع
        </a>
        <a href="#services" className="mobile-action">
          <FileText className="h-5 w-5" />
          الفحوصات
        </a>
      </nav>
    </main>
  );
}
