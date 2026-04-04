import React, { useState } from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-end px-8 md:px-16 pb-20 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/course-hero.mp4"
        autoPlay muted playsInline loop
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

      <div className="relative z-10 max-w-[700px]" style={{ animation: 'fadeUp .8s ease both' }}>
        <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/40 mb-6">Master Class</p>
        <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] font-light leading-[0.9] text-white mb-8">
          FIMBROW<br/>
          <span className="text-white/50">MASTER CLASS</span>
        </h1>
        <p className="text-sm text-white/50 leading-relaxed mb-10 max-w-[400px]">
          처음부터 제대로 배우는 반영구 눈썹 전문 교육.<br/>
          12년 임상 노하우를 전수합니다.
        </p>
        <div className="flex gap-4">
          <a href="https://naver.me/5FDkwFEN" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-main-dark text-[0.7rem] font-medium tracking-[0.2em] uppercase hover:opacity-80 transition-opacity">
            Apply Now
          </a>
          <a href="#curriculum" className="px-8 py-3 border border-white/30 text-white text-[0.7rem] tracking-[0.2em] uppercase hover:bg-white hover:text-main-dark transition-all">
            Curriculum
          </a>
        </div>
      </div>
    </section>
  );
};

const Numbers: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-12">Numbers</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/10">
        {[
          { val: '12', unit: '년', label: '임상 경력' },
          { val: '15,000', unit: '명', label: '누적 시술' },
          { val: '4주+56', unit: 'h', label: '교육 시간' },
          { val: '4', unit: '명', label: '최대 인원' },
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

const WhyThisJob: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-darker">
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Why This Job</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white leading-snug mb-8">
          내 시간을<br/>내가 정하는 삶
        </h2>
        <p className="text-sm text-white/40 leading-relaxed">
          출퇴근도, 상사도, 정해진 월급도 없습니다.<br/>
          하루 2~3건 시술로도 충분한 수입을 만들 수 있는 직업.<br/>
          아이를 키우면서도, 혼자서도, 어디서든.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {['자유로운 시간', '장소의 자유', '높은 수익성', '평생 기술'].map((tag, idx) => (
          <div key={idx} className="p-6 bg-white/[0.02] border border-white/5">
            <span className="text-sm text-white/60">{tag}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MarketGrowth: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Market</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">반영구 시장은<br/>매년 성장하고 있습니다</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          { title: '꾸준한 수요', desc: '눈썹 반영구는 유행이 아닌\n일상이 되었습니다' },
          { title: '낮은 진입 비용', desc: '큰 매장 없이도\n1인 창업이 가능합니다' },
          { title: '높은 재방문율', desc: '한 번 오신 고객은\n꾸준히 다시 찾습니다' },
        ].map((item, idx) => (
          <div key={idx} className="p-8 bg-white/[0.02] border border-white/5">
            <span className="font-serif text-4xl text-white/5 block mb-6">0{idx + 1}</span>
            <h4 className="text-sm font-medium text-white tracking-wider mb-3">{item.title}</h4>
            <p className="text-xs text-white/35 leading-relaxed whitespace-pre-line">{item.desc}</p>
          </div>
        ))}
      </div>

      <p className="font-serif text-[clamp(1.2rem,2.5vw,1.8rem)] text-white/60 italic mt-16 text-center">
        "제대로 배우면, 평생 나를 지켜줄 기술이 됩니다."
      </p>
    </div>
  </section>
);

const Urgency: React.FC = () => (
  <section className="py-20 px-8 md:px-16 bg-main-darker border-y border-white/5">
    <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div>
        <p className="text-[0.6rem] tracking-[0.4em] uppercase text-accent mb-3">Limited</p>
        <h3 className="font-serif text-3xl font-light text-white">2026년 6월 마감</h3>
        <p className="text-sm text-white/40 mt-2">통합 커리큘럼 마지막 기수 · 교육지원금 100만원 마지막 적용</p>
      </div>
      <a href="https://naver.me/5FDkwFEN" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-white text-main-dark text-[0.7rem] font-medium tracking-[0.2em] uppercase hover:opacity-80 transition-opacity shrink-0">
        Apply Now
      </a>
    </div>
  </section>
);

const Philosophy: React.FC = () => (
  <section className="relative py-32 px-8 md:px-16 overflow-hidden">
    <img src="/profile2.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10 max-w-[600px]">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/40 mb-6">Education Philosophy</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white leading-snug mb-8">
        처음부터 제대로 배웠다면<br/>
        이 고객은 피해자가<br/>되지 않았을 텐데.
      </h2>
      <p className="text-sm text-white/50 leading-relaxed">
        12년 동안 1.5만 명의 고객을 시술하며,<br/>
        안타까운 경우를 너무 많이 봤습니다.<br/>
        기술만 가르치는 교육이 아니라,<br/>
        올바른 방향을 알려주는 교육을 만들었습니다.
      </p>
      <p className="text-xs text-white/30 tracking-wider mt-8">— 12년 동안, 수없이 반복한 생각</p>
    </div>
  </section>
);

const InstructorSection: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Instructor</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">대표원장 박연두</h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <img src="/profile.jpeg" alt="핌브로우 원장" className="w-full aspect-[3/4] object-cover rounded-sm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 mb-6">약력</p>
            {[
              '동주대학교 미용과 졸업', '아리아 웨딩 메이크업', '화미주 헤어메이크업 · 반영구 원장',
              '아르현 헤어메이크업 · 반영구 원장', '서울 화보촬영 메이크업', '메이크업 · 반영구 중국 진출',
              '전) 야나뷰티 아카데미 대표원장', '코코뷰티아카데미', '에버핑키쉬', '컬러몬스터',
              '사) 대한문신사중앙회', '열사대 뷰티건강디자인학과 재학', '서울대 K뷰티 컨설팅 최고위과정 강사',
            ].map((item, i) => (
              <p key={i} className="text-xs text-white/35 py-1.5 border-b border-white/3 leading-snug">{item}</p>
            ))}
            <p className="text-xs text-white font-medium py-1.5 mt-1">현) 핌브로우 스튜디오 대표원장</p>
          </div>
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 mb-6">수상경력</p>
            {[
              '메이크업아티스트 3급', '무대분장사 2급', '방송분장사 2급', 'IFBC 반영구 강사자격증',
              '제6회 부산광역시장배 은상', '제11회 동주대미용경진대회 대상',
              'IBO국제미용올림픽 대상 (바디페인팅)', '제1회 PTS문화예술대전 PMU엠보 대상',
              '제24회 국제뷰티아티스트 그랑프리', '제24회 국제뷰티아티스트 국회의원상',
              '제2회 월드뷰티디자인 그랑프리 (엠보)', '제2회 소상공인기능경진대회 국회의원상',
              '제2회 월드뷰티디자인콘테스트 심사위원',
            ].map((item, i) => (
              <p key={i} className="text-xs text-white/35 py-1.5 border-b border-white/3 leading-snug">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TechniqueSection: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-darker">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Technique</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">이런 기법을 배우실 거예요</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          { src: '/gomupan-embo.jpeg', name: '엠보', eng: 'EMBO', desc: '한 올 한 올 자연스러운 결을 표현하는 기법' },
          { src: '/gomupan-suji.jpeg', name: '수지', eng: 'SUJI', desc: '파우더처럼 부드러운 그라데이션 채움 기법' },
          { src: '/gomupan-combo.jpeg', name: '콤보', eng: 'COMBO', desc: '엠보의 결 + 수지의 채움을 결합한 기법' },
        ].map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden">
            <img src={item.src} alt={item.name} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50 mb-1">{item.eng}</p>
              <h3 className="font-serif text-2xl font-light text-white mb-1">{item.name}</h3>
              <p className="text-xs text-white/50">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Difference: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Why Only 4</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-4">
        왜 한 기수에 4명만 모집할까요?
      </h2>
      <p className="text-sm text-white/40 italic mb-16">"교육의 질을 희석하지 않기 위해서입니다."</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          { num: '01', title: '개인 핸들링 교정', desc: '모든 사람의 손과 습관은 다릅니다. 개인별 1:1 교정을 위해 소수 인원이 필수입니다.' },
          { num: '02', title: '도제식 교육', desc: '한 명의 스승이 제자에게 기술을 전수하고, 현장 중심으로 학습하는 방식입니다.' },
          { num: '03', title: '대모 실습', desc: '최소 3~5시간 전 과정을 원장이 옆에서 직접 피드백합니다. 이것이 진짜 대모입니다.' },
        ].map((item, idx) => (
          <div key={idx} className="p-8 bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors">
            <span className="font-serif text-4xl text-white/5 block mb-6">{item.num}</span>
            <h4 className="text-sm font-medium text-white tracking-wider mb-3">{item.title}</h4>
            <p className="text-xs text-white/35 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Curriculum: React.FC = () => (
  <section id="curriculum" className="py-24 px-8 md:px-16 bg-main-darker">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Curriculum</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">커리큘럼</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
        <div className="flex items-center gap-6">
          <span className="font-serif text-5xl text-white/10">01</span>
          <div>
            <h4 className="text-sm font-medium text-white tracking-wider">온라인 4주</h4>
            <p className="text-xs text-white/35 mt-1">디자인 기초 · 결 드로잉 기초 분석</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-serif text-5xl text-white/10">02</span>
          <div>
            <h4 className="text-sm font-medium text-white tracking-wider">오프라인 2개월</h4>
            <p className="text-xs text-white/35 mt-1">매주 화요일 7시간 (총 56시간)</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/30 mb-6">본 수업 커리큘럼</p>
        <div className="flex flex-wrap gap-2">
          {['피부학', '색소학', '위생학', '디자인', '드로잉', '고무판 실습', '핸들링 교정', '미세한 압 조절 훈련', '엠보', '수지', '콤보', '잔흔 커버', '비대칭 교정 원리'].map((item, i) => (
            <span key={i} className="text-xs text-white/50 px-4 py-2 border border-white/5">{item}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-12">
        <div className="p-6 bg-white/[0.02] border border-white/5">
          <h4 className="text-sm text-white mb-1">졸업 후 추가 피드백 수업</h4>
          <p className="text-xs text-white/30">졸업 한 달 후 7시간 추가 피드백</p>
        </div>
        <div className="p-6 bg-white/[0.02] border border-white/5">
          <h4 className="text-sm text-white mb-1">졸업 후 무한 피드백</h4>
          <p className="text-xs text-white/30">졸업 이후에도 피드백은 계속됩니다</p>
        </div>
      </div>
    </div>
  </section>
);

const Environment: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Environment</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">교육 환경</h2>

      <div className="grid grid-cols-3 gap-1">
        <div className="overflow-hidden"><img src="/teaching1.jpeg" alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" /></div>
        <div className="overflow-hidden"><img src="/teaching2.jpeg" alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" /></div>
        <div className="overflow-hidden"><img src="/teaching3.jpeg" alt="" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" /></div>
      </div>
    </div>
  </section>
);

const Materials: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-darker">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Included</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">제공 자료</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {[
          { name: '이론북', note: '280페이지' },
          { name: '드로잉북', note: '131페이지' },
          { name: '실제 사용 니들', note: '현장 동일' },
          { name: '기초 색소 · 재료', note: '수업 필요 재료 일체' },
          { name: '졸업 후 피드백 수업', note: '졸업 한 달 후 7시간' },
          { name: '평생 무한 피드백', note: '졸업 후에도 계속' },
        ].map((mat, idx) => (
          <div key={idx} className="p-6 bg-white/[0.02] border border-white/5">
            <h4 className="text-sm text-white mb-1">{mat.name}</h4>
            <p className="text-xs text-white/30">{mat.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GraduationPhotos: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Together</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">함께한 순간들</h2>

      <div className="grid grid-cols-3 gap-1">
        {[
          { src: '/together1.jpeg', label: '서울대 K뷰티 과정' },
          { src: '/together2.jpeg', label: '수강생 단체' },
          { src: '/together3.jpeg', label: '수료식' },
        ].map((item, idx) => (
          <div key={idx} className="overflow-hidden">
            <img src={item.src} alt={item.label} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const reviewImages = [
  '/review1.jpeg', '/review2.jpeg', '/review3.jpeg',
  '/review4.jpeg', '/review5.jpeg', '/review6.jpeg',
  '/review7.jpeg', '/review8.jpeg', '/review9.jpeg',
  '/review10.jpeg',
];

const ReviewSlider: React.FC = () => (
  <section className="py-24 px-0 bg-main-darker overflow-hidden">
    <div className="max-w-[1100px] mx-auto px-8 md:px-16 mb-16">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Reviews</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white">수강생 후기</h2>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-main-darker to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-main-darker to-transparent z-10 pointer-events-none"></div>
      <div className="animate-marquee flex gap-3 w-max">
        {[...reviewImages, ...reviewImages].map((src, idx) => (
          <img key={idx} src={src} alt="" className="h-[400px] md:h-[500px] w-auto rounded-sm object-cover shrink-0" />
        ))}
      </div>
    </div>
  </section>
);

const Pricing: React.FC = () => (
  <section className="py-24 px-8 md:px-16 bg-main-dark">
    <div className="max-w-[1100px] mx-auto">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Investment</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-16">수강료</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="border border-white/10 p-8">
          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-accent mb-4">2026 Master Class</p>
          <h3 className="font-serif text-2xl text-white mb-1">창업반 / 재수강</h3>
          <p className="text-xs text-white/30 mb-8">엠보 · 수지 · 콤보 · 잔흔커버 · 비대칭교정 통합</p>

          {[
            ['수업 구성', '온라인 4주 + 본수업 2개월'],
            ['교육 시간', '56시간'],
            ['수강 인원', '최대 4인'],
            ['대모 실습', '최대 4회'],
            ['졸업 후 피드백', '무한 제공'],
          ].map(([label, value], idx) => (
            <div key={idx} className="flex justify-between items-center py-3 border-b border-white/5 text-sm">
              <span className="text-white/30">{label}</span>
              <span className="text-white text-xs">{value}</span>
            </div>
          ))}

          <div className="mt-8 flex items-baseline gap-4">
            <span className="text-sm text-white/30 line-through">정가 700만원</span>
            <span className="font-serif text-4xl text-white">600만원</span>
          </div>
          <p className="text-xs text-white/20 mt-4 leading-relaxed">
            예약금 100만원 입금으로 기수 확정<br/>
            카카오뱅크 3333-17-7113215 · 예금주 박연두
          </p>
        </div>

        <div>
          <div className="border border-white/10 p-8 mb-6">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30 mb-6">2026년 7월부터 변경</p>
            {[
              ['엠보 단과반 (5회)', '350만원'],
              ['수지 단과반 (5회)', '350만원'],
              ['엠보 + 수지 합산', '700만원'],
            ].map(([name, price], idx) => (
              <div key={idx} className="flex justify-between items-center py-3 border-b border-white/5 text-sm">
                <span className="text-white/40">{name}</span>
                <span className="font-serif text-lg text-white">{price}</span>
              </div>
            ))}
            <p className="text-xs text-white/20 mt-6 leading-relaxed">
              6월까지는 통합 커리큘럼을 600만원에 수강하실 수 있습니다.
            </p>
          </div>
          <a href="https://naver.me/5FDkwFEN" target="_blank" rel="noopener noreferrer" className="block w-full py-5 bg-white text-main-dark text-center text-[0.7rem] font-medium tracking-[0.2em] uppercase hover:opacity-80 transition-opacity">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  </section>
);

const CourseFAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: '반영구 경험이 전혀 없어도 수강할 수 있나요?', a: '네, 가능합니다. 완전 입문자도 수강 가능하도록 기초부터 체계적으로 교육합니다. 온라인 사전 교육 4주를 통해 기본기를 먼저 다진 후 본 수업에 들어갑니다.' },
    { q: '수업 일정은 어떻게 되나요?', a: '온라인 4주 사전 교육 후, 오프라인 본 수업은 매주 화요일 7시간씩 2개월간 진행됩니다. 총 56시간의 교육과 최대 4회의 대모 실습이 포함됩니다.' },
    { q: '수강 후 바로 창업이 가능한가요?', a: '졸업 후 대모 실습과 피드백 수업을 통해 실전 감각을 충분히 익힌 뒤 창업하시는 것을 권장합니다. 졸업 후에도 무한 피드백을 제공하므로 안심하고 시작하실 수 있습니다.' },
    { q: '수강료 분할 납부가 가능한가요?', a: '예약금 100만원 입금으로 기수를 확정하고, 잔금은 수업 전날까지 납부하시면 됩니다. 카드 결제 시 부가세 10%가 별도 적용됩니다.' },
    { q: '졸업 후 피드백은 어떻게 진행되나요?', a: '졸업 한 달 후 7시간 추가 피드백 수업이 포함되어 있으며, 이후에도 평생 무한 피드백을 제공합니다. 카카오톡이나 방문을 통해 언제든 피드백을 받으실 수 있습니다.' },
    { q: '중도 취소 및 환불이 가능한가요?', a: '영상 및 자료가 사전 제공되므로, 수업 시작 후 중도 취소 시 환불이 어렵습니다. 수강 의지가 확실한 분만 신청해 주시기 바랍니다.' },
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

const ApplicationForm: React.FC = () => (
  <section id="application" className="py-24 px-8 md:px-16 bg-main-darker">
    <div className="max-w-[640px] mx-auto text-center">
      <p className="text-[0.6rem] tracking-[0.4em] uppercase text-white/30 mb-4">Apply</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-white mb-4">수강 상담 신청</h2>
      <p className="text-sm text-white/30 mb-12">아래 버튼을 눌러 신청서를 작성해 주세요.</p>
      <a
        href="https://naver.me/5FDkwFEN"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-12 py-5 bg-white text-main-dark text-[0.7rem] font-medium tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
      >
        수강 신청하기
      </a>
      <p className="text-xs text-white/15 mt-8 leading-relaxed">
        ※ 교육 상담은 신청 순서대로 진행됩니다.<br/>
        ※ 수강 의지가 확실한 분만 신청해 주시기 바랍니다.
      </p>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-16 px-8 md:px-16 bg-main-dark border-t border-white/5">
    <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:justify-between gap-8">
      <div>
        <div className="font-serif text-2xl tracking-[0.3em] text-white font-light mb-4">FIMBROW</div>
        <p className="text-xs text-white/20 leading-relaxed">
          반영구 눈썹 전문 교육 · 원장 박연두
        </p>
      </div>
      <div className="text-right">
        <p className="text-xs text-white/20 leading-relaxed">
          Instagram @fimbrow<br/>
          <a href="https://naver.me/xWzYgRCz" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">네이버플레이스</a><br/><br/>
          교육 내용의 무단 복제 및 배포를 금합니다.
        </p>
      </div>
    </div>
  </footer>
);

export default function CoursePage() {
  return (
    <>
      <Hero />
      <Numbers />
      <WhyThisJob />
      <MarketGrowth />
      <Urgency />
      <Philosophy />
      <InstructorSection />
      <TechniqueSection />
      <Difference />
      <Curriculum />
      <Environment />
      <Materials />
      <GraduationPhotos />
      <ReviewSlider />
      <Pricing />
      <CourseFAQ />
      <ApplicationForm />
      <Footer />
    </>
  );
}
