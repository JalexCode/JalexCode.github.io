// ga.ts
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-6MZW8JV2DB');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
