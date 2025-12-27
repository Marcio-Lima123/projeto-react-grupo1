import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Layout, Layout2 } from './Layout';

import { Home } from './pages/homePage';
import { LoginPage } from './pages/loginPage';
import { RegisterPage } from './pages/registerPage'
import { PreferencesPage } from './pages/PreferencesPage';
import { InformationPage, InformationEditPage } from './pages/InformationPage';
import { EstatisticasPage } from './pages/EstatisticasPage';
import { ClassificacaoPage } from './pages/ClassificacaoPage';
import { ActivitySystem } from './components/api';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/api' element={<ActivitySystem />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route element={<Layout />}>ll
          <Route path='/' element={<Home />} />
          <Route path='/classificacao' element={<ClassificacaoPage />} />
        </Route>
        <Route element={<Layout2 />}>
          <Route path="/informacao" element={<InformationPage />} />
          <Route path="/informacao/editar" element={<InformationEditPage />} />
          <Route path="/preferencias" element={<PreferencesPage />} />
          <Route path="/estatistica" element={<EstatisticasPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
