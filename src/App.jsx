import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import MainPage from './components/Main';
import ToDOList from './components/ToDOList';
import Persons from './components/Persons';
import FilterSystem from './Edgaras/PersonsFilterSystem';
// import Header from './components/Header/Index';
import Contacts from './Vera/constants/contacts';
// import UserFilter from './Vera/constants/VeraFilters';
// import Header from './Vera/constants/Header';
import { ROUTES } from './constants/constantsRoute';
import Transaction from './Vera/constants/Transaction/Transaction';
import RootBlockOfRezume from './Edgaras/Rezume';
import Header from './Edgaras/Header';
import LightFolio from './Edgaras/Templates/index.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.DIMA_MAIN} element={<MainPage />} />
        <Route path={ROUTES.VERA_CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.DIMA_TO_DO_LIST} element={<ToDOList />} />
        {/* <Route path={ROUTES.VERA_FILTER} element={<UserFilter />} /> */}
        <Route path={ROUTES.DIMA_PERSONS} element={<Persons />} />
        <Route path={ROUTES.EDGAR_PEAPLE_LIST} element={<FilterSystem />} />
        <Route path={ROUTES.VERA_TRANSACTION} element={<Transaction />} />
        <Route path={ROUTES.EDGAR_FIGMA} element={<LightFolio />} />
        <Route path={ROUTES.EDGAR_REZUME} element={<RootBlockOfRezume />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
