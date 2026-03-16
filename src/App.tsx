import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- Components ---

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-wg h-[60px] flex items-center px-6 md:px-12 justify-between">
    <a href="#" className="font-serif text-lg tracking-[0.35em] text-g font-semibold">FIMBROW</a>
    <a
      href="#application"
      className="px-5 py-2 bg-g text-white text-xs font-medium tracking-wider hover:opacity-70 transition-opacity"
    >
      수강 상담 신청
    </a>
  </nav>
);

const videos = ['/hero1.mp4', '/hero2.mp4', '/hero3.mp4'];

const Hero: React.FC = () => {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[60px] px-6 overflow-hidden bg-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        src={videos[videoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
      />

      <div className="relative z-10 max-w-[640px] text-center" style={{ animation: 'fadeUp .65s ease both' }}>
        {/* Eyebrow */}
        <p className="text-[0.65rem] tracking-[0.38em] uppercase text-rose mb-12 flex items-center justify-center gap-3">
          <span className="w-5 h-px bg-rose/50"></span>
          반영구 눈썹 전문 교육
          <span className="w-5 h-px bg-rose/50"></span>
        </p>

        {/* Q&A */}
        <div className="mb-14" style={{ animation: 'fadeUp .65s ease .15s both' }}>
          <p className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] text-muted mb-4 leading-relaxed">
            잘하는 사람은 처음부터 달랐을까요?
          </p>
          <div className="w-px h-7 bg-rose/40 mx-auto mb-4"></div>
          <h1 className="font-serif text-[clamp(2rem,4.5vw,3.6rem)] font-bold italic leading-tight">
            <span className="text-g">아닙니다.&nbsp;</span>
            <span className="text-burg">배운 방법이</span>
            <span className="text-g"> 달랐습니다.</span>
          </h1>
        </div>

        {/* Info */}
        <div className="border-t border-wg pt-8 mb-10 flex flex-col items-center gap-2" style={{ animation: 'fadeUp .65s ease .3s both' }}>
          <p className="text-sm text-muted">12년 임상 · 15,000명 시술 데이터를 바탕으로</p>
          <p className="text-base text-burg font-medium">엠보 · 수지 · 콤보 · 잔흔커버 · 비대칭교정</p>
          <div className="h-4"></div>
          <p className="text-sm text-muted">처음부터 제대로 배우는</p>
          <p className="font-serif text-lg tracking-[0.32em] text-g font-semibold mt-2">FIMBROW MASTER CLASS</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mb-8" style={{ animation: 'fadeUp .65s ease .52s both' }}>
          <a href="#application" className="px-11 py-4 bg-g text-white text-sm font-medium tracking-wider hover:opacity-70 transition-opacity">
            수강 상담 신청하기
          </a>
          <a href="#curriculum" className="px-9 py-3 border border-beige text-g text-sm tracking-wider hover:border-g transition-colors">
            커리큘럼 보기
          </a>
        </div>

        {/* Badge row */}
        <div className="flex items-center justify-center gap-2 flex-wrap text-xs text-muted" style={{ animation: 'fadeUp .65s ease .42s both' }}>
          <span>한 기수 최대 4명</span>
          <span className="w-1 h-1 bg-beige rounded-full"></span>
          <span>도제식 집중 교육</span>
          <span className="w-1 h-1 bg-beige rounded-full"></span>
          <span className="text-burg font-semibold">2026년 6월 곧 마감</span>
        </div>
      </div>
    </section>
  );
};

// --- Numbers ---
const Numbers: React.FC = () => (
  <section className="py-20 px-6 bg-g text-white text-center">
    <div className="max-w-[680px] mx-auto mb-10">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-beige mb-4 inline-block">Numbers</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white leading-snug">숫자로 보는 핌브로우</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 max-w-[900px] mx-auto border border-white/10">
      {[
        { val: '12년', label: '임상 경력' },
        { val: '15,000명', label: '누적 시술' },
        { val: '4주 + 56시간', label: '온라인 4주 + 본교육 56시간' },
        { val: '4명', label: '최대 수강 인원' },
      ].map((item, idx) => (
        <div key={idx} className="py-12 px-6 text-center border-r border-b border-white/10 last:border-r-0">
          <div className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold text-beige leading-none">{item.val}</div>
          <div className="text-sm text-white/50 mt-2 leading-relaxed">{item.label}</div>
        </div>
      ))}
    </div>
  </section>
);

// --- Urgency ---
const Urgency: React.FC = () => (
  <section className="py-20 px-6 bg-burg text-center">
    <span className="text-xs font-bold tracking-[0.35em] uppercase text-beige/70 mb-5 inline-block">Why Now</span>
    <h2 className="font-serif text-[clamp(1.4rem,3vw,2.2rem)] font-semibold text-white mb-8 leading-snug">지금 신청해야 하는 이유</h2>
    <div className="w-7 h-px bg-beige/40 mx-auto mb-8"></div>
    <p className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-bold text-beige italic leading-snug mb-10">
      이번 기수는<br/>혜택가로 수강할 수 있는<br/>마지막 기회입니다
    </p>
    <ul className="max-w-[480px] mx-auto text-sm text-white/60 space-y-3">
      {['2026년 6월 마지막 100만원 할인', '인원 마감 시 조기 종료됩니다'].map((li, i) => (
        <li key={i} className="flex items-center justify-center gap-2 py-1 border-b border-white/10">
          <span className="w-1 h-1 bg-beige rounded-full shrink-0"></span>
          {li}
        </li>
      ))}
    </ul>
    <a href="#application" className="inline-block mt-10 px-11 py-4 bg-beige text-burg font-bold text-sm tracking-wider hover:opacity-80 transition-opacity">
      지금 상담 신청하기
    </a>
  </section>
);

// --- Problem ---
const Problem: React.FC = () => (
  <section className="py-24 px-6 bg-white text-center">
    <div className="max-w-[680px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">The Problem</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g leading-snug">
        왜 많은 반영구 시술이<br/>시간이 지나면 잔흔이 될까요?
      </h2>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>
      <p className="text-muted leading-relaxed">반영구 시장에는 수많은 기술이 있습니다.</p>

      <p className="text-[0.68rem] tracking-[0.22em] uppercase text-muted font-semibold mt-7 mb-2">기술 종류</p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 max-w-[440px] mx-auto">
        {['엠보', '수지', '콤보', '페더링', '옴브레'].map(t => (
          <span key={t} className="font-serif text-sm italic text-muted">{t}</span>
        ))}
      </div>

      <div className="inline-block mt-6 px-8 py-5 bg-beige-pale border-l-[3px] border-burg max-w-[480px] text-base text-muted leading-relaxed">
        핌브로우 마스터반은 이 중에서<br/>
        <strong className="text-burg font-bold text-lg">엠보 · 수지 · 콤보</strong>를<br/>
        전문적으로, 처음부터 제대로 가르칩니다.
      </div>
    </div>

    {/* Basics block */}
    <div className="max-w-[520px] mx-auto mt-10 p-8 bg-g text-center">
      <p className="text-sm text-white/45 mb-5">하지만 기술의 종류보다 중요한 것은</p>
      <div className="flex flex-wrap justify-center gap-1 mb-5">
        {['피부 이해', '색소 이해', '도구 이해', '압 · 각도 조절', '디자인 해석'].map(t => (
          <span key={t} className="text-xs text-white/80 border border-white/20 px-3 py-1 whitespace-nowrap">{t}</span>
        ))}
      </div>
      <p className="text-sm text-white/40 leading-relaxed">이 기본이 빠지면<br/>결국 고객 피부에는 흔적이 남습니다.</p>
    </div>

    <div className="max-w-[680px] mx-auto mt-10 text-center">
      <p className="font-serif text-[clamp(1.4rem,3vw,2.2rem)] font-semibold italic text-g leading-relaxed">
        <mark className="bg-transparent" style={{ background: 'linear-gradient(transparent 55%, rgba(201,163,163,.45) 55%)' }}>잔흔 없는 시술은</mark><br/>
        <mark className="bg-transparent" style={{ background: 'linear-gradient(transparent 55%, rgba(201,163,163,.45) 55%)' }}>우연히 만들어지지 않습니다.</mark>
      </p>
    </div>
  </section>
);

// --- Market ---
const Market: React.FC = () => (
  <section className="py-24 px-6 bg-beige-pale text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Market Reality</span>
      <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-g leading-snug">
        그래서 지금 반영구 시장은<br/>잔흔 커버 시술이 늘어나고 있습니다
      </h2>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>
      <div className="grid grid-cols-3 gap-4 max-w-[800px] mx-auto mt-8">
        {['잔흔 사례 1', '잔흔 사례 2', '잔흔 사례 3'].map((label, idx) => (
          <div key={idx} className="aspect-[4/3] bg-wg flex flex-col items-center justify-center gap-2">
            <span className="text-2xl opacity-20">🖼</span>
            <span className="text-[0.65rem] tracking-wider uppercase text-muted/50">{label}</span>
          </div>
        ))}
      </div>
      <p className="font-serif text-[clamp(1.3rem,2.5vw,2rem)] italic font-bold text-burg mt-8 leading-relaxed">
        "잘못된 시술 하나가 평생을 남깁니다."
      </p>
    </div>
  </section>
);

// --- Philosophy ---
const Philosophy: React.FC = () => (
  <section className="py-24 px-6 bg-g text-white text-center">
    <div className="max-w-[680px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-beige mb-5 inline-block">Education Philosophy</span>

      {/* Big quote */}
      <div className="max-w-[500px] mx-auto mb-14">
        <span className="font-serif text-5xl text-beige/50 block mb-4">&ldquo;</span>
        <div className="flex flex-col gap-4">
          <span className="font-serif text-[clamp(1.3rem,2.8vw,1.9rem)] italic text-white/75">나도 할 수 있을까?</span>
          <span className="font-serif text-[clamp(1.3rem,2.8vw,1.9rem)] italic text-white/75">왜 나는 안 되는 걸까?</span>
        </div>
        <span className="font-serif text-5xl text-beige/50 block mt-4">&rdquo;</span>
      </div>

      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white">그래서<br/>이 수업을 만들었습니다</h2>
      <div className="w-7 h-px bg-beige mx-auto my-6"></div>
    </div>

    {/* Philosophy card */}
    <div className="max-w-[560px] mx-auto mb-12 p-10 border border-white/10 relative">
      <span className="absolute -top-6 left-6 font-serif text-[8rem] text-white/5 leading-none">&ldquo;</span>
      <p className="font-serif text-lg text-white/85 leading-relaxed italic relative z-10">
        "처음부터 제대로 배웠다면<br/>이 고객은 피해자가 되지 않았을 텐데."
      </p>
      <p className="text-xs text-white/30 tracking-wider mt-6">— 12년 동안, 수없이 반복한 생각</p>
    </div>

    <div className="max-w-[560px] mx-auto text-sm text-white/50 leading-relaxed space-y-4">
      <p>12년 동안 1.5만 명의 고객을 시술하며,<br/>안타까운 경우를 너무 많이 봤습니다.</p>
      <p>그래서 만들었습니다.<br/><strong className="text-white/85 font-medium">기술만 가르치는 교육이 아니라, 올바른 방향을 알려주는 교육을.</strong></p>
      <p>단 한 명의 피해자도 만들지 않고,<br/>단 한 명이라도 처음부터 제대로 배울 수 있도록.</p>
    </div>
  </section>
);

// --- Instructor ---
const InstructorSection: React.FC = () => (
  <section className="py-24 px-6 bg-white text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Instructor</span>

      {/* Profile photo */}
      <div className="w-[min(300px,78%)] mx-auto mb-10">
        <img src="/profile.jpeg" alt="핌브로우 원장" className="w-full object-cover aspect-[3/4] bg-beige-pale border border-wg" />
      </div>

      <div className="font-serif text-2xl tracking-[0.25em] text-g font-semibold">FIMBROW STUDIO</div>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>

      <ul className="max-w-[360px] mx-auto">
        {['반영구 12년 경력', '누적 시술 15,000명', '아치 디자인 전문', '잔흔 커버 전문', '비대칭 교정 전문'].map((spec, i) => (
          <li key={i} className="flex items-center justify-center gap-3 py-3 border-b border-wg text-sm text-muted last:border-b-0">
            <span className="w-1 h-1 bg-rose rounded-full shrink-0"></span>
            {spec}
          </li>
        ))}
      </ul>

      {/* Career 2-column */}
      <div className="max-w-[960px] mx-auto mt-10 pt-10 border-t border-wg grid grid-cols-2 gap-4 md:gap-10 text-left">
        <div>
          <h4 className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-rose mb-4 text-center">박연두 대표원장 · 약력</h4>
          <ul className="space-y-0">
            {[
              '동주대학교 미용과 졸업', '아리아 웨딩 메이크업', '화미주 헤어메이크업 · 반영구 원장',
              '아르현 헤어메이크업 · 반영구 원장', '서울 화보촬영 메이크업', '메이크업 · 반영구 중국 진출',
              '전) 야나뷰티 아카데미 대표원장', '코코뷰티아카데미', '에버핑키쉬', '컬러몬스터',
              '사) 대한문신사중앙회', '열사대 뷰티건강디자인학과 재학', '서울대 K뷰티 컨설팅 최고위과정 강사',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 py-1.5 border-b border-wg text-xs text-muted leading-snug">
                <span className="text-beige shrink-0">·</span>{item}
              </li>
            ))}
            <li className="flex items-start gap-2 py-1.5 text-xs text-g font-medium leading-snug">
              <span className="text-beige shrink-0">·</span>현) 핌브로우 스튜디오 대표원장
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[0.65rem] font-bold tracking-[0.28em] uppercase text-rose mb-4 text-center">자격증 및 수상경력</h4>
          <ul className="space-y-0">
            {[
              '메이크업아티스트 3급', '무대분장사 2급', '방송분장사 2급', '업스타일 3급 · 2급',
              '교원자격증', 'IFBC 반영구 강사자격증',
              '제6회 부산광역시장배 은상 (환타지메이크업)', '제11회 동주대미용경진대회 대상 (환타지메이크업)',
              '제7회 부산광역시장배 은상 (환타지메이크업)', 'IBO국제미용올림픽기능경기대회 대상 (바디페인팅)',
              '제1회 PTS문화예술대전 PMU엠보 대상', '제1회 PTS문화예술대전 PMU수지 금상',
              '제24회 국제뷰티아티스트 그랑프리 (콤보눈썹)', '제24회 국제뷰티아티스트 국회의원상',
              '제2회 월드뷰티디자인콘테스트 그랑프리 (엠보)',
              '제2회 소상공인기능경진대회 PTS ART WORK 은상', '제2회 소상공인기능경진대회 PTS 국회의원상',
              '제2회 소상공인기능경진대회 PTS 특별 심사위원',
              '제2회 월드뷰티디자인콘테스트 심사위원 (반영구 수지)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 py-1.5 border-b border-wg text-xs text-muted leading-snug">
                <span className="text-beige shrink-0">·</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a href="#application" className="inline-block mt-10 px-11 py-4 bg-g text-white text-sm font-medium tracking-wider hover:opacity-70 transition-opacity">
        수강 상담 신청하기
      </a>
    </div>
  </section>
);

// --- Results ---
const Results: React.FC = () => (
  <section className="py-24 px-6 bg-beige-pale text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Clinical Results</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g">15,000명 임상에서 나온 결과</h2>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>
      <p className="text-sm text-muted font-serif italic">좋은 반영구는 시간이 지나도 자연스럽습니다</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {['엠보', '수지', '콤보', '잔흔 커버', '잔흔 커버', '비대칭 교정'].map((type, idx) => (
          <div key={idx} className="bg-white border border-wg overflow-hidden">
            <div className="grid grid-cols-2 gap-px bg-wg">
              <div className="aspect-square bg-wg flex items-center justify-center text-[0.6rem] tracking-wider uppercase text-muted/50">Before</div>
              <div className="aspect-square bg-wg flex items-center justify-center text-[0.6rem] tracking-wider uppercase text-muted/50">After</div>
            </div>
            <div className="px-4 py-3 flex justify-between items-center">
              <span className="text-xs text-g font-medium">{type}</span>
              <span className="text-xs text-beige">B→A</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted mt-6 font-serif italic">실제 시술 사진은 수강 상담 시 확인하실 수 있습니다</p>
    </div>
  </section>
);

// --- Difference (Why 4) ---
const Difference: React.FC = () => (
  <section className="py-24 px-6 bg-white text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Why Only 4</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g">
        왜 한 기수에 <span className="text-burg text-[calc(clamp(2rem,4vw,3.2rem)+3pt)]">4명만</span> 모집할까요?
      </h2>
      <p className="font-serif text-[clamp(1rem,2vw,1.4rem)] italic text-burg mt-4">
        "교육의 질을 희석하지 않기 위해서 입니다."
      </p>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>

      <div className="flex flex-col gap-4 max-w-[700px] mx-auto mt-8">
        {[
          {
            icon: '✋🏻', num: 'Point 01', title: '개인 핸들링 교정',
            tags: ['손 크기', '자세 습관', '각도 · 압', '속도 조절'],
            body: '모든 사람의 손과 습관은 다릅니다. 이 차이를 개인별로 1:1 교정하기 위해서는 소수 인원이 필수입니다.'
          },
          {
            icon: '🎓', num: 'Point 02', title: '도제식 교육',
            tags: ['2~4인 소수', '현장 중심'],
            body: '한 명의 스승이 제자에게 지식이나 기술을 전수하고, 현장 중심으로 학습하는 방식입니다.'
          },
          {
            icon: '👥', num: 'Point 03', title: '대모 실습',
            tags: ['최대 4회', '원장 동석', '처음부터 끝까지 피드백'],
            body: '대모는 최소 3~5시간이 걸립니다. 그 전 과정을 원장이 옆에서 직접 피드백합니다. 이것이 진짜 대모입니다.'
          },
        ].map((item, idx) => (
          <div key={idx} className="border border-wg p-6 md:p-8 text-left flex flex-col md:flex-row gap-4 md:gap-6 items-start hover:border-rose transition-colors">
            <div className="w-12 h-12 bg-rose-pale rounded-full flex items-center justify-center text-2xl shrink-0">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="text-[0.63rem] tracking-wider text-rose font-bold mb-1 uppercase">{item.num}</div>
              <div className="font-serif text-lg font-semibold text-g mb-2">{item.title}</div>
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags.map((t, i) => (
                  <span key={i} className="text-xs bg-wg text-muted px-2.5 py-0.5">{t}</span>
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Curriculum ---
const Curriculum: React.FC = () => (
  <section id="curriculum" className="py-24 px-6 bg-g text-white text-center">
    <div className="max-w-[680px] mx-auto">
      <span className="text-xs font-bold tracking-[0.22em] text-beige mb-5 inline-block">FIMBROW STUDIO</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-white">MASTER CLASS CURRICULUM</h2>
      <p className="text-sm text-white/35 tracking-wider mt-2">창업반 / 재수강</p>
      <div className="w-7 h-px bg-beige mx-auto my-6"></div>

      <div className="flex justify-center gap-16 flex-wrap mb-10">
        <div className="text-center">
          <div className="font-serif text-xl font-bold text-beige">온라인 4주</div>
          <div className="text-sm text-white/55 mt-1">사전 교육</div>
        </div>
        <div className="text-center">
          <div className="font-serif text-xl font-bold text-beige">오프라인 2개월</div>
          <div className="text-sm text-white/55 mt-1">매주 화요일 7시간 (56시간)</div>
        </div>
      </div>
    </div>

    <div className="max-w-[680px] mx-auto space-y-0.5">
      {[
        {
          badge: '온라인 4주', name: '사전 교육', dur: '수업 전 선행',
          items: ['디자인 기초', '결 드로잉 기초 분석']
        },
        {
          badge: '오프라인 2개월', name: '본 수업', dur: '매주 화요일 7시간',
          items: ['피부학', '색소학', '위생학', '디자인', '드로잉', '고무판 실습', '핸들링 교정', '미세한 압 조절 훈련', '엠보', '수지', '콤보', '잔흔 커버', '비대칭 교정 원리']
        },
        {
          badge: '대모 실습', name: '실제 모델 시술', dur: '최대 4회',
          items: ['실제 고객 모델 시술', '원장 처음부터 끝까지 동석 피드백']
        },
      ].map((phase, idx) => (
        <div key={idx}>
          <div className="flex items-center gap-4 px-5 py-4 bg-white/5 border-l-2 border-beige text-left">
            <span className="text-[0.62rem] font-bold tracking-wider uppercase text-beige bg-beige/10 px-2.5 py-0.5 shrink-0">{phase.badge}</span>
            <span className="text-sm text-white/80 font-medium flex-1">{phase.name}</span>
            <span className="text-xs text-white/30 shrink-0">{phase.dur}</span>
          </div>
          <div className="px-5 py-4 pl-14">
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {phase.items.map((item, i) => (
                <span key={i} className="text-xs text-white/50 flex items-center gap-1">
                  <span className="text-beige/30">—</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        <div className="bg-beige/5 border border-beige/15 p-5 text-left flex gap-3 items-start">
          <span className="text-base shrink-0">🎯</span>
          <div>
            <div className="text-sm text-beige font-medium mb-1">졸업 후 추가 피드백 수업</div>
            <div className="text-xs text-white/35 leading-relaxed">졸업 한 달 후 7시간 추가 피드백. 실제 시술 후 생긴 습관을 점검합니다.</div>
          </div>
        </div>
        <div className="bg-beige/5 border border-beige/15 p-5 text-left flex gap-3 items-start">
          <span className="text-base shrink-0">♾️</span>
          <div>
            <div className="text-sm text-beige font-medium mb-1">졸업 후 무한 피드백</div>
            <div className="text-xs text-white/35 leading-relaxed">졸업 이후에도 피드백은 계속됩니다. 실력은 연습과 피드백의 반복으로 만들어집니다.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Environment ---
const Environment: React.FC = () => (
  <section className="py-24 px-6 bg-beige-pale text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Class Environment</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g">교육 환경</h2>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 max-w-[900px] mx-auto mt-10">
        <div className="row-span-2 min-h-[320px] bg-wg flex flex-col items-center justify-center gap-2 p-10">
          <span className="text-3xl opacity-20">🖼</span>
          <span className="text-[0.68rem] tracking-wider uppercase text-muted/40">수업 모습</span>
        </div>
        <div className="aspect-square bg-wg flex flex-col items-center justify-center gap-2">
          <span className="text-xl opacity-20">🖼</span>
          <span className="text-[0.68rem] tracking-wider uppercase text-muted/40">드로잉 연습</span>
        </div>
        <div className="aspect-square bg-wg flex flex-col items-center justify-center gap-2">
          <span className="text-xl opacity-20">🖼</span>
          <span className="text-[0.68rem] tracking-wider uppercase text-muted/40">고무판 연습</span>
        </div>
      </div>
    </div>
  </section>
);

// --- Materials ---
const Materials: React.FC = () => (
  <section className="py-24 px-6 bg-white text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Included Materials</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g">수강 시 제공되는 자료</h2>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-[740px] mx-auto mt-10">
        {[
          { icon: '📖', name: '이론북', note: '280페이지', highlight: false },
          { icon: '✏️', name: '드로잉북', note: '131페이지', highlight: false },
          { icon: '🪡', name: '실제 사용 니들', note: '핌브로우 현장 사용', highlight: false },
          { icon: '🎨', name: '기초 색소 · 기본 재료', note: '수업 필요 재료 일체', highlight: false },
          { icon: '🎯', name: '졸업 후 추가 피드백 수업', note: '졸업 한 달 후 7시간', highlight: false },
          { icon: '♾️', name: '평생 무한 피드백', note: '졸업 후에도 계속됩니다', highlight: true },
        ].map((mat, idx) => (
          <div key={idx} className={`border p-6 text-center transition-colors hover:border-rose ${mat.highlight ? 'border-rose bg-rose-pale' : 'border-wg'}`}>
            <span className="text-2xl mb-3 block">{mat.icon}</span>
            <div className={`text-sm font-medium mb-1 leading-snug ${mat.highlight ? 'text-burg' : 'text-g'}`}>{mat.name}</div>
            <div className="text-xs text-muted">{mat.note}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Target ---
const TargetSection: React.FC = () => (
  <section className="py-24 px-6 bg-rose-pale text-center">
    <div className="max-w-[680px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Who This Is For</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g">이 수업은<br/>아무나 듣는 수업이 아닙니다.</h2>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>
      <p className="text-sm text-muted">이런 분들께 추천합니다.</p>

      <ul className="max-w-[480px] mx-auto mt-8">
        {[
          '기술을 제대로, 처음부터 배우고 싶은 분',
          '잔흔 없는 시술을 하고 싶은 분',
          '매일 연습을 지속할 의지가 있는 분',
          '반영구를 진짜 직업으로 만들 분',
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-4 py-4 border-b border-rose/20 first:border-t text-left text-sm text-g">
            <span className="w-5 h-5 border border-rose flex items-center justify-center text-rose text-xs shrink-0 mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="max-w-[480px] mx-auto mt-8 p-5 bg-rose/10 border-l-2 border-rose text-left text-sm text-muted leading-relaxed">
        저는 결과를 대신 만들어드리지 않습니다.<br/>
        10년 넘게 쌓은 임상 노하우로 '돌아갈 필요 없는 길'을 알려드릴 뿐입니다.<br/>
        그 길을 걷는 건 결국 <span className="text-burg font-semibold">원장님 자신</span>입니다.
      </div>
    </div>
  </section>
);

// --- Review Slider ---
const reviewImages = [
  '/review1.jpeg', '/review2.jpeg', '/review3.jpeg',
  '/review4.jpeg', '/review5.jpeg', '/review6.jpeg',
  '/review7.jpeg', '/review8.jpeg', '/review9.jpeg',
  '/review10.jpeg',
];

const ReviewSlider: React.FC = () => (
  <section className="py-24 px-0 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Reviews</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g">실제 수강생 후기</h2>
    </div>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      <div className="animate-marquee flex gap-6 w-max">
        {[...reviewImages, ...reviewImages].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`수강 후기 ${(idx % reviewImages.length) + 1}`}
            className="h-[400px] md:h-[500px] w-auto rounded-2xl object-cover shrink-0"
          />
        ))}
      </div>
    </div>
  </section>
);

// --- Pricing ---
const Pricing: React.FC = () => (
  <section className="py-24 px-6 bg-white text-center">
    <div className="max-w-[960px] mx-auto">
      <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Investment</span>
      <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g">수강료 안내</h2>
      <div className="w-7 h-px bg-rose mx-auto my-6"></div>

      {/* Banner */}
      <div className="max-w-[860px] mx-auto bg-burg px-6 py-5 flex flex-wrap items-center justify-center gap-2">
        <span className="text-base font-bold text-white tracking-wider">⚑ 2026년 6월 마감</span>
        <span className="w-1 h-1 bg-white/35 rounded-full"></span>
        <span className="text-sm text-white/65">통합 커리큘럼 마지막 기수</span>
        <span className="w-1 h-1 bg-white/35 rounded-full"></span>
        <span className="text-sm text-white/65">교육지원금 100만원 마지막 적용</span>
      </div>

      {/* Price layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto mt-6 text-left">
        {/* Left - Main price card */}
        <div className="border border-wg">
          <div className="bg-g p-8 text-center">
            <div className="text-[0.62rem] tracking-[0.28em] uppercase text-beige/55 mb-3">FIMBROW MASTER CLASS · 2026</div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-1">창업반 / 재수강</h3>
            <p className="text-xs text-white/40">엠보 · 수지 · 콤보 · 잔흔커버 · 비대칭교정 통합</p>
          </div>
          <div className="p-6">
            {[
              ['수업 구성', '온라인 4주 + 본수업 2개월'],
              ['본수업 교육 시간', '56시간 (49시간 + 졸업 후 피드백 7시간)'],
              ['수강 인원', '최대 4인'],
              ['대모 실습', '최대 4회'],
              ['졸업 후 피드백', '무한 제공'],
              ['카드 결제', '부가세 10% 별도'],
            ].map(([label, value], idx) => (
              <div key={idx} className="flex justify-between items-start py-3 border-b border-wg text-sm gap-2 last:border-b-0">
                <span className="text-muted shrink-0">{label}</span>
                <span className="text-g font-medium text-right text-xs">{value}</span>
              </div>
            ))}
            <div className="bg-beige-pale p-5 mt-4 flex justify-between items-center">
              <div className="text-base text-g font-bold">6월 한정 특별가</div>
              <div className="text-right">
                <div className="text-xs text-muted line-through">정가 700만원</div>
                <div className="font-serif text-3xl font-bold text-burg leading-none">600만원</div>
              </div>
            </div>
            <p className="text-xs text-muted mt-3 leading-relaxed">
              예약금 100만원 입금으로 기수 확정 / 잔금은 수업 전날<br/>
              카카오뱅크 3333-17-7113215 · 예금주 박연두
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          <div className="border border-wg">
            <div className="px-6 py-4 border-b border-wg text-xs tracking-[0.22em] uppercase text-muted">2026년 7월부터 변경</div>
            <div className="p-6">
              {[
                ['엠보 단과반 (5회)', '350만원'],
                ['수지 단과반 (5회)', '350만원'],
                ['엠보 + 수지 합산', '700만원'],
              ].map(([name, price], idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-wg text-sm last:border-b-0">
                  <span className="text-muted">{name}</span>
                  <span className="font-serif text-lg font-semibold text-g">{price}</span>
                </div>
              ))}
              <div className="mt-5 p-4 bg-rose-pale border-l-2 border-rose text-xs text-muted leading-relaxed">
                6월까지는 통합 커리큘럼을 600만원에 수강하실 수 있습니다. 교육지원금 100만원 적용도 6월이 마지막입니다.
              </div>
            </div>
          </div>
          <div className="border border-wg p-5 text-center">
            <p className="text-sm text-muted leading-relaxed mb-4">선착순 입금 마감으로 운영됩니다.<br/>예약금 100만원 입금 후 카카오톡으로 꼭 알려주세요.</p>
            <a href="#application" className="inline-block px-11 py-4 bg-g text-white text-sm font-medium tracking-wider hover:opacity-70 transition-opacity">
              지금 상담 신청하기
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Application Form ---
const ApplicationForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('신청서가 접수되었습니다.\n순차적으로 카카오톡으로 상담을 안내드리겠습니다.\n감사합니다.');
  };

  return (
    <section id="application" className="py-24 px-6 bg-beige-pale text-center">
      <div className="max-w-[680px] mx-auto mb-10">
        <span className="text-xs font-bold tracking-[0.35em] uppercase text-rose mb-5 inline-block">Apply</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold text-g">수강 상담 신청</h2>
        <div className="w-7 h-px bg-rose mx-auto my-6"></div>
        <p className="text-sm text-muted">작성해주신 분들께 순차적으로 상담을 안내드립니다.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-[640px] mx-auto bg-white border border-wg text-left">
        <div className="px-8 py-6 border-b border-wg">
          <h3 className="font-serif text-xl font-semibold text-g">반영구 교육 신청서</h3>
          <p className="text-sm text-muted mt-1">안녕하세요. 교육 신청 전 간단한 정보를 작성해주세요.</p>
        </div>

        <div className="p-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">성함<span className="text-rose ml-0.5">*</span></label>
            <input type="text" required placeholder="이름을 입력해 주세요" className="w-full px-3.5 py-2.5 bg-white border border-wg text-sm text-g outline-none focus:border-rose transition-colors placeholder:text-muted/40" />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">연락처<span className="text-rose ml-0.5">*</span></label>
            <input type="tel" required placeholder="010-0000-0000" className="w-full px-3.5 py-2.5 bg-white border border-wg text-sm text-g outline-none focus:border-rose transition-colors placeholder:text-muted/40" />
          </div>

          <div className="h-px bg-wg my-6"></div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">현재 하고 있는 일은 무엇인가요?<span className="text-rose ml-0.5">*</span></label>
            <div className="flex flex-col gap-1 mt-1">
              {['직장인', '미용업 종사', '반영구 시술자', '창업 준비 중', '기타'].map((opt, i) => (
                <label key={i} className="flex items-center gap-2.5 text-sm text-muted cursor-pointer py-1">
                  <input type="radio" name="job" className="accent-g w-3.5 h-3.5 shrink-0" /> {opt}
                </label>
              ))}
            </div>
            <div className="ml-6 mt-2">
              <input type="text" placeholder="기타에 해당하시면 어떤 일을 하시는지 적어주세요" className="w-full px-3.5 py-2.5 bg-white border border-wg text-sm text-g outline-none focus:border-rose transition-colors placeholder:text-muted/40" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">반영구 경력이 있으신가요?<span className="text-rose ml-0.5">*</span></label>
            <div className="flex flex-col gap-1 mt-1">
              {['완전 입문 (처음 배우는 단계)', '교육만 들은 경험 있음', '실제 시술 경험 있음'].map((opt, i) => (
                <label key={i} className="flex items-center gap-2.5 text-sm text-muted cursor-pointer py-1">
                  <input type="radio" name="exp" className="accent-g w-3.5 h-3.5 shrink-0" /> {opt}
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-wg my-6"></div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">반영구 교육을 배우려는 이유는 무엇인가요?<span className="text-rose ml-0.5">*</span></label>
            <textarea required placeholder="자유롭게 작성해 주세요" className="w-full px-3.5 py-2.5 bg-white border border-wg text-sm text-g outline-none focus:border-rose transition-colors placeholder:text-muted/40 resize-y min-h-[88px]" />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">교육 후 목표는 무엇인가요?<span className="text-rose ml-0.5">*</span></label>
            <textarea required placeholder="자유롭게 작성해 주세요" className="w-full px-3.5 py-2.5 bg-white border border-wg text-sm text-g outline-none focus:border-rose transition-colors placeholder:text-muted/40 resize-y min-h-[88px]" />
          </div>

          <div className="h-px bg-wg my-6"></div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">교육 가능 시기는 언제인가요?<span className="text-rose ml-0.5">*</span></label>
            <div className="flex flex-col gap-1 mt-1">
              {['바로 가능', '1개월 이내', '3개월 이내', '아직 미정'].map((opt, i) => (
                <label key={i} className="flex items-center gap-2.5 text-sm text-muted cursor-pointer py-1">
                  <input type="radio" name="timing" className="accent-g w-3.5 h-3.5 shrink-0" /> {opt}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">상담 가능 시간</label>
            <input type="text" placeholder="예) 평일 오전 / 평일 오후 / 저녁 / 상관없음" className="w-full px-3.5 py-2.5 bg-white border border-wg text-sm text-g outline-none focus:border-rose transition-colors placeholder:text-muted/40" />
          </div>

          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-g mb-2">궁금한 점 또는 남기고 싶은 말</label>
            <textarea placeholder="자유롭게 남겨주세요" className="w-full px-3.5 py-2.5 bg-white border border-wg text-sm text-g outline-none focus:border-rose transition-colors placeholder:text-muted/40 resize-y min-h-[88px]" />
          </div>

          <button type="submit" className="w-full py-4 bg-g text-white text-sm font-medium tracking-wider mt-6 hover:opacity-70 transition-opacity cursor-pointer">
            신청서 제출하기
          </button>
        </div>

        <div className="px-8 py-5 border-t border-wg text-xs text-muted leading-relaxed">
          ※ 교육 상담은 신청 순서대로 진행됩니다.<br/>
          ※ 영상·자료가 선 제공되므로 수업 시작 후 중도 취소 시 환불이 어렵습니다.<br/>
          ※ 수강 의지가 확실한 분만 신청해 주시기 바랍니다.
        </div>
      </form>
    </section>
  );
};

// --- Footer ---
const Footer: React.FC = () => (
  <footer className="py-12 px-6 bg-g text-center">
    <div className="font-serif text-xl tracking-[0.4em] text-beige font-semibold mb-3">FIMBROW</div>
    <p className="text-xs text-white/25 leading-relaxed">
      반영구 눈썹 전문 교육 &nbsp;·&nbsp; 원장 박연두<br/>
      Instagram @fimbrow &nbsp;·&nbsp; blog.naver.com/fimbrow<br/><br/>
      본 페이지의 교육 내용, 이론북, 드로잉북, 영상 자료의 무단 복제 및 배포를 금합니다.
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-g overflow-x-hidden">
      <Navbar />
      <Hero />
      <Numbers />
      <Urgency />
      <Problem />
      <Market />
      <Philosophy />
      <InstructorSection />
      <Results />
      <Difference />
      <Curriculum />
      <Environment />
      <Materials />
      <TargetSection />
      <ReviewSlider />
      <Pricing />
      <ApplicationForm />
      <Footer />

      {/* Sticky Mobile Button */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <a
          href="#application"
          className="w-full h-14 bg-g text-white font-bold flex items-center justify-center text-sm active:scale-95 transition-transform shadow-lg"
        >
          수강 상담 신청하기
        </a>
      </div>
    </div>
  );
}
