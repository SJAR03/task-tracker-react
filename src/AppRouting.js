import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRouting() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME</Link>
          <Link to='/about'>| ABOUT</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/una404'> Not existing page |</Link>
          <Link to='/profile'> Profile |</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' Component={HomePage} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/faqs' Component={AboutPage} />
            <Route path='/profile' Component={ProfilePage} />
            <Route path='/tasks' Component={TasksPage} />
            <Route path='/task/:id' Component={TaskDetailPage} />

            {/* 404 page not found */}
            <Route path='*' Component={NotFoundPage} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouting;
