import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import {Home} from './pages/homePage';
import {LoginPage} from './pages/loginPage';
import {RegisterPage} from './pages/registerPage'
import { Layout } from './Layout';
import { PreferencesPage } from './pages/PreferencesPage';
import { InformationPage, InformationEditPage } from './pages/InformationPage';
import { EstatisticasPage } from './pages/EstatisticasPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path="/preferencias" element={<PreferencesPage/>}/>
          <Route path="/informacao" element={<InformationPage/>}/>
          <Route path="/informacao/editar" element={<InformationEditPage />} />
          <Route path="/estatistica" element={<EstatisticasPage/>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
