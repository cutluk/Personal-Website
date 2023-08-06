import React, {
  Suspense, lazy, createContext, useState, useMemo,
} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles
import Certification from './pages/Certifications';

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  const LightDarkValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  return (
    <ThemeContext.Provider value={LightDarkValue}>
      <div className="APP" id={theme}>
        <div className="LightDarkDiv">
          <button className="LightDarkButton" type="button" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
        <BrowserRouter basename={PUBLIC_URL}>
          <Suspense fallback={<Main />}>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/certifications" component={Certifications} />
              <Route path="/stats" component={Stats} />
              <Route path="/contact" component={Contact} />
              <Route path="/resume" component={Resume} />
              <Route component={NotFound} status={404} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
