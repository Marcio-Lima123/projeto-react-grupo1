import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import {Home} from './pages/homePage';
import {LoginPage} from './pages/loginPage';
import {RegisterPage} from './pages/registerPage'
import {ProfilePage} from './pages/profilePage';
import {DailyActivity} from './pages/dailyActivityPage';
import { Layout } from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/daily_activity' element={<DailyActivity/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
