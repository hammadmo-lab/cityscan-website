import React from 'react';
import {
  Activity,
  CheckCircle2,
  ChevronLeft,
  Dna,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Radio,
  Stethoscope,
} from 'lucide-react';

type Service = {
  title: string;
  note: React.ReactNode;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: 'أحدث جهاز أشعة مقطعية متعددة الشرائح',
    note: 'TOSHIBA / CANON',
    icon: <Radio className="h-5 w-5" />,
  },
  {
    title: 'أحدث جهاز أشعة رباعية وخماسية الأبعاد لفحوصات الحمل والمرأة',
    note: 'GE VOLUSON',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'سونار الأوتار والمفاصل والعضلات بالمجس السطحي عالي التردد',
    note: '18MHZ',
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    title: 'الأشعة العادية بأعلى جودة للصور الرقمية',
    note: 'FULL DR SYSTEM',
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: 'أشعة بالصبغة على الرحم',
    note: 'HSG',
    icon: <Dna className="h-5 w-5" />,
  },
  {
    title: 'الدوبلر الملون على الشرايين والأوردة',
    note: '',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'الدوبلر الملون على القلب',
    note: 'الإيكو',
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: 'سحب عينات من جميع أنسجة الجسم',
    note: 'BIOPSY',
    icon: <Stethoscope className="h-5 w-5" />,
  },
];

const featuredServices = services.slice(0, 4);

const facebookUrl = 'https://www.facebook.com/cityscan.center1';
const androidAppUrl = 'https://play.google.com/store/apps/details?id=com.nebras.cityscan&hl=en_GB';
const googleMapsUrl =
  'https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%B3%D9%8A%D8%AA%D9%8A+%D8%B3%D9%83%D8%A7%D9%86+%D9%84%D9%84%D8%A3%D8%A7%D8%B4%D8%B9%D8%A9%E2%80%AD/data=!4m7!3m6!1s0x14f7f15cdb1a6325:0x8ac6ac23ed55338f!8m2!3d30.5899043!4d31.4957565!16s%2Fg%2F11vs6h4myh!19sChIJJWMa21zx9xQRjzNV7SOsxoo?authuser=0&hl=en&rclk=1';
const googleMapsEmbedUrl =
  'https://maps.google.com/maps?q=30.5899043,31.4957565&t=&z=17&ie=UTF8&iwloc=&output=embed';

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
    <main className="min-h-screen overflow-hidden bg-ink text-white">
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
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 bg-primary px-6 py-3 text-base font-black text-ink shadow-[0_14px_36px_rgba(255,133,21,0.28)] transition hover:bg-white"
              >
                تواصل معنا
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

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group grid grid-cols-[auto_1fr] gap-4 border border-white/10 bg-charcoal/75 p-5 transition hover:border-primary/70 hover:bg-charcoal"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-white text-ink transition group-hover:bg-primary">
                  {service.icon}
                </div>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-black leading-8 text-white md:text-xl">{service.title}</h3>
                    <span className="text-sm font-black text-white/20" dir="ltr">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {service.note && (
                    <p className="mt-2 text-sm font-black text-primary" dir="ltr">
                      {service.note}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-charcoal py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="border border-primary/35 bg-ink p-8">
            <CityScanLogo className="mx-auto max-w-md" />
            <div className="mt-8 border-r-4 border-primary pr-5">
              <p className="mt-4 text-base font-semibold leading-8 text-white/68">
                احجز أو استفسر عن الفحوصات المتاحة عبر الهاتف أو الواتساب.
              </p>
            </div>
          </div>

          <div className="grid content-center gap-4">
            <a href="tel:0106686000" className="contact-row">
              <span className="contact-icon">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="contact-label">أرقام الهواتف</span>
                <span className="contact-value" dir="ltr">
                  0106686000 - 0552381020
                </span>
              </span>
            </a>

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

            <a href={androidAppUrl} target="_blank" rel="noreferrer" className="contact-row">
              <span className="contact-icon">
                <Smartphone className="h-5 w-5" />
              </span>
              <span>
                <span className="contact-label">تطبيق الأندرويد</span>
                <span className="contact-value" dir="ltr">
                  City Scan App
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
        <p className="text-sm font-bold text-white/42">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مركز سيتي سكان للأشعة
        </p>
      </footer>
    </main>
  );
}
