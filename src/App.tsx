import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CoursePage from './pages/CoursePage';
import TreatmentPage from './pages/TreatmentPage';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isCourse = location.pathname === '/course';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-main-dark/80 backdrop-blur-md border-b border-white/10 h-[60px] flex items-center px-6 md:px-12 justify-between">
      <Link to="/" className="font-serif text-lg tracking-[0.35em] text-vibrant-green font-semibold">FIMBROW</Link>
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className={`text-xs font-bold tracking-wider transition-colors ${!isCourse ? 'text-vibrant-green' : 'text-white/50 hover:text-white'}`}
        >
          시술 안내
        </Link>
        <Link
          to="/course"
          className={`text-xs font-bold tracking-wider transition-colors ${isCourse ? 'text-vibrant-green' : 'text-white/50 hover:text-white'}`}
        >
          수강 안내
        </Link>
        <a
          href={isCourse ? '#application' : '#booking'}
          className="px-5 py-2 bg-vibrant-green text-main-dark text-xs font-bold tracking-wider hover:opacity-80 transition-opacity"
        >
          {isCourse ? '수강 상담 신청' : '시술 예약 문의'}
        </a>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-main-dark text-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<TreatmentPage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </div>
  );
}
