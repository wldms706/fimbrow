import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TreatmentHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-end justify-end px-8 md:px-16 pb-20 overflow-hidden bg-black">
      <img
        className="absolute inset-0 w-full h-full object-cover md:object-contain object-top"
        src="/treatment-hero.jpeg"
        alt="핌브로우 시술"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

      <div className="relative z-10 max-w-[400px] text-right" style={{ animation: 'fadeUp .8s ease .3s both' }}>
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-white/50 mb-4">Semi-Permanent Brow Specialist</p>
        <p className="text-sm text-white/70 leading-relaxed mb-8">
          12년 임상, 15,000명 시술 데이터를 바탕으로<br/>
          잔흔 없는 자연스러운 눈썹을 만듭니다.
        </p>
        <a href="#booking" className="inline-block px-8 py-3 border border-white/40 text-white text-[0.7rem] tracking-[0.2em] uppercase hover:bg-white hover:text-main-dark transition-all">
          Book Now
        </a>
      </div>
    </section>
  );
};

const TreatmentNumbers: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-12">Numbers</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/10">
        {[
          { val: '12', unit: '년', label: '임상 경력' },
          { val: '15,000', unit: '명', label: '누적 시술' },
          { val: '100', unit: '%', label: '1:1 맞춤 시술' },
          { val: '1', unit: '', label: '단 한명을 위한 디자인' },
        ].map((item, idx) => (
          <div key={idx} className="py-10 pr-8 border-b border-white/10">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-white leading-none">{item.val}</span>
              <span className="text-sm text-white/40">{item.unit}</span>
            </div>
            <div className="text-xs text-white/30 mt-2 tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MenuSection: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-darker">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Services</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">시술 메뉴</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          { src: '/menu-embo.jpeg', name: '엠보', eng: 'EMBO', desc: '한 올 한 올 자연스러운 결' },
          { src: '/menu-suji.jpeg', name: '수지', eng: 'SUJI', desc: '파우더 그라데이션 채움' },
          { src: '/menu-combo.jpeg', name: '콤보', eng: 'COMBO', desc: '엠보 + 수지 결합' },
        ].map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden cursor-pointer">
            <img src={item.src} alt={item.name} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50 mb-1">{item.eng}</p>
              <h3 className="font-serif text-2xl font-light text-white">{item.name}</h3>
              <p className="text-xs text-white/50 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PricingSection: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Price</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">시술 가격</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 mb-8">개별 시술</p>
          {[
            ['올수지 (잔흔커버)', '40만원'],
            ['쓰리콤보 (슬림엠보+수지)', '35만원'],
            ['입술 (거뭇한 입술 추천)', '45만원'],
            ['아이라인 (꼬리포함)', '20만원'],
            ['아이라인 (점막)', '15만원'],
          ].map(([name, price], idx) => (
            <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5">
              <span className="text-sm text-white/60">{name}</span>
              <span className="font-serif text-lg text-white">{price}</span>
            </div>
          ))}

          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 mt-12 mb-8">스킨 리페어</p>
          {[
            ['눈썹/속눈썹 자라나는 생장술 1회', '10만원'],
            ['컬러몬스터 눈썹 잔흔케어 1회', '25만원'],
            ['아이라인/입술 잔흔케어 1회', '15만원'],
            ['눈썹 잔흔케어 1회', '8만원'],
          ].map(([name, price], idx) => (
            <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5">
              <span className="text-sm text-white/60">{name}</span>
              <span className="font-serif text-lg text-white">{price}</span>
            </div>
          ))}
          <p className="text-xs text-white/20 mt-6">리터치 포함 / 카드 가능 VAT 별도 / 중복할인 X</p>
        </div>

        <div>
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 mb-8">잔흔 킬러 패키지</p>

          <div className="mb-8 p-8 border border-white/10">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-3">Package I</p>
            <h4 className="font-serif text-xl text-white mb-2">레이저로 제거 안 되는 심한 잔흔</h4>
            <p className="text-xs text-white/40 mb-6">컬러몬스터 앰플(2회) + 잔흔케어 1회(3회) + 잔흔커버 올수지</p>
            <div className="flex items-baseline gap-4">
              <span className="text-sm text-white/30 line-through">114만원</span>
              <span className="font-serif text-3xl text-white">86만원</span>
            </div>
          </div>

          <div className="p-8 border border-white/10">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-3">Package II</p>
            <h4 className="font-serif text-xl text-white mb-2">베이직 잔흔제거</h4>
            <p className="text-xs text-white/40 mb-6">잔흔케어(3회) + 잔흔커버 올수지</p>
            <div className="flex items-baseline gap-4">
              <span className="text-sm text-white/30 line-through">64만원</span>
              <span className="font-serif text-3xl text-white">59만원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EventSection: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-darker">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Event</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">영원히 감사 EVENT</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          { num: '01', title: '2인 동시예약 시', benefit: '-40,000원', desc: '인당 2만원, 시술 날짜가 달라도 가능합니다.' },
          { num: '02', title: '2가지 시술 시', benefit: '-10,000원', desc: '반영구 중 2가지 동시 시술 시' },
          { num: '03', title: '지인소개 시', benefit: '+10,000p', desc: '소개 당사자는 다음 시술 시 사용 가능한 포인트 적립' },
        ].map((evt, idx) => (
          <div key={idx} className="p-8 bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
            <span className="font-serif text-4xl text-white/10 block mb-6">{evt.num}</span>
            <h4 className="font-serif text-xl text-white mb-2">{evt.title}</h4>
            <p className="font-serif text-2xl text-accent mb-4">{evt.benefit}</p>
            <p className="text-xs text-white/40 leading-relaxed">{evt.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-white/20 mt-8">※ 할인과 포인트 함께 사용 가능, 중복할인은 불가합니다.</p>
    </div>
  </section>
);

const TreatmentProcess: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Process</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">시술 과정</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {[
          { step: '01', title: '1:1 맞춤 상담', desc: '얼굴형, 피부 타입, 기존 눈썹 상태를 분석합니다.' },
          { step: '02', title: '정밀 디자인', desc: '골격과 비대칭을 고려한 맞춤 디자인을 제안합니다.' },
          { step: '03', title: '시술 진행', desc: '12년 노하우로 통증을 최소화하고 자연스럽게.' },
          { step: '04', title: '애프터케어', desc: '리터치 시기까지 꼼꼼히 케어합니다.' },
        ].map((item, idx) => (
          <div key={idx} className="py-8 pr-8 border-t border-white/10">
            <span className="font-serif text-5xl text-white/5 block mb-6">{item.step}</span>
            <h4 className="text-sm font-medium text-white tracking-wider mb-2">{item.title}</h4>
            <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PhilosophySection: React.FC = () => (
  <section className="relative py-32 px-8 md:px-16 overflow-hidden">
    <img src="/profile.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10 max-w-[600px]">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/40 mb-6">Philosophy</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white leading-snug mb-8">
        반영구는<br/>지우개가 없습니다.
      </h2>
      <p className="text-sm text-white/50 leading-relaxed mb-4">
        한 번의 시술이 고객의 인상을 바꿉니다.<br/>
        그래서 저는 한 올도 가볍게 넣지 않습니다.
      </p>
      <p className="text-xs text-white/30 tracking-wider mt-8">— 핌브로우 대표원장 박연두</p>
    </div>
  </section>
);

const treatmentRow1 = [
  '/treatment1.jpeg', '/treatment2.jpeg', '/treatment3.jpeg', '/treatment5.jpeg',
  '/treatment7.jpeg', '/treatment8.jpeg', '/treatment10.jpeg', '/treatment12.jpeg',
  '/treatment14.jpeg', '/treatment15.jpeg',
];
const treatmentRow2 = [
  '/treatment17.jpeg', '/treatment19.jpeg', '/treatment20.jpeg', '/treatment22.jpeg',
  '/treatment25.jpeg', '/treatment28.jpeg', '/treatment30.jpeg', '/treatment35.jpeg',
  '/treatment40.jpeg', '/treatment44.jpeg',
];

const TreatmentSlider: React.FC = () => (
  <section className="py-24 px-0 bg-main-darker overflow-hidden">
    <div className="max-w-[1100px] mx-auto px-8 md:px-16 mb-16">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Portfolio</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white">시술 결과</h2>
    </div>
    <div className="relative space-y-3">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-main-darker to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-main-darker to-transparent z-10 pointer-events-none"></div>
      <div className="animate-marquee flex gap-3 w-max">
        {[...treatmentRow1, ...treatmentRow1].map((src, idx) => (
          <img key={idx} src={src} alt="" className="h-[300px] md:h-[380px] w-auto rounded-sm object-cover shrink-0" />
        ))}
      </div>
      <div className="animate-marquee-reverse flex gap-3 w-max">
        {[...treatmentRow2, ...treatmentRow2].map((src, idx) => (
          <img key={idx} src={src} alt="" className="h-[300px] md:h-[380px] w-auto rounded-sm object-cover shrink-0" />
        ))}
      </div>
    </div>
  </section>
);

const TreatmentBooking: React.FC = () => (
  <section id="booking" className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Reservation</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-6">시술 예약</h2>
          <p className="text-sm text-white/40 leading-relaxed mb-10">
            시술 전 충분한 상담을 진행합니다.<br/>
            카카오톡으로 편하게 문의해 주세요.
          </p>
          <a
            href="https://pf.kakao.com/_gxmFxmG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-main-dark text-[0.7rem] font-medium tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
          >
            카카오톡 예약 문의
          </a>
        </div>
        <div className="space-y-0">
          {[
            ['위치', '핌브로우 스튜디오'],
            ['상담', '카카오톡 예약제'],
            ['소요시간', '상담 포함 약 2~3시간'],
          ].map(([label, value], idx) => (
            <div key={idx} className="flex justify-between items-center py-5 border-b border-white/5">
              <span className="text-xs text-white/30 tracking-wider">{label}</span>
              <span className="text-sm text-white">{value}</span>
            </div>
          ))}
          <p className="text-xs text-white/20 pt-6 leading-relaxed">
            ※ 모든 시술은 1:1 예약제로 진행됩니다.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const TreatmentFAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: '시술 시간은 얼마나 걸리나요?', a: '상담 포함 약 2~3시간 정도 소요됩니다. 충분한 상담 후 디자인을 결정하고, 시술을 진행합니다.' },
    { q: '통증이 심한가요?', a: '시술 전 통증완화 크림을 도포하기 때문에 대부분의 고객분들이 큰 통증 없이 편안하게 시술 받으십니다.' },
    { q: '유지 기간은 어느 정도인가요?', a: '개인 피부 타입에 따라 다르지만, 보통 1~2년 정도 유지됩니다. 리터치를 통해 더 오래 유지할 수 있습니다.' },
    { q: '리터치는 언제 하나요?', a: '첫 시술 후 약 4~6주 뒤에 리터치를 진행합니다. 리터치는 시술 가격에 포함되어 있습니다.' },
    { q: '시술 후 세안은 언제부터 가능한가요?', a: '시술 부위를 제외한 세안은 당일부터 가능합니다. 시술 부위는 약 7~10일 후부터 세안이 가능하며, 자세한 관리 방법은 시술 후 안내드립니다.' },
    { q: '잔흔이 있는데 커버가 가능한가요?', a: '네, 가능합니다. 잔흔의 상태에 따라 레이저 제거 후 커버 시술을 진행하거나, 바로 커버가 가능한 경우도 있습니다. 상담을 통해 최적의 방법을 안내드립니다.' },
  ];
  return (
    <section className="py-24 px-8 md:px-16 bg-main-darker">
      <div className="max-w-[800px] mx-auto">
        <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">FAQ</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">자주 묻는 질문</h2>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/5">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center py-6 text-left cursor-pointer"
              >
                <span className="text-sm text-white/70">{faq.q}</span>
                <span className="text-white/30 text-xl shrink-0 ml-4">{open === idx ? '−' : '+'}</span>
              </button>
              {open === idx && (
                <p className="text-xs text-white/35 leading-relaxed pb-6">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseBanner: React.FC = () => (
  <section className="py-20 px-8 md:px-16 bg-main-darker border-t border-white/5">
    <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div>
        <p className="text-xs text-white/30 mb-2">반영구를 직접 배우고 싶다면</p>
        <h3 className="font-serif text-3xl font-light text-white">FIMBROW MASTER CLASS</h3>
      </div>
      <Link
        to="/course"
        className="inline-block px-10 py-4 border border-white/30 text-white text-[0.7rem] font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-main-dark transition-all"
      >
        View Course
      </Link>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-16 px-8 md:px-16 bg-main-dark border-t border-white/5">
    <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:justify-between gap-8">
      <div>
        <div className="font-serif text-2xl tracking-[0.3em] text-white font-light mb-4">FIMBROW</div>
        <p className="text-xs text-white/20 leading-relaxed">
          반영구 눈썹 전문 시술 · 원장 박연두
        </p>
      </div>
      <div className="text-right">
        <p className="text-xs text-white/20 leading-relaxed">
          Instagram @fimbrow<br/>
          <a href="https://naver.me/xWzYgRCz" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">네이버플레이스</a>
        </p>
      </div>
    </div>
  </footer>
);

const reviewImages = Array.from({ length: 13 }, (_, i) => `/reviews/review-${String(i + 1).padStart(2, '0')}.jpeg`);

const CustomerReviews: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-darker overflow-hidden">
    <div className="max-w-[1100px] mx-auto mb-12">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Reviews</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white">고객 후기</h2>
    </div>

    <div className="relative">
      <div className="animate-review-scroll flex gap-4 w-max">
        {[...reviewImages, ...reviewImages].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`고객 후기 ${(idx % 13) + 1}`}
            className="h-[400px] md:h-[500px] w-auto rounded-lg flex-shrink-0 object-cover"
          />
        ))}
      </div>
    </div>
  </section>
);

export default function TreatmentPage() {
  return (
    <>
      <TreatmentHero />
      <TreatmentNumbers />
      <MenuSection />
      <PricingSection />
      <TreatmentProcess />
      <PhilosophySection />
      <TreatmentSlider />
      <CustomerReviews />
      <EventSection />
      <TreatmentBooking />
      <TreatmentFAQ />
      <CourseBanner />
      <Footer />
    </>
  );
}
