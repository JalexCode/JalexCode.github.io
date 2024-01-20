// ga.ts
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

const id = 'G-6MZW8JV2DB'

const tagManagerArgs = {
  gtmId: id
}
export const initTM = () => {
  TagManager.initialize(tagManagerArgs)
}

export const initGA = () => {
  ReactGA.initialize(id);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};