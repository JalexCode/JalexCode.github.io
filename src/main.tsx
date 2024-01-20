import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {DarkModeProvider} from './context/DarkModeContext.tsx'
import { initGA, initTM, logPageView } from './ga.ts';

initTM();
initGA();
logPageView();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
)
