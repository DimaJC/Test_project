import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import MainPage from './components/Main';
import ToDOList from './components/ToDOList';
import Persons from './components/Persons';
import FilterSystem from './Edgaras/PersonsFilterSystem';
// import Header from './components/Header/Index';
import Contacts from './Vera/constants/contacts';
import UserFilter from './Vera/constants/VeraFilters';
// import Header from './Vera/constants/Header';
import { ROUTES } from './constants/constantsRoute';
import Transaction from './Vera/constants/Transaction/Transaction';
import Rezume from './Edgaras/Rezume';
import EdgarHeader from './Edgaras/Header';

const App = () => {
  return (
    <BrowserRouter>
      <EdgarHeader />
      <Routes>
        <Route path={ROUTES.DIMA_MAIN} element={<MainPage />} />
        <Route path={ROUTES.VERA_CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.DIMA_TO_DO_LIST} element={<ToDOList />} />
        <Route path={ROUTES.VERA_FILTER} element={<UserFilter />} />
        <Route path={ROUTES.DIMA_PERSONS} element={<Persons />} />
        <Route path={ROUTES.EDGAR_PEAPLE_LIST} element={<FilterSystem />} />
        <Route path={ROUTES.VERA_TRANSACTION} element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
