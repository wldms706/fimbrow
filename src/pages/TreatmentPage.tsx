import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const videos = ['/hero1.mp4', '/hero2.mp4', '/hero3.mp4'];

const TreatmentHero: React.FC = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = useCallback(() => {
    setVideoIndex((prev) => (prev + 1) % videos.length);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videoIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[60px] px-6 overflow-hidden bg-main-dark">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videos[videoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
      />
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-[640px] text-center" style={{ animation: 'fadeUp .65s ease both' }}>
        <p className="text-[0.65rem] tracking-[0.38em] uppercase text-vibrant-green/80 mb-12 flex items-center justify-center gap-3">
          <span className="w-5 h-px bg-vibrant-green/50"></span>
          반영구 눈썹 전문 시술
          <span className="w-5 h-px bg-vibrant-green/50"></span>
        </p>

        <div className="mb-14" style={{ animation: 'fadeUp .65s ease .15s both' }}>
          <p className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] text-white/50 mb-4 leading-relaxed">
            시간이 지나도 자연스러운 눈썹
          </p>
          <div className="w-px h-7 bg-vibrant-green/40 mx-auto mb-4"></div>
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.6rem)] font-bold italic leading-tight">
            <span className="text-vibrant-green">12년 임상</span>
            <span className="text-white">이 만드는</span><br/>
            <span className="text-white">잔흔 없는 눈썹</span>
          </h1>
        </div>

        <div className="border-t border-white/15 pt-8 mb-10 flex flex-col items-center gap-2" style={{ animation: 'fadeUp .65s ease .3s both' }}>
          <p className="text-sm text-white/50">누적 시술 15,000명</p>
          <p className="text-base text-vibrant-green font-medium">엠보 · 수지 · 콤보 · 잔흔커버 · 비대칭교정</p>
          <div className="h-4"></div>
          <p className="font-serif text-lg tracking-[0.32em] text-white font-semibold mt-2">FIMBROW STUDIO</p>
        </div>

        <div className="flex flex-col items-center gap-3 mb-8" style={{ animation: 'fadeUp .65s ease .52s both' }}>
          <a href="#booking" className="px-11 py-4 bg-vibrant-green text-main-dark font-bold text-sm tracking-wider hover:opacity-80 transition-opacity">
            시술 예약 문의하기
          </a>
        </div>
      </div>
    </section>
  );
};

const TreatmentNumbers: React.FC = () => (
  <section className="py-20 px-6 bg-main-dark text-center">
    <div className="max-w-[680px] mx-auto mb-10">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-vibrant-green mb-4 inline-block">Numbers</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white leading-snug">숫자로 보는 핌브로우</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 max-w-[900px] mx-auto border border-white/10">
      {[
        { val: '12년', label: '임상 경력' },
        { val: '15,000명', label: '누적 시술' },
        { val: '100%', label: '1:1 맞춤 상담' },
        { val: '0건', label: '잔흔 클레임' },
      ].map((item, idx) => (
        <div key={idx} className="py-12 px-6 text-center border-r border-b border-white/10 last:border-r-0">
          <div className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-vibrant-green leading-none">{item.val}</div>
          <div className="text-sm text-white/50 mt-2 leading-relaxed">{item.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Services: React.FC = () => (
  <section className="py-24 px-6 bg-main-darker text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-vibrant-green mb-5 inline-block">Services</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white">시술 메뉴</h2>
      <div className="w-7 h-px bg-vibrant-green mx-auto my-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[
          {
            name: '엠보 눈썹',
            eng: 'Embo Brow',
            desc: '한 올 한 올 자연스러운 결을 표현하는 기법. 눈썹이 거의 없거나 자연스러운 채움을 원하는 분께 추천합니다.',
            tags: ['자연스러운 결', '빈 곳 채움', '남녀 모두 가능'],
          },
          {
            name: '수지 눈썹',
            eng: 'Suji Brow',
            desc: '파우더처럼 부드러운 그라데이션 효과. 화장한 듯 자연스러운 눈썹을 원하는 분께 추천합니다.',
            tags: ['파우더 효과', '그라데이션', '또렷한 인상'],
          },
          {
            name: '콤보 눈썹',
            eng: 'Combo Brow',
            desc: '엠보의 자연스러운 결 + 수지의 채움감을 결합. 풍성하면서도 자연스러운 눈썹을 원하는 분께 추천합니다.',
            tags: ['엠보 + 수지', '풍성한 느낌', '가장 인기'],
          },
        ].map((service, idx) => (
          <div key={idx} className="border border-white/10 text-left hover:border-vibrant-green/30 transition-colors">
            <div className="aspect-[4/3] bg-white/5 flex flex-col items-center justify-center gap-2">
              <span className="text-3xl opacity-20">🖼</span>
              <span className="text-[0.65rem] tracking-wider uppercase text-white/30">시술 사진</span>
            </div>
            <div className="p-6">
              <div className="text-[0.62rem] tracking-wider text-vibrant-green/60 uppercase mb-1">{service.eng}</div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">{service.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-1">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-vibrant-green/10 text-vibrant-green/80 px-2.5 py-0.5">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {[
          {
            name: '잔흔 커버',
            eng: 'Scar Cover',
            desc: '이전 시술의 잔흔, 번짐, 변색을 자연스럽게 커버합니다. 12년 임상 데이터를 기반으로 피부 상태에 맞는 최적의 방법을 적용합니다.',
            tags: ['잔흔 교정', '색 보정', '자연스러운 복원'],
          },
          {
            name: '비대칭 교정',
            eng: 'Asymmetry Correction',
            desc: '얼굴 비대칭, 눈썹 좌우 불균형을 정밀하게 분석하고 교정합니다. 단순 대칭이 아닌, 얼굴 전체 밸런스를 고려한 디자인을 제공합니다.',
            tags: ['정밀 분석', '맞춤 디자인', '밸런스 교정'],
          },
        ].map((service, idx) => (
          <div key={idx} className="border border-white/10 text-left hover:border-vibrant-green/30 transition-colors">
            <div className="aspect-[3/1] bg-white/5 flex flex-col items-center justify-center gap-2">
              <span className="text-2xl opacity-20">🖼</span>
              <span className="text-[0.65rem] tracking-wider uppercase text-white/30">시술 사진</span>
            </div>
            <div className="p-6">
              <div className="text-[0.62rem] tracking-wider text-vibrant-green/60 uppercase mb-1">{service.eng}</div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">{service.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-1">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-vibrant-green/10 text-vibrant-green/80 px-2.5 py-0.5">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TreatmentProcess: React.FC = () => (
  <section className="py-24 px-6 bg-main-dark text-center">
    <div className="max-w-[680px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-vibrant-green mb-5 inline-block">Process</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white">시술 과정</h2>
      <div className="w-7 h-px bg-vibrant-green mx-auto my-6"></div>

      <div className="space-y-0.5 mt-10">
        {[
          { step: '01', title: '1:1 맞춤 상담', desc: '얼굴형, 피부 타입, 기존 눈썹 상태를 분석하고 원하시는 스타일을 상담합니다.' },
          { step: '02', title: '정밀 디자인', desc: '골격, 비대칭, 얼굴 밸런스를 고려한 맞춤 디자인을 제안합니다. 충분히 상의 후 진행합니다.' },
          { step: '03', title: '시술 진행', desc: '12년 임상 노하우로 통증을 최소화하고, 자연스러운 결과를 만들어냅니다.' },
          { step: '04', title: '애프터케어', desc: '시술 후 관리 방법을 안내드리고, 리터치 시기까지 꼼꼼히 케어합니다.' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-6 p-6 border border-white/10 text-left hover:border-vibrant-green/30 transition-colors">
            <div className="font-serif text-2xl font-bold text-vibrant-green shrink-0">{item.step}</div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TreatmentPhilosophy: React.FC = () => (
  <section className="py-24 px-6 bg-main-darker text-center">
    <div className="max-w-[680px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-vibrant-green mb-5 inline-block">Philosophy</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white">핌브로우의 시술 철학</h2>
      <div className="w-7 h-px bg-vibrant-green mx-auto my-6"></div>

      <div className="max-w-[560px] mx-auto mb-12 p-10 border border-white/10 relative">
        <span className="absolute -top-6 left-6 font-serif text-[8rem] text-white/5 leading-none">&ldquo;</span>
        <p className="font-serif text-lg text-white/85 leading-relaxed italic relative z-10">
          "반영구는 지우개가 없습니다.<br/>한 번의 시술이 고객의 인상을 바꿉니다.<br/>그래서 저는 한 올도 가볍게 넣지 않습니다."
        </p>
        <p className="text-xs text-white/30 tracking-wider mt-6">— 핌브로우 대표원장 박연두</p>
      </div>

      <div className="flex flex-col gap-4 max-w-[560px] mx-auto text-left">
        {[
          { title: '잔흔을 남기지 않는 시술', desc: '피부, 색소, 압, 각도의 원리를 정확히 이해한 시술만이 시간이 지나도 자연스럽습니다.' },
          { title: '고객 얼굴에 맞는 디자인', desc: '유행이 아닌, 골격과 비대칭을 고려한 맞춤 디자인으로 자연스러운 아름다움을 만듭니다.' },
          { title: '충분한 상담 후 시술', desc: '서두르지 않습니다. 고객이 충분히 이해하고 납득한 후에만 시술을 진행합니다.' },
        ].map((item, idx) => (
          <div key={idx} className="border border-white/10 p-6 hover:border-vibrant-green/30 transition-colors">
            <h4 className="font-serif text-lg font-semibold text-vibrant-green mb-2">{item.title}</h4>
            <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InstructorBrief: React.FC = () => (
  <section className="py-24 px-6 bg-main-dark text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-vibrant-green mb-5 inline-block">Artist</span>

      <div className="w-[min(300px,78%)] mx-auto mb-10 relative">
        <div className="absolute -inset-4 bg-vibrant-green/5 blur-[60px] rounded-full pointer-events-none"></div>
        <img src="/profile.jpeg" alt="핌브로우 원장" className="relative w-full object-cover aspect-[3/4] rounded-xl" />
      </div>

      <div className="font-serif text-2xl tracking-[0.25em] text-white font-semibold">FIMBROW STUDIO</div>
      <div className="w-7 h-px bg-vibrant-green mx-auto my-6"></div>

      <ul className="max-w-[360px] mx-auto">
        {['반영구 12년 경력', '누적 시술 15,000명', '아치 디자인 전문', '잔흔 커버 전문', '비대칭 교정 전문'].map((spec, i) => (
          <li key={i} className="flex items-center justify-center gap-3 py-3 border-b border-white/10 text-sm text-white/60 last:border-b-0">
            <span className="w-1 h-1 bg-vibrant-green rounded-full shrink-0"></span>
            {spec}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const TreatmentBooking: React.FC = () => (
  <section id="booking" className="py-24 px-6 bg-main-darker text-center">
    <div className="max-w-[680px] mx-auto mb-10">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-vibrant-green mb-5 inline-block">Reservation</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white">시술 예약 문의</h2>
      <div className="w-7 h-px bg-vibrant-green mx-auto my-6"></div>
      <p className="text-sm text-white/50 leading-relaxed">
        시술 전 충분한 상담을 진행합니다.<br/>
        카카오톡으로 편하게 문의해 주세요.
      </p>
    </div>

    <div className="max-w-[480px] mx-auto space-y-4">
      <a
        href="https://pf.kakao.com/_gxmFxmG"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-5 bg-vibrant-green text-main-dark font-bold text-sm tracking-wider hover:opacity-80 transition-opacity"
      >
        카카오톡으로 시술 예약 문의하기
      </a>

      <div className="border border-white/10 p-6 text-left space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-white/50">위치</span>
          <span className="text-white font-medium">핌브로우 스튜디오</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-white/50">상담</span>
          <span className="text-white font-medium">카카오톡 예약제</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-white/50">소요시간</span>
          <span className="text-white font-medium">상담 포함 약 2~3시간</span>
        </div>
      </div>

      <div className="text-xs text-white/40 leading-relaxed pt-4">
        ※ 모든 시술은 1:1 예약제로 진행됩니다.<br/>
        ※ 시술 전 충분한 상담 후 진행 여부를 결정하실 수 있습니다.
      </div>
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
    <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-vibrant-green mb-5 inline-block">Portfolio</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white">시술 결과</h2>
      <div className="w-7 h-px bg-vibrant-green mx-auto my-6"></div>
    </div>
    <div className="relative space-y-4">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-main-darker to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-main-darker to-transparent z-10 pointer-events-none"></div>
      {/* Row 1 → */}
      <div className="animate-marquee flex gap-4 w-max">
        {[...treatmentRow1, ...treatmentRow1].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`시술 결과 ${(idx % treatmentRow1.length) + 1}`}
            className="h-[280px] md:h-[360px] w-auto rounded-xl object-cover shrink-0"
          />
        ))}
      </div>
      {/* Row 2 ← */}
      <div className="animate-marquee-reverse flex gap-4 w-max">
        {[...treatmentRow2, ...treatmentRow2].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`시술 결과 ${(idx % treatmentRow2.length) + 11}`}
            className="h-[280px] md:h-[360px] w-auto rounded-xl object-cover shrink-0"
          />
        ))}
      </div>
    </div>
  </section>
);

const CourseBanner: React.FC = () => (
  <section className="py-16 px-6 bg-main-dark text-center border-t border-white/10">
    <div className="max-w-[640px] mx-auto">
      <p className="text-sm text-white/50 mb-3">반영구를 직접 배우고 싶다면</p>
      <h3 className="font-serif text-2xl font-semibold text-white mb-6">FIMBROW MASTER CLASS</h3>
      <Link
        to="/course"
        className="inline-block px-11 py-4 border border-vibrant-green text-vibrant-green font-bold text-sm tracking-wider hover:bg-vibrant-green hover:text-main-dark transition-all"
      >
        수강 안내 페이지 보기
      </Link>
    </div>
  </section>
);

const TreatmentFooter: React.FC = () => (
  <footer className="py-12 px-6 bg-main-dark border-t border-white/5 text-center">
    <div className="font-serif text-xl tracking-[0.4em] text-vibrant-green font-semibold mb-3">FIMBROW</div>
    <p className="text-xs text-white/25 leading-relaxed">
      반영구 눈썹 전문 시술 &nbsp;·&nbsp; 원장 박연두<br/>
      Instagram @fimbrow &nbsp;·&nbsp; blog.naver.com/fimbrow
    </p>
  </footer>
);

export default function TreatmentPage() {
  return (
    <>
      <TreatmentHero />
      <TreatmentNumbers />
      <Services />
      <TreatmentProcess />
      <TreatmentPhilosophy />
      <InstructorBrief />
      <TreatmentSlider />
      <TreatmentBooking />
      <CourseBanner />
      <TreatmentFooter />
    </>
  );
}
