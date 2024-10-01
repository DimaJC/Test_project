import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import MainPage from './components/Main';
import ToDOList from './components/ToDOList';
import Persons from './components/Persons';
import UserFilter from './components/Vera/VeraFilters';
import FilterSystem from './Edgaras/PersonsFilterSystem';
import Contacts from './components/Vera/contacts';
import Header from './components/Header/Index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/vera/contacts' element={<Contacts />} />
        <Route path='/to-do-list' element={<ToDOList />} />
        <Route path='/user-filter' element={<UserFilter />} />
        <Route path='/persons' element={<Persons />} />
        <Route path='/filter-system' element={<FilterSystem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
