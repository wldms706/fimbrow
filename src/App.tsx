import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CoursePage from './pages/CoursePage';
import TreatmentPage from './pages/TreatmentPage';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isCourse = location.pathname === '/course';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-main-dark/60 backdrop-blur-xl h-[70px] flex items-center px-8 md:px-16 justify-between">
      <Link to="/" className="font-serif text-2xl tracking-[0.3em] text-white font-light">FIMBROW</Link>
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className={`text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-colors ${!isCourse ? 'text-white' : 'text-white/40 hover:text-white'}`}
        >
          Treatment
        </Link>
        <Link
          to="/course"
          className={`text-[0.7rem] font-medium tracking-[0.2em] uppercase transition-colors ${isCourse ? 'text-white' : 'text-white/40 hover:text-white'}`}
        >
          Course
        </Link>
        <a
          href={isCourse ? '#application' : '#booking'}
          className="px-6 py-2.5 border border-white/30 text-white text-[0.65rem] font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-main-dark transition-all"
        >
          {isCourse ? 'Apply' : 'Book Now'}
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
