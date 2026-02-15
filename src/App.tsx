import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronRight,
  CheckCircle2,
  Target,
  ShieldCheck,
  MessageCircle,
  AlertCircle,
  Award,
  BookOpen,
  Sparkles
} from 'lucide-react';
import type { HeadlineItem } from './types';

// --- Components ---

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <h1 className="text-2xl font-black tracking-tighter italic text-vibrant-green">FIMBROW</h1>
      <a
        href="#consult"
        className="px-6 py-2 rounded-full bg-vibrant-green text-black font-bold text-sm hover:scale-105 transition-transform"
      >
        상담신청
      </a>
    </div>
  </nav>
);

const videos = ['/hero.MOV', '/hero2.MOV', '/hero3.MOV'];

const Hero: React.FC = () => {
  const headlines: HeadlineItem[] = [
    { main: "첫 수강인데, 한 번에 제대로 배우고 싶은 분", sub: "다시 배우는 비용과 시간을 처음부터 차단합니다." },
    { main: "배웠는데 막상 고객 앞에 서면 손이 멈추는 분", sub: "원리를 몰라 응용이 전혀 안 되는 상황을 해결합니다." },
    { main: "탈각할 때마다 결과가 달라져 불안한 원장님", sub: "피부, 색소, 압, 각도의 원리를 명확히 이해시킵니다." },
    { main: "디자인은 그렸는데 왜 안 예쁜지 모르겠는 분", sub: "감각이 아닌 정확한 기준과 공식을 전수합니다." },
    { main: "잔흔, 번짐, 색 빠짐의 이유를 알고 싶은 분", sub: "변명하지 않고 실력으로 문제를 해결하게 돕습니다." },
    { main: "이미 배웠지만 내 기술에 확신이 없는 분", sub: "'배웠다'가 아니라 '이제 해도 되겠다'는 확신을 드립니다." }
  ];

  const [index, setIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [headlines.length]);

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videos[videoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-4xl w-full text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-vibrant-green/10 border border-vibrant-green/30 text-vibrant-green text-sm font-semibold mb-8 backdrop-blur-sm">
          <Sparkles size={16} /> 11년 임상 노하우, 원리 중심 마스터클래스
        </div>
        <div className="h-48 md:h-56 flex flex-col justify-center">
           <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight break-keep transition-all duration-700 drop-shadow-lg">
            {headlines[index].main}
          </h2>
          <p className="text-xl md:text-2xl text-white/70 font-medium break-keep drop-shadow-md">
            {headlines[index].sub}
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <a href="#consult" className="px-10 py-5 rounded-xl bg-vibrant-green text-black text-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-colors">
            창업반 상담받기 <ChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
};

const Empathy: React.FC = () => (
  <section className="py-24 px-6 bg-zinc-900/50">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center">혹시 이런 고민을 하고 계신가요?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "수강료는 비싼데, 내가 과연 이걸로 시술까지 할 수 있을까?",
          "이미 배웠는데, 또 돈 쓰는 게 맞을까? 실패하면 어쩌나 불안해.",
          "내가 하는 방식이 맞는지 확신이 안 들어서 고객 앞에 서기 무서워.",
          "배워도 혼자 실전에서 못 쓰면 어떡하지? 질문할 곳도 없을까 봐.",
          "나이가 늦은 건 아닐까, 감각도 없는데 내가 할 수 있을까?",
          "수강이 끝나고 나면 혼자 남겨질까 봐 걱정돼."
        ].map((item, idx) => (
          <div key={idx} className="p-8 rounded-2xl bg-black border border-white/5 hover:border-vibrant-green/50 transition-colors">
            <AlertCircle className="text-vibrant-green mb-4" size={32} />
            <p className="text-lg text-white/80 leading-relaxed break-keep font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Mission: React.FC = () => (
  <section className="py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="relative">
          <div className="absolute -inset-4 bg-vibrant-green/10 blur-[80px] rounded-full pointer-events-none"></div>
          <img
            src="/profile.jpeg"
            alt="핌브로우 원장"
            className="relative w-full max-w-md mx-auto rounded-3xl object-cover aspect-[3/4] shadow-2xl"
          />
        </div>
        <div>
          <h3 className="text-vibrant-green font-bold text-lg mb-4 tracking-widest uppercase">My Mission</h3>
          <p className="text-3xl md:text-4xl font-black leading-tight break-keep mb-12">
            반영구를 가볍게 가르치지 않습니다.<br/>
            고객 얼굴 앞에서 스스로 <span className="text-vibrant-green">확신</span>을 가질 수 있도록 만듭니다.
          </p>
          <div className="space-y-8">
            {[
              { icon: <Award />, text: "11년 임상을 바탕으로 한 원리 중심 이론과 실전 테크닉 전달" },
              { icon: <Target />, text: "속도보다 완성도를 우선해, 실전 앞에서도 흔들리지 않는 실력" },
              { icon: <ShieldCheck />, text: "기술을 넘어 시술자로서의 책임과 태도를 함께 갖추는 과정" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-vibrant-green/10 flex items-center justify-center text-vibrant-green shrink-0 group-hover:bg-vibrant-green group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <p className="text-lg md:text-xl font-bold text-white/90 self-center leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Instructor: React.FC = () => (
  <section className="py-32 px-6 bg-zinc-900/30">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-vibrant-green font-bold text-sm mb-4 tracking-widest uppercase">About Instructor</h3>
          <h4 className="text-3xl md:text-4xl font-black mb-8 break-keep">
            한 사람의 손기술을 책임진다는 건,<br/>
            수많은 얼굴까지 책임진다는 뜻입니다.
          </h4>
          <div className="space-y-6 text-lg text-white/60 leading-relaxed break-keep">
            <p>
              11년간 수천 건의 시술을 직접 해오며, 고객의 얼굴 위에서 배운 것들을 가르칩니다.
            </p>
            <p>
              빠르게 가르치는 것이 아니라, 졸업 후에도 혼자 설 수 있는 실력과 확신을 만들어드립니다.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {["11년 임상 경력", "원리 중심 교육", "졸업 후 무제한 피드백"].map((tag, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-vibrant-green/10 border border-vibrant-green/30 text-vibrant-green text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-vibrant-green/5 blur-[60px] rounded-full pointer-events-none"></div>
          <img
            src="/profile2.jpeg"
            alt="핌브로우 원장"
            className="relative w-full max-w-md mx-auto lg:ml-auto rounded-3xl object-cover aspect-[3/4] shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const WhyUs: React.FC = () => (
  <section className="py-32 px-6 bg-zinc-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-4xl font-black mb-20">왜 핌브로우 방식인가</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "책임의 깊이가 다릅니다",
            desc: "반영구는 '다시 하면 되지'가 통하지 않습니다. 수강생의 손기술뿐 아니라, 그 손에 맡겨질 수만 명의 얼굴까지 책임진다는 마음으로 가르칩니다."
          },
          {
            title: "이해한 원리는 사라지지 않습니다",
            desc: "'그냥 따라 하세요' 식의 무책임한 수업은 지양합니다. 왜 그렇게 해야 하는지 이론적 근거를 명확히 이해시켜 응용력을 키워드립니다."
          },
          {
            title: "기준이 흔들리지 않습니다",
            desc: "빨리 배운 기술은 빨리 무너집니다. 핌브로우는 흔들리지 않는 정석적인 기준과 방향을 먼저 잡아, 어떤 변수 앞에서도 당당하게 만듭니다."
          },
          {
            title: "졸업 후가 진짜 시작입니다",
            desc: "수강만 하고 끝? 아닙니다. 온라인 무제한 피드백은 물론, 졸업 한 달 뒤 오프라인 피드백 원데이를 통해 실전 안착을 확실히 돕습니다."
          }
        ].map((item, idx) => (
          <div key={idx} className="p-10 rounded-3xl bg-zinc-900 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-green/10 blur-[60px] rounded-full group-hover:bg-vibrant-green/20 transition-all"></div>
            <h4 className="text-2xl font-bold mb-4 text-vibrant-green">{item.title}</h4>
            <p className="text-lg text-white/60 leading-relaxed break-keep">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TargetAudience: React.FC = () => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h3 className="text-4xl font-black mb-10">이런 분께 맞습니다.</h3>
        <ul className="space-y-4">
          {[
            "기준이 없어서 매번 결과물이 흔들리는 분",
            "확신을 줄 수 있는 멘토가 절실한 분",
            "고객 얼굴에 손을 대는 게 두려운 초보 원장님",
            "비교할 학원은 많은데 무엇을 기준으로 선택할지 모르는 분",
            "재수강으로 인한 시간과 비용 낭비를 막고 싶은 분",
            "요령이 아니라 '진짜 실력'으로 평생 무기를 만들고 싶은 분"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 p-4 bg-zinc-900 rounded-xl border border-white/5">
              <CheckCircle2 className="text-vibrant-green shrink-0" size={20} />
              <span className="text-lg font-medium text-white/80">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-start gap-4">
          <AlertCircle size={24} className="shrink-0" />
          <p className="text-sm font-semibold">
            주의: 빠른 수익, 최소 노력, 요령만 원하는 분께는 저희 수업이 맞지 않을 수 있습니다.
            기술의 정점을 원하시는 분들께만 집중합니다.
          </p>
        </div>
      </div>

      <div className="bg-vibrant-green text-black p-10 rounded-3xl flex flex-col justify-between">
        <div>
          <h4 className="text-2xl font-black mb-6 italic">"가장 비쌌지만, 가장 확실했습니다"</h4>
          <p className="text-lg font-bold leading-relaxed mb-8">
            세 군데 학원을 비교했습니다. 다른 곳보다 50~100만 원 더 비쌌지만,
            원장님의 꼼꼼한 피드백과 세세한 교육 방식에 확신이 들었습니다.
            수강 중인 지금, 이 돈이 전혀 아깝지 않다는 확신이 듭니다. 진짜 잘 왔습니다.
          </p>
        </div>
        <div className="border-t border-black/10 pt-6">
          <p className="font-black">실제 창업반 수강 원장님 후기</p>
        </div>
      </div>
    </div>
  </section>
);

const CTASection: React.FC = () => (
  <section id="consult" className="py-32 px-6 bg-zinc-950">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-4xl md:text-5xl font-black mb-8 italic">READY TO BE A MASTER?</h3>
      <p className="text-xl text-white/60 mb-12">
        지금 할 일은 딱 하나입니다. 아래 버튼을 눌러<br/>
        이 수업이 나에게 맞는지 먼저 확인해보세요.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          { label: "커리큘럼 자세히 보기", icon: <BookOpen size={20} /> },
          { label: "수강 가능 일정 확인", icon: <Target size={20} /> },
          { label: "창업 상담 신청", icon: <MessageCircle size={20} /> }
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-vibrant-green transition-all cursor-pointer group">
            <div className="mb-4 text-white/40 group-hover:text-vibrant-green transition-colors">{item.icon}</div>
            <span className="font-bold text-lg">{item.label}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => window.open('https://open.kakao.com/o/sFIMBROW', '_blank')}
        className="w-full md:w-auto px-16 py-6 bg-vibrant-green text-black text-2xl font-black rounded-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,212,21,0.3)] mb-12 inline-block cursor-pointer"
      >
        [창업반 상담받기]
      </button>

      <div className="space-y-4 text-white/40 font-medium">
        <p className="flex items-center justify-center gap-2">
          <CheckCircle2 size={16} className="text-vibrant-green" /> 무작정 등록을 권하지 않습니다.
        </p>
        <p className="flex items-center justify-center gap-2">
          <CheckCircle2 size={16} className="text-vibrant-green" /> 상담 후 맞지 않다면, 솔직하게 말씀드립니다.
        </p>
        <p className="flex items-center justify-center gap-2">
          <CheckCircle2 size={16} className="text-vibrant-green" /> 가격, 일정을 알아야 고민할 기준도 생깁니다. 편하게 문의주세요.
        </p>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 px-6 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-black italic text-vibrant-green mb-2">FIMBROW</h2>
        <p className="text-white/40 text-sm">&copy; 2024 FIMBROW Academy. All rights reserved.</p>
      </div>
      <div className="flex gap-6 text-white/40 font-medium">
        <a href="#" className="hover:text-vibrant-green">Instagram</a>
        <a href="#" className="hover:text-vibrant-green">Blog</a>
        <a href="#" className="hover:text-vibrant-green">KakaoTalk</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Empathy />
      <Mission />
      <Instructor />
      <WhyUs />
      <TargetAudience />
      <CTASection />
      <Footer />

      {/* Sticky Mobile Button */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <a
          href="#consult"
          className="w-full h-14 bg-vibrant-green text-black font-black flex items-center justify-center rounded-xl shadow-2xl active:scale-95 transition-transform"
        >
          상담 신청하고 실력으로 평생 무기 만들기
        </a>
      </div>
    </div>
  );
}
