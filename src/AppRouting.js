import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';

function AppRouting() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME</Link>
          <Link to='/about'>| ABOUT</Link>
          <Link to='/faqs'>| FAQS |</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' Component={HomePage} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/faqs' Component={AboutPage} />

            {/* 404 page not found */}
            <Route path='*' Component={NotFoundPage} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouting;
